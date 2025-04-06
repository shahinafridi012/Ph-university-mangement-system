import httpStatus from 'http-status';
import { semesterRegistration } from './semesterRegistration.model';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import AppError from '../../errors/AppError';
import QueryBuilder from '../../builder/QueryBuilder';
import { RegistrationStatus } from './semesterRegistration.constant';

const createSemesterRegistrationIntoDB = async (
  payLoad: TSemesterRegistration,
) => {
  const academicSemester = payLoad?.academicSemester;

  //check if there any registered semester that is already 'UPCOMING' | 'ONGOING'
  const isThereAnyUpcomingOrOngoingSemester =
    await semesterRegistration.findOne({
      $or: [
        { status: RegistrationStatus.UPCOMING },
        { status: RegistrationStatus.ONGOING },
      ],
    });
  if (isThereAnyUpcomingOrOngoingSemester) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `There is already a ${isThereAnyUpcomingOrOngoingSemester.status}registered semester!`,
    );
  }
  // check if the semester is exist
  const isAcademicSemesterExists =
    await AcademicSemester.findById(academicSemester);
  if (!isAcademicSemesterExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This academic semester not found !',
    );
  }
  //check if the semester is already registered!
  const isAcademicSemesterRegistrationExist =
    await semesterRegistration.findOne({ academicSemester: academicSemester });
  if (isAcademicSemesterRegistrationExist) {
    throw new AppError(
      httpStatus.CONFLICT,
      'This semester is already registered',
    );
  }
  const result = await semesterRegistration.create(payLoad);
  return result;
};
const getAllSemesterRegistrationFromDB = async (
  query: Record<string, unknown>,
) => {
  const semesterRegistrationQuery = new QueryBuilder(
    semesterRegistration.find().populate('academicSemester'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await semesterRegistrationQuery.modelQuery;
  return result;
};
const getSingleRegistrationFromDB = async (id: string) => {
  const result = await semesterRegistration.findById(id);
  return result;
};
const updateSemesterRegistrationIntoDB = async (
  id: string,
  payLoad: Partial<TSemesterRegistration>,
) => {
  // check if the requested registered semester register exist
  const isSemesterRegistrationExists = await semesterRegistration.findById(id);
  if (!isSemesterRegistrationExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This semester is not found !');
  }
  //if there requested semester registration is ended , we will not update anything
  const currentSemesterStatus = isSemesterRegistrationExists.status;
  const requestedStatus = payLoad?.status;
  if (currentSemesterStatus === RegistrationStatus.ENDED) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `This semester is already ended${currentSemesterStatus}`,
    );
  }
  // upcoming => ongoing => ended!
  if (
    currentSemesterStatus === RegistrationStatus.UPCOMING &&
    requestedStatus === RegistrationStatus.ENDED
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `You can not directly change status from ${currentSemesterStatus} to ${requestedStatus}`,
    );
  }
  if (
    currentSemesterStatus === RegistrationStatus.ONGOING &&
    requestedStatus === RegistrationStatus.UPCOMING
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `You can not directly change status from ${currentSemesterStatus} to ${requestedStatus}`,
    );
  }
  const result = await semesterRegistration.findByIdAndUpdate(id, payLoad, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const SemesterRegistrationService = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationFromDB,
  getSingleRegistrationFromDB,
  updateSemesterRegistrationIntoDB,
};

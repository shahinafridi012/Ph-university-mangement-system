import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoB = async (payLoad: TAcademicSemester) => {
  // semester name --> semester code

  if (academicSemesterNameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.create(payLoad);
  return result;
};
const getAcademicSemesterFromDb = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleAcademicSemesterFromDb = async (_id: string) => {
  const result = await AcademicSemester.findById({ _id });
  return result;
};

const UpdateAcademicSemester = async (
  id: string,
  payLoad: Partial<TAcademicSemester>,
) => {
  if (
    payLoad.name &&
    payLoad.code &&
    academicSemesterNameCodeMapper[payLoad.name] !== payLoad.code
  ) {
    throw new Error('Invalid Semester Code');
  }
  const result = await AcademicSemester.updateOne({ _id: id }, payLoad, {
    new: true,
  });
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoB,
  getAcademicSemesterFromDb,
  getSingleAcademicSemesterFromDb,
  UpdateAcademicSemester,
};

import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (payLoad: TAcademicDepartment) => {
  // semester name --> semester code
  const isDepartmentExist = await AcademicDepartment.findOne({
    name: payLoad.name,
  });

  if (isDepartmentExist) {
    throw new Error('this department already exist!');
  }

  const result = await AcademicDepartment.create(payLoad);
  return result;
};
const getAcademicDepartmentFromDb = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

const getSingleAcademicDepartmentFromDb = async (_id: string) => {
  const result = await AcademicDepartment.findById({ _id }).populate('academicFaculty');
  return result;
};

const UpdateAcademicDepartment = async (
  id: string,
  payLoad: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.updateOne({ _id: id }, payLoad, {
    new: true,
  });
  return result;
};

export const AcademicDepartmentService = {
  createAcademicDepartmentIntoDB,
  getAcademicDepartmentFromDb,
  getSingleAcademicDepartmentFromDb,
  UpdateAcademicDepartment,
};

import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (payLoad: TAcademicFaculty) => {
  // semester name --> semester code

  const result = await AcademicFaculty.create(payLoad);
  return result;
};
const getAcademicFacultiesFromDb = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleAcademicFacultyFromDb = async (_id: string) => {
  const result = await AcademicFaculty.findById({ _id });
  return result;
};

const UpdateAcademicFaculty = async (
  id: string,
  payLoad: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.updateOne({ _id: id }, payLoad, {
    new: true,
  });
  return result;
};

export const AcademicFacultyService = {
  createAcademicFacultyIntoDB,
  getAcademicFacultiesFromDb,
  getSingleAcademicFacultyFromDb,
  UpdateAcademicFaculty,
};

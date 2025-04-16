import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicFacultyValidation';
import { AcademicFacultyControllers } from './academicFaculty.controller';
import auth from '../../middlewares/auth';


const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);
router.get(
  '/all-academic-faculty',
  auth(),
  AcademicFacultyControllers.getAllAcademicFaculty,
);
router.get(
  '/:facultyId',
 AcademicFacultyControllers.getSingleAcademicFaculty,
);

router.patch(
  '/:facultyId',
  validateRequest(
  AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
 AcademicFacultyControllers.UpdateAcademicFaculty,
);
// router.get('/', StudentControllers.getAllStudents);
// router.get('/:StudentId', StudentControllers.getSingleStudent)

export const AcademicFacultyRoutes = router;

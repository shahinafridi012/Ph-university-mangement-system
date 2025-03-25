import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);
router.get(
  '/all-academic-semester',
  AcademicSemesterControllers.getAllAcademicSemester,
);
router.get(
  '/:semesterId',
  AcademicSemesterControllers.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(
    AcademicSemesterValidation.UpdateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.UpdateAcademicSemester,
);
// router.get('/', StudentControllers.getAllStudents);
// router.get('/:StudentId', StudentControllers.getSingleStudent)

export const AcademicSemesterRoutes = router;

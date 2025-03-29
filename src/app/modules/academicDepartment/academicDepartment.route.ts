import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentControllers } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-academic-department',
  // validateRequest(
  //   AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  // ),
  AcademicDepartmentControllers.createAcademicDepartment,
);
router.get(
  '/all-academic-department',
  AcademicDepartmentControllers.getAllAcademicDepartment,
);
router.get(
  '/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);

router.patch(
  '/:departmentId',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.UpdateAcademicDepartment,
);
// router.get('/', StudentControllers.getAllStudents);
// router.get('/:StudentId', StudentControllers.getSingleStudent)

export const AcademicDepartmentRoutes = router;

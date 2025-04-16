import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationController } from './semesterRegistration.controller';
import { SemesterRegistrationValidations } from './semesterRegistration.validation';

const router = express.Router();

router.post(
  '/create-semester-registration',
  validateRequest(
    SemesterRegistrationValidations.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.createSemesterRegistration,
);

router.get(
  '/:id',
  SemesterRegistrationController.getSingleSemesterRegistration,
);

// router.patch(
//   '/:id',
//   validateRequest(
//     SemesterRegistrationValidations.updateSemesterRegistrationValidationSchema,
//   ),
//   SemesterRegistrationController.,
// );

router.get(
  '/:id',
  SemesterRegistrationController.getSingleSemesterRegistration,
);

// router.delete(
//   '/:id',
//   SemesterRegistrationController.,
// );

router.get('/', SemesterRegistrationController.getAllSemesterRegistration);

export const semesterRegistrationRoutes = router;
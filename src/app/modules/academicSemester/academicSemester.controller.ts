import { RequestHandler } from 'express';

import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterService.createAcademicSemesterIntoB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is created successfully',
    data: result,
  });
});
const getAllAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterService.getAcademicSemesterFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester retrieved successfully',
    data: result,
  });
});
const getSingleAcademicSemester: RequestHandler = catchAsync(
  async (req, res) => {
    const { semesterId } = req.params;
    const result =
      await AcademicSemesterService.getSingleAcademicSemesterFromDb(semesterId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester retrieved successfully',
      data: result,
    });
  },
);
const UpdateAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const { semesterId } = req.params;

  const result = await AcademicSemesterService.UpdateAcademicSemester(
    semesterId,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester update successfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  UpdateAcademicSemester,
};

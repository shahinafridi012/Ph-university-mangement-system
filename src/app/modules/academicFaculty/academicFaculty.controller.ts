import { RequestHandler } from 'express';

import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AcademicFacultyService } from './academicFaculty.service';

const createAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.createAcademicFacultyIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is created successfully',
    data: result,
  });
});
const getAllAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAcademicFacultiesFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty retrieved successfully',
    data: result,
  });
});
const getSingleAcademicFaculty: RequestHandler = catchAsync(
  async (req, res) => {
    const { facultyId } = req.params;
    const result =
      await AcademicFacultyService.getSingleAcademicFacultyFromDb(facultyId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty retrieved successfully',
      data: result,
    });
  },
);
const UpdateAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const updateSemester = req.body;

  const result = await AcademicFacultyService.UpdateAcademicFaculty(
    facultyId,
    updateSemester,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty update successfully',
    data: result,
  });
});

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  UpdateAcademicFaculty,
};

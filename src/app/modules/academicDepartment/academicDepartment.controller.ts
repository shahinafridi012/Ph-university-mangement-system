import { RequestHandler } from 'express';

import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AcademicDepartmentService } from './academicDepartment.service';

const createAcademicDepartment: RequestHandler = catchAsync(
  async (req, res) => {
    const result =
      await AcademicDepartmentService.createAcademicDepartmentIntoDB(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department is created successfully',
      data: result,
    });
  },
);
const getAllAcademicDepartment: RequestHandler = catchAsync(
  async (req, res) => {
    const result =
      await AcademicDepartmentService.getAcademicDepartmentFromDb();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department retrieved successfully',
      data: result,
    });
  },
);
const getSingleAcademicDepartment: RequestHandler = catchAsync(
  async (req, res) => {
    const { departmentId } = req.params;
    const result =
      await AcademicDepartmentService.getSingleAcademicDepartmentFromDb(
        departmentId,
      );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department retrieved successfully',
      data: result,
    });
  },
);
const UpdateAcademicDepartment: RequestHandler = catchAsync(
  async (req, res) => {
    const { departmentId } = req.params;

    const result = await AcademicDepartmentService.UpdateAcademicDepartment(
        departmentId,
      req.body,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty update successfully',
      data: result,
    });
  },
);

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  UpdateAcademicDepartment,
};

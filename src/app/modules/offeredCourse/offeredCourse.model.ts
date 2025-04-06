import mongoose, { Schema } from 'mongoose';
import { TOfferedCourse } from './offeredCourse.interface';
import { Days } from './offeredCourse.constant';

const offeredCourseSchema = new mongoose.Schema<TOfferedCourse>({
  academicDepartment: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: true,
    ref: 'AcademicDepartment',
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: true,
    ref: 'AcademicFaculty',
  },
  academicSemester: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: true,
    ref: 'AcademicSemester',
  },
  course: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: true,
    ref: 'Course',
  },
  faculty: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: true,
    ref: 'Faculty',
  },
  days: {
    enum: Days,
    unique: true,
    required: true,
  },
  maxCapacity: {
    type: Number,
    unique: true,
    required: true,
  },
  section: {
    type: Number,
    unique: true,
    required: true,
  },
  semesterRegistration: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: true,
    ref: 'SemesterRegistration',
  },
  endTime: {
    type: String,
    unique: true,
    required: true,
  },
  startTime: {
    type: String,
    unique: true,
    required: true,
  },
});
export const semesterRegistration = mongoose.model<TOfferedCourse>(
  'OfferedCourse',
  offeredCourseSchema,
);

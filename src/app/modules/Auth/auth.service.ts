import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import httpStatus from 'http-status';

const loginUser = async (payLoad: TLoginUser) => {
  const { id, password } = payLoad;

  // Step 1: Check user existence
  const user = await User.isUserExistByCustomId(id);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
  }

  // Step 2: Check if user is deleted or blocked
  if (user.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted!');
  }

  if (user.status === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked!');
  }

  // Step 3: Check password
  const isPasswordValid = await User.isPasswordMatched(password, user.password);
  if (!isPasswordValid) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Password is incorrect!');
  }

  // TODO: Generate access & refresh tokens here

  return {
    message: 'Login successful!',
    userId: user.id,
    role: user.role,
    needsPasswordChange: user.needsPasswordChange,
  };
};

export const AuthService = {
  loginUser,
};

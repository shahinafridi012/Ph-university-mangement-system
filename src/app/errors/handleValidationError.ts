import mongoose from 'mongoose';
import { TErrorSource, TGenericErrorResponse } from '../interface/error';



const handleValidationError = (err: mongoose.Error.ValidationError): TGenericErrorResponse => {
  const errorSource: TErrorSource = Object.values(err.errors).map((val) => {
    return {
      path: (val as mongoose.Error.ValidatorError).path,
      message: (val as mongoose.Error.ValidatorError).message,
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSource, // ✅ Correctly typed as an array
  };
};

export default handleValidationError;

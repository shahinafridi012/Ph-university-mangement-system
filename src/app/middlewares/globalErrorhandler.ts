/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (err: any, req: Request, res: Response, next:NextFunction) => {
    const statusCode = 500;
    const message = err.message || 'Something Went Wrong';
  
    return res.status(statusCode).json({
      success: false,
      message,
      error: err,
    });
  }

  export default globalErrorHandler;




































  


//   import { NextFunction, Request, Response } from "express";

// const globalErrorHandler = (
//   err: any, 
//   req: Request, 
//   res: Response, 
//   next: NextFunction
// ) => {
//   const statusCode = err.status || 500; // Ensure it takes the status from error
//   const message = err.message || "Something Went Wrong";

//   res.status(statusCode).json({
//     success: false,
//     message,
//     error: process.env.NODE_ENV === "development" ? err.stack : undefined, // Hide error stack in production
//   });

//   next(); // Ensure Express knows middleware execution is complete
// };

// export default globalErrorHandler;

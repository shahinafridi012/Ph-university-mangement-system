export type TErrorSource = {
    path: string | number;
    message: string;
  }[];

  
 export type TGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorSource: TErrorSource; // ✅ Should be an array, not a string
  };
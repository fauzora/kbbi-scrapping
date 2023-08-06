import { ResponseModel } from "../models/responseModel";

declare global {
  namespace Express {
    interface Response {
      defaultResponse(status: boolean, message: string, data: object): void;
    }
  }
}

import { ResponseModel } from "../models/responseModel";
import { Request, Response, NextFunction } from "express";

export const defaultResponseMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { query, params, headers, ...rest } = req;
  // console.log("query", query);
  // console.log("params", params);
  // console.log("headers", headers);

  res.defaultResponse = (
    status: boolean = false,
    message: string = "",
    data: object = {}
  ) => {
    const response = new ResponseModel(status, message, data);
    return res.json(response);
  };
  next();
};

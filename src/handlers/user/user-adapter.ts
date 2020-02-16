import { Request, Response, NextFunction } from "express";
import { adaptExpressRequest } from "../../utilities/helpers/helpers";
import { respondTosystemAvailabilityRequest } from "./user-handler";

export const createNewUser = (req: Request, res: Response) => {};
export const updateNewUser = (req: Request, res: Response) => {};
export const getAllUsers = (req: Request, res: Response) => {};
export const getSingleUSer = (req: Request, res: Response) => {};
export const searchUsersByName = (req: Request, res: Response) => {};
export const searchUsersByAnyString = (req: Request, res: Response) => {};

export const systemRunAvailablityCheck = async (req: Request, res: Response) => {
  let request = adaptExpressRequest(req);
  let response = await respondTosystemAvailabilityRequest(request);
  res.status(200).json(response);
};

import { Request, Response, NextFunction } from "express";
import * as bcrypt from "bcrypt";
import { checkIfTokenIsForAdminAccount, checkIfTokenIsForUserAccount, checkIfTokenIsStillValid } from "./passage-handler";

export const validateTokenForAdmin = (req: Request, res: Response, next: NextFunction): void => {
  let request = req.headers.authorization;
  let token = "";

  if (checkIfTokenIsForAdminAccount(token)) {
    next();
  } else {
  }
};

export const validateTokenForUser = (req: Request, res: Response, next: NextFunction): void => {
  let request = req.headers.authorization;
  let token = "";
  if (checkIfTokenIsStillValid(token)) {
  } else {
  }

  if (checkIfTokenIsForUserAccount(token)) {
    next();
  } else {
  }
};

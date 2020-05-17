import { validateRequiredStingProperty } from "../../utilities/helpers/validation";
import { LoginProfile } from "./authentication";

export const validateLoginProfile = (request: any): LoginProfile => {
  validateRequiredStingProperty("Email address", request.emailAddress);
  validateRequiredStingProperty("Password", request.password);

  return {
    emailAddress: request.emailAddress,
    password: request.password,
  };
};

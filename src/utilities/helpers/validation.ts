import { isValidEmail, isValidPhoneNumber } from "./helpers";

export const validateRequiredStingProperty = (label: string, property: any) => {
  if (property == null || property == undefined || property == "undefined") {
    throw new Error(`${label} must be provided.`);
  }
  if (typeof property != "string") {
    throw new Error(`${label} has an invalid data type.`);
  }
};

export const validateRequiredNumericProperty = (label: string, property: any) => {
  property = +property;
  if (property == null || property == undefined || property == "undefined") {
    throw new Error(`${label} must be provided.`);
  }
  if (typeof property != "number") {
    throw new Error(`${label} has an invalid data type.`);
  }
};

export const validateIfArray = (label: string, arrayProspect: any) => {
  if (arrayProspect == null || arrayProspect == undefined || arrayProspect == "undefined") {
    throw new Error(`${label} must be provided.`);
  } else {
    if (!(Array.isArray(arrayProspect) && arrayProspect.length > 0)) {
      throw new Error(`${label} must be provided.`);
    }
  }
};

export const validateEmailAddress = (email: string): void => {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email address");
  }
};

export const validatePhoneNumber = (phone: string): void => {
  if (!isValidPhoneNumber(phone)) {
    throw new Error("Invalid phone number");
  }
};

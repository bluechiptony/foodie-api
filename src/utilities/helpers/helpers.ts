import nanoid from "nanoid/generate";
const dictionary = require("nanoid-dictionary");
const allowableStrings = dictionary.numbers + dictionary.lowercase + dictionary.uppercase;

export const generateToken = (length: number): string => {
  return nanoid(allowableStrings, length).toUpperCase();
};

export const adaptExpressRequest = (req: any): AppAdaptedRequest => {
  let adaptRequest: AppAdaptedRequest = {
    path: req.path,
    method: req.method,
    pathParams: req.params,
    queryParams: req.query,
    body: req.body,
    user: req.user || {}
  };

  return adaptRequest;
};

export const upperFirstCharacter = (word: string): string => {
  if (word.length === 1) {
    return word.toUpperCase();
  }
  return word.charAt(0).toUpperCase() + word.substring(1);
};

export const isValidEmail = (email: string): boolean => {
  const valid = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  return valid.test(email);
};

export const isValidPhoneNumber = (phone: string): boolean => {
  const valid = RegExp(/^\d{4}\d{3}\d{4}$/);
  return valid.test(phone);
};

export const getDateStringFromTime = (time: number): string => {
  let currentDate = new Date(time);
  return currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear();
};

export interface AppAdaptedRequest {
  path: any;
  method: any;
  pathParams: any;
  queryParams: any;
  body: any;
  user: any;
}

export const validateRequiredStingProperty = (label: string, property: any) => {};

export const validateRequiredNumericProperty = (label: string, property: any) => {};

export const validateIfArray = (arrayProspect: any) => {};

export const isValidEmail = (email: string): boolean => {
  const valid = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  return valid.test(email);
};

export const isValidPhoneNumber = (phone: string): boolean => {
  const valid = RegExp(/^\d{4}\d{3}\d{4}$/);
  return valid.test(phone);
};

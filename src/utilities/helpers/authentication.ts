import * as bcrypt from "bcrypt";

let saltRounds = 1;

export const generateHashforPasswordText = async (password: string): Promise<string> => {
  let hashPassword;
  try {
    hashPassword = await bcrypt.hashSync(password, saltRounds);
    return hashPassword;
  } catch (error) {
    throw new Error(`Unable to complete hash process`);
  }
};

export const comparePassword = async (passwordText: string, hash: string): Promise<boolean> => {
  try {
    return bcrypt.compareSync(passwordText, hash);
  } catch (error) {
    throw new Error(`Unable to complete hash comparison`);
  }
};

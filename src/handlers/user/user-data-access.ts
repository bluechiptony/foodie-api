import DefaultDatabase from "../../config/database";
import { User } from "./user.model";
const userTable = "users";

export const createUser = async (user: User) => {};

export const updateUser = async (user: User) => {};

export const getSingleUser = async (userCode: string): Promise<User> => {
  return new User();
};

export const getUsers = async (shouldPaginate: boolean, limit?: number, numberRecords?: number): Promise<User[]> => {
  return [];
};

export const checkIfUserExists = async (userCode: string): Promise<boolean> => {
  return false;
};

export const searchUserByName = async (nameString: string): Promise<User[]> => {
  return [];
};

export const userBySearchString = async (searchString: string): Promise<User[]> => {
  return [];
};

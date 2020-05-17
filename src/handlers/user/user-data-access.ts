import * as knex from "knex";

import { Connection } from "../../config/database";
const connector: knex = new Connection().knex();

import { User } from "./user.model";
import { DatabaseError } from "../../utilities/errors/errors";
const userTable = "users";

export const updateUser = async (user: User) => {};

export const getSingleUser = async (userCode: string) => {
  try {
    let result = await connector.table(userTable).select("*").where({ user_code: userCode });
    if (result.length > 0) {
      return result[0];
    } else {
      return {};
    }
  } catch (error) {
    throw new DatabaseError("Unable to complete connection");
  }
};

export const getUsers = async (shouldPaginate: boolean, limit?: number, numberRecords?: number): Promise<User[]> => {
  let result = null;
  try {
    if (shouldPaginate) {
    } else {
    }
  } catch (error) {
    throw new DatabaseError("Internal connection error");
  }
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

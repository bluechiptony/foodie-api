import * as knex from "knex";
import { LoginProfile } from "./authentication";
import { Connection } from "../../config/database";
import { DatabaseError } from "../../utilities/errors/errors";
import { dbLogger } from "../../utilities/helpers/logger";
const connector: knex = new Connection().knex();

const authTable: string = "authentication";

export const checkIfProfileIsValid = async (loginProfile: LoginProfile) => {
  try {
    let result = await connector.table(authTable).select("*").where({ emailAddress: loginProfile.emailAddress, wakanda: loginProfile.password });
  } catch (error) {
    dbLogger.error(error.message);
    throw new DatabaseError("Unable to establish connection");
  }
};

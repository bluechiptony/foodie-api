const Knex = require("knex");

let databaseHost = process.env.DATABASE_HOST;
let databaseName = process.env.DATABASE_NAME;
let databaseUser = process.env.DATABASE_USER;
let databasePassword = process.env.DATABASE_PASSWORD;

export const databaseConfig = {
  clieng: "pg",
  connecttion: {
    host: databaseHost,
    database: databaseName,
    user: databaseUser,
    password: databasePassword
  }
};

const defaultDatabase = Knex(databaseConfig);

// const defaultDatabase:Knex = Knex

export default defaultDatabase;

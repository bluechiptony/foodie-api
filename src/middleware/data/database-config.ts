// import * as Knex from "knex";
const Knex = require("knex");

const databaseConfig = {
  clieng: "pg",
  connecttion: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  }
};

const DefaultDatabase = Knex(databaseConfig);

// const defaultDatabase:Knex = Knex

export default DefaultDatabase;

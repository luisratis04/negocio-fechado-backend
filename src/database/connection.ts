import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const config = {
  client: "mysql",
  connection: {
    server: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    options: {
      encrypt: true,
      enableArithAbort: true,
    },
  },
};

const connection = knex(config);

export { config };
export default connection;

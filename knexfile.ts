import path from "path";
import { config } from "./src/database/connection";

module.exports = {
  ...config,
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
};

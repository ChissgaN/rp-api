import sql from "mssql";
import { dbConfig } from "../config/db_config.js";

export const pool = sql.connect(
  {
    ...dbConfig,
    options: {
      encrypt: false,
      trustServerCertificate: true,
      trustedConnection: true,
    },
  },
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Database connected");
  }
);

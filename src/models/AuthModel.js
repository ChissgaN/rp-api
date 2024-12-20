import { pool } from "../libs/db_conn.js";

/**
 * @description Find user by defined key
 * @param {*} key
 * @param {*} value
 * @returns
 */
export async function findBy(key, value) {
  try {
    const query = `SELECT * FROM users WHERE ${key} = @value`;
    const request = await pool.request();
    request.input("value", value);
    const result = await request.query(query);
    return result.recordset[0];
  } catch (error) {
    throw error;
  }
}

export default { findBy };

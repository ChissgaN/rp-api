import { pool } from "../libs/db_conn.js";

/**
 * @description Find user by defined key
 * @param {*} key
 * @param {*} value
 * @returns
 */
export async function findBy(key, value) {
  try {
    const query = `SELECT * FROM vw_users WHERE ${key} = @value for json path, without_array_wrapper`;
    const request = await pool.request();
    request.input("value", value);
    const result = await request.query(query);
    const values = result.recordset[0];
    const v_key = Object.keys(values)[0];
    return JSON.parse(values[v_key]);
  } catch (error) {
    throw error;
  }
}

export default { findBy };

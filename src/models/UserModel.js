import { pool } from "../libs/db_conn.js";

export async function select() {
  try {
    const query = "SELECT * FROM vw_users for json path";
    const result = await pool.request().query(query);
    const values = result.recordset[0];
    const key = Object.keys(values)[0];
    return JSON.parse(values[key]);
  } catch (error) {
    throw error;
  }
}

export async function find(user_id) {
  try {
    const query = `Select * From vw_users Where id = @user_id for json path, without_array_wrapper`;

    const request = await pool.request();
    request.input("user_id", user_id);
    const result = await request.query(query);
    const values = result.recordset[0];
    const key = Object.keys(values)[0];
    return  JSON.parse(values[key]);
  } catch (error) {
    throw error;
  }
}

export async function create(user) {
  try {
    const request = await pool.request();
    Object.entries(user).forEach(([key, value]) => {
      request.input(key, value);
    });
    await request.execute("sp_register_user");
  } catch (error) {
    throw error;
  }
}

export async function update(user) {
  try {
    const request = await pool.request();
    Object.entries(user).forEach(([key, value]) => {
      request.input(key, value);
    });
    await request.execute("sp_update_user");
  } catch (error) {
    throw error;
  }
}

export async function remove(status_id, user_id) {
  try {
    const request = await pool.request();
    request.input("status_id", status_id);
    request.input("user_id", user_id);
    await request.execute("sp_update_user_status");
  } catch (error) {
    throw error;
  }
}

export default { select, find, create, update, remove };

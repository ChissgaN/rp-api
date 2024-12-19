import { pool } from "../libs/db_conn.js";

export async function select() {
  try {
    const query = "SELECT * FROM products";
    console.log(query);
    const result = await pool.request().query(query);

    return result.recordset;
  } catch (error) {
    throw error;
  }
}

export async function find(product_id) {
  try {
    const query = `SELECT * FROM products WHERE id = @product_id`;
    const request = await pool.request();
    request.input("product_id", product_id);
    const result = await request.query(query);
    return result.recordset[0];
  } catch (error) {
    throw error;
  }
}

export async function create(product) {
  try {
    const request = await pool.request();
    Object.entries(product).forEach(([key, value]) => {
      request.input(key, value);
    });

    await request.execute("sp_register_products");
  } catch (error) {
    throw error;
  }
}

export async function update(product) {
  try {
    const request = await pool.request();
    Object.entries(product).forEach(([key, value]) => {
      request.input(key, value);
    });

    await request.execute("sp_update_products");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function remove(status_id, product_id) {
  try {
    const request = await pool.request();
    request.input("status_id", status_id);
    request.input("product_id", product_id);

    await request.execute("sp_update_product_status");
  } catch (error) {
    throw error;
  }
}

export default { select, find, create, update, remove };

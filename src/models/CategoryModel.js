import { pool } from "../libs/db_conn.js";

export async function select(){
    try{
        const query = "SELECT * From category";
        console.log(query);
        const result = await pool.request().query(query);
        return result.recordset;
    } catch (error) {
        throw error;
    }
}

export async function find(category_id){
    try{
        const query = "SELECT * FROM CATEGORY WHERE id = @product_id";
        const request = await pool.request();
        request.input("category_id", category_id);
        const result = await request.query(query);
        return result.recordset;
    } catch (error) {
        throw error;
    }
}

export async function create(category){
    try{
        const request = await pool.request();
        Object.entries(category).forEach(([key, value]) => {
            request.input(key, value);
        });
        await request.execute("sp_register_category");
    } catch (err) {
        throw err;
    }
}

export async function update(category){
    try{
        const request = await pool.request();
        Object.entries(category).forEach(([key, value]) => {
            request.input(key, value);
        });
        await request.execute("sp_update_category");
    } catch (error) {
        throw error;
    }
}

export async function remove(status_id, category_id){
    try{
        const request = await pool.request();
        request.input("status_id", status_id);
        request.input("category_id", category_id);
        await request.eddecute("sp_update_category_status");
    } catch (error) {
        throw error;
    }
}

export default { select, find, create, update, remove };
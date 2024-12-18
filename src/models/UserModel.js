import { pool } from "../libs/db_conn.js";

export async function select(){
    try{
        const query = "SELECT * FROM users";
        console.log(query);
        const result = await pool.request().query(query);
        return result.recordset;
    } catch (error) {
        throw error;
    }
}

export async function find(user_id){
    try{
        const query = "SELECT * FROM users WHERE id = @user_id";
        const request = await pool.request();
        request.input("user_id", user_id);
        const result = await request.query(query);
        return result.recordset;
    } catch (error) {
        throw error;
    }
}

export async function create(user){
    try {
        const request = await pool.request();
        Object.entries(user).forEach(([key, value]) => {
            request.input(key, value);
        });
        await request.execute("sp_register_users");
    } catch (error) {
        throw error;
    }
}

export async function update(user){
    try {
        const request = await pool.request();
        Object.entries(user).forEach(([key, value]) => {
            request.input(key, value);
        });
        await request.execute("sp_update_users");
    } catch (error) {
        throw error;
    }
}

export async function remove(status_id, user_id){
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
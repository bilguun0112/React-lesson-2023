import { pool } from "../config/user-role-config.js";


export async function postUserData(userName) {
    console.log('name', userName);
    const query = `INSERT INTO user_role(user_role_name) VALUES(?)`
    const [rows] = await pool.query(query, [userName])
    return rows
}


export async function getRoles() {
    const [rows] = await pool.query(`select user_role_id as id, user_role_name as name from user_role`);
    console.log(rows);
    return rows;
}
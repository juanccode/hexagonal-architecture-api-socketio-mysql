import mysql from 'mysql2/promise';
import "dotenv/config.js";

const pool = mysql.createPool({
  host: process.env.HOST_DB,
  port: process.env.PORT_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function query(sql, params) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}
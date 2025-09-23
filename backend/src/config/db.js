import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();


export const conn = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

export async function testDBConnection() {
    try {
        const connection = await conn.getConnection();
        console.log('✅ Terhubung ke MySQL');
        connection.release();
    } catch (err) {
        console.error('❌ Gagal koneksi ke MySQL:', err.message);
        process.exit(1);
    }
}
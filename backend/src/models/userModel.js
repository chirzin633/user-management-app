import { conn } from "../config/db.js";


export const User = {
    async findAll() {
        const [rows] = await conn.query('SELECT * FROM user');
        return rows;
    },

    async findByEmail(email) {
        const [rows] = await conn.query('SELECT * FROM user WHERE email = ?', [email]);
        return rows[0];
    },

    async create(data) {
        const { nama, email, nomorTelepon, statusAktif, departemen } = data;
        await conn.query(
            'INSERT INTO user (nama, email, nomorTelepon, statusAktif, departemen) VALUES (?,?,?,?,?)', [nama, email, nomorTelepon, statusAktif, departemen]
        );
    },

    async update(id, data) {
        const { nama, email, nomorTelepon, statusAktif, departemen } = data;
        const [result] = await conn.query(
            'UPDATE user SET nama=?, email=?, nomorTelepon=?, statusAktif=?, departemen=? WHERE id=?', [nama, email, nomorTelepon, statusAktif, departemen, id]
        );
        return result.affectedRows;
    },

    async remove(id) {
        const [result] = await conn.query('DELETE FROM user WHERE id=?', [id]);
        return result.affectedRows;
    },
}
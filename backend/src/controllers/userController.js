import { User } from "../models/userModel.js";

export async function getAll(req, res, next) {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        next(err);
    }
}

export async function getUserByEmail(req, res, next) {
    try {

        const { value } = req.query;
        const user = await User.findByEmail(value);
        if (!user) {
            return res.status(404).json({ message: "Pengguna tidak ditemukan!" });
        }
        res.json(user);
    } catch (err) {
        next(err);
    }
}

export async function create(req, res, next) {
    try {
        const existing = await User.findByEmail(req.body.email);
        if (existing) {
            return res.status(409).json({ message: 'Email sudah digunakan!' });
        }
        await User.create(req.body);
        res.status(201).json({ message: "Pengguna berhasil ditambahkan!" });
    } catch (err) {
        next(err);
    }
}

export async function update(req, res, next) {
    try {
        const affected = await User.update(req.params.id, req.body);
        if (!affected) {
            return res.status(404).json({ message: "Pengguna tidak ditemukan!" });
        }
        res.json({ message: "Pengguna berhasil diperbaharui!" });
    } catch (err) {
        next(err);
    }
}

export async function remove(req, res, next) {
    try {
        const affected = await User.remove(req.params.id);
        if (!affected) {
            return res.status(404).json({ message: "Pengguna tidak ditemukan!" });
        }
        res.json({ message: "Pengguna berhasil dihapus!" });
    } catch (err) {
        next(err);
    }
}
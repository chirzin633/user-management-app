import { useEffect, useState, } from "react";
import { getUsers, searchUserByEmail } from "../services/api";

export function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");

    async function fetchAll() {
        try {
            setLoading(true);
            const { data } = await getUsers();
            setUsers(data);
            setErr("");
        } catch (err) {
            const errorMessage = err?.response?.data?.message || "Gagal memuat data pengguna";
            setErr(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    async function searchByEmail(email) {
        if (!email.trim()) {
            return fetchAll();
        }

        try {
            setLoading(true);
            const response = await searchUserByEmail(email.trim());
            const data = response?.data ?? response;

            if (data && Object.keys(data).length > 0) {
                setUsers([data])
            } else {
                setUsers([]);
            }
        } catch (err) {
            if (err?.response?.status === 404) {
                setUsers([]);
                setErr("Pengguna tidak ditemukan");
            } else {
                const errorMessage = err?.response?.data?.message || "Terjadi Kesalahan dalam mencari";
                setErr(errorMessage);
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAll();
    }, []);

    return {
        users, loading, err, fetchAll, searchByEmail
    }
}
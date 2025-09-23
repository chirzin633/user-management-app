export function sanitizeUserPayload(user) {
    return {
        nama: user.nama,
        email: user.email,
        nomorTelepon: user.nomorTelepon,
        statusAktif: Boolean(user.statusAktif),
        departemen: user.departemen
    }
}
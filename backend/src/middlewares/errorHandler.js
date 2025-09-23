export default function (err, req, res, next) {
    console.error(err);
    res.status(500).json({
        message: "Terjadi kesalahan server",
        error: err.message
    });
}
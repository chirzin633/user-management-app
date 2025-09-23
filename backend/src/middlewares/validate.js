export default function (schema) {
    return function (req, res, next) {
        const { error } = schema.validate(req.body, { aboutEarly: false });
        if (error) {
            const errorDetails = error.details.map(err => err.message);
            return res.status(400).json({
                status: 'error',
                message: 'Validasi gagal',
                errors: errorDetails
            });
        }
        next();
    }
}
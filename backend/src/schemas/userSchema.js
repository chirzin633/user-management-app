import Joi from "joi";

export const userSchema = Joi.object({
    nama: Joi.string().required().messages({
        'string.base': 'Nama harus berupa teks',
        'string.empty': 'Nama tidak boleh kosong',
        'any.required': 'Nama wajib diisi'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Format email tidak valid',
        'any.required': 'Email wajib diisi'
    }),
    nomorTelepon: Joi.string().pattern(/^[0-9]{10,}$/).required().messages({
        'string.pattern.base': 'Nomor telepon harus berupa angka minimal 10 digit',
        'string.empty': 'Nomor telepon tidak boleh kosong',
        'any.required': 'Nomor telepon wajib diisi'
    }),
    statusAktif: Joi.boolean().required().messages({
        'boolean.base': 'Status aktif harus berupa true atau false',
        'any.required': 'Status aktif wajib diisi'
    }),
    departemen: Joi.string().required().messages({
        'string.empty': 'Departemen tidak boleh kosong',
        'any.required': 'Departemen wajib diisi'
    })
});
# 📦 User Management App

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

Aplikasi fullstack sederhana untuk mengelola data pengguna. Dibangun dengan Express.js (backend) dan React (frontend), serta didukung oleh MySQL sebagai database.

---

## 🚀 Cara Menjalankan Project

### 🔧 Backend (Express.js)

```bash
cd backend
npm install
cp .env.example .env
# Isi .env dengan konfigurasi database kamu
npm run dev
```

Contoh isi .env

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=user_management
```

### 🌐 Frontend (React)

```
cd frontend
npm install
cp .env.example .env
# Isi .env dengan base URL backend
npm run dev
```

Contoh isi file .env

```
VITE_API_URL=http://localhost:3000/api
```

### ☁️ Deploy Project

```
https://user-management-app-chirzin.vercel.app/
```

### ✅ Ringkasan

- Jalankan lokal: npm run dev di backend & frontend
- Deploy Frontend : https://user-management-app-chirzin.vercel.app/
- Deploy Backend : https://user-management-server-rho-nine.vercel.app/

## 🧩 Features

#### ✅ Frontend (React + TailwindCSS + DaisyUI)

- 3 halaman utama:
  - Home: Hero section + penjelasan aplikasi
  - User List: Tabel pengguna + fitur search, edit, delete
  - Add User: Form tambah pengguna baru
- Komponen konsisten: Navbar, Footer, Layout
- Responsive: Mobile, Tablet, Desktop
- Axios untuk komunikasi API
- Modal edit & delete dengan validasi ringan

#### ✅ Backend (Express.js + MySQL)

- CRUD pengguna
  - GET /users → ambil semua pengguna
  - GET /users/email?value=... → cari berdasarkan email
  - POST /users → tambah pengguna baru
  - PUT /users/:id → update pengguna
  - DELETE /users/:id → hapus pengguna
- Validasi input dengan Joi
- Error handling konsisten
- Swagger dokumentasi di /api-docs

#### 🛠️ Teknologi yang Digunakan

- Backend: Express.js, MySQL, Joi, Swagger
- Frontend: React, Vite, TailwindCSS, DaisyUI, Axios

## 📚 Dokumentasi API

### 🔗 Swagger UI

Dokumentasi interaktif tersedia di:
[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

### 📋 Ringkasan Endpoint

| Method | Endpoint                  | Deskripsi                       |
| ------ | ------------------------- | ------------------------------- |
| GET    | `/api/users`              | Ambil semua pengguna            |
| GET    | `/api/users/email?value=` | Cari pengguna berdasarkan email |
| POST   | `/api/users`              | Tambah pengguna baru            |
| PUT    | `/api/users/:id`          | Update data pengguna            |
| DELETE | `/api/users/:id`          | Hapus pengguna                  |

---

### 📦 Contoh Payload JSON

```json
{
  "nama": "Budi Sudarsono",
  "email": "budi@yopmail.com",
  "nomorTelepon": "08123456789",
  "statusAktif": true,
  "departemen": "Marketing"
}
```

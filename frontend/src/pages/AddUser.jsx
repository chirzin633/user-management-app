import { useState } from "react";
import { useNavigate } from "react-router";
import { createUser } from "../services/api.js";

const initial = { nama: "", email: "", nomorTelepon: "", statusAktif: true, departemen: "" };

export default function AddUser() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");
  const navigate = useNavigate();

  function onChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setOk("");
    try {
      setLoading(true);
      await createUser(form);
      setOk("Pengguna berhasil ditambahkan!");
      setTimeout(() => navigate("/users"), 1500);
    } catch (err) {
      const errorMessage = Array.isArray(err?.response?.data?.errors) ? err.response.data.errors.join(", ") : err?.response?.data?.message || "Gagal menambahkan pengguna!";
      setErr(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-xl md:text-2xl mb-6 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Informasi Pengguna
            </h2>

            {/* Success Message */}
            {ok && (
              <div className="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{ok}</span>
              </div>
            )}

            <form id="userForm" className="space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control md:col-span-2">
                  <label className="label" htmlFor="nama">
                    <span className="label-text font-medium">Nama Lengkap</span>
                    <span className="label-text-alt text-error">*</span>
                  </label>
                  <input type="text" id="nama" name="nama" value={form.nama} onChange={onChange} placeholder="Masukkan nama lengkap Anda" className="input input-bordered w-full focus:input-primary" required />
                </div>

                <div className="form-control">
                  <label className="label" htmlFor="email">
                    <span className="label-text font-medium">Alamat Email</span>
                    <span className="label-text-alt text-error">*</span>
                  </label>
                  <input type="email" id="email" name="email" value={form.email} onChange={onChange} placeholder="contoh@email.com" className="input input-bordered w-full focus:input-primary" required />
                </div>

                <div className="form-control">
                  <label className="label" htmlFor="nomorTelepon">
                    <span className="label-text font-medium">Nomor Telepon</span>
                    <span className="label-text-alt text-error">*</span>
                  </label>
                  <input type="tel" id="nomorTelepon" name="nomorTelepon" value={form.nomorTelepon} onChange={onChange} placeholder="08xxxxxxxxx" className="input input-bordered w-full focus:input-primary" required />
                </div>

                <div className="form-control md:col-span-2">
                  <label className="label" htmlFor="departemen">
                    <span className="label-text font-medium">Departemen</span>
                    <span className="label-text-alt text-error">*</span>
                  </label>
                  <input type="text" id="departemen" name="departemen" value={form.departemen} onChange={onChange} placeholder="Masukkan nama departemen Anda" className="input input-bordered w-full focus:input-primary" required />
                </div>

                <div className="form-control md:col-span-2">
                  <div className="flex items-center space-x-3 p-4 rounded-lg bg-base-200">
                    <input type="checkbox" id="statusAktif" name="statusAktif" checked={form.statusAktif} onChange={onChange} className="checkbox checkbox-primary" />
                    <div className="flex-1">
                      <label htmlFor="statusAktif" className="label-text font-medium cursor-pointer">
                        Status Aktif
                      </label>
                      <p className="text-sm text-base-content/70" id="statusAktif-help">
                        Centang jika pengguna dalam status aktif
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {err && (
                <div className="alert alert-error">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{err}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-base-300">
                <button type="reset" className="btn btn-outline btn-error flex-1 sm:flex-none sm:w-32" onClick={() => setForm(initial)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reset
                </button>

                <button type="submit" className={`btn btn-primary flex-1 ${loading ? "btn-disabled" : ""}`} disabled={loading}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {loading ? <span className="loading loading-spinner"></span> : "Simpan Data"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

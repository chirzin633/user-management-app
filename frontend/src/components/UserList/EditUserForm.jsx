import { useState } from "react";
import { updateUser } from "../../services/api";
import { sanitizeUserPayload } from "../../utils/sanitizeUserPayload";

export default function EditUserForm(props) {
  const { user, onClose, onSave } = props;
  const [formData, setFormData] = useState(user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      await updateUser(formData.id, sanitizeUserPayload(formData));

      setSuccess(true);

      setTimeout(() => {
        onSave();
        onClose();
      }, 1000);
    } catch (err) {
      setSuccess(false);
      const errorMessage = err?.response?.data?.message || "Gagal mengupdate user";
      setError(errorMessage);
    } finally {
      setLoading(true);
    }
  }

  return (
    <dialog open className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-5">Edit Pengguna</h3>

        {error && <div className="alert alert-error mb-2">{error}</div>}
        {success && <div className="alert alert-success mb-2">Data berhasil diupdate!</div>}

        <form className="space-y-2" onSubmit={handleSubmit}>
          <input name="nama" type="text" className="input input-bordered w-full" value={formData.nama} onChange={handleChange} disabled={loading} />
          <input name="email" type="email" className="input input-bordered w-full" value={formData.email} onChange={handleChange} disabled={loading} />
          <input name="nomorTelepon" type="text" className="input input-bordered w-full" value={formData.nomorTelepon} onChange={handleChange} disabled={loading} />
          <input name="departemen" type="text" className="input input-bordered w-full" value={formData.departemen} onChange={handleChange} disabled={loading} />
          <label className="label cursor-pointer">
            <span className="label-text">Status Aktif</span>
            <input name="statusAktif" type="checkbox" className="toggle" checked={formData.statusAktif} onChange={handleChange} disabled={loading} />
          </label>

          <div className="modal-action">
            {loading ? (
              <div className="flex items-center">
                <span className="loading loading-spinner loading-sm mr-2"></span>
                <span>Memproses...</span>
              </div>
            ) : success ? (
              <div className="flex items-center">
                <span className="loading loading-spinner loading-sm mr-2"></span>
                <span>Menutup...</span>
              </div>
            ) : (
              <>
                <button type="submit" className="btn btn-primary">
                  Simpan
                </button>
                <button type="button" className="btn" onClick={onClose}>
                  Batal
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </dialog>
  );
}

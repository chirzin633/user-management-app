import { useEffect, useState } from "react";
import { deleteUser } from "../../services/api";

export default function DeleteUserModal(props) {
  const { user, onClose, onSuccess } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleDeleteConfirm() {
    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      await deleteUser(user.id);

      setSuccess(true);

      setTimeout(() => {
        onSuccess?.();
        onClose();
      }, 1000);
    } catch (err) {
      setSuccess(false);
      const errorMessage = err?.response?.data?.message || "Gagal menghapus user";
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!user) {
      setError("");
      setSuccess(false);
      setLoading(false);
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <dialog open className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center mb-5">Hapus Pengguna</h3>

        {error && <div className="alert alert-error mb-2">{error}</div>}
        {success && <div className="alert alert-success mb-2">Data berhasil dihapus!</div>}

        {!success && !error && (
          <p>
            Yakin ingin menghapus <strong>{user.nama}</strong>?
          </p>
        )}

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
          ) : error ? (
            <button className="btn" onClick={onClose}>
              Tutup
            </button>
          ) : (
            <>
              <button className="btn btn-error" onClick={handleDeleteConfirm}>
                Ya, hapus!
              </button>
              <button className="btn" onClick={onClose}>
                Batal
              </button>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}

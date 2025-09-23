import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import EditUserForm from "../components/UserList/EditUserForm";
import DeleteUserModal from "../components/UserList/DeleteUserModal";

export default function UserList() {
  const { users, loading, err, fetchAll, searchByEmail } = useUsers();
  const [q, setQ] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    searchByEmail(q);
  }

  async function handleReset() {
    setQ("");
    fetchAll();

    setTimeout(() => {
      const searchInput = document.querySelector('input[type="email"]');
      if (searchInput) {
        searchInput.focus();
      }
    }, 0);
  }

  return (
    <div className="mt-16 space-y-4">
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSearch}>
            <input type="email" placeholder="Cari berdasarkan email" className="input input-bordered w-full" value={q} onChange={(e) => setQ(e.target.value)} />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
            <button className="btn" type="button" onClick={handleReset}>
              Reset
            </button>
          </form>
        </div>
      </div>

      <div className="card bg-base-100 shadow">
        <div className="card-body overflow-x-auto">
          {loading ? (
            <div className="flex justify-center p-6">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : err ? (
            <div className="alert alert-warning">{err}</div>
          ) : users.length === 0 ? (
            <div className="text-center text-sm opacity-70">Tidak ada data</div>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Nomor Telepon</th>
                  <th>Status</th>
                  <th>Departemen</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.nama}</td>
                    <td>{user.email}</td>
                    <td>{user.nomorTelepon}</td>
                    <td>
                      <span className={`badge ${user.statusAktif ? "badge-success" : "badge-error"}`}>{user.statusAktif ? "Aktif" : "Nonaktif"}</span>
                    </td>
                    <td>{user.departemen}</td>
                    <td className="flex gap-2">
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => {
                          setSelectedUser(user);
                          setShowEdit(true);
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => {
                          setSelectedUser(user);
                          setShowDelete(true);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {showEdit && selectedUser && <EditUserForm user={selectedUser} onClose={() => setShowEdit(false)} onSave={fetchAll} />}

      {showDelete && <DeleteUserModal user={selectedUser} onClose={() => setShowDelete(false)} onSuccess={fetchAll} />}
    </div>
  );
}

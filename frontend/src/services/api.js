import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { 'Content-Type': 'application/json' }
});

export function getUsers() {
    return api.get('/users');
}

export function searchUserByEmail(email) {
    return api.get('/users/email', { params: { value: email } });
}

export function createUser(payload) {
    return api.post('/users', payload);
}

export function updateUser(id, payload) {
    return api.put(`/users/${id}`, payload);
}

export function deleteUser(id) {
    return api.delete(`/users/${id}`);
}
import axios from 'axios';

const API_URL = 'http://localhost:8086/user';

class UserService {
  getAllUsers() {
    return axios.get(`${API_URL}/getAll`);
  }

  getUserById(id) {
    return axios.get(`${API_URL}/getById/${id}`);
  }

  getUserByEmail(email) {
    return axios.get(`${API_URL}/getUserByEmail/${email}`);
  }

  deleteUser(id) {
    return axios.delete(`${API_URL}/delete/${id}`);
  }
}

export default new UserService();

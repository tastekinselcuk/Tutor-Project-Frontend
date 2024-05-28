import axios from 'axios';
import store from '../store';


const API_URL = 'http://localhost:8086/api/auth';

class AuthService {
  register(firstname, lastname, email, password, role) {
    return axios
      .post(`${API_URL}/register`, {
        firstname,
        lastname,
        email,
        password,
        role,
      })
      .then((response) => {
        return response.data;
      });
  }

  login(email, password) {
    return axios
      .post(`${API_URL}/authenticate`, { email, password })
      .then((response) => {
        if (response.data.access_token) {
          this.updateUserInLocalStorage(response.data.user_dto); // Kullanıcı oturum açtığında localStorage'ı güncelle
        }
        return response.data;
      });
  }

  logout() {
    store.dispatch('logout');
    localStorage.removeItem('user'); // Oturumu kapattığınızda localStorage'dan kullanıcı bilgilerini kaldırın
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  // localStorage'daki kullanıcı bilgilerini güncellemek için yardımcı yöntem
  updateUserInLocalStorage(userData) {
    localStorage.setItem('user', JSON.stringify(userData));
  }
}

export default new AuthService();

// src/services/AuthService.js
import axios from 'axios';

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
        if (response.data.accessToken) {
          this.updateUserInLocalStorage(response.data); // Yeni kullanıcı kaydı yapıldığında localStorage'ı güncelle
        }
        return response.data;
    
    
      });
  }

  login(email, password) {
    return axios
      .post(`${API_URL}/authenticate`, { email, password })
      .then((response) => {
        if (response.data.accessToken) {
          this.updateUserInLocalStorage(response.data); // Kullanıcı oturum açtığında localStorage'ı güncelle
        }
        return response.data;
      });
  }

  logout() {
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

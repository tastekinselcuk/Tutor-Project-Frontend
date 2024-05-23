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
          // Vuex store'u güncelle
          this.$store.commit("setUser", response.data); // Bu satırı ekle
          this.$store.commit("setUser", userData.userDto); // Bu satırı ekle
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

}

export default new AuthService();

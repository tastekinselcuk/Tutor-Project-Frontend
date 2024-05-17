// src/services/TokenService.js
import axios from 'axios';

const API_URL = 'http://localhost:8086/api/token'; // TokenController'a ait base URL

class TokenService {
  // JWT token'ını çözümleme (decode) işlemi
  async decodeToken(token) {
    try {
      const response = await axios.get(`${API_URL}/decode`, {
        params: { token },
      });
      return response.data;
    } catch (error) {
      console.error('Error decoding token:', error);
      throw error;
    }
  }

  // JWT token'ından kullanıcı adını (username) alma işlemi
  async getUsernameFromToken(token) {
    try {
      const response = await axios.get(`${API_URL}/username`, {
        params: { token },
      });
      return response.data;
    } catch (error) {
      console.error('Error getting username from token:', error);
      throw error;
    }
  }

  // JWT token'ının geçerliliğini kontrol etme işlemi
  async validateToken(token) {
    try {
      const response = await axios.get(`${API_URL}/validate`, {
        params: { token },
      });
      return response.data;
    } catch (error) {
      console.error('Error validating token:', error);
      throw error;
    }
  }

  // Örnek: JWT token'ından diğer bilgileri alma işlemi
  async extractInfoFromToken(token) {
    try {
      const response = await axios.get(`${API_URL}/info`, {
        params: { token },
      });
      return response.data;
    } catch (error) {
      console.error('Error extracting info from token:', error);
      throw error;
    }
  }
}

export default new TokenService();

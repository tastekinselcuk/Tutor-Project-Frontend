import axios from 'axios';
import store from '../store';

const API_URL = 'http://localhost:8086/api/chat';

class ChatService {
  // Mesaj gönderme metodu
  sendMessage(sender, message, actionType, avatarImage) {
    return axios
      .post(`${API_URL}/send`, {
        sender,
        message,
        actionType,
        avatarImage,
      })
      .then((response) => {
        return response.data;
      });
  }

  // Kullanıcı kaydetme (join) metodu
  registerUser(sender, actionType, avatarImage) {
    return axios
      .post(`${API_URL}/register`, {
        sender,
        actionType,
        avatarImage,
      })
      .then((response) => {
        return response.data;
      });
  }

  // Mesajları almetodu
  getMessages() {
    return axios
      .get(`${API_URL}/messages`)
      .then((response) => {
        return response.data;
      });
  }
}

export default new ChatService();

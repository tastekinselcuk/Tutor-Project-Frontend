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

  getProfilePictureByEmail(email) {
    return axios.get(`${API_URL}/getProfilePictureByEmail/${email}`);
  }

  deleteUser(id) {
    return axios.delete(`${API_URL}/delete/${id}`);
  }

  updateSettings(email, userDto, profilePicture) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('user', JSON.stringify(userDto));
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    return axios.put(`${API_URL}/updateByEmail`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}

export default new UserService();

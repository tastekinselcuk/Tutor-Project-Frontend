import axios from 'axios';

const API_URL = 'http://localhost:8086/student';

class StudentService {
  getAllStudents() {
    return axios.get(`${API_URL}/getAll`);
  }

  getStudentById(id) {
    return axios.get(`${API_URL}/getById/${id}`);
  }

  getStudentByEmail(email) {
    return axios.get(`${API_URL}/getUserByEmail/${email}`);
  }

  deleteStudent(id) {
    return axios.delete(`${API_URL}/delete/${id}`);
  }
}

export default new StudentService();

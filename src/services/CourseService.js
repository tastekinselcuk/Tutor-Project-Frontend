// src/services/CourseService.js
import axios from 'axios';

const API_URL = 'http://localhost:8086/course'; // API endpoint'i

class CourseService {
  // Tüm kursları getiren metot
  getAllCourses() {
    return axios.get(`${API_URL}/getAll`);
  }

  // Yeni kurs ekleyen metot
  addCourse(courseData) {
    return axios.post(`${API_URL}/add`, courseData);
  }

  // Kursu güncelleyen metot
  updateCourse(id, courseData) {
    return axios.put(`${API_URL}/update/${id}`, courseData);
  }

  // Kursu silen metot
  deleteCourse(id) {
    return axios.delete(`${API_URL}/delete/${id}`);
  }
}

export default new CourseService();

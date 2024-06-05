import axios from 'axios';

const API_URL = 'http://localhost:8086/course';

class CourseService {
  getAllCourses() {
    return axios.get(`${API_URL}/getAll`);
  }

  addCourse(courseData) {
    return axios.post(`${API_URL}/add`, courseData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  updateCourse(id, courseData) {
    return axios.put(`${API_URL}/update/${id}`, courseData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  deleteCourse(id) {
    return axios.delete(`${API_URL}/delete/${id}`);
  }
}

export default new CourseService();

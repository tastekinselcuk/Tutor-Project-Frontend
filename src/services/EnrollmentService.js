import axios from 'axios';

const API_URL = 'http://localhost:8086/enrollments';

class TransactionService {
  getAllEnrollments() {
    return axios.get(API_URL);
  }

  getEnrollmentsByCourseId(courseId) {
    return axios.get(`${API_URL}/course/${courseId}`);
  }

  enrollStudentToCourse(studentId, courseId) {
    return axios.post(`${API_URL}/enroll?studentId=${studentId}&courseId=${courseId}`);
  }

  getEnrollmentsByTutorId(tutorId) {
    return axios.get(`${API_URL}/tutor/${tutorId}`);
  }
}

export default new TransactionService();

import axios from 'axios';

const API_URL = 'http://localhost:8086/assignment';

class AssignmentService {
  getAllAssignments() {
    return axios.get(`${API_URL}/getAll`);
  }

  addAssignment(assignmentData) {
    return axios.post(`${API_URL}/add`, assignmentData);
  }

  updateAssignment(id, assignmentData) {
    return axios.put(`${API_URL}/update/${id}`, assignmentData);
  }

  deleteAssignment(id) {
    return axios.delete(`${API_URL}/delete/${id}`);
  }
}

export default new AssignmentService();

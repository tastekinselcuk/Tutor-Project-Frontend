import axios from 'axios';

const API_URL = 'http://localhost:8086/tutor';

class TutorService {
  getAllTutors() {
    return axios.get(API_URL);
  }

  getTutorById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  addTutor(tutorData) {
    return axios.post(API_URL, tutorData);
  }

  updateTutor(id, tutorData) {
    return axios.put(`${API_URL}/${id}`, tutorData);
  }

  softDeleteTutor(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new TutorService();

import axios from 'axios';

const API_URL = 'http://localhost:8086/contact';

class ContactFormService {
  getAllContactForms() {
    return axios.get(`${API_URL}/getAll`);
  }

  getContactFormById(id) {
    return axios.get(`${API_URL}/getById/${id}`);
  }

  addContactForm(contactForm) {
    return axios.post(`${API_URL}/add`, contactForm);
  }

  softDeleteContactForm(id) {
    return axios.delete(`${API_URL}/delete/${id}`);
  }
}

export default new ContactFormService();

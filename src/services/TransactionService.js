import axios from 'axios';

const API_URL = 'http://localhost:8086/transactions';

class TransactionService {
  getAllTransactions() {
    return axios.get(API_URL);
  }

  getTransactionById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  addTransaction(transactionData) {
    return axios.post(API_URL, transactionData);
  }

  updateTransaction(id, transactionData) {
    return axios.put(`${API_URL}/${id}`, transactionData);
  }

  changeStatus(id) {
    return axios.put(`${API_URL}/${id}/change-status`);
  }

  deleteTransaction(id) {
    return axios.delete(`${API_URL}/${id}`);
  }

  // Yeni fonksiyon
  getTransactionsByEmail(email) {
    return axios.get(`${API_URL}?email=${email}`);
  }
}

export default new TransactionService();

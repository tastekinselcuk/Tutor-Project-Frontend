import axios from 'axios';

const API_URL = 'http://localhost:8086/transaction';

class TransactionService {
  getAllTransactions() {
    return axios.get(`${API_URL}`);
  }

  getTransactionById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  addTransaction(transactionData) {
    return axios.post(`${API_URL}`, transactionData);
  }

  updateTransaction(id, transactionData) {
    return axios.put(`${API_URL}/${id}`, transactionData);
  }

  deleteTransaction(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new TransactionService();

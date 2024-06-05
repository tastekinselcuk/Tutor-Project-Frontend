<template>
  <Navbar />
  <NavbarTutor />
  <div class="container">
    <div class="mb-3 text-center">
      <button v-if="!showAddTransactionForm" @click="showAddTransactionForm = true" class="btn btn-primary mx-2">Yeni Ödeme Kaydı Aç</button>
      <button v-if="showAddTransactionForm" @click="showAddTransactionForm = false" class="btn btn-danger mx-2">İptal</button>
    </div>
    <!-- Yeni ödeme kaydı ekleme formu -->
    <div v-if="showAddTransactionForm" class="mt-3">
      <h2>Yeni Ödeme Kaydı Aç</h2>
      <div class="form-group">
        <label for="students">Öğrenci:</label>
        <select v-model="selectedStudentEmail" class="form-control custom-select" id="students">
          <option disabled value="">Öğrenci Seçin</option>
          <option v-for="student in students" :key="student.id" :value="student.email">{{ student.fullName }} - {{ student.email }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="paymentDate">Son Ödeme Tarihi:</label>
        <input type="date" v-model="dueDate" class="form-control" id="paymentDate">
      </div>
      <div class="form-group">
        <label for="amount">Ödenecek Miktar:</label>
        <input type="number" v-model="price" class="form-control" id="amount">
      </div>
      <button @click="createTransaction" class="btn btn-success">Kaydet</button>
    </div>

    <h2 class="mt-5">Ödeme Kayıtları</h2>
    <table class="table table-bordered mt-3">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Ad</th>
          <th scope="col">Soyad</th>
          <th scope="col">Email</th>
          <th scope="col">Ödeme Tarihi</th>
          <th scope="col">Miktar</th>
          <th scope="col">Durum</th>
          <th scope="col">İşlemler</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id" :class="{'table-success': transaction.status === 'PAID', 'table-danger': transaction.status === 'UNPAID'}">
          <td class="align-middle">{{ transaction.id }}</td>
          <td class="align-middle">{{ transaction.firstname }}</td>
          <td class="align-middle">{{ transaction.lastname }}</td>
          <td class="align-middle">{{ transaction.email }}</td>
          <td class="align-middle">{{ formatDate(transaction.dueDate) }}</td>
          <td class="align-middle">{{ transaction.price }} TL</td>
          <td class="align-middle">{{ transaction.status }}</td>
          <td class="align-middle">
            <div class="d-flex justify-content-between">
              <button @click="toggleStatus(transaction)" class="btn btn-secondary btn-sm me-2">Durumu Değiştir</button>
              <button @click="deleteTransaction(transaction.id)" class="btn btn-danger btn-sm">Sil</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TransactionService from "@/services/TransactionService";
import UserService from "@/services/UserService";
import Navbar from "@/components/NavBar.vue";
import NavbarTutor from "@/components/NavBarTutor.vue";

export default {
  components: {
    Navbar,
    NavbarTutor
  },
  data() {
    return {
      selectedStudentEmail: null,
      dueDate: '',
      price: '',
      status: 'UNPAID',
      students: [], // Öğrenci listesi burada tutulacak
      transactions: [], // Ödeme kayıtları burada tutulacak
      showAddTransactionForm: false // Formun görünürlüğünü kontrol eder
    };
  },
  mounted() {
    this.loadStudents();
    this.loadTransactions();
  },
  methods: {
    loadStudents() {
      UserService.getAllUsers()
        .then(response => {
          this.students = response.data.filter(user => user.role === 'STUDENT').map(user => ({
            id: user.id,
            fullName: `${user.firstname} ${user.lastname}`,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
          }));
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    },
    loadTransactions() {
      TransactionService.getAllTransactions()
        .then(response => {
          this.transactions = response.data;
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    },
    createTransaction() {
      const selectedStudent = this.students.find(s => s.email === this.selectedStudentEmail);
      if (!selectedStudent) {
        console.error("Selected student not found");
        return;
      }

      const newTransaction = {
        firstname: selectedStudent.firstname,
        lastname: selectedStudent.lastname,
        email: selectedStudent.email,
        price: this.price,
        dueDate: this.dueDate,
        status: this.status
      };

      TransactionService.addTransaction(newTransaction)
        .then(() => {
          this.loadTransactions();
          this.resetForm();
          this.showAddTransactionForm = false; // Formu kaydettikten sonra kapat
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    },
    deleteTransaction(id) {
      TransactionService.deleteTransaction(id)
        .then(() => {
          this.loadTransactions();
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    },
    toggleStatus(transaction) {
      const updatedTransaction = { ...transaction, status: transaction.status === 'PAID' ? 'UNPAID' : 'PAID' };

      TransactionService.updateTransaction(updatedTransaction.id, updatedTransaction)
        .then(() => {
          this.loadTransactions();
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    },
    resetForm() {
      this.selectedStudentEmail = null;
      this.dueDate = '';
      this.price = '';
      this.status = 'UNPAID';
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('tr-TR');
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 50px auto;
}
.form-group {
  margin-bottom: 20px;
}
.custom-select {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s;
}
.custom-select:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 5px rgba(128, 189, 255, 0.5);
}
.table {
  margin-top: 20px;
}
.table-success {
  background-color: #d4edda;
}
.table-danger {
  background-color: #f8d7da;
}
.align-middle {
  vertical-align: middle !important;
}
.d-flex {
  display: flex;
}
.justify-content-between {
  justify-content: space-between;
}
.me-2 {
  margin-right: 0.5rem;
}
</style>

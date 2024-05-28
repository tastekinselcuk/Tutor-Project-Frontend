<template>
    <Navbar />
    <NavbarTutor />
  <div class="container">
    <h2>Yeni Ödeme Kaydı Aç</h2>
    <div class="form-group">
      <label for="course">Kurs Seç:</label>
      <select v-model="selectedCourse" class="form-control" id="course">
        <option v-for="course in courses" :key="course.id" :value="course.id">{{ course.courseSubject }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="students">Öğrencileri Seç:</label>
      <select v-model="selectedStudents" multiple class="form-control" id="students">
        <option v-for="student in students" :key="student.id" :value="student.id">{{ student.fullName }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="paymentDate">Ödeme Tarihi:</label>
      <input type="date" v-model="paymentDate" class="form-control" id="paymentDate">
    </div>
    <div class="form-group">
      <label for="amount">Ödeme Miktarı:</label>
      <input type="number" v-model="amount" class="form-control" id="amount">
    </div>
    <button @click="createPaymentRecord" class="btn btn-primary">Kaydet</button>
  </div>
</template>

<script>
import TransactionService from "@/services/TransactionService";
import Navbar from "@/components/NavBar.vue";
import NavbarTutor from "@/components/NavBarTutor.vue";

export default {
  components: {
    Navbar,
    NavbarTutor
  },
  data() {
    return {
      selectedCourse: null,
      selectedStudents: [],
      paymentDate: '',
      amount: '',
      courses: [], // Kurs listesi burada tutulacak
      students: [] // Öğrenci listesi burada tutulacak
    };
  },
  mounted() {
    this.loadCourses();
    this.loadStudents();
  },
  methods: {
    loadCourses() {
      // Örnek kurs listesi
      this.courses = [
        { id: 1, courseSubject: 'Matematik' },
        { id: 2, courseSubject: 'Fizik' },
        { id: 3, courseSubject: 'Kimya' }
      ];
    },
    loadStudents() {
      // Örnek öğrenci listesi
      this.students = [
        { id: 1, fullName: 'Ahmet Yılmaz' },
        { id: 2, fullName: 'Ayşe Kaya' },
        { id: 3, fullName: 'Mehmet Demir' }
      ];
    },
    createPaymentRecord() {
      // Seçilen kurs ve öğrencileri kullanarak yeni bir ödeme kaydı oluşturma işlemi burada yapılabilir
      console.log('Seçilen Kurs:', this.selectedCourse);
      console.log('Seçilen Öğrenciler:', this.selectedStudents);
      console.log('Ödeme Tarihi:', this.paymentDate);
      console.log('Ödeme Miktarı:', this.amount);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 50px auto;
}
.form-group {
  margin-bottom: 20px;
}
</style>

<template>
  <Navbar class="navbar" />
  <NavbarStudent class="navbarStudent" />
  <div class="container-fluid">

    <!-- Açılan derslerin listesi -->
    <div v-if="assignments.length > 0" class="assignment-list mt-5 text-center">
      <h3>Ödevlerim</h3>
      <div class="list-group">
        <div v-for="(assignment, index) in assignments" :key="index" class="course-item card mb-3 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ assignment.assignmentHeader }}</h5>
            <p class="card-text">{{ assignment.description }}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Oluşturulma Tarihi:</strong> {{ formatDate(assignment.submissionDate) }}</li>
              <li class="list-group-item"><strong>Bitiş Tarihi:</strong> {{ formatDate(assignment.endDate) }}</li>
            </ul>
            <div class="d-flex justify-content-end mt-3">
              <button @click="editCourse(assignment)" class="btn btn-outline-primary btn-sm mx-1">Düzenle</button>
              <button @click="softDeleteCourse(assignment.id)" class="btn btn-outline-danger btn-sm mx-1">Sil</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mt-3 text-center">
      <p>Henüz ödev eklenmemiş.</p>
    </div>
  </div>
</template>

<script>
import AssignmentService from '@/services/AssignmentService';
import Navbar from "@/components/NavBar.vue";
import NavbarStudent from "@/components/NavBarStudent.vue";

export default {
  data() {
    return {
      showAddAssignmentForm: false,
      newAssignment: {
        assignmentSubject: '',
        description: '',
        totalDuration: '',
        startDate: '',
        endDate: ''
      },
      assignments: []
    };
  },
  components: {
    Navbar,
    NavbarStudent
  },
  mounted() {
    // Sayfa yüklendiğinde ödevler getir
    this.loadAssignment();
  },
  methods: {
    loadAssignment() {
      // Tüm ödevleri yükle
      AssignmentService.getAllAssignments()
        .then(response => {
          this.assignments = response.data;
        })
        .catch(error => {
          console.error('Ödev listesi alınamadı:', error);
        });
    },
    addAssignment() {
      // Yeni ödev ekle
      const submissionDate = new Date();
      AssignmentService.addAssignment(this.newAssignment)
        .then(() => {
          this.resetForm();
          this.loadAssignment(); // ödevleri yeniden yükle
        })
        .catch(error => {
          console.error('Ödev eklenemedi:', error);
        });
    },
    resetForm() {
      // Formu sıfırla
      this.newAssignment = {
        assignmentSubject: '',
        description: '',
        totalDuration: '',
        startDate: '',
        endDate: ''
      };
      this.showAddAssignmentForm = false;
    },
    editAssignment(assignment) {
      // Düzenleme için seçilen ödevi işle
      console.log('Düzenlenen ödev:', assignment);
      // İlgili dersle ilgili işlemleri yapabilirsiniz
    },
    softDeleteAssignment(assignmentId) {
      // Ödev soft-delete işlemi
      AssignmentService.deleteAssignment(assignmentId)
        .then(() => {
          this.loadAssignment(); // Kursları yeniden yükle
        })
        .catch(error => {
          console.error('Ödev silinemedi:', error);
        });
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(date).toLocaleDateString('tr-TR', options);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.mb-3.text-center {
  display: flex;
  justify-content: center;
}
.assignment-list {
  max-width: 800px;
  margin: 0 auto;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.course-item {
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  transition: all 0.2s;
}
.course-item:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}
.course-item:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}
.card-text {
  font-size: 1rem;
  margin-bottom: 10px;
}
.list-group-item {
  background-color: #fff;
  border: none;
  padding: 0.5rem 1rem;
}
.btn-outline-primary, .btn-outline-danger {
  border-radius: 20px;
}
</style>

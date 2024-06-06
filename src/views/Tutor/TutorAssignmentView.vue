<template>
  <Navbar class="navbar" />
  <NavbarTutor class="navbarTutor" />
  <div class="container">
    <!-- Yeni ders ekleme bölümü -->
    <div class="mb-3 text-center">
      <button v-if="!showAddAssignmentForm" @click="showAddAssignmentForm = true" class="btn btn-primary mx-2">Yeni Ödev Aç</button>
      <button v-if="showAddAssignmentForm" @click="showAddAssignmentForm = false" class="btn btn-danger mx-2">İptal</button>
    </div>
    <!-- Yeni ders ekleme formu -->
    <div v-if="showAddAssignmentForm" class="mt-3">
      <h3>Yeni Ödev Ekle</h3>
      <form @submit.prevent="addAssignment">
        <div class="form-group">
          <label for="assignmentHeader">Ödevin Konusu:</label>
          <input type="text" v-model="newAssignment.assignmentHeader" class="form-control" id="assignmentHeader" required>
        </div>
        <div class="form-group">
          <label for="description">Açıklama:</label>
          <textarea v-model="newAssignment.description" class="form-control" id="description" rows="3" required></textarea>
        </div>
        <div class="form-group">
          <label for="startDate">Başlangıç Tarihi:</label>
          <input type="datetime-local" v-model="newAssignment.startDate" class="form-control" id="startDate" required>
        </div>
        <div class="form-group">
          <label for="endDate">Bitiş Tarihi:</label>
          <input type="datetime-local" v-model="newAssignment.endDate" class="form-control" id="endDate" required>
        </div>
        <button type="submit" class="btn btn-success mt-3">Ödevi Ekle</button>
      </form>
    </div>

    <div class="container mt-5">
      <div v-if="assignments.length > 0" class="assignment-list">
        <h3 class="text-center">Oluşturulan Ödevler</h3>
        <div class="row">
          <div v-for="(assignment, index) in assignments" :key="index" class="col-md-6 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ assignment.assignmentHeader }}</h5>
                <p class="card-text">{{ assignment.description }}</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong>Oluşturulma Tarihi:</strong> {{ formatDate(assignment.submissionDate) }}</li>
                  <li class="list-group-item"><strong>Bitiş Tarihi:</strong> {{ formatDate(assignment.endDate) }}</li>
                </ul>
                <div class="d-flex justify-content-end mt-3">
                  <button @click="editAssignment(assignment)" class="btn btn-outline-primary btn-sm mx-1">Düzenle</button>
                  <button @click="softDeleteAssignment(assignment.id)" class="btn btn-outline-danger btn-sm mx-1">Sil</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center">
        <h2>Verilen Ödevler</h2>
        <p>Henüz ödev eklenmemiş.</p>
      </div>
    </div>
  </div>
</template>

<script>
import AssignmentService from '@/services/AssignmentService';
import Navbar from "@/components/NavBar.vue";
import NavbarTutor from "@/components/NavBarTutor.vue";

export default {
  data() {
    return {
      showAddAssignmentForm: false,
      newAssignment: {
        assignmentHeader: '',
        description: '',
        startDate: '',
        endDate: ''
      },
      assignments: []
    };
  },
  components: {
    Navbar,
    NavbarTutor
  },
  mounted() {
    // Sayfa yüklendiğinde ödevler getir
    this.loadAssignments();
  },
  methods: {
    loadAssignments() {
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
      AssignmentService.addAssignment(this.newAssignment)
        .then(() => {
          this.resetForm();
          this.loadAssignments(); // ödevleri yeniden yükle
        })
        .catch(error => {
          console.error('Ödev eklenemedi:', error);
        });
    },
    resetForm() {
      // Formu sıfırla
      this.newAssignment = {
        assignmentHeader: '',
        description: '',
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
          this.loadAssignments(); // Kursları yeniden yükle
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
  max-width: 1200px;
}
.assignment-list {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.card-title {
  font-size: 1.5rem;
  font-weight: bold;
}
.card-text {
  font-size: 1rem;
}
.list-group-item {
  background-color: #fff;
  border: none;
}
.btn-outline-primary {
  border-radius: 20px;
}
</style>
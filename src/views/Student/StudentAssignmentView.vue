<template>
  <div>
    <Navbar class="navbar" />
    <NavbarStudent class="navbar-student" />
    <div class="container mt-5">
      <div v-if="assignments.length > 0" class="assignment-list">
        <h3 class="text-center">Ödevlerim</h3>
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
                <div class="d-flex justify-content-end mt-auto">
                  <input type="file" ref="fileInput" @change="handleFileUpload" class="d-none" id="fileUpload" />
                  <label for="fileUpload" class="btn btn-outline-primary btn-sm">Ödev Yükle</label>
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
import NavbarStudent from "@/components/NavBarStudent.vue";

export default {
  components: {
    Navbar,
    NavbarStudent
  },
  data() {
    return {
      assignments: []
    };
  },
  mounted() {
    this.loadAssignments();
  },
  methods: {
    loadAssignments() {
      AssignmentService.getAllAssignments()
        .then(response => {
          this.assignments = response.data;
        })
        .catch(error => {
          console.error('Ödev listesi alınamadı:', error);
        });
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      console.log('Yüklenen dosya:', file);
      // Handle the file upload logic here
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

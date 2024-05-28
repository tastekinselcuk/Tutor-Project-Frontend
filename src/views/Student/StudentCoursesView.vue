<template>
  <Navbar class="navbar" />
  <NavbarStudent class="navbarStudent" />
  <div class="container-fluid">
    <!-- Yeni ders ekleme formu -->
    <div v-if="showAddCourseForm" class="mt-3">
      <h3>Yeni Ders Ekle</h3>
      <form @submit.prevent="addCourse">
        <div class="form-group">
          <label for="courseSubject">Ders Konusu:</label>
          <input type="text" v-model="newCourse.courseSubject" class="form-control" id="courseSubject" required>
        </div>
        <div class="form-group">
          <label for="description">Açıklama:</label>
          <textarea v-model="newCourse.description" class="form-control" id="description" rows="3" required></textarea>
        </div>
        <div class="form-group">
          <label for="totalDuration">Toplam Süre (saat):</label>
          <input type="number" v-model="newCourse.totalDuration" class="form-control" id="totalDuration" required>
        </div>
        <div class="form-group">
          <label for="price">Ücret:</label>
          <input type="number" v-model="newCourse.price" class="form-control" id="price" required>
        </div>
        <div class="form-group">
          <label for="startDate">Başlangıç Tarihi:</label>
          <input type="datetime-local" v-model="newCourse.startDate" class="form-control" id="startDate" required>
        </div>
        <div class="form-group">
          <label for="endDate">Bitiş Tarihi:</label>
          <input type="datetime-local" v-model="newCourse.endDate" class="form-control" id="endDate" required>
        </div>
        <button type="submit" class="btn btn-success">Dersi Ekle</button>
      </form>
    </div>

    <!-- Açılan derslerin listesi -->
    <div v-if="courses.length > 0" class="courses-list mt-5 text-center">
      <h3>Açılan Dersler</h3>
      <div class="list-group">
        <div v-for="(course, index) in courses" :key="index" class="course-item card mb-3 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ course.courseSubject }}</h5>
            <p class="card-text">{{ course.description }}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Toplam Süre:</strong> {{ course.totalDuration }} saat</li>
              <li class="list-group-item"><strong>Ücret:</strong> {{ course.price }} TL</li>
              <li class="list-group-item"><strong>Başlangıç Tarihi:</strong> {{ formatDate(course.startDate) }}</li>
              <li class="list-group-item"><strong>Bitiş Tarihi:</strong> {{ formatDate(course.endDate) }}</li>
            </ul>
            <div class="d-flex justify-content-end mt-3">
              <button @click="editCourse(course)" class="btn btn-outline-primary btn-sm mx-1">Düzenle</button>
              <button @click="softDeleteCourse(course.id)" class="btn btn-outline-danger btn-sm mx-1">Sil</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mt-3 text-center">
      <p>Henüz ders açılmamış.</p>
    </div>
  </div>
</template>

<script>
import CourseService from '@/services/CourseService';
import Navbar from "@/components/NavBar.vue";
import NavbarStudent from "@/components/NavBarStudent.vue";

export default {
  data() {
    return {
      showAddCourseForm: false,
      newCourse: {
        courseSubject: '',
        description: '',
        totalDuration: '',
        price: '',
        startDate: '',
        endDate: ''
      },
      courses: []
    };
  },
  components: {
    Navbar,
    NavbarStudent
  },
  mounted() {
    // Sayfa yüklendiğinde kursları getir
    this.loadCourses();
  },
  methods: {
    loadCourses() {
      // Tüm kursları yükle
      CourseService.getAllCourses()
        .then(response => {
          this.courses = response.data;
        })
        .catch(error => {
          console.error('Kurs listesi alınamadı:', error);
        });
    },
    addCourse() {
      // Yeni dersi ekle
      CourseService.addCourse(this.newCourse)
        .then(() => {
          this.resetForm();
          this.loadCourses(); // Kursları yeniden yükle
        })
        .catch(error => {
          console.error('Ders eklenemedi:', error);
        });
    },
    resetForm() {
      // Formu sıfırla
      this.newCourse = {
        courseSubject: '',
        description: '',
        totalDuration: '',
        price: '',
        startDate: '',
        endDate: ''
      };
      this.showAddCourseForm = false;
    },
    editCourse(course) {
      // Düzenleme için seçilen dersi işle
      console.log('Düzenlenen Ders:', course);
      // İlgili dersle ilgili işlemleri yapabilirsiniz
    },
    softDeleteCourse(courseId) {
      // Dersi soft-delete işlemi
      CourseService.deleteCourse(courseId)
        .then(() => {
          this.loadCourses(); // Kursları yeniden yükle
        })
        .catch(error => {
          console.error('Ders silinemedi:', error);
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
.courses-list {
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

<template>
  <Navbar class="navbar" />
  <NavbarTutor class="navbarTutor" />
  <div class="container">
    <!-- Yeni ders ekleme bölümü -->
    <div class="mb-3">
      <button @click="showAddCourseForm = true" class="btn btn-primary">Yeni Ders Aç</button>
      <button @click="showAddCourseForm = false" class="btn btn-danger m-2">İptal</button>
      <!-- Yeni ders ekleme formu -->
      <div v-if="showAddCourseForm" class="mt-3">
        <h3>Yeni Ders Ekle</h3>
        <form @submit.prevent="addCourse">
          <div class="form-group">
            <label for="courseSubject">Ders Konusu:</label>
            <input type="text" v-model="newCourse.subject" class="form-control" id="courseSubject" required>
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
    </div>

    <!-- Açılan derslerin listesi -->
    <div v-if="courses.length > 0" class="course mt-5">
      <h3>Açılan Dersler</h3>
      <div class="list-group">
        <div v-for="(course, index) in courses" :key="index" class="list-group-item list-group-item-action">
          <div>{{ course.subject }}</div>
          <div>
            <button @click="editCourse(course)" class="btn btn-primary btn-sm">Düzenle</button>
            <button @click="softDeleteCourse(course.id)" class="btn btn-danger btn-sm">Sil</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mt-3">
      <p>Henüz ders açılmamış.</p>
    </div>
  </div>
</template>

<script>
import CourseService from '@/services/CourseService';
import Navbar from "@/components/NavBar.vue";
import NavbarTutor from "@/components/NavBarTutor.vue";

export default {
  data() {
    return {
      showAddCourseForm: false,
      newCourse: {
        subject: '',
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
    NavbarTutor
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
        subject: '',
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
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.course {
  background-color: #f4f4f4;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #c00000;
  border-bottom: 3px solid #c00000;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 5px;
  margin-bottom: 10px;
}
.course:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>

<template>
  <Navbar class="navbar" />
  <NavbarTutor class="navbarTutor" />
  <div class="container">
    <!-- Yeni ders ekleme bölümü -->
    <div class="mb-3 text-center">
      <button v-if="!showAddCourseForm" @click="showAddCourseForm = true" class="btn btn-primary mx-2">Yeni Ders Aç</button>
      <button v-if="showAddCourseForm" @click="showAddCourseForm = false" class="btn btn-danger mx-2">İptal</button>
    </div>
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
        <div class="form-group">
          <label for="courseImage">Ders Resmi:</label>
          <input type="file" @change="onImageChange" class="form-control-file" id="courseImage" required>
        </div>
        <div v-if="imagePreview" class="mt-3">
          <h5>Önizleme:</h5>
          <img :src="imagePreview" class="img-fluid img-thumbnail" alt="Ders Resmi">
        </div>
        <button type="submit" class="btn btn-success mt-3">Dersi Ekle</button>
      </form>
    </div>

    <!-- Açılan derslerin listesi -->
    <div v-if="courses.length > 0" class="courses-list mt-5">
      <h3>Açılan Dersler</h3>
      <div class="row">
        <div v-for="(course, index) in courses" :key="index" class="col-12 mb-4">
          <div class="course-item card shadow-sm h-100 d-flex flex-row">
            <img :src="course.image" class="course-img" alt="Ders Resmi">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ course.courseSubject }}</h5>
              <p class="card-text">{{ course.description }}</p>
              <div class="mt-auto">
                <div class="course-details">
                  <div class="badge-container">
                    <span class="badge bg-light text-dark p-2 rounded">Toplam Süre: {{ course.totalDuration }} saat</span>
                    <span class="badge bg-light text-dark p-2 rounded">Ücret: {{ course.price }} TL</span>
                  </div>
                  <div class="badge-container mt-2">
                    <span class="badge bg-light text-dark p-2 rounded">Başlangıç: {{ formatDate(course.startDate) }}</span>
                    <span class="badge bg-light text-dark p-2 rounded">Bitiş: {{ formatDate(course.endDate) }}</span>
                  </div>
                </div>
                <div class="mt-3 d-flex justify-content-around">
                  <button @click="editCourse(course)" class="btn btn-outline-primary btn-sm">Düzenle</button>
                  <button @click="softDeleteCourse(course.id)" class="btn btn-outline-danger btn-sm">Sil</button>
                  <button @click="registerCourse(course.id)" class="btn btn-outline-success btn-sm">Derse Kayıt Ol</button>
                </div>
              </div>
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
import Navbar from "@/components/NavBar.vue";
import NavbarTutor from "@/components/NavBarTutor.vue";

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
        endDate: '',
        image: ''
      },
      imagePreview: null,
      courses: []
    };
  },
  components: {
    Navbar,
    NavbarTutor
  },
  mounted() {
    this.loadCourses();
  },
  methods: {
    loadCourses() {
      // Fake data to demonstrate the functionality
      this.courses = [
        {
          id: 1,
          courseSubject: 'Matematik',
          description: 'Matematik dersi',
          totalDuration: 10,
          price: 100,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          image: this.imagePreview
        }
      ];
    },
    addCourse() {
      const newCourseWithImage = { ...this.newCourse, image: this.imagePreview };
      this.courses.push(newCourseWithImage);
      this.resetForm();
    },
    resetForm() {
      this.newCourse = {
        courseSubject: '',
        description: '',
        totalDuration: '',
        price: '',
        startDate: '',
        endDate: '',
        image: ''
      };
      this.imagePreview = null;
      this.showAddCourseForm = false;
    },
    onImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.imagePreview = URL.createObjectURL(file);
      }
    },
    editCourse(course) {
      console.log('Düzenlenen Ders:', course);
    },
    softDeleteCourse(courseId) {
      this.courses = this.courses.filter(course => course.id !== courseId);
    },
    registerCourse(courseId) {
      console.log('Derse kayıt ol:', courseId);
      // Derse kayıt olma işlemleri burada yapılabilir
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
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
.mb-3.text-center {
  display: flex;
  justify-content: center;
}
.courses-list {
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
  padding: 15px;
  display: flex;
  flex-direction: row;
}
.course-item:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}
.course-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
}
.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}
.card-text {
  font-size: 1rem;
  margin-bottom: 10px;
}
.badge-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.course-details {
  margin-top: 10px;
}
.btn-outline-primary, .btn-outline-danger, .btn-outline-success {
  border-radius: 20px;
  margin: 5px;
}
.img-fluid.img-thumbnail {
  max-width: 300px;
  height: auto;
}
</style>

<template>
  <div>
    <Navbar class="navbar" />
    <NavbarStudent v-if="getCurrentUser?.role === 'STUDENT'" />
    <NavbarTutor v-if="getCurrentUser?.role === 'TUTOR'" />
    <div class="container">
      <div class="left-side">
        <h1>Mükemmel öğretmeni bul.</h1>
        <p>Kişiselleştirilmiş bir öğrenme deneyimi için bize hangi dili öğrenmek istediğini söyle</p>
        <form @submit.prevent="findTeacher">
          <label for="subject">Ne öğrenmek istiyorsun?</label>
          <select id="subject" v-model="selectedSubject">
            <option value="">Tümünü Listele</option>
            <option v-for="subject in uniqueSubjects" :key="subject" :value="subject">{{ subject }}</option>
          </select>
          <button type="submit" class="start-button">Başla</button>
        </form>
      </div>
      <div class="right-side">
        <img src="../assets/images/casual-life-3d-lamp-books-and-objects-for-studying.png" alt="Öğretmen" class="teacher-image">
      </div>
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
        <button type="submit" class="btn btn-success">Dersi Ekle</button>
      </form>
    </div>
    <!-- Açılan derslerin listesi -->
    <div v-if="filteredCourses.length > 0" class="courses-list mt-5" id="course-list">
      <h3>Açılan Dersler</h3>
      <div class="row">
        <div v-for="(course, index) in filteredCourses" :key="index" class="col-12 mb-4">
          <div class="course-item card shadow-sm h-100 d-flex flex-row">
            <img :src="getCourseImage(course.blobImage)" class="course-img" alt="Ders Resmi">
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
                <div class="mt-3 d-flex justify-content-end mt-auto">
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
import NavbarStudent from "@/components/NavBarStudent.vue";
import NavbarTutor from "@/components/NavBarTutor.vue";
import CourseService from '@/services/CourseService';
import { mapGetters } from 'vuex';

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
      imageFile: null,
      imagePreview: null,
      courses: [],
      uniqueSubjects: [],
      selectedSubject: '',
      filteredCourses: []
    };
  },
  components: {
    Navbar,
    NavbarStudent,
    NavbarTutor
  },
  mounted() {
    this.loadCourses();
  },
  computed: {
    ...mapGetters({
      getCurrentUser: '_getCurrentUser'
    })
  },
  methods: {
    loadCourses() {
      CourseService.getAllCourses()
        .then(response => {
          this.courses = response.data;
          this.uniqueSubjects = this.getUniqueSubjects();
          this.filteredCourses = this.courses; // Initialize filteredCourses with all courses
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    },
    addCourse() {
      const formData = new FormData();
      formData.append('courseSubject', this.newCourse.courseSubject);
      formData.append('description', this.newCourse.description);
      formData.append('totalDuration', this.newCourse.totalDuration);
      formData.append('price', this.newCourse.price);
      formData.append('startDate', this.newCourse.startDate);
      formData.append('endDate', this.newCourse.endDate);
      formData.append('image', this.imageFile);

      CourseService.addCourse(formData)
        .then(() => {
          this.loadCourses();
          this.resetForm();
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    },
    updateCourse() {
      const formData = new FormData();
      formData.append('courseSubject', this.editedCourse.courseSubject);
      formData.append('description', this.editedCourse.description);
      formData.append('totalDuration', this.editedCourse.totalDuration);
      formData.append('price', this.editedCourse.price);
      formData.append('startDate', this.editedCourse.startDate);
      formData.append('endDate', this.editedCourse.endDate);
      formData.append('image', this.imageFile);

      CourseService.updateCourse(this.editedCourse.id, formData)
        .then(() => {
          this.loadCourses();
          this.resetForm();
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    },
    resetForm() {
      this.newCourse = {
        courseSubject: '',
        description: '',
        totalDuration: '',
        price: '',
        startDate: '',
        endDate: ''
      };
      this.imageFile = null;
      this.imagePreview = null;
      this.showAddCourseForm = false;
    },
    onImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageFile = file;
        this.imagePreview = URL.createObjectURL(file);
      }
    },
    getCourseImage(blobImage) {
      if (blobImage) {
        return `data:image/jpeg;base64,${blobImage}`;
      } else {
        return require('../assets/images/profiles/default.jpg');
      }
    },
    getUniqueSubjects() {
      const subjectsSet = new Set();
      this.courses.forEach(course => {
        subjectsSet.add(course.courseSubject);
      });
      return Array.from(subjectsSet);
    },
    findTeacher() {
      if (this.selectedSubject) {
        this.filteredCourses = this.courses.filter(course => course.courseSubject === this.selectedSubject);
      } else {
        this.filteredCourses = this.courses;
      }
      this.scrollToCourses();
    },
    scrollToCourses() {
      const courseListElement = document.getElementById('course-list');
      if (courseListElement) {
        courseListElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('tr-TR', options);
    },
    registerCourse(courseId) {
      CourseService.registerCourse(courseId)
        .then(() => {
          alert('Başarıyla kayıt oldunuz.');
        })
        .catch(error => {
          console.error('Kayıt olurken bir hata oluştu!', error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  height: 60vh;
}

.left-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 50px;
}

.right-side {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 40px;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  font-size: 16px;
  margin-bottom: 10px;
}

select {
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  border-color: light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-radius: 5px;
}

.start-button {
  font-size: 16px;
  padding: 10px;
  background-color: #ff4081;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.start-button:hover {
  background-color: #e03070;
}

.teacher-link {
  font-size: 14px;
  color: #000;
  margin-top: 20px;
}

.teacher-link:hover {
  text-decoration: underline;
}

.teacher-image {
  max-width: 100%;
  height: auto;
}

.courses-list {
  padding: 20px;
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

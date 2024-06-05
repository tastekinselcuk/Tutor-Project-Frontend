<template>
  <Navbar class="navbar" />
  <NavbarStudent class="navbarStudent" />
  <div class="container">
    <h3 class="d-flex justify-content-center font-size-bold">Alınan Dersler</h3>
    <!-- Açılan derslerin listesi -->
    <div v-if="courses.length > 0" class="courses-list">
      <div class="row">
        <div v-for="(course, index) in courses" :key="index" class="col-12 mb-4">
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
                <div class="mt-3 d-flex justify-content-around">
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
import CourseService from '@/services/CourseService';

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
      courses: []
    };
  },
  components: {
    Navbar,
    NavbarStudent
  },
  mounted() {
    this.loadCourses();
  },
  methods: {
    loadCourses() {
      CourseService.getAllCourses()
        .then(response => {
          this.courses = response.data;
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
      }
      return null;
    },
    editCourse(course) {
      console.log('Düzenlenen Ders:', course);
    },
    softDeleteCourse(courseId) {
      CourseService.deleteCourse(courseId)
        .then(() => {
          this.loadCourses();
        })
        .catch(error => {
          console.error("There was an error!", error);
        });
    },
    registerCourse(courseId) {
      console.log('Derse kayıt ol:', courseId);
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
}
.mb-3.text-center {
  display: flex;
  justify-content: center;
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

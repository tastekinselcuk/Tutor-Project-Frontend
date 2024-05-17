<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 left">
        <!--Form -->
        <form @submit.prevent="registerUser">
          <div class="form-group mb-2">
            <input type="text" class="form-control" v-model="name" id="name" required placeholder="Ad:">
          </div>
          <div class="form-group mb-2">
            <input type="text" class="form-control" v-model="surname" id="surname" required placeholder="Soyad:">
          </div>
          <div class="form-group mb-2">
            <input type="email" class="form-control" v-model="email" id="surname" required placeholder="E-mail:">
          </div>
          <div class="form-group mb-2">
            <input class="form-control" v-model="password" type="password" id="password" placeholder="Şifre" required>
          </div>
          <div class="form-group">
            <label for="userType">Kullanıcı Türü:</label>
            <div class="form-check">
              <input type="radio" class="form-check-input" v-model="role" id="student" name="userType" value="STUDENT" required>
              <label class="form-check-label" for="student">Öğrenci</label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" v-model="role" id="teacher" name="userType" value="TEACHER" required>
              <label class="form-check-label" for="teacher">Öğretmen</label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-3">Kayıt ol</button>
          <span class=" mt-3 text-sm ">
          Zaten Üyeyim,
          <router-link to="/login" class="text-red-900 hover:text-black text-decoration-none">
            Giriş yap!
          </router-link>
          </span>
        </form>
        <!--Header -->
        <h1>En iyi öğretmenlerle<br> potansiyelini gerçekleştir.</h1>
        <p>30.000'i aşkın eğitimci ve 1M+ öğrenci Tutordan'ı tercih ediyor.<br> Çünkü eğitim bizim işimiz.</p>
        <div class="d-flex align-items-center justify-content-center">
          <img class="studentImg" src="../assets/images/3d-business-young-man-and-woman-students.png" alt="Profil Resmi">
        </div>
        <!--Icons-->
        <div class="d-flex align-items-center justify-content-center">
          <img class="pen1" src="../assets/images/Pen/pen1.png" alt="Profil Resmi">
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img class="pen2" src="../assets/images/Pen/pen2.png" alt="Profil Resmi">
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img class="pen3" src="../assets/images/Pen/pen3.png" alt="Profil Resmi">
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img class="pen4" src="../assets/images/Pen/pen4.png" alt="Profil Resmi">
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img class="erase" src="../assets/images/Pen/erase.png" alt="Profil Resmi">
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <img class="ruler" src="../assets/images/Pen/ruler.png" alt="Profil Resmi">
        </div>
      </div>
      <div class="col-sm-6 right">
        <!--Header -->
        <h1>Online ders ver<br> programını kendin planla.</h1>
        <p>Uzmanlık alanını öğrencilerle paylaşarak para kazan.</p>
        <div class="d-flex align-items-center justify-content-center">
          <img class="tutorImg" src="../assets/images/3d-casual-life-young-woman-giving-lesson-material-standing-next-to-whiteboard.png" alt="Profil Resmi">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AuthService from "@/services/AuthService";

export default {
  name: "HomeView",
  components: {
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      role: "STUDENT", // Default role is "user"
    };
  },
  computed: {
    ...mapGetters(["_isAuthenticated"]),
  },
  methods: {
    registerUser() {
      AuthService.register(this.firstname, this.lastname, this.email, this.password, this.role)
        .then((data) => {
          // Registration successful
          console.log("Registration successful:", data);
          this.$router.push('/login'); // Başarılı giriş sonrası yönlendirme
          // Optionally, you can redirect the user to a different page after successful registration
          // this.$router.push({ name: "Login" }); // Update the route name as needed
        })
        .catch((error) => {
          // Registration failed
          console.error("Registration failed:", error);
        });
    },
  },
};
</script>

<style scoped>
h1{
  position: relative;
  z-index: 10;
  font-size: 45px;
  top: 50px;
  text-align: center;
  margin-top: 20px;
}
p{
  position: relative;
  z-index: 10;
  font-size: 15px;
  top: 50px;
  text-align: center;
  color: #fff;
}
/*Left side */
.left {
  background-color: #FF7AAC;
  height: 100vh;
}
.studentImg{
  position: relative;
  top: 15vh;
  width: 200px;
}
/*Icons*/
.studentIcon1{
  position: fixed;
  left: 10px;
  top: 35vh;
  width: 150px;
  transform: rotate(15deg);
}
.studentIcon2{
  position: fixed;
  left: 10px;
  top: 55vh;
  width: 150px;
}
.studentIcon3{
  position: fixed;
  left: 10px;
  top: 75vh;
  width: 150px;
}
.pen1{
  position: fixed;
  z-index: 1;
  left: 700px;
  top: 30vh;
  width: 50px;
  transform: rotate(-55deg);
}
.pen1:hover {
  transform: scale(1.5) rotate(-55deg);  /* Maintain initial rotation */
  transition: transform 0.3s ease-in-out; /* Apply transition to both scale and rotate */
}

.pen2{
  position: fixed;
  left: 1400px;
  top: 20vh;
  width: 50px;
}
.pen2:hover {
  transform: scale(1.5); /* Adjust the value for desired scale */
  transition: transform 0.3s ease-in-out; /* Add smooth transition */
}
.pen3{
  position: fixed;
  left: 900px;
  top: 85vh;
  width: 50px;
}
.pen3:hover {
  transform: scale(1.5); /* Adjust the value for desired scale */
  transition: transform 0.3s ease-in-out; /* Add smooth transition */
}
.pen4{
  position: fixed;
  transform: rotate(25deg);
  z-index: 1;
  left: 100px;
  top: 65vh;
  width: 20px;
}
.pen4:hover {
  transform: scale(1.5) rotate(25deg);  /* Maintain initial rotation */
  transition: transform 0.3s ease-in-out; /* Apply transition to both scale and rotate */
}
.erase{
  position: fixed;
  z-index: 1;
  left: 1350px;
  top: 75vh;
  width: 40px;
}
.erase:hover {
  transform: scale(1.5); /* Adjust the value for desired scale */
  transition: transform 0.3s ease-in-out; /* Add smooth transition */
}
.ruler{
  position: fixed;
  z-index: 1;
  left: 300px;
  top: 15vh;
  width: 80px;
}
.ruler:hover {
  transform: scale(1.5); /* Adjust the value for desired scale */
  transition: transform 0.3s ease-in-out; /* Add smooth transition */
}

/* Form */
form{
  position: fixed;
  z-index: 2;
  top: 35vh;
  left: 83vh;
}
input{
  width: 307px;
}
input[type="radio"] { 
  width: 15px;
} 
label[for="userType"] {
  font-weight: bold;
}
span{
  position: fixed;
  top: 72vh;
  left: 100vh;
}
/*Right side*/
.right {
  background-color: #3DDABE;
  height: 100vh;
}
.tutorImg{
  position: relative;
  top: 18vh;
  width: 230px;
}

</style>
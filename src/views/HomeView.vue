<template>
  <Navbar class="navbar" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 left">
        <!--Form -->
        <div class="button-container d-flex align-items-center justify-content-center">
          <router-link to="/register" class="btn btn-dark d-flex align-items-center justify-content-center">
            Hemen Başla
            <ion-icon name="arrow-forward-outline" class="ml-2"></ion-icon>
          </router-link>
        </div>
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
import Navbar from "@/components/NavBar.vue";


export default {
  name: "HomeView",
  components: {
    Navbar,
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      role: "STUDENT",
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
.navbar{
  position: fixed;
  width: 100%;
}
h1{
  position: relative;
  z-index: 10;
  font-size: 45px;
  top: 80px;
  text-align: center;
  margin-top: 20px;
}
p{
  position: relative;
  z-index: 10;
  font-size: 15px;
  top: 80px;
  text-align: center;
  color: #fff;
}
.button-container {
  position: fixed;
  height: 130vh;
  width: 202vh;
}
.btn {
    background-color: #121117;
    display: flex;
    height: 55px;
    width: 300px;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    font-size: 1.2em;
}
.btn:hover {
    background-color: #121117;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    font-size: 1.2em;
    box-shadow: rgba(0, 0, 0, 0.55) 0px 5px 12px;
}
.btn ion-icon {
    margin-left: 10px;
}
.left {
  background: linear-gradient(135deg, #FF7AAC, #3DDABE, #FF7AAC);
  height: 100vh;
}
.studentImg{
  position: relative;
  top: 15vh;
  width: 200px;
}
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
  top: 35vh;
  width: 50px;
  transform: rotate(-55deg);
}
.pen1:hover {
  transform: scale(1.5) rotate(-55deg);
  transition: transform 0.3s ease-in-out;
}

.pen2{
  position: fixed;
  left: 1400px;
  top: 25vh;
  width: 50px;
}
.pen2:hover {
  transform: scale(1.5);
  transition: transform 0.3s ease-in-out;
}
.pen3{
  position: fixed;
  left: 900px;
  top: 85vh;
  width: 50px;
}
.pen3:hover {
  transform: scale(1.5);
  transition: transform 0.3s ease-in-out;
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
  transform: scale(1.5) rotate(25deg);
  transition: transform 0.3s ease-in-out;
}
.erase{
  position: fixed;
  z-index: 1;
  left: 1350px;
  top: 75vh;
  width: 40px;
}
.erase:hover {
  transform: scale(1.5);
  transition: transform 0.3s ease-in-out;
}
.ruler{
  position: fixed;
  z-index: 1;
  left: 300px;
  top: 18vh;
  width: 80px;
}
.ruler:hover {
  transform: scale(1.5);
  transition: transform 0.3s ease-in-out;
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
  background: linear-gradient(135deg, #3DDABE, #FF7AAC, #3DDABE);
  height: 100vh;
}
.tutorImg{
  position: relative;
  top: 18vh;
  width: 230px;
}

</style>
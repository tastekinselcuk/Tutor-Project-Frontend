<template>
	<!--Navbar-->
    <Navbar class="navbar" />
    <NavbarStudent class="navbarStudent" />
  <div class="container-fluid">
    <div class="row shadow p-4 rounded">
        <div class="d-flex justify-content-center mb-4">
            <h1>Contact</h1>
        </div>
      <div class="col-md-8">
        <form @submit.prevent="submitForm" class="">
          <div class="mb-3">
            <input type="text" class="form-control" v-model="name" id="name" required placeholder="Name:">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" v-model="surname" id="surname" required placeholder="Surname:">
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" v-model="email" id="email" required placeholder="E-mail:">
          </div>
          <div class="mb-3">
            <label for="userType" class="form-label">User Type:</label>
            <div class="form-check">
              <input type="radio" class="form-check-input" id="student" name="userType" value="student" required>
              <label class="form-check-label" for="student">Student</label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" id="teacher" name="userType" value="tutor" required>
              <label class="form-check-label" for="teacher">Tutor</label>
            </div>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Talep Mesajınız:</label>
            <textarea class="form-control" id="message" rows="3" required placeholder="Talep mesajınızı buraya yazın"></textarea>
          </div>
          <button type="submit" class="btn btn-primary mt-3">Gönder</button>
        </form>
      </div>
      <div class="col-md-4">
        <img class="img-fluid rounded" src="../assets/images/casual-life-3d-young-woman-in-headset-using-laptop-and-taking-notes.png" alt="Profil Resmi">
      </div>
    </div>
  </div>


</template>

<script>
  import Navbar from "@/components/NavBar.vue";
  import NavbarTutor from "@/components/NavBarTutor.vue";

export default {

  components: {
    Navbar,
    NavbarTutor
  },
}
</script>

<style scoped>
.container-fluid{
    padding: 50px;
}
h2 {
  color: #1d1e1e;
}

.form-label {
  font-weight: bold;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.rounded {
  border-radius: 0.5rem;
}
img {
    margin-left: 50px;
  width: 390px; /* Örnek bir genişlik değeri */
  height: auto; /* Yüksekliği otomatik olarak ayarla, oranları koru */
}
</style>

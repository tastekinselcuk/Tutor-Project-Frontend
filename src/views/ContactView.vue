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
            <input type="text" class="form-control" v-model="name" id="name" required placeholder="Name:" />
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" v-model="surname" id="surname" required placeholder="Surname:" />
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" v-model="email" id="email" required placeholder="E-mail:" />
          </div>
          <div class="form-group mb-3">
            <label for="role">Kullanıcı Türü:</label>
            <div class="form-check">
              <input type="radio" class="form-check-input" v-model="role" id="student" name="role" value="STUDENT" required>
              <label class="form-check-label" for="student">Öğrenci</label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" v-model="role" id="teacher" name="role" value="TEACHER" required>
              <label class="form-check-label" for="teacher">Öğretmen</label>
            </div>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Talep Mesajınız:</label>
            <textarea class="form-control" v-model="message" id="message" rows="3" required placeholder="Talep mesajınızı buraya yazın"></textarea>
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
import ContactService from "@/services/ContactService.js";

export default {
  components: {
    Navbar,
    NavbarTutor
  },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      role: '', // Role alanını burada tanımlayın
      message: ''
    };
  },
  methods: {
    submitForm() {
      const contactFormData = {
        firstname: this.name,
        lastname: this.surname,
        email: this.email,
        role: this.role, // Role alanını iletiye ekleyin
        messageContent: this.message
      };
      ContactService.addContactForm(contactFormData)
        .then(response => {
          console.log(response.data); // İsteğe verilen yanıtı kontrol etmek için konsola yazdır
          // Başka bir işlem yapabilirsiniz, örneğin kullanıcıya bir mesaj gösterebilirsiniz
          this.$router.push('/');
        })
        .catch(error => {
          console.error('Error while submitting contact form:', error);
          // Hata durumunda kullanıcıya bir hata mesajı gösterebilirsiniz
        });
    }
  }
};
</script>

<style scoped>
/* Stil tanımları buraya gelecek */
</style>

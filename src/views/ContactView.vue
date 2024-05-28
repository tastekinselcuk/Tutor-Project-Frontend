<template>
<Navbar class="navbar" />
  <div class="contact-container">
    <div class="left-side">
      <h2 class="mb-3">Bize Ulaşın</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="mb-3">
          <input type="text" class="form-control" v-model="name" id="name" required placeholder="İsim:" />
        </div>
        <div class="mb-3">
          <input type="text" class="form-control" v-model="surname" id="surname" required placeholder="Soyisim:" />
        </div>
        <div class="mb-3">
          <input type="email" class="form-control" v-model="email" id="email" required placeholder="E-posta:" />
        </div>
        <div class="form-group mb-3">
          <label for="message">Mesajınız:</label>
          <textarea class="form-control" v-model="message" id="message" rows="5" required placeholder="Mesajınızı buraya yazın"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Gönder</button>
      </form>
    </div>
    <div class="right-side">
      <img src="../assets/images/casual-life-3d-white-envelope-with-blue-letter-inside.png" alt="İletişim" class="contact-image">
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";


export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      message: ''
    };
  },
  components: {
    Navbar,
  },
  methods: {
    submitForm() {
      // Form gönderme işlemi burada gerçekleştirilecek
      console.log('Form gönderildi');
      // Verileri sıfırla
      this.name = '';
      this.surname = '';
      this.email = '';
      this.message = '';
    }
  }
};
</script>

<style scoped>
.contact-container {
  display: flex;
  height: 80vh;
}

.left-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 50px;
  padding-left: 100px;
}

.right-side {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-image {
  max-width: 40%;
  height: auto;
}

.contact-form {
  width: 100%;
}

</style>

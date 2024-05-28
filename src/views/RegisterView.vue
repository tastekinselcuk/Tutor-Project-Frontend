<template>
  <div id="app">
  <div class="container">
      <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div class="logo">
                <a id="logo" class="navbar-brand ml-30" href="/">
                    <img class="navbar-brand" href="/" src="../assets/images/Logo/logo2.png" alt="TUTORDAN" />
                    <p class="bebas-neue-regular mb-5 mt-2">TUTORDAN</p>
                </a>
              </div>            
        <form @submit.prevent="register">
          <div class="form-group mb-2">
            <input type="text" class="form-control" v-model="firstname" id="firstname" required placeholder="Ad:">
          </div>
          <div class="form-group mb-2">
            <input type="text" class="form-control" v-model="lastname" id="lastname" required placeholder="Soyad:">
          </div>
          <div class="form-group mb-2">
            <input type="email" class="form-control" v-model="email" id="email" required placeholder="E-mail:">
          </div>
          <div class="form-group mb-2">
            <input class="form-control" v-model="password" type="password" id="password" placeholder="Şifre" required>
          </div>
          <div class="form-group">
            <label for="role">Kullanıcı Türü:</label>
            <div class="form-check">
              <input type="radio" class="form-check-input" v-model="role" id="student" name="role" value="STUDENT" required>
              <label class="form-check-label" for="student">Öğrenci</label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" v-model="role" id="teacher" name="role" value="TUTOR" required>
              <label class="form-check-label" for="teacher">Öğretmen</label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-3">Kayıt ol</button>
        </form>
    <span class="text-center mt-3 text-sm">
      Zaten Üyeyim,
      <router-link to="/login" class="text-red-900 hover:text-black">
        Giriş yap!
      </router-link>
    </span>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import AuthService from '@/services/AuthService';
import TokenService from '@/services/TokenService';

export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      role: ''
    };
  },
  methods: {
    async register() {
      try {
        const userData = await AuthService.register(this.firstname, this.lastname, this.email, this.password, this.role);
        
        
        // Daha fazla yönlendirme veya işlem yapabilirsiniz
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Registration error:', error);
        // Hata işleme
      }
    }
  }
}
</script>

<style scoped>
  .bebas-neue-regular {
  margin-top: 25px;
  font-size: 26px;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #b3afa5;
  }
  .logo{
    display: flex;
    justify-content: center; /* Yatay ortala */
    align-items: center;
    text-align: center;
  }

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"],
select {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
        .linkIcon{
            border-radius: 100px;
            background-color: #eaeef2;
        }
        a {
            text-decoration: none;
        }

</style>

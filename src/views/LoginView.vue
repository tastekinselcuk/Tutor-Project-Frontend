<template>
        <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <a href="/">
                    <div class="logo">
                      <a id="logo" class="navbar-brand ml-30" href="/">
                          <img class="navbar-brand" href="/" src="../assets/images/Logo/logo2.png" alt="TUTORDAN" />
                          <p class="bebas-neue-regular mb-5 mt-2">TUTORDAN</p>
                      </a>
                    </div>

                    </a>                        
                    <form @submit="login">			
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                        <input type="email" id="loginName" class="form-control" v-model="email" required placeholder="E-mail" />
                        </div>
                
                        <!-- Password input -->
                        <div class="form-outline mb-4">
                        <input type="password" id="loginPassword" class="form-control" v-model="password" required placeholder="Şifre" />
                        </div>
                
                        <!-- 2 column grid layout -->
                        <div class="row mb-4">
                        <div class="col-md-6 d-flex justify-content-center">
                            <!-- Checkbox -->
                            <div class="form-check mb-3 mb-md-0">
                            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                            <label class="form-check-label" for="loginCheck"> Beni hatırla </label>
                            </div>
                        </div>
                
                        <div class="col-md-6 d-flex justify-content-center">
                            <!-- Simple link -->
                            <a href="#!">Şifrenizi mi unuttunuz?</a>
                        </div>
                        </div>
                
                        <!-- Submit button -->
                        <button type="submit" class="btn btn-primary btn-block mb-4">Giriş Yap</button>
                
                        <!-- Register buttons -->
                        <div class="text-center">
                        <p>Kayıtlı değil misin? <a href="/register" @click="isActive = !isActive">Kayıt ol</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import AuthService from '../services/AuthService';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      AuthService.login(this.email, this.password)
        .then((data) => {
          const userDto = data.user_dto;
          
          // Commit the user and token to the Vuex store
          this.$store.dispatch('login', { user: userDto });

          // Redirect based on the user's role
          if (userDto.role === 'STUDENT') {
            this.$router.push('/studentDashboard');
          } else if (userDto.role === 'TUTOR') {
            this.$router.push('/tutorDashboard');
          }
        })
        .catch((error) => {
          console.error('Login error:', error);
          alert("Hatalı giriş işlemi");
          // Display or handle error message
        });
    },
  },
};
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
</style>
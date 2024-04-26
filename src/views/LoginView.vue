<template>
        <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <a href="/">
                        <h1 >Güvende Sigorta</h1>
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
          this.$store.commit("setUser", data.access_token)
          this.$router.push('/'); // Başarılı giriş sonrası yönlendirme
        })
        .catch((error) => {
          console.error('Login error:', error);
          alert("Hatalı girşi işlemi");
          // Hata mesajı gösterme veya işlem yapma
        });
    },
  },
};
</script>

    <style scoped>
        .linkIcon{
            border-radius: 100px;
            background-color: #eaeef2;
        }
        a {
            text-decoration: none;
        }
    </style>
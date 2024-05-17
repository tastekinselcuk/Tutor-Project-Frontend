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
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <input v-model="firstname" type="text" id="firstname" placeholder="Ad" required>
      </div>
      <div class="form-group">
        <input v-model="lastname" type="text" id="lastname" placeholder="Soyad" required>
      </div>
      <div class="form-group">
        <input v-model="email" type="email" id="email" placeholder="E-mail" required>
      </div>
      <div class="form-group">
        <input v-model="password" type="password" id="password" placeholder="Şifre" required>
      </div>

      <button type="submit" class="btn btn-primary btn-block mb-4">Register</button>
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
import AuthService from "@/services/AuthService"; // Update the import path as needed

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      role: "STUDENT", // Default role is "user"
    };
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

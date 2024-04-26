<template>
  <div class="container-fluid">
    <div class="row">
      <div class="left col-sm-6">
        <img class="logo" :src="logoSrc" alt="Logo" />
        <img class="desk" :src="imgSrc" alt="Logo" />
      </div>
      <div class="right col-sm-6">
        <div class="buttons">
          <SoftButton @click="changeImg" />
          <!--Login button-->
          <router-link class="auth-dependant" to="/login" v-if="!_isAuthenticated">
              Giriş Yap<ion-icon name="log-in-outline"></ion-icon>
          </router-link>
          <!--Profile dropdown-->
          <div class="dropdown auth-dependant" v-if="_isAuthenticated">
          <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div  class="profile">
                  <img src="../assets/images/Default_pfp.jpg" alt="Profil Resmi">
                  <div class="profile-info">
                      <h3>Selçuk Taştekin</h3>
                  </div>
              </div>                
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" @click="logout" href="#">Çıkış Yap<ion-icon name="log-out-outline"></ion-icon></a>
          </div>
          </div>
        </div>
        <div id="navItems" class="nav justify-content-end">
          <div @click="changeFirst" class="firstItem">
            <p>
              Kübra Öğretmen<br />
              Hakkında
            </p>
          </div>
          <div @click="changeSecond" class="secondItem">
            <p>
              Dersler<br />
              Hakkkında
            </p>
          </div>
          <div @click="changeThird" class="thirdItem">
            <p>İletişim</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";
import SoftButton from "@/components/SoftButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    SoftButton,
  },
  data() {
    return {
      imgSrc: require("@/assets/images/DeskDark.svg"),
      updateSrc: require("@/assets/images/DeskLight.svg"),
      logoSrc: require("@/assets/images/LogoLight.svg"),
      updareLogo: require("@/assets/images/LogoDark.svg"),
    };
  },
  computed: {
    ...mapGetters(["_isAuthenticated"]),
  },
  methods: {
    changeImg() {
      if (this.imgSrc === require("@/assets/images/DeskLight.svg")) {
        this.imgSrc = require("@/assets/images/DeskDark.svg");
        this.logoSrc = require("@/assets/images/LogoLight.svg");
      } else {
        this.imgSrc = require("@/assets/images/DeskLight.svg");
        this.logoSrc = require("@/assets/images/LogoDark.svg");
      }
    },
    changeFirst() {
      this.$el.classList.toggle("active");
      document.querySelector(".firstItem").classList.toggle("on");
    },
    changeSecond() {
      this.$el.classList.toggle("active");
      document.querySelector(".secondItem").classList.toggle("on");
    },
    changeThird() {
      this.$el.classList.toggle("active");
      document.querySelector(".thirdItem").classList.toggle("on");
    },
    logout() {
      this.$store.commit("setUser", null);
    },
  },
};
</script>

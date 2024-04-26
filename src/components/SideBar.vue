<template>
    <!--Navbar start-->
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a id="logo" class="navbar-brand ml-30" href="/">
                <img class="navbar-brand" href="/" src="../assets/images/logo2.png" alt="TUTORDAN" />
            </a>
            <p class="bebas-neue-regular">TUTORDAN</p>
            <!--Responsive toggle button-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!--Navbar items-->
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <!--Navbar pages-->
                <router-link to="/teacherTransaction"><ion-icon name="wallet-outline"></ion-icon></router-link>
                <router-link to="/teacherMessage"><ion-icon name="chatbubble-ellipses-outline"></ion-icon></router-link>
                <router-link to="/teacherHelp"><ion-icon name="help-circle-outline"></ion-icon></router-link>
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
        </div>


    </nav>

</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';


export default {

  computed:{
    ...mapGetters(["_isAuthenticated"]),
  },
  methods: {
    logout(){
      this.$store.commit("setUser", null)
    }
  }
}
</script>


<style scoped>
    /*Navbar*/
    #navbar {
        height: 60px;
        background-color: #fff;
        border-bottom: 2px solid #F5F7F9;
    }
    /*Logo */
    #logo {
        margin-left: 15px;
        margin-right: 0px;
    }
    .bebas-neue-regular {
        margin-top: 25px;
        font-size: 26px;
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    /*Navbar Items */
    #navItems {
        margin-right: 20px;
    }
    #navItems li {
        display: block;
        padding: 10px 15px 7px;
    }
    #navItems a {
        color: #4e4e4e;
        font-size: 16px;
        font-family: 'Arial Rounded MT';
        font-weight: bold;
        text-decoration: none;
    }
    #navItems a:not(.router-link-active):hover {
        font-size: 16px;
        font-family: 'Arial Rounded MT';
        font-weight: bold;
        text-decoration: none;
        color: transparent; /* Yalnızca aktif olmayan linkler için metin rengini şeffaf yapın */
        background-image: linear-gradient(90deg, #7F7FD5 20%, #91EAE4 90%); /* Gradiyent renk geçişi */
        -webkit-background-clip: text; /* Metni gradiyentle doldurun (Webkit tarayıcıları için) */
        background-clip: text; /* Metni gradiyentle doldurun */
    }

    /*Underline Design */
    .router-link-active {
        background-image: linear-gradient(90deg, #7F7FD5 20%, #91EAE4 90%);
        background-size: 100% 2px; /* Alt çizginin kalınlığı */
        background-repeat: no-repeat;
        background-position: 0 100%; /* Alt çizginin başlangıç pozisyonu */
        text-decoration: none; /* Metin üzerindeki varsayılan alt çizgiyi kaldırır */
        display: inline-block; /* Metnin yatayda sadece gereken kadar yer kaplamasını sağlar */
        padding-bottom: 3px; /* Alt çizgi ile metin arasında bir boşluk ekler (isteğe bağlı) */
    }

    /*Navbar Login-Profile */
    .auth-dependant {
        color: #4e4e4e;
        height: 50px;
        margin-left: 10px;
        border-radius: 10px 10px 10px 10px;
        background-color: #fff;
        text-decoration: none;
        display: block;
        padding: 10px 15px 7px;
    }
    .auth-dependant:hover {
        color: #728DFF;
        height: 50px;
        margin-left: 10px;
        border-radius: 10px 10px 10px 10px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition-duration: 0.3s;
    }
    .auth-dependant a {
        color: #4e4e4e;
        text-decoration: none;
    }
    .auth-dependant a:hover {
        color: #728DFF;
        text-decoration: none;
    }

    .btn{
        height: 50px;
        margin-left: 60px;
        border-radius: 10px 10px 10px 10px;
        background-color: #fff;
    }
    .btn:hover {
        height: 50px;
        margin-left: 60px;
        border-radius: 10px 10px 10px 10px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition-duration: 0.3s;
    }
    .dropdown-toggle::after {
    content: none;
    }

    ion-icon{
        font-size: 26px;
        float: right;
        margin-left: 15px;
    }
    ion-icon:hover{
        color: #728DFF;
        transition-duration: 0.3s;
    }

    /*Profile button*/
    .profile {
      display: flex;
      align-items: center;
      right: 20px;
      top: 100px;
    }
  
  .profile img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
  }
  
  .profile-info {
      text-align: right;
  }
  
  .profile-info h3 {
      margin: 0;
      font-size: 16px;
  }

</style>


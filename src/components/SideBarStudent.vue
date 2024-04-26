<template>
    <!--Navbar start-->
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <!--Responsive toggle button-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!--Navbar items-->
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <!--Navbar pages-->
                <ul id="navItems" class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/studentDashboard">Ana Sayfa</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/studentMessage">Mesajlar</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/studentCourses">Derslerim</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/studentSettings">Ayarlar</router-link>
                    </li>
                </ul>

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
        font-family: Arciform;
        font-size: 26px;
        margin-left: 30px;
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
        margin-left: 60px;
        border-radius: 10px 10px 10px 10px;
        background-color: #fff;
        text-decoration: none;
        display: block;
        padding: 10px 15px 7px;
    }
    .auth-dependant:hover {
        color: #728DFF;
        height: 50px;
        margin-left: 60px;
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


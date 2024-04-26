<template>
    <!--Navbar start-->
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <!--Responsive toggle button-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!--Navbar items-->
            <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
                <!--Navbar pages-->
                <ul id="navItems" class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/teacherMessage">Messages</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/teacherCourses">My Lessons</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/teacherTransaction">Transaction</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/teacherAssignment">Assignment</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/teacherLive">Live Lessons</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/teacherSettings">Settings</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
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
/*Navbar Items */
#navItems {
    margin-left: 20px; /* Sol kenara boşluk bırakmak için */
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
</style>

<template>
    <!--Navbar start-->
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a id="logo" class="navbar-brand ml-30" href="/">
                <img class="navbar-brand" href="/" src="../assets/images/Logo/logo2.png" alt="TUTORDAN" />
            </a>
            <p class="bebas-neue-regular">TUTORDAN</p>
            <!--Responsive toggle button-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav-1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!--Navbar items-->
            <div class="collapse navbar-collapse" id="navbarNav-1">
                <!--Navbar pages-->
                <div id="findLesson" class="navbar-nav me-auto">
                    <router-link to="/findTutor" class="nav-link text-white">Ders Bul</router-link>
                </div>
                <div class="d-flex align-items-center">
                    <router-link to="/contact">
                        <ion-icon id="help" name="help-circle-outline"></ion-icon>
                    </router-link>
                </div>
                <div id="login" class="navbar-nav" v-if="!_isAuthenticated">
                    <router-link class="auth-dependant login-button" to="/login">
                        Giriş Yap<ion-icon name="log-in-outline"></ion-icon>
                    </router-link>
                </div>
                <!--Profile dropdown-->
                <div class="dropdown auth-dependant login-button" v-if="_isAuthenticated">
                    <div class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="profile">
                            <img  src="../assets/images/profiles/default.jpg" alt="Profil Resmi" />
                            <div class="profile-info">
                                <h3 class="text-decoration-none">{{ getCurrentUser?.firstname || 'Kullanıcı' }} {{ getCurrentUser?.lastname || 'Bilgisi' }}</h3>
                            </div>
                        </div>                
                    </div>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="/contact">Destek</a>
                        <a class="dropdown-item" href="/about">Hakkımızda</a>
                        <a class="dropdown-item" @click="logout" href="#">Çıkış Yap<ion-icon name="log-out-outline"></ion-icon></a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import AuthService from '../services/AuthService';

export default {
    computed: {
        ...mapGetters(["_isAuthenticated", "_getCurrentUserEmailPrefix"]),
        getCurrentUser() {
            return AuthService.getCurrentUser() || {};
        }
    },
    methods: {
        logout() {
            AuthService.logout();
        },
    },
};
</script>

<style scoped>
/* Navbar */
#navbar {
    height: 60px;
    background-color: #fff;
    border-bottom: 2px solid #F5F7F9;
    z-index: 1000;
}
#findLesson {
    display: flex;
    align-items: center;
    margin-right: auto;
    padding: 0px 30px;
    margin-left: 40px;
    border-radius: 5px;
    background-color: #858796;
}
#findLesson .nav-link {
    text-decoration: none;
    color: white;
}
#findLesson:hover {
    background-color: #4e4e4e;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

/* Logo */
#logo {
    margin-left: 15px;
}
.bebas-neue-regular {
    margin-top: 25px;
    font-size: 26px;
    font-family: "Bebas Neue", sans-serif;
}

/* Navbar Login-Profile */
.auth-dependant {
    color: #4e4e4e;
    height: 50px;
    margin-left: 10px;
    border-radius: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 20px;
}
.auth-dependant:hover {
    color: #000;
    transition-duration: 0.3s;
}
.login-button {
    height: 50px;
    margin-left: 20px;
    border: 2px solid #858796;
    border-radius: 10px;
    background-color: transparent;
    padding: 0 20px;
    transition: box-shadow 0.3s ease;
}
.login-button:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.dropdown-toggle::after {
    content: none;
}
#help {
    color: #4e4e4e;
    font-size: 26px;
    margin-left: 10px;
}
#help:hover {
    color: #000;
    transition-duration: 0.3s;
}
ion-icon {
    color: #4e4e4e;
    font-size: 20px;
    margin-left: 20px;
}
ion-icon:hover {
    color: #000;
    transition-duration: 0.3s;
}

/* Profile button */
.profile {
    display: flex;
    align-items: center;
}
.profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}
.profile-info {
    color: #4e4e4e;
    text-decoration: none;
    text-align: right;
}
.profile-info h3 {
    margin: 0;
    font-size: 16px;
}
</style>

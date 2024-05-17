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
                        <router-link to="/studentMessage">Messages</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/studentCourses">My Lessons</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/studentTransaction">Transaction</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/studentAssignment">Assignment</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/studentLive">Live Lessons</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/studentSettings">Settings</router-link>
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
    margin-left: 20px;
}
#navItems li {
    display: block;
    padding: 10px 5px 7px;
}
#navItems a {
    display: block;
    border-radius: 5px 5px 5px 5px;
    color: #4e4e4e;
    font-size: 16px;
    font-family: 'Arial Rounded MT';
    font-weight: bold;
    padding: 8px;
    text-decoration: none;
}
#navItems a:not(.router-link-active):hover {
    display: block;
    border-radius: 5px 5px 5px 5px;
    font-size: 16px;
    font-family: 'Arial Rounded MT';
    font-weight: bold;
    text-decoration: none;
    padding: 8px;
    background-color: #F4F3F8;

}

/*Underline Design */
.router-link-active {
    display: block;
    border-radius: 5px 5px 5px 5px;
    font-size: 16px;
    font-family: 'Arial Rounded MT';
    font-weight: bold;
    text-decoration: none;
    padding: 8px;
    background-color: #F4F3F8;
}
</style>

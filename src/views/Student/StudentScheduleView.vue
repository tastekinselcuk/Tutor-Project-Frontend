<template>
    <Navbar class="navbar" />
    <NavbarStudent class="navbarStudent" />
</template>

<script>
  import Navbar from "@/components/NavBar.vue";
  import NavbarStudent from "@/components/NavBarStudent.vue";

export default {

  components: {
    Navbar,
    NavbarStudent
  },
}
</script>
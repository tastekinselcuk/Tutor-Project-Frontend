<template>
    <Navbar class="navbar" />
    <NavbarStudent class="navbarStudent" />
  	<div class="d-flex justify-content-center align-items-center" style="height: 50vh;">
		<h1>Canlı Ders Altyapısı Üzerinde Çalışıyoruz..</h1>
	</div>
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
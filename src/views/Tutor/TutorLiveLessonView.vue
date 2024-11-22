<template>
    <Navbar class="navbar" />
    <NavbarTutor class="navbarTutor" />
  	<div class="d-flex justify-content-center align-items-center" style="height: 50vh;">
		<h3>Canlı Ders Altyapısı Üzerinde Çalışıyoruz..</h3>
	</div>
</template>

<script>
  import Navbar from "@/components/NavBar.vue";
  import NavbarTutor from "@/components/NavBarTutor.vue";

export default {

  components: {
    Navbar,
    NavbarTutor
  },
}
</script>
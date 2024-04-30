<template>
    <Navbar class="navbar" />
    <NavbarTutor class="navbarTutor" />
    <div id="schdeuleArea" >
        <iframe width="1024" height="576" src="https://miro.com/app/live-embed/uXjVKUXpGnc=/?moveToViewport=-4386,-1932,7999,3843&embedId=524468106142" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>
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

<style scoped>

#schdeuleArea{
    position: absolute;
    top: 58%;
    left: 50%;
    transform: translate(-50%, -50%);

}

iframe{
        position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>
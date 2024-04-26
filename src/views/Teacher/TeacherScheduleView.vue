<template>
    <Sidebar class="sidebar" />
    <SidebarTeacher class="sidebar" />
    <div id="schdeuleArea" >
        <iframe width="1024" height="576" src="https://miro.com/app/live-embed/uXjVKUXpGnc=/?moveToViewport=-4386,-1932,7999,3843&embedId=524468106142" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>
    </div>
</template>

<script>
  import Sidebar from "@/components/SideBar.vue";
  import SidebarTeacher from "@/components/SideBarTeacher.vue";

export default {

  components: {
    Sidebar,
    SidebarTeacher
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
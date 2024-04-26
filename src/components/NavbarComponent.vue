<template>
	<!--Navbar-->
    <nav id="navbar" class="navbar navbar-expand-sm navbar-custom">
            <ul id="navItems" class="nav justify-content-end">
                <li class="nav-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/portfolio">Portfolio</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/projects">Projects</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/blog">Blog</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact">Contact</router-link>
                </li>           
            </ul>
            
    </nav>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

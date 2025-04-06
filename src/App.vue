<script setup>
import { ref, onMounted } from 'vue';
import About from './pages/About.vue';
import Experience from './pages/Experience.vue';
import Projects from './pages/Projects.vue';
import Splash from './pages/Splash.vue';
import Navbar from './components/Navbar.vue';
import Contact from './pages/Contact.vue';

const data = ref(null)

const fetchData = async () => {
  const res = await fetch(`/portfolio-v2/data/content.json?v=${new Date().getTime()}`)
  data.value = await res.json()
}

onMounted(async () => {
  await fetchData()
})

</script>

<template>
  <div v-if="data">

    <Navbar />
    <Splash :about="data.about" v-scroll-fade="{ duration: 1, x: -30, y: 0, start: 'top center' }" />
    <About :about="data.about" v-scroll-fade="{ duration: 1, x: -30, y: 0, start: 'top center' }" />
    <Projects :projects="data.projects" v-scroll-fade="{ duration: 1, x: -30, y: 0, start: 'top center' }" />
    <Experience :experience="data.experience" v-scroll-fade="{ duration: 1, x: -30, y: 0, start: 'top center' }" />
    <!-- Blog -->
    <!-- Secret Game -->
    <Contact v-scroll-fade="{ duration: 1, x: -30, y: 0, start: 'top 70%' }" />

  </div>
</template>

<style scoped></style>

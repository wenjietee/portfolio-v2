<script setup>
import { ref, onMounted } from 'vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Splash from './components/Splash.vue';
import Navbar from './components/Navbar.vue';
import Contact from './components/Contact.vue';

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
    <Splash :about="data.about" v-scroll-fade="{ duration: 1, x: -30, y: 0, start: 'top 80%' }" />
    <About :about="data.about" v-scroll-fade="{ duration: 1, x: -30, y: 0, start: 'top 80%' }" />
    <Projects :projects="data.projects" v-scroll-fade="{ duration: 1, x: -30, y: 0, start: 'top 80%' }" />
    <Experience :experience="data.experience" v-scroll-fade="{ duration: 1, x: -30, y: 0, start: 'top 80%' }" />
    <!-- Blog -->
    <!-- Secret Game -->
    <Contact />

  </div>
</template>

<style scoped></style>

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
    <Splash v-scroll-fade="{ duration: 1, x: 0, y: 30, start: 'top center', stagger: 0.01 }" />
    <About :about="data.about" v-scroll-fade="{ duration: 1, x: 0, y: 30, start: 'top center', stagger: 0.01 }" />
    <Projects :projects="data.projects"
      v-scroll-fade="{ duration: 1, x: 0, y: 30, start: 'top center', stagger: 0.01 }" />
    <Experience :experience="data.experience"
      v-scroll-fade="{ duration: 1, x: 0, y: 30, start: 'top center', stagger: 0.01 }" />
    <!-- Blog -->
    <!-- Secret Game -->
    <Contact :about="data.about" v-scroll-fade="{ duration: 1, x: 0, y: -30, start: 'top 70%', stagger: 0.01 }" />

  </div>
</template>

<style scoped></style>

<script setup>
import { ref, onMounted } from 'vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Splash from './components/Splash.vue';
import Navbar from './components/Navbar.vue';
import Footnote from './components/Footnote.vue';

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
    <!-- <Splash :about="data.about" /> -->
    <!-- <About :about="data.about" /> -->
    <!-- <Projects :projects="data.projects" /> -->
    <Experience :experience="data.experience" />
    <!-- Blog -->
    <!-- Secret Game -->
    <Footnote />

  </div>
</template>

<style scoped></style>

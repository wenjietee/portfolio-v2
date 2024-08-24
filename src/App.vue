<script setup>
import { ref, onMounted } from 'vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Experiements from './components/Experiements.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Splash from './components/Splash.vue';

const data = ref(null)

const fetchData = async () => {
  const res = await fetch(`./data/content.json?v=${new Date().getTime()}`)
  data.value = await res.json()
}

onMounted(async () => {
  await fetchData()
})

</script>

<template>
  <div v-if="data">
    <Splash :about="data.about" />
    <About :about="data.about" />
    <Experience :experience="data.experience" />
    <Projects :projects="data.projects" />
    <Experiements :experiments="data.experiments" />
    <Contact :contact="data.contact" />
  </div>
</template>

<style scoped></style>

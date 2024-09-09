<script setup>
import { ref, onMounted } from 'vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Splash from './components/Splash.vue';
import Stepper from './components/Stepper.vue';

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
    <!-- <div>
      <Stepper class="overview-stepper" />
    </div> -->
    <div>
      <Splash :about="data.about" />
      <About :about="data.about" />
      <Experience :experience="data.experience" />
      <Projects :projects="data.projects" />
      <Contact :contact="data.contact" />
    </div>

  </div>
</template>

<style scoped></style>

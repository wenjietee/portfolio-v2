<script setup>
import { animateTitleText, resetTitleText } from '../utils/animUtils';
import ProjectCard from '../components/ProjectCard.vue';

const props = defineProps({
    projects: Array,
})
</script>

<template>
    <section id="projects">
        <div class="container grid">
            <div class="col-12 text-6xl font-semibold xl:text-left lg:text-center md:text-center sm:text-center title"
                @mouseenter="animateTitleText" @mouseleave="resetTitleText">Projects</div>
            <div class="col-12">
                <div class="grid">
                    <div v-for="project in projects" class="col-4">
                        <ProjectCard :project="project" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
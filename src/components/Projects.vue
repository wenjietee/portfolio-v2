<script setup>
import ProjectCard from './ProjectCard.vue';

const props = defineProps({
    projects: Array,
})
</script>

<template>
    <section id="projects">
        <div class="container grid">
            <div class="col-12 text-6xl font-semibold text-center">Projects</div>
            <div class="col-12">
                <div class="grid">
                    <div v-for="project in projects" class="col-12" id="projects">
                        <ProjectCard :project="project" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
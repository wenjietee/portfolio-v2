<script setup>
import { computed } from 'vue';
import { animateTitleText, resetTitleText } from '../utils/animUtils';
import ProjectCard from '../components/ProjectCard.vue';
import ProjectHero from '../components/ProjectHero.vue';

const props = defineProps({
    projects: Array,
})



const projects = computed(() => props.projects);

</script>

<template>
    <section id="projects">
        <div class="container grid ">
            <div class="col-12 xl:text-left lg:text-center md:text-center sm:text-center lowercase title"
                @mouseenter="animateTitleText" @mouseleave="resetTitleText">
                Crafts</div>

            <div class="col-12">
                <div class="grid">
                    <div v-for="project in projectOthers" class="xl:col-4 lg:col-12 md:col-12 sm:col-12">
                        <ProjectCard :project="project" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
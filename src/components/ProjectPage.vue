<script setup>
import Chip from 'primevue/chip';
const props = defineProps({
    project: Object,
})
</script>


<template>
    <div class="container grid">
        <div class="col-5">
            <div class="grid ">
                <div class="col-12 text-6xl font-semibold text-left">{{ project.name }}</div>
                <div class="col-12 text-left">
                    <p v-html="project.description"></p>
                </div>
            </div>
        </div>
        <div class="col-7">
            <div class="grid">
                <div v-for="skill in about.skills" class="col-12" id="skills">
                    <Chip :label="skill" class="chip" />
                </div>
            </div>
        </div>
        <div class="col-12" :v-for="(image, index) in project.images">
            <img :src="image" :alt="`${project.name}-img-${index}`" class="project-image" />
        </div>

    </div>
</template>
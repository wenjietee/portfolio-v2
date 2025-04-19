<script setup>
import { zoomOnHover } from '../utils/animUtils';
import ProjectModal from './ProjectModal.vue';
import { ref } from "vue";

const props = defineProps({
    project: Object,
})

const visible = ref(false);

const showModal = () => {
    visible.value = true;
};
</script>

<template>
    <div class="grid cursor-pointer project-card-container">
        <div class="col-12">
            <div class="overflow-hidden">
                <img :src="project.preview" :alt="`${project.name}-preview`" class="project-hero-preview"
                    @mouseenter="zoomOnHover($event, 1.2)" @mouseleave="zoomOnHover($event, 1)" />
            </div>
            <h2 class="project-hero-name">{{ project.name }}</h2>
        </div>
        <!-- <div class="col-12" @click="showModal">
            <img :src="project.preview" :alt="`${project.name}-preview`" class="project-hero-preview" />
            <h2 class="project-hero-name">{{ project.name }}</h2>
        </div>
        <div>
            <ProjectModal :project="project" v-model:visible="visible" />
        </div> -->
    </div>

</template>
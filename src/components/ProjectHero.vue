<script setup>
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
    <div class="container grid">
        <div class="col-12" @click="showModal">
            <img :src="project.preview" :alt="`${project.name}-preview`" class="project-hero-preview" />
        </div>
        <div class="col-5 project-hero-name">{{ project.name }}</div>
        <div class="col-3 project-hero-desc">
            <span>
                {{ project.label }}
            </span>
        </div>
        <div class="col-4">
            <div class="flex flex-wrap align-items-start justify-content-end gap-2">
                <div> <a v-if="project.url" :href="project.url" target="_blank">
                        <i class="pi pi-external-link"></i></a></div>

                <div>
                    <a v-if="project.repo" :href="project.repo" target="_blank">
                        <i class="pi pi-github"></i></a>
                </div>
            </div>
        </div>
        <div>
            <ProjectModal :project="project" v-model:visible="visible" />
        </div>
    </div>

</template>
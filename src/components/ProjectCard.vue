<script setup>
const props = defineProps({
    project: Object,
})
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <a class="project-link" v-if="project.url" :href="project.url" target="_blank">
                <img :src="project.preview" :alt="`${project.name}-preview`" class="project-preview" />
            </a>
        </div>
        <div class="xl:col-3 lg:col-12 md:col-12 sm:col-12 project-label">{{ `· ${project.label}` }}</div>
        <div class="xl:col-5 lg:col-12 md:col-12 sm:col-12 project-name">{{ project.name }}</div>
        <div class="xl:col-4 lg:col-12 md:col-12 sm:col-12">
            <div class="flex flex-wrap align-items-start justify-content-end gap-2">
                <div>
                    <a class="project-link" v-if="project.repo" :href="project.repo" target="_blank">
                        <i class="pi pi-code"></i>
                    </a>
                </div>
                <div class="project-link">
                    <a class="project-link" v-if="project.url" :href="project.url" target="_blank">
                        VISIT
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>
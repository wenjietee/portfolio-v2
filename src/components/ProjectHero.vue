<script setup>
const props = defineProps({
    project: Object,
})
</script>

<template>
    <div class="container grid">
        <div class="col-12">
            <img :src="project.preview" :alt="`${project.name}-preview`" class="project-preview" />
        </div>
        <div class="col-5 project-name">{{ project.name }}</div>
        <div class="col-3 project-desc">
            <span>
                {{ project.tags.join(" · ") }}
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
    </div>

</template>
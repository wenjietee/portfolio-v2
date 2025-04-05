<script setup>
import Card from 'primevue/card';
import { trimUrl } from '../utils/textUtils';

const props = defineProps({
    project: Object,
})
</script>

<template>
    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <img :src="project.preview" :alt="`${project.name}-preview`" class="project-preview" />
        </template>
        <template #title>{{ project.name }}</template>
        <template #subtitle>{{ project.description }}</template>
        <template #content>
            <div class="grid">
                <div class="col-12"> <a v-if="project.url" :href="project.url" target="_blank" class="url-icon"><i
                            class="pi pi-external-link"></i> {{
                                trimUrl(project.url) }}</a></div>
                <div class="col-12">
                    <a v-if="project.repo" :href="project.repo" target="_blank" class="url-icon"><i
                            class="pi pi-external-link"></i> {{
                                trimUrl(project.repo) }}</a>
                </div>
            </div>
            <!-- <div class="grid">
                <div v-for="tech in project.tech" class="col-12" id="skills">
                    <Chip :label="tech" class="chip" />
                </div>
            </div> -->
        </template>
    </Card>

</template>
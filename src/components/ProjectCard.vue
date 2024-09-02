<script setup>
import Card from 'primevue/card';
import Chip from 'primevue/chip';

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
            <div class="flex gap-4 mt-1">
                <a :href="project.url" class="flex align-items-center text-2xl font-semibold">{{ project.url }}</a>
                <a :href="project.repo" class="flex align-items-center text-2xl font-semibold">{{ project.repo }}</a>
            </div>
            <div class="grid">
                <div v-for="tech in project.tech" class="col-12" id="skills">
                    <Chip :label="tech" class="chip" />
                </div>
            </div>
        </template>
    </Card>

</template>
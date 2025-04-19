<script setup>
import Dialog from 'primevue/dialog';
import Galleria from 'primevue/galleria';
const props = defineProps({
    project: Object,
})

</script>


<template>
    <Dialog modal :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="grid">
            <div class="col-12" v-if="project.images.length > 0">
                <Galleria :value="project.images" :responsiveOptions="responsiveOptions" :circular="true"
                    :showItemNavigators="true" :showThumbnails="false">
                    <template #item="slotProps">
                        <img :src="slotProps.item" :alt="slotProps.item" style="width: 100%; display: block;" />
                    </template>
                </Galleria>
            </div>
            <div class="xl:col-12 project-name">{{ project.name }}</div>
            <div class="xl:col-12 project-label">{{ project.description }}</div>
            <div class="xl:col-12 project-label">{{ project.tech.join(" / ") }}</div>
            <div class="xl:col-6 lg:col-12 md:col-12 sm:col-12">
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
    </Dialog>
</template>
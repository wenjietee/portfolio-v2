<script setup>
// import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import Dialog from 'primevue/dialog';
import Galleria from 'primevue/galleria';
const props = defineProps({
    project: Object,
})

const visible = defineModel("visible")

// const width = ref(window.innerWidth);

// const updateWidth = () => {
//     width.value = window.innerWidth;
// };

// onMounted(() => {
//     window.addEventListener('resize', updateWidth);
// });

// onBeforeUnmount(() => {
//     window.removeEventListener('resize', updateWidth);
// });

// const isMobile = computed(() => width.value < 768);

</script>


<template>
    <Dialog v-model:visible="visible" dismissableMask modal>
        <template #container="{ closeCallback }">
            <div class="grid project-modal">
                <div class="col-12" v-if="project.images.length > 0">
                    <Galleria :value="project.images" :circular="true" :showItemNavigators="true"
                        :showThumbnails="false">
                        <template #item="slotProps">
                            <img :src="slotProps.item" :alt="slotProps.item" style="width: 100%; display: block;"
                                class="project-image img-cover" />
                        </template>
                    </Galleria>
                </div>
                <div class="grid col-12 project-modal-content">
                    <div class="xl:col-12 text-left project-name">{{ project.name }}</div>
                    <div class="xl:col-12 text-left project-label">{{ project.tech.join(" / ") }}</div>
                    <div class="xl:col-12 text-left project-label">{{ project.description }}</div>
                    <div class="col-6">
                        <div class="flex flex-wrap align-items-start gap-2">
                            <div>
                                <a class="project-link" v-if="project.repo" :href="project.repo" target="_blank">
                                    GITHUB
                                </a>
                            </div>
                            ·
                            <div>
                                <a class=" project-link" v-if="project.url" :href="project.url" target="_blank">
                                    VIEW <i class="text-left pi pi-external-link"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 text-right cursor-pointer modal-close" @click="closeCallback">
                        <i class="pi pi-times"></i>
                    </div>
                </div>
            </div>
        </template>
    </Dialog>
</template>
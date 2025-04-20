<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import Chip from 'primevue/chip';
import { trimUrl } from '../utils/textUtils';
import { animateTitleText, resetTitleText, animateExpSection } from '../utils/animUtils';

const props = defineProps({
    experience: Array,
})


</script>

<template>
    <section id="experience">
        <div class="container grid page">
            <div class="col-12 xl:text-left lg:text-center md:text-center sm:text-center uppercase title"
                @mouseenter="animateTitleText" @mouseleave="resetTitleText">
                Experience</div>

            <div class="col-12 accordion-container">
                <Accordion class="accordion" v-for="(exp, index) in experience" :value="['0']"
                    expandIcon="pi pi-chevron-down" collapseIcon="pi pi-chevron-up" multiple lazy>
                    <AccordionPanel class="accordion-panel" :value="index" @click="animateExpSection">
                        <AccordionHeader class="accordion-header grid">
                            <i class="pi pi-bullseye"></i>
                            <div class="col-6 text-left">{{ exp.name }} · {{ exp.company }}</div>
                            <div class="col-5 text-right">{{ exp.period }}</div>
                        </AccordionHeader>
                        <AccordionContent class="accordion-content">
                            <div v-for="url in exp.urls">
                                <div class="text-left url-container exp-content">
                                    <a v-if="url" :href="url" target="_blank" class="url-icon"><i
                                            class="pi pi-external-link"></i> {{
                                                trimUrl(url) }}</a>
                                </div>
                            </div>
                            <p class="text-left exp-content">
                                {{ exp.description }}
                            </p>
                            <div v-for="achieve in exp.achievements" class="grid exp-content">
                                <div class="col-12 text-left">{{ achieve }}</div>
                            </div>
                            <div class="skills flex flex-wrap align-items-start justify-content-start gap-2">
                                <div v-for="tech in exp.tech">
                                    <Chip :label="tech" class="chip" />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>

            </div>
        </div>
    </section>
</template>
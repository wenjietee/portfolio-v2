<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import Chip from 'primevue/chip';

const props = defineProps({
    experience: Array,
})
</script>

<template>
    <div class="container grid">
        <div class="col-12 text-6xl font-semibold text-center">Experience</div>

        <div class="col-12">
            <Accordion v-for="(exp, index) in experience" value="0">
                <AccordionPanel :value="index">
                    <AccordionHeader>{{ exp.name }} {{ exp.company }} {{ exp.period }}</AccordionHeader>
                    <AccordionContent>
                        <p class="text-left">
                            {{ exp.description }}
                        </p>
                        <div v-for="achieve in exp.achievements" class="grid">
                            <div class="col-12 text-left">{{ achieve }}</div>
                        </div>
                        <div class="grid">
                            <div v-for="tech in exp.tech" class="col-12" id="tech">
                                <Chip :label="tech" class="chip" />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>


        </div>
    </div>
</template>
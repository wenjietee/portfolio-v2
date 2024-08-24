<script setup>

import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';


</script>
<template>
    <Stepper value="1">
        <StepItem value="1">
            <Step>About</Step>
        </StepItem>
        <StepItem value="2">
            <Step>Experience</Step>
        </StepItem>
        <StepItem value="3">
            <Step>Projects</Step>
        </StepItem>
        <StepItem value="4">
            <Step>Contact</Step>
        </StepItem>
    </Stepper>
</template>
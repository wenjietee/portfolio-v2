<script setup>
import Card from 'primevue/card';
const props = defineProps({
    project: Object,
})
</script>

<template>
    <Card style="width: 100%; overflow: hidden">
        <template #header>
            Skills Flair
        </template>
        <template #title>Skills Flair</template>
        <template #subtitle>Skills Flair</template>
        <template #content>
            <div class="grid">
                Skills Flair
            </div>
        </template>
    </Card>

</template>
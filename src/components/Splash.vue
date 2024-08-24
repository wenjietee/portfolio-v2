<script setup>
const props = defineProps({
    about: Object
})
</script>

<template>

    <div class="container">
        <h1 id="splash-name">{{ about.name }}</h1>
        <h2>{{ about.title }}</h2>
    </div>
</template>
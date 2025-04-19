<script setup>
const props = defineProps({
    about: Object
})
</script>

<template>
    <section id="home">
        <div class="container">
            <h1 id="splash-name">{{ about.alias }}</h1>
            <h2>{{ about.title }}</h2>
        </div>
    </section>
</template>
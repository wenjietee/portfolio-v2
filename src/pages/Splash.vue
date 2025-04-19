<script setup>
const props = defineProps({
    about: Object
})
</script>

<template>
    <section id="home">
        <div class="container">
            <h1 id="uppercase splash-name">{{ about.name }}</h1>
            <h2>{{ about.title }}</h2>
        </div>
    </section>
</template>
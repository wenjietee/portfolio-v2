<script setup>
const props = defineProps({
    contact: Object
})
</script>

<template>
    <div class="container">
        <div class="grid">
            <div class="col-12 text-6xl font-semibold text-center">Contact</div>
            <div class="col-12 text-3xl text-center">Let's Work / Collab!</div>
            <div class="col-12 text-2xl text-center">
                <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            </div>

            <div v-for="social in contact.socials" class="col-12 flex flex-row flex-wrap" id="socials">
                <a :href="social.url" class="flex align-items-center text-2xl font-semibold">{{ social.name }}</a>
            </div>
        </div>
    </div>
</template>
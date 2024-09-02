<script setup>
import Chip from 'primevue/chip';

const props = defineProps({
    about: Object
})
</script>

<template>
    <div class="container grid">
        <div class="col-5">
            <div class="grid ">
                <div class="col-12 text-6xl font-semibold text-left">About</div>
                <div class="col-12 text-left">
                    <p v-html="about.description"></p>
                </div>
            </div>
        </div>
        <div class="col-7">
            <img :src="about.portrait" alt="profile" id="profile-pic" />
        </div>
        <div class="col-12">
            <div class="grid">
                <div v-for="skill in about.skills" class="col-12" id="skills">
                    <Chip :label="skill" class="chip" />
                </div>
            </div>
        </div>
        <div class="col-12 text-6xl">"{{ about.headline }}"</div>
    </div>
</template>
<script setup>
import { animateTitleText, resetTitleText } from '../utils/animUtils';
import Playlists from '../components/Playlists.vue';
import Skills from './Skills.vue';
const props = defineProps({
    about: Object
})
</script>

<template>
    <section id="about">
        <div class="container grid">
            <div class="col-12 xl:text-left lg:text-center md:text-center sm:text-center uppercase title"
                @mouseenter="animateTitleText" @mouseleave="resetTitleText">About</div>
            <div class="xl:col-6 lg:col-12 md:col-12 sm:col-12" id="profile-content">
                <div class="text-lg text-left" id="description">
                    <p v-html="about.description"></p>
                </div>
                <Playlists :playlists="about.playlists" />
            </div>
            <div class="xl:col-6 lg:col-12 md:col-12 sm:col-12">
                <img :src="about.portrait" alt="profile" class="img-cover" id="profile-pic" />
            </div>
            <div class="col-12">
                <Skills :skills="{ tech_skills: about.tech_skills, art_skills: about.art_skills }" />
            </div>
        </div>
    </section>
</template>
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
            <div class="col-8" id="profile-content">
                <div class="grid">
                    <div class="col-12 text-6xl font-semibold text-left title" @mouseenter="animateTitleText"
                        @mouseleave="resetTitleText">About</div>
                    <div class="col-12 text-lg text-left" id="description">
                        <p v-html="about.description"></p>
                    </div>
                    <div class="col-12">
                        <div class="grid">
                            <!-- //TODO Component for spotify -->
                            <Playlists />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <img :src="about.portrait" alt="profile" id="profile-pic" />
            </div>
            <div class="col-12">
                <div class="grid">
                    <!-- //TODO Component for branding to display skills-->
                    <Skills />
                </div>
            </div>
        </div>
    </section>
</template>
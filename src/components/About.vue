<script setup>
import Button from 'primevue/button';
import { animateTitleText, resetTitleText } from '../utils/animUtils';
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
                    <div class="col-12 text-left">
                        <Button class="text-lg text-center" id="resume">Resume</Button>
                    </div>
                    <div class="col-12 text-lg text-left" id="description">
                        <p v-html="about.description" v-scroll-fade="{ duration: 1, x: -30, y: 0, start: 'top 80%' }">
                        </p>
                    </div>
                    <div class="col-12">
                        <div class="grid">
                            <!-- //TODO Component for branding to display skills-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <img :src="about.portrait" alt="profile" id="profile-pic" />
            </div>
        </div>
    </section>
</template>
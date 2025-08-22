<script setup>
import PerspectiveLayer from '../components/PerspectiveLayer.vue';
import TranslateLayer from '../components/TranslateLayer.vue';
import { animateTitleText, resetTitleText } from '../utils/animUtils';
import Skills from './Skills.vue';
const props = defineProps({
    about: Object
})
</script>

<template>
    <section id="about">
        <div class="container grid">
            <div class="col-12 xl:text-left lg:text-center md:text-center sm:text-center lowercase title"
                @mouseenter="animateTitleText" @mouseleave="resetTitleText">
                Bio</div>
            <div class="xl:col-6 lg:col-12 md:col-12 sm:col-12" id="profile-content">
                <img :src="about.portrait" alt="profile" class="img-cover" id="mobile-profile-pic" />
                <div class="text-lg text-left" id="description-container">
                    <p v-html="about.description" id="description-content"></p>
                </div>
            </div>
            <div class="xl:col-6 lg:col-12 md:col-12 sm:col-12">
                <TranslateLayer speed="0.8">
                    <PerspectiveLayer>
                        <img :src="about.portrait" alt="profile" class="img-cover" id="profile-pic" />
                    </PerspectiveLayer>
                </TranslateLayer>
            </div>
            <div class="col-12">
                <Skills :skills="{ tech_skills: about.tech_skills, art_skills: about.art_skills }" />
            </div>
        </div>
    </section>
</template>
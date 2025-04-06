<script setup>
import Card from 'primevue/card';
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
                    <div class="col-12 text-lg text-left" id="description">
                        <p v-html="about.description"></p>
                    </div>
                    <div class="col-12">
                        <div class="grid">
                            <!-- //TODO Component for spotify -->
                            <Card style="width: 25rem; overflow: hidden">
                                <template #header>
                                    Spotify
                                </template>
                                <template #title>Spotify</template>
                                <template #subtitle>Spotify</template>
                                <template #content>
                                    <div class="grid">
                                        Spotify
                                    </div>
                                </template>
                            </Card>
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
                    My Skills Flair here
                </div>
            </div>
        </div>
    </section>
</template>
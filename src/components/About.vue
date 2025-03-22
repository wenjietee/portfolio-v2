<script setup>
import Button from 'primevue/button';
const props = defineProps({
    about: Object
})
</script>

<template>
    <section id="about">
        <div class="container grid">
            <div class="col-9" id="profile-content">
                <div class="grid">
                    <div class="col-12 text-6xl font-semibold text-left title">About</div>
                    <div class="col-12 text-left">
                        <Button class="text-lg text-center" id="resume">Resume</Button>
                    </div>
                    <div class="col-12 text-lg text-left" id="description">
                        <p v-html="about.description"></p>
                    </div>
                    <div class="col-12">
                        <div class="grid">
                            <!-- //TODO Component for branding to display skills-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <img :src="about.portrait" alt="profile" id="profile-pic" />
            </div>
        </div>
    </section>
</template>
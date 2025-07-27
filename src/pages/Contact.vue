<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { animateTitleText, resetTitleText } from '../utils/animUtils';

const props = defineProps({
    about: Object
})

const currentTime = ref('')

const updateTime = () => {
    currentTime.value = new Date().toLocaleTimeString('en-US', { timeZone: 'Singapore' })
}
let timer = null

onMounted(() => {
    updateTime()
    timer = setInterval(updateTime, 1000)
})
onBeforeUnmount(() => {
    clearInterval(timer)
})

</script>
<template>
    <section id="contact">

        <div class="container grid">
            <div class="col-12 contact-divider"></div>
            <div class="col-12 text-center lowercase title" @mouseenter="animateTitleText" @mouseleave="resetTitleText">
                Contact
            </div>

            <div class="xl:col-3 sm:col-12 text-left grid contact-description">
                <div class="col-12">{{ about.email }}</div>
                <div class="col-12">{{ about.tagline }}</div>
            </div>

            <div class="xl:col-3 sm:col-12 contact-copyright">
                {{ about.name }} © {{ new Date().getFullYear() }}
            </div>
            <div class="xl:col-3 sm:col-12 contact-copyright">{{ currentTime }} SGT(GMT+8)</div>

            <div class="xl:col-2 sm:col-12 contact-social-container">
                <div class="contact-social-header">Socials</div>
                <ul class="contact-social">
                    <li v-for="social in about.socials" :key="social.name">
                        <a class="social-icon" target="_blank" v-if="social.url" :href="social.url">
                            {{ social.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
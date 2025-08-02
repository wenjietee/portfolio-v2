<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const splashRef = ref()
const titleRef = ref()
const sketchRef = ref()
const artistRef = ref()
const modelRef = ref()
const gameRef = ref()
const techartRef = ref()

onMounted(() => {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: splashRef.value,
            start: 'top top',
            end: '+=1000',
            scrub: true,
            pin: true,
        },
    })

    timeline
        // .fromTo(
        //     titleRef.value,
        //     { opacity: 0, y: 50 },
        //     { opacity: 1, y: 0, duration: 1 }
        // )
        .fromTo(
            sketchRef.value.querySelector('path'),
            { strokeDashoffset: 400 },
            { strokeDashoffset: 0, duration: 2 },
            // overlap with title fade
        )
})
</script>

<template>
    <section class="splash-stage" ref="splashRef">
        <div class="splash-content">
            <div id="splash-intro">
                <h1 class="splash-title" ref="titleRef">Hi, I’m WJ – A Creative Technologist</h1>
                <svg class="splash-sketch" ref="sketchRef" width="300" height="150" viewBox="0 0 300 150" fill="none"
                    stroke="currentColor" stroke-width="2">
                    <path d="M20 130 Q150 20 280 130" stroke-dasharray="400" stroke-dashoffset="400" />
                </svg>
            </div>
            <div id="splash-artist" ref="artistRef"></div>
            <div id="splash-3d" ref="modelRef"></div>
            <div id="splash-game" ref="gameRef"></div>
            <div id="splash-techart" ref="techartRef"></div>
        </div>
    </section>
</template>

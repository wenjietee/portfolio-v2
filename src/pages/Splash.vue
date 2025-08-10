<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const splashRef = ref()
const titleRef = ref()
const dioRef = ref()

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
        .fromTo(
            titleRef.value,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1 }
        )
    // .fromTo(
    //     sketchRef.value.querySelector('path'),
    //     { strokeDashoffset: 400 },
    //     { strokeDashoffset: 0, duration: 2 },
    //     // overlap with title fade
    // )
})
</script>

<template>
    <section class="splash-stage" id="home" ref="splashRef">
        <div class="splash-content">
            <div id="splash-intro">
                <h1 class="splash-headline" ref="titleRef">wj.art/code</h1>
                <h1 class="splash-title" ref="titleRef">creative technologist</h1>
                <!-- <svg class="splash-sketch" ref="sketchRef" width="300" height="150" viewBox="0 0 300 150" fill="none"
                    stroke="currentColor" stroke-width="2">
                    <path d="M20 130 Q150 20 280 130" stroke-dasharray="400" stroke-dashoffset="400" />
                </svg> -->
            </div>
            <div id="splash-diorama" ref="dioRef">

            </div>
        </div>
    </section>
</template>

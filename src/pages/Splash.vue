<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import TranslateLayer from '../components/TranslateLayer.vue'
gsap.registerPlugin(ScrollTrigger)

const splashRef = ref()
const titleRef = ref()
const dioRef = ref()
const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e) => {

    mouseX.value = (e.clientX - window.innerWidth / 2) * 0.1
    mouseY.value = (e.clientY - window.innerHeight / 2) * 0.1


    if (titleRef.value && dioRef.value) {
        gsap.to(titleRef.value, {
            x: -mouseX.value * 2,
            y: -mouseY.value * 2,
            duration: 0.5,
            ease: 'power2.out'
        })

        gsap.to(dioRef.value, {
            x: -mouseX.value * 1,
            y: -mouseY.value * 1,
            duration: 0.8,
            ease: 'power2.out'
        })
    }
}

onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
    window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
    <section class="splash-stage" id="home" ref="splashRef">
        <div class="splash-content">
            <div id="splash-intro" ref="titleRef">
                <h1 class="splash-headline">wj.art/code</h1>
                <h1 class="splash-title">creative technologist</h1>
            </div>
            <div id="splash-diorama" ref="dioRef">
                3d diorama
            </div>
            <ThreeDCard />
        </div>
    </section>
</template>

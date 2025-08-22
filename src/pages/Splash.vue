<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import TranslateLayer from '../components/TranslateLayer.vue'
import Paintbrush from '../components/Paintbrush.vue'
gsap.registerPlugin(ScrollTrigger)

const splashRef = ref()
const headlineRef = ref()
const titleRef = ref()
const dioRef = ref()
const mouseX = ref(0)
const mouseY = ref(0)

const isArt = ref(false)
const isCode = ref(false)

const handleMouseMove = (e) => {

    mouseX.value = (e.clientX - window.innerWidth / 2) * 0.1
    mouseY.value = (e.clientY - window.innerHeight / 2) * 0.1


    if (headlineRef.value && titleRef.value && dioRef.value) {
        gsap.to(headlineRef.value, {
            x: -mouseX.value * 1.3,
            y: -mouseY.value * 1.3,
            duration: 0.2,
            ease: 'power2.out'
        })
        gsap.to(titleRef.value, {
            x: -mouseX.value * 0.5,
            y: -mouseY.value * 0.5,
            duration: 0.5,
            ease: 'power2.out'
        })

        gsap.to(dioRef.value, {
            x: -mouseX.value * 0.2,
            y: -mouseY.value * 0.2,
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

const handleBrushStyle = (event) => {
    const getUnderlined = document.querySelectorAll(".underline")
    getUnderlined.forEach((item) => item.classList.remove("underline", "active"))

    isArt.value = false
    isCode.value = false

    if (event.target.id === "splash-art") {
        event.target.classList.add("underline", "active")
        isArt.value = true
    }

    if (event.target.id === "splash-code") {
        event.target.classList.add("underline", "active")
        isCode.value = true

    }

}
</script>

<template>
    <section class="splash-stage" id="home" ref="splashRef">
        <Paintbrush />

        <div class="splash-content">

            <div id="splash-intro" ref="headlineRef">
                <h1 class="splash-headline">wj.<span id="splash-art" @click="handleBrushStyle">art</span>/<span
                        id="splash-code" @click="handleBrushStyle">code</span></h1>
            </div>
            <div ref="titleRef">
                <h1 class="splash-title">creative developer</h1>
            </div>
            <div id="splash-diorama" ref="dioRef">
                3d diorama
            </div>
            <!-- <ThreeDCard /> -->
        </div>
    </section>
</template>

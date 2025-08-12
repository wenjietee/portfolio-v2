<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import PerspectiveLayer from '../components/PerspectiveLayer.vue'
import TranslateLayer from '../components/TranslateLayer.vue'
gsap.registerPlugin(ScrollTrigger)

const splashRef = ref()
const titleRef = ref()
const dioRef = ref()

</script>

<template>
    <section class="splash-stage" id="home" ref="splashRef">
        <div class="splash-content">
            <div id="splash-intro" ref="titleRef">
                <TranslateLayer>
                    <h1 class="splash-headline">wj.art/code</h1>
                </TranslateLayer>
                <h1 class="splash-title">creative technologist</h1>
            </div>
            <div id="splash-diorama" ref="dioRef">
                3d diorama
            </div>
            <ThreeDCard />
        </div>
    </section>
</template>

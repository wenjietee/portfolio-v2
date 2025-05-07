<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
    about: Object
})

// scene refs
const secName = ref(null)
const secArtist = ref(null)
const secSketch = ref(null)
const sec3D = ref(null)
const secGame = ref(null)
const secTech = ref(null)
const secFinal = ref(null)
const splashContainer = ref(null)

// skip logic
const skipSplash = () => {
    ScrollTrigger.getAll().forEach(st => st.kill())
    timeline.kill()
    document.body.classList.remove('no-scroll')
    // scroll to main content
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
}

// three.js loader 
const initThreeJS = (containerEl) => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, containerEl.clientWidth / containerEl.clientHeight, 0.1, 100)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(containerEl.clientWidth, containerEl.clientHeight)
    containerEl.appendChild(renderer.domElement)

    // load model
    const loader = new THREE.GLTFLoader()
    loader.load('/models/yourModel.glb', gltf => {
        const model = gltf.scene
        scene.add(model)
        camera.position.set(0, 1, 3)

        //interaction
        // containerEl.addEventListener('pointerdown', () => {
        //   gsap.to(model.rotation, { x: '+=0.2', y: '-=0.2', duration: 0.2, yoyo: true, repeat: 1 })
        // })

        animate()
    })

    const animate = () => {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
    }
}

let timeline

onMounted(() => {
    document.body.classList.add('no-scroll') // lock scrolling
    timeline = gsap.timeline({
        scrollTrigger: {
            trigger: splashContainer.value,
            start: 'top top',
            end: 'bottom+=100% top',
            scrub: true,
            pin: true,
        }
    })


    timeline.from(secName.value, { opacity: 0, y: 50 })

    timeline.from(secArtist.value, { opacity: 0, x: -100 })

    timeline.to(secSketch.value, { '--draw-progress': 1, duration: 1 })

    timeline.from(sec3D.value, { opacity: 0, duration: 1 })

    // initThreeJS(sec3D.value) // init and load 3d model

    timeline.from(secGame.value, { opacity: 0, scale: 0.5 })

    timeline.from(secTech.value, { opacity: 0, x: 100 })

    timeline.from(secFinal.value, { opacity: 0, y: 100 })

    timeline.call(() => {
        document.body.classList.remove('no-scroll')
    })
})
</script>

<template>
    <section id="home">
        <div ref="splashContainer" class="splash-wrapper container">


            <section ref="secName">
                <h1 id="splash-name">{{ about.alias }}</h1>
                <h2>{{ about.title }}</h2>
                <button class="skip-btn" @click="skipSplash">Skip Intro</button>

            </section>

            <section ref="secArtist">
                <h2>I was an artist</h2>
            </section>

            <section ref="secSketch" class="sketch-draw">
                <!-- SVG with stroke-dasharray/dashoffset animation -->
                <svg>…</svg>
            </section>

            <section ref="sec3D" class="three-container"></section>

            <section ref="secGame" class="sprite-showcase">
                <!-- sprite / lore visuals -->
            </section>

            <section ref="secTech" class="tech-art">
                <!-- split-screen or effects -->
            </section>

            <section ref="secFinal" class="final-blend">
                <!-- art / code cursor & particles -->
            </section>
        </div>
    </section>
</template>

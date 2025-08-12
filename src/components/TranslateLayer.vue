<script setup>
import { ref, reactive } from 'vue'

// State management
const cardRef = ref(null)
const translation = reactive({
    x: 0,
    y: 0
})

// Card interaction handlers
const handleMouseMove = (e) => {
    if (!cardRef.value) return

    const bounds = cardRef.value.getBoundingClientRect()
    const x = e.clientX - bounds.left
    const y = e.clientY - bounds.top

    // Calculate translation with smoother values
    translation.x = ((y / bounds.height) - 0.5) * 20
    translation.y = ((x / bounds.width) - 0.5) * 20

    // Apply transform directly
    cardRef.value.style.transform = `
        perspective(1000px)
        translateX(${-translation.x}deg)
        translateY(${translation.y}deg)
    `
}

const handleMouseLeave = () => {
    if (!cardRef.value) return

    // Reset translation smoothly
    translation.x = 0
    translation.y = 0

    cardRef.value.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
    `
}
</script>

<template>
    <div class="card-wrapper">
        <div ref="cardRef" class="three-d-card" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
            <slot></slot>
        </div>
    </div>
</template>

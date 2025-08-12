<script setup>
import { ref, reactive } from 'vue'

// State management
const cardRef = ref(null)
const rotation = reactive({
    x: 0,
    y: 0
})

// Card interaction handlers
const handleMouseMove = (e) => {
    if (!cardRef.value) return

    const bounds = cardRef.value.getBoundingClientRect()
    const x = e.clientX - bounds.left
    const y = e.clientY - bounds.top

    // Calculate rotation with smoother values
    rotation.x = ((y / bounds.height) - 0.5) * 20
    rotation.y = ((x / bounds.width) - 0.5) * 20

    // Apply transform directly
    cardRef.value.style.transform = `
        perspective(1000px)
        rotateX(${-rotation.x}deg)
        rotateY(${rotation.y}deg)
    `
}

const handleMouseLeave = () => {
    if (!cardRef.value) return

    // Reset rotation smoothly
    rotation.x = 0
    rotation.y = 0

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

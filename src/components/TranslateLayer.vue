<script setup>
import { ref, reactive } from 'vue'

const cardRef = ref(null)
const translation = reactive({
    x: 0,
    y: 0
})

const handleMouseMove = (e) => {
    if (!cardRef.value) return

    const bounds = cardRef.value.getBoundingClientRect()
    const mouseX = e.clientX - bounds.left
    const mouseY = e.clientY - bounds.top

    // Simple percentage-based translation (max 30px movement)
    translation.x = ((mouseX / bounds.width) - 0.5) * 30
    translation.y = ((mouseY / bounds.height) - 0.5) * 30

    cardRef.value.style.transform = `translate(${-translation.x}px, ${translation.y}px)`
}

const handleMouseLeave = () => {
    if (!cardRef.value) return

    translation.x = 0
    translation.y = 0
    cardRef.value.style.transform = 'translate(0px, 0px)'
}
</script>

<template>
    <div class="card-wrapper">
        <div ref="cardRef" class="translate-element" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'

const layerRef = ref(null)
const mousePosition = reactive({
    x: 0,
    y: 0
})

const props = defineProps({
    speed: {
        type: Number,
        default: 1
    }
})


const handleMouseMove = (e) => {

    mousePosition.x = (e.clientX - window.innerWidth / 2)
    mousePosition.y = (e.clientY - window.innerHeight / 2)

    if (layerRef.value) {

        const translateX = -mousePosition.x * 0.02 * props.speed
        const translateY = -mousePosition.y * 0.02 * props.speed

        layerRef.value.style.transform = `translate(${translateX}px, ${translateY}px)`
    }
}

const resetPosition = () => {
    if (layerRef.value) {
        layerRef.value.style.transform = 'translate(0px, 0px)'
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
    <div class="card-wrapper">
        <div ref="layerRef" class="translate-element" @mouseleave="resetPosition">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.translate-element {
    position: relative;
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

}
</style>
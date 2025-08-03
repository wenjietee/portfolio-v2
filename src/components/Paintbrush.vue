<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const canvasRef = ref(null);
const points = ref([]);

const ctx = ref(null);

const initCanvas = () => {
    const canvas = canvasRef.value;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.value = canvas.getContext('2d');
    ctx.value.strokeStyle = '#8B3320';
    ctx.value.lineWidth = 5;
    ctx.value.lineCap = 'round';
};

const addPoint = (x, y) => {
    points.value.push({ x, y, age: 0 });
};

const draw = () => {
    if (!ctx.value) return;

    // Clear canvas
    ctx.value.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Update and draw points
    for (let i = 0; i < points.value.length; i++) {
        const point = points.value[i];
        point.age++;

        // Remove old points
        if (point.age > 15) {
            points.value.splice(i, 1);
            i--;
            continue;
        }

        // Draw line between points
        if (i > 0) {
            const prevPoint = points.value[i - 1];
            ctx.value.beginPath();
            ctx.value.moveTo(prevPoint.x, prevPoint.y);
            ctx.value.lineTo(point.x, point.y);
            ctx.value.strokeStyle = `#8B3320, ${1 - point.age / 15})`;
            ctx.value.stroke();
        }
    }

    requestAnimationFrame(draw);
};

const handleMouseMove = (e) => {
    addPoint(e.clientX, e.clientY);
};

const handleResize = () => {
    if (!canvasRef.value) return;
    canvasRef.value.width = window.innerWidth;
    canvasRef.value.height = window.innerHeight;
};

onMounted(() => {
    initCanvas();
    draw();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <canvas ref="canvasRef" style="position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9999;" />
</template>
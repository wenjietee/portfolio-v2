<script setup>
const props = defineProps({
    skills: Object,
})
</script>

<template>

    <div class="grid skills-container">
        <div class="xl:col-6 sm:col-12 skills-list">
            <h3>Tech</h3>
            <div class="skills-about gap-2">
                <Chip v-for="techSkill in skills.tech_skills" :label="techSkill" class="chip" />
            </div>
        </div>
        <div class="xl:col-6 sm:col-12 skills-list">
            <h3>Art</h3>
            <div class="skills-about gap-2">
                <Chip v-for="artSkill in skills.art_skills" :label="artSkill" class="chip" />
            </div>
        </div>

    </div>

</template>
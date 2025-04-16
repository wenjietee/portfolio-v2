<script setup>
const props = defineProps({
    skills: Object,
})
</script>

<template>

    <div class="grid skills-container">
        <div class="col-12">
            Logo Here + Animation
        </div>
        <div class="col-1 skills-bracket">
            [
        </div>
        <div class="col-5 skills-list">
            <h3>Tech</h3>
            <div class="skills-about flex flex-wrap align-items-start justify-content-start gap-2">
                <Chip v-for="techSkill in skills.tech_skills" :label="techSkill" class="chip" />
            </div>
        </div>
        <div class="col-5 skills-list">
            <h3>Art</h3>
            <div class="skills-about flex flex-wrap align-items-start justify-content-end gap-2">
                <Chip v-for="artSkill in skills.art_skills" :label="artSkill" class="chip" />
            </div>
        </div>
        <div class="col-1 skills-bracket">
            ]
        </div>
    </div>

</template>
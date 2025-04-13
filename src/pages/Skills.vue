<script setup>
const props = defineProps({
    skills: Object,
})
</script>

<template>
    <div class="skills-container">
        <div class="grid">
            <div class="col-12">
                Logo Here
            </div>
            <div class="col-3">
                [
            </div>
            <div class="col-3">
                <div>Tech Skills</div>
                <div v-for="techSkill in skills.tech_skills">
                    <Chip :label="techSkill" class="chip" />
                </div>
            </div>
            <div class="col-3">
                <div>Art Skills</div>
                <div v-for="artSkill in skills.art_skills">
                    <Chip :label="artSkill" class="chip" />
                </div>
            </div>
            <div class="col-3">
                ]
            </div>
        </div>
    </div>
</template>
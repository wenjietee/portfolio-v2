<script setup>
import Card from 'primevue/card';
const props = defineProps({
    playlists: Object
})
</script>

<template>
    <Card class="about-playlists" style="width: 25rem; overflow: hidden">
        <template #header>
            Cozy Coding Vibes
        </template>
        <!-- <template #title>Spotify</template>
        <template #subtitle>Spotify</template> -->
        <template #content>
            <div class="playlists-container gap-2">
                <div class="playlist-item" v-for="playlist in playlists">
                    <a target="_blank" v-if="playlist.url" :href="playlist.url">
                        <img class="playlist-img" :src="playlist.image" alt="playlist-link">
                    </a>
                    <div class="playlist-name">{{ playlist.name }}</div>
                    <div class="playlist-description">{{ playlist.description }}</div>
                </div>
            </div>
        </template>
    </Card>

</template>
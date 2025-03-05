<script setup lang="ts">
const spotifyLink = GetSpecificLink("Spotify");
</script>
<template>
    <div class="hero">
        <div class="mockup-browser bg-base-300">
            <div class="mockup-browser-toolbar prose">
                <NuxtLink :to="spotifyLink?.uri">https://spotify.com/alternateera</NuxtLink>
            </div>
            <iframe style="border-radius:12px"
                src="https://open.spotify.com/embed/artist/6cMj7gCifUnUqsc6QJn2Y8?utm_source=generator" width="100%"
                height="352" frameBorder="0" allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
        </div>
    </div>
</template>

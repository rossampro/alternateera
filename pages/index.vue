<script setup lang="ts">
const img = useImage()

const bgImg = computed(() => {
    const imgUrl = img('/alteracover.webp');
    return `background-image: url(${imgUrl});`
});
</script>
<template>
    <div class="hero min-h-screen" :style="bgImg">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content">
            <div class="prose sm:prose-xl text-center">
                <h1>We Are Alternate Era</h1>
                <p>Prepare to get Fucked</p>
            </div>
        </div>
    </div>
</template>

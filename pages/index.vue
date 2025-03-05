<script setup lang="ts">
const img = useImage()

const bgImg = computed(() => {
    const imgUrl = img('/alteracover.webp');
    return `background-image: url(${imgUrl}); fixed; cover;`
});
</script>
<template>
    <div>
        <div class="hero min-h-screen" :style="bgImg">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content">
                <div class="prose sm:prose-xl text-center">
                    <h1>We Are Alternate Era</h1>
                    <Socialmediacomponent></Socialmediacomponent>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="bg-base-100">
            <Aboutcomponent />
        </div>
        <div class="divider"></div>
        <div class="prose flex flex-col m-auto text-center">
            <h1>Sign up to our Mailing List</h1>
            <Contactform />
        </div>
    </div>
</template>

<script setup lang="ts">
const img = useImage()

const bgImg = computed(() => {
    const imgUrl = img('/alteracover.webp');
    return `background-image: url(${imgUrl});`
});
</script>
<template>
    <div>
        <div class="hero min-h-screen" :style="bgImg">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content">
                <div class="prose sm:prose-xl text-center">
                    <h1>We Are Alternate Era</h1>
                </div>
            </div>
        </div>
        <div class="divider">
        </div>
        <div class="flex flex-col m-auto prose text-center">
            <h1>Music Videos</h1>
        </div>
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <div class="mockup-browser border border-base-300 bg-base-300">
                    <div class="mockup-browser-toolbar">
                        <NuxtLink to="https://youtu.be/Nph92gcaoAs?si=WALdTyYrPc9TC-ur" class="link link-hover">
                            https://youtube.com/drivingtogroovetown
                        </NuxtLink>
                    </div>
                    <div class="flex justify-center px-4 py-16 border-t border-base-300 bg-secondary-focus">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Nph92gcaoAs?si=WALdTyYrPc9TC-ur"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
                <div class="mockup-browser border border-base-300 bg-base-300">
                    <div class="mockup-browser-toolbar">
                        <NuxtLink to="https://youtu.be/S9PYaI1kI-E?si=hn1i2FIdtdTwtHSM" class="link link-hover">
                            https://youtube.com/realmofnowhere
                        </NuxtLink>
                    </div>
                    <div class="flex justify-center px-4 py-16 border-t border-base-300 bg-secondary-focus">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/S9PYaI1kI-E?si=hn1i2FIdtdTwtHSM"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Audioplayer />
        </div>
        <div class="divider"></div>
        <div class="prose flex flex-col m-auto text-center">
            <h1>Sign up to our Mailing List</h1>
            <Contactform />
        </div>
    </div>
</template>

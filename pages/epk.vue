<script setup lang="ts">
const Jan2425Credits = "Jackie Lynn 2025"
</script>

<template>
    <div class="bg-base-200 text-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div class="prose sm:prose-xl text-center">
            <h2>
                Alternate Era
            </h2>
        </div>
        <div class="divider">
        </div>
        <Socialmediacomponent></Socialmediacomponent>
        <div class="divider">
        </div>
        <Photobrowsercomponent filename="/Jan24th25-27.webp" :credits="Jan2425Credits">
        </Photobrowsercomponent>
        <div class="prose text-center underline m-auto">
            <h2>Biography</h2>
        </div>
        <div class="hero-content flex-col lg:flex-row w-fit prose">
            <p>
                <strong>Alternate Era</strong> is an alternative hip-hop duo blending ethereal production, cinematic
                soundscapes,
                and high-energy lyricism. Inspired by <strong>Gorillaz</strong> and <strong>East Coast Hip-Hop</strong>,
                they fuse hip-hop, electronic, and
                experimental rock to create immersive, genre-defying music. With a bi-coastal creative process
                between <strong>San Diego (Ross – producer/multi-instrumentalist)</strong> and <strong>Manhattan (Chris
                    –
                    lyricist/rapper)</strong>,
                their sound is both futuristic and nostalgic. Whether through hypnotic beats, introspective lyrics,
                or electrifying performances, Alternate Era delivers a sonic experience that pushes boundaries and
                leaves you wanting more.
            </p>
        </div>
        <Photobrowsercomponent filename="/Jan24th25-9.webp" :credits="Jan2425Credits"></Photobrowsercomponent>
        <Photobrowsercomponent filename="/Jan24th25-14.webp" :credits="Jan2425Credits"></Photobrowsercomponent>
        <div class="divider">
        </div>
        <div class="flex flex-col m-auto prose text-center underline">
            <h2>Media</h2>
        </div>
        <div class="hero-content">
            <div class="mockup-browser border border-base-300 bg-base-300">
                <div class="mockup-browser-toolbar">
                    <NuxtLink to="https://youtu.be/jmSAeINdo1Y?si=d76jM25CYFGHoo04" class="link link-hover">
                        https://youtube.com/kingofthejungle
                    </NuxtLink>
                </div>

                <div class="flex flex-shrink justify-center px-4 py-16 border-t border-base-300 bg-secondary-focus">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/jmSAeINdo1Y?si=Gu-_H0JoCAWKyYki"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="hero-content">
            <div class="mockup-browser border border-base-300 bg-base-300">
                <div class="mockup-browser-toolbar">
                    <NuxtLink to="https://youtu.be/S9PYaI1kI-E?si=_nbuZoOLdc2WP76S" class="link link-hover">
                        https://youtube.com/realmofnowhere
                    </NuxtLink>
                </div>

                <div class="flex flex-shrink justify-center px-4 py-16 border-t border-base-300 bg-secondary-focus">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/S9PYaI1kI-E?si=-spywj8Zj4HKwnBl"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="divider divider-base-300">
        </div>
        <div class="flex flex-col m-auto prose text-center underline">
            <h2>Notable Past Venues</h2>
        </div>
        <div class="hero-content">
            <div class="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <NuxtLink to="https://www.somasandiego.com">
                        <NuxtImg src="/somalogo.webp"></NuxtImg>
                    </NuxtLink>
                </figure>
            </div>
            <div class="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <NuxtLink to="https://www.somasandiego.com">
                        <NuxtImg src="/checafelogo.webp"></NuxtImg>
                    </NuxtLink>
                </figure>
            </div>
        </div>
        <div class="flex flex-col m-auto prose text-center underline">
            <h2>Press</h2>
        </div>
        <div class="hero-content">
            <div class="mockup-browser border border-base-300 bg-base-300">
                <div class="mockup-browser-toolbar">
                    <NuxtLink
                        to="https://sdvoyager.com/interview/meet-ross-m-c-lock-watchman-alternate-era-mushroom-caves/"
                        class="link link-hover">
                        https://sdvoyager.com/alternateera
                    </NuxtLink>
                </div>
                <div>
                    <NuxtImg src="/sdvoyager.png"></NuxtImg>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>

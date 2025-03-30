<script setup lang="ts">
const Jan2425Credits = "Jackie Lynn 2025";
</script>

<template>
    <div
        class="bg-base-200 mx-auto max-w-2xl rounded-lg p-8 text-white shadow-lg"
    >
        <div class="prose sm:prose-xl text-center">
            <h2>Alternate Era</h2>
        </div>
        <div class="divider"></div>
        <Socialmediacomponent></Socialmediacomponent>
        <div class="divider"></div>
        <Photobrowsercomponent
            filename="/Jan24th25-27.webp"
            :credits="Jan2425Credits"
        >
        </Photobrowsercomponent>
        <biocomponent></biocomponent>
        <Photobrowsercomponent
            filename="/Jan24th25-9.webp"
            :credits="Jan2425Credits"
        ></Photobrowsercomponent>
        <Photobrowsercomponent
            filename="/Jan24th25-14.webp"
            :credits="Jan2425Credits"
        ></Photobrowsercomponent>

        <div class="divider"></div>

        <div class="prose m-auto flex flex-col text-center underline">
            <h2>Media</h2>
        </div>

        <div class="hero-content">
            <div class="mockup-phone border-base-300 bg-base-300 border">
                <div class="mockup-phone-camera"></div>
                <div class="mockup-phone-display m-fit h-fit">
                    <iframe
                        width="464"
                        height="825"
                        src="https://www.youtube.com/embed/JNdUTsWolgE"
                        title="Sway With Me (ft Ross A.M.) by Alternate Era"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>

        <div class="hero-content">
            <div class="mockup-browser border-base-300 bg-base-300 border">
                <div class="mockup-browser-toolbar">
                    <NuxtLink
                        to="https://youtu.be/jmSAeINdo1Y?si=d76jM25CYFGHoo04"
                        class="link link-hover"
                    >
                        https://youtube.com/kingofthejungle
                    </NuxtLink>
                </div>

                <div
                    class="border-base-300 bg-secondary-focus flex flex-shrink justify-center border-t px-4 py-16"
                >
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/jmSAeINdo1Y?si=Gu-_H0JoCAWKyYki"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>

        <div class="hero-content">
            <div class="mockup-browser border-base-300 bg-base-300 border">
                <div class="mockup-browser-toolbar">
                    <NuxtLink
                        to="https://youtu.be/S9PYaI1kI-E?si=_nbuZoOLdc2WP76S"
                        class="link link-hover"
                    >
                        https://youtube.com/realmofnowhere
                    </NuxtLink>
                </div>

                <div
                    class="border-base-300 bg-secondary-focus flex flex-shrink justify-center border-t px-4 py-16"
                >
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/S9PYaI1kI-E?si=-spywj8Zj4HKwnBl"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>

        <div class="hero-content">
            <div class="mockup-browser border-base-300 bg-base-300 border">
                <div class="mockup-browser-toolbar">
                    <NuxtLink
                        to="https://youtu.be/S9PYaI1kI-E?si=_nbuZoOLdc2WP76S"
                        class="link link-hover"
                    >
                        https://youtube.com/realmofnowherelive
                    </NuxtLink>
                </div>
                <div
                    class="border-base-300 bg-secondary-focus flex flex-shrink justify-center border-t px-4 py-16"
                >
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/wqE69tC28p8?si=_Cl2dXuwr1YOCZJ6"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
        <div class="divider divider-base-300"></div>
        <div class="prose m-auto flex flex-col text-center underline">
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
        <div class="prose m-auto flex flex-col text-center underline">
            <h2>Press</h2>
        </div>
        <div class="hero-content">
            <div class="mockup-browser border-base-300 bg-base-300 border">
                <div class="mockup-browser-toolbar">
                    <NuxtLink
                        to="https://sdvoyager.com/interview/meet-ross-m-c-lock-watchman-alternate-era-mushroom-caves/"
                        class="link link-hover"
                    >
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

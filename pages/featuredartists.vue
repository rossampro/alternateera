<script lang="ts" setup>
import { GetFeaturedArtists } from "~/composables/featuredArtists";

useSeoMeta({
    title: "Featured Artists",
    description:
        "Check out some of Alternate Era's top picks for artists in the Alternative Hip Hop Genre",
    ogTitle: "Featured Artists",
    ogDescription:
        "Check out some of Alternate Era's top picks for artists in the Alternative Hip Hop Genre",
});

const featuredArtists = GetFeaturedArtists();
</script>

<template>
    <div>
        <div class="mb-10 flex flex-col items-center text-center">
            <h1 class="mt-10 max-w-2xl text-4xl font-bold">Featured Artists</h1>
            <div class="card-body bg-base-200 mt-4 shadow">
                <p class="text-base-content mt-4 max-w-xl text-lg">
                    Alternate Era is a movement redefining music and creativity.
                    Here, we connect enlightened individuals with earthshaking
                    artists who challenge conventions and inspire through their
                    groundbreaking work. Explore and join the journey of
                    artistic evolution.
                </p>
            </div>
        </div>

        <div v-for="artist in featuredArtists" :key="artist.name" class="mb-10">
            <!-- Hero Section -->
            <div
                class="bg-base-200 flex flex-col items-center rounded-lg p-6 shadow-lg md:flex-row"
            >
                <LazyNuxtImg
                    :src="artist.photo"
                    :alt="artist.name"
                    quality="80"
                    format="webp"
                    class="w-full rounded-lg shadow-md md:w-1/3"
                />
                <div class="mt-4 md:mt-0 md:ml-6">
                    <h2 class="text-3xl font-bold">{{ artist.name }}</h2>
                    <p class="text-base-content mt-2">{{ artist.bio }}</p>
                </div>
            </div>

            <!-- Videos Section -->
            <div
                class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                <div
                    v-for="video in artist.videos"
                    :key="video.id"
                    class="music-card bg-base-200 rounded-lg p-5 shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                    <videoplayer
                        :video-id="video.id"
                        class="animate-fade-in shadow-eg h-64 w-full rounded-lg lg:h-96"
                    />
                    <h3 class="mb-2 text-lg font-semibold sm:text-xl">
                        {{ video.title }}
                    </h3>
                    <p class="text-base-content mb-4 text-sm sm:text-base">
                        {{ video.description }}
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-10 text-center">
            <h2 class="text-2xl font-bold">Join the Movement</h2>
            <div class="card-body bg-base-200 mt-4 shadow">
                <p class="text-base-content mx-auto mt-4 max-w-xl text-lg">
                    Are you an artist or a fan who wants to lead the charge in
                    the music revolution? Sign up for our email list and stay
                    connected with the latest updates, events, and
                    opportunities.
                </p>
            </div>
            <div class="mt-6">
                <contactform />
            </div>
        </div>
    </div>
</template>

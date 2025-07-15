<script setup lang="ts">
useSeoMeta({
    title: "Alternate Era Blog",
    description: "Alternate Era Blog",
    ogTitle: "Alternate Era Blog",
    ogDescription: "Alternate Era Blog",
    ogImage: "/og-image.png",
});
</script>

<template>
    <article
        class="prose prose-xl dark:prose-invert mx-auto mt-8 flex flex-col items-center text-center"
    >
        <h1>Blog</h1>

        <div>
            <div>
                <NuxtLink to="/devlog">Dev Log</NuxtLink>
            </div>
        </div>

        <p>
            Welcome to the <strong>Alternate Era</strong> blog! We will post
            various updates and stories here to highlight the exciting projects
            that we are working on. Alternate Era is more than just a band, we
            are a full brand that seeks to create compelling media content that
            aligns with the Alternate Era movement and world view.
        </p>

        <h2>Music Releases</h2>

        <p>
            Coming up soon will be our latest single <em>Sway With Me</em>! This
            song will be releasing on <strong>July 5th 2025</strong> and will be
            available on all major streaming platforms.
        </p>

        <NuxtImg
            src="https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/AlbumCovers/SwayWithMeCover.webp"
            alt="Sway With Me Album Cover"
            class="my-6 rounded-xl shadow-lg"
        />

        <h2>Dev Log</h2>

        <p>
            Ross A.M. is working very hard on our upcoming Alternate Era themed
            video game! Read more about it here at
            <NuxtLink to="/devlog" class="link link-hover link-accent"
                >devlog</NuxtLink
            >
        </p>
    </article>
</template>

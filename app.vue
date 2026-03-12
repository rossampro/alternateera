<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
useHead({
    title: "Alternate Era",
    htmlAttrs: {
        lang: "en",
        "data-theme": "cosmicVoid",
        class: "dark"
    },
    meta: [
        {
            name: "description",
            content: "Official website for Alternate Era",
        },
        {
            name: "facebook-domain-verification",
            content: "p8074ww5ycdocb8c9pdyvo2m35bh89",
        },
    ],
});

useSeoMeta({
    title: "Alternate Era",
    description: "Official website for Alternate Era",
});
</script>
<template>
    <div>
        <Analytics></Analytics>
        <NuxtLayout>
            <LazyNuxtLoadingIndicator />
            <LazyNuxtPage />
        </NuxtLayout>
    </div>
</template>

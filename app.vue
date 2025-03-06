<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
useHead({
    title: "Alternate Era",
    meta: [
        {
            name: "description",
            content: "Official website for Alternate Era"
        }
    ]
})

useSeoMeta({
    title: "Alternate Era",
    description: "Official website for Alternate Era"

})
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

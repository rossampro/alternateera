<script setup lang="ts">
const props = defineProps({
    filename: String,
    credits: String,
});
</script>

<template>
    <div class="mockup-browser border-base-300 bg-base-300 border">
        <div class="mockup-browser-toolbar">
            <NuxtLink to="https://www.alternateera.com" class="link link-hover">
                alternateera.com
            </NuxtLink>
        </div>
        <div>
            <LazyNuxtImg :src="filename" />
            <div class="prose text-center">
                <NuxtLink
                    to="https://www.jackielynnphoto.com/"
                    class="link link-hover"
                >
                    © {{ credits }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const links = GetSocialLinks();
</script>
<template>
    <div class="prose hero-content m-auto flex md:flex-col flex-row text-center">
        <div class="flex justify-center flex-wrap gap-4">
            <div v-for="link in links" :key="link.uri">
                <NuxtLink :to="link.uri"
                    class="btn btn-circle join-item from-primary via-secondary to-accent transform transition-transform hover:scale-110 hover:bg-gradient-to-r">
                    <Icon :name="link.icon" class="text-base-content text-2xl"></Icon>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const links = GetSocialLinks();
</script>
<template>
    <div class="flex flex-col m-auto prose text-center hero-content">
        <div class="join">
            <div v-for="link in links">
                <NuxtLink :to="link.uri" class="btn btn-circle join-item">
                    <Icon :name="link.icon"></Icon>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

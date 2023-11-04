<script setup lang="ts">

const isOpen = ref(false);

</script>
<template>
    <div class="navbar bg-secondary border-primary">
        <div class="navbar-start">
            <UIcon name="i-heroicons-bars-3-bottom-left" @click="isOpen = true" class="btn rounded-btn" />

            <USlideover v-model="isOpen" side="left" :transition="false">
            </USlideover>
        </div>
        <div class="navbar-center">
            <LazyNuxtLink to="/" class="btn btn-ghost">
                <NuxtPicture width="100" height="50" format="webp" src="/alteralogotransparent.png" />
            </LazyNuxtLink>
        </div>
        <div class="navbar-end">
            <label>
                <UIcon name="i-heroicons-beaker" />
            </label>
        </div>
    </div>
</template>

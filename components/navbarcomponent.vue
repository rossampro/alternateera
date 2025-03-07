<script setup lang="ts">
</script>
<template>
    <div class="navbar bg-secondary border-base-100">
        <div class="navbar-start">
            <label class="btn btn-ghost btn-circle">
                <LazyNuxtLink to="/">
                    <Icon name="heroicons:home-solid" class="w-8 h-8"></Icon>
                </LazyNuxtLink>
            </label>

            <label class="btn btn-ghost btn-circle">
                <LazyNuxtLink to="/music">
                    <Icon name="heroicons:musical-note-solid" class="w-8 h-8"></Icon>
                </LazyNuxtLink>
            </label>
            <!--
            <label class="btn btn-ghost btn-circle">
                <LazyNuxtLink to="/videos">
                    <Icon name="heroicons:video-camera-solid" class="w-8 h-8"></Icon>
                </LazyNuxtLink>
            </label>
            -->
        </div>
        <div class="navbar-center">
            <LazyNuxtLink to="/" class="btn btn-ghost">
                <NuxtPicture width="100" height="50" format="webp" src="/alteralogotransparent.png" />
            </LazyNuxtLink>
        </div>
        <div class="navbar-end">
        </div>
    </div>
</template>

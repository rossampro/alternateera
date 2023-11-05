<script setup lang="ts">
</script>
<template>
    <div class="navbar bg-secondary border-base-100">
        <div class="navbar-start">
            <Icon name="heroicons:home" class="btn rounded-btn" />
        </div>
        <div class="navbar-center">
            <LazyNuxtLink to="/" class="btn btn-ghost">
                <NuxtPicture width="100" height="50" format="webp" src="/alteralogotransparent.png" />
            </LazyNuxtLink>
        </div>
        <div class="navbar-end">
            <Colorchanger />
        </div>
    </div>
</template>

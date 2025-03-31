<script setup lang="ts"></script>
<template>
    <div
        class="navbar from-primary via-neutral to-primary border-accent border-b-2 bg-gradient-to-r shadow-lg"
    >
        <div class="navbar-start flex space-x-4">
            <LazyNuxtLink
                to="/"
                class="btn btn-ghost btn-circle hover:bg-accent transition duration-300"
            >
                <Icon
                    name="heroicons:home-solid"
                    class="text-base-content h-6 w-6"
                ></Icon>
            </LazyNuxtLink>

            <!-- <LazyNuxtLink
                to="/music"
                class="btn btn-ghost btn-circle hover:bg-accent transition duration-300"
            >
                <Icon
                    name="heroicons:musical-note-solid"
                    class="text-base-content h-6 w-6"
                ></Icon>
            </LazyNuxtLink> -->
        </div>
        <div class="navbar-center">
            <LazyNuxtLink to="/" class="flex items-center justify-center">
                <NuxtPicture
                    width="120"
                    height="60"
                    format="webp"
                    src="/alteralogotransparent.png"
                    class="transition-transform duration-300 hover:scale-110"
                />
            </LazyNuxtLink>
        </div>
        <div class="navbar-end flex space-x-4">
            <LazyNuxtLink
                to="/#contact"
                class="btn btn-ghost btn-circle hover:bg-accent transition duration-300"
            >
                <Icon
                    name="heroicons:envelope"
                    class="text-base-content h-6 w-6"
                ></Icon>
            </LazyNuxtLink>
        </div>
    </div>
</template>

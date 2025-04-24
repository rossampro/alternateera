<template>
    <footer class="bg-base-100 py-4">
        <div class="container mx-auto px-4 text-center">
            <div class="mb-4">
                <ul
                    class="flex list-none flex-col md:flex-row md:justify-center md:space-x-4"
                >
                    <li>
                        <NuxtLink class="link link-hover" to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="link link-hover" to="/featuredartists"
                            >Featured Artists</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink class="link link-hover" to="/epk"
                            >EPK</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink class="link link-hover" to="/music"
                            >Music</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink class="link link-hover" to="/videos"
                            >Videos</NuxtLink
                        >
                    </li>
                </ul>
            </div>
            <p class="text-base-content">
                &copy; {{ new Date().getFullYear() }} Alternate Era. All rights
                reserved.
            </p>
        </div>
    </footer>
</template>

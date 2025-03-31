<template>
    <div class="container mx-auto px-4 py-12">
        <!-- Header Section -->
        <div class="mb-12 text-center">
            <h1 class="text-primary mb-4 text-4xl font-bold md:text-5xl">
                Our Releases
            </h1>
            <p class="text-base-content mx-auto max-w-2xl text-lg md:text-xl">
                Explore our collection of genre-defying tracks that blend
                hip-hop, electronic, and experimental rock.
            </p>
        </div>

        <!-- Music Grid -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <!-- Music Card 1 -->
            <div
                class="group bg-base-200 relative transform overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
                <div class="relative aspect-square overflow-hidden">
                    <div
                        class="from-base-200/80 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    ></div>
                    <!-- <img
                        src="/path-to-album-art-1.jpg"
                        alt="Sway With Me Album Art"
                        class="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
                    /> -->
                </div>
                <div class="p-6">
                    <h3 class="text-primary mb-2 text-2xl font-bold">
                        Sway With Me
                    </h3>
                    <p class="text-base-content mb-4">Upcoming Single</p>
                    <div class="mb-4 flex flex-wrap gap-2">
                        <span
                            class="bg-primary/20 text-primary rounded-full px-3 py-1 text-sm"
                            >Psychedelic</span
                        >
                        <span
                            class="bg-secondary/20 text-secondary rounded-full px-3 py-1 text-sm"
                            >Soundscape</span
                        >
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-base-content/70 text-sm"
                            >Release Date: Coming Soon</span
                        >
                        <button
                            class="btn btn-primary hover:bg-secondary transform transition-transform hover:scale-105"
                        >
                            Preview
                        </button>
                    </div>
                </div>
            </div>

            <!-- Music Card 2 -->
            <div
                class="group bg-base-200 relative transform overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
                <div class="relative aspect-square overflow-hidden">
                    <div
                        class="from-base-200/80 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    ></div>
                    <!-- <img
                        src="/path-to-album-art-2.jpg"
                        alt="King of the Jungle Album Art"
                        class="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
                    /> -->
                </div>
                <div class="p-6">
                    <h3 class="text-primary mb-2 text-2xl font-bold">
                        King of the Jungle
                    </h3>
                    <p class="text-base-content mb-4">Latest Release</p>
                    <div class="mb-4 flex flex-wrap gap-2">
                        <span
                            class="bg-accent/20 text-accent rounded-full px-3 py-1 text-sm"
                            >High Energy</span
                        >
                        <span
                            class="bg-warning/20 text-warning rounded-full px-3 py-1 text-sm"
                            >Stone Age</span
                        >
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-base-content/70 text-sm"
                            >Released: 2024</span
                        >
                        <button
                            class="btn btn-primary hover:bg-secondary transform transition-transform hover:scale-105"
                        >
                            Listen Now
                        </button>
                    </div>
                </div>
            </div>

            <!-- Music Card 3 -->
            <div
                class="group bg-base-200 relative transform overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
                <div class="relative aspect-square overflow-hidden">
                    <div
                        class="from-base-200/80 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    ></div>
                    <!-- <img
                        src="/path-to-album-art-3.jpg"
                        alt="Let's Start A Cult Album Art"
                        class="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
                    /> -->
                </div>
                <div class="p-6">
                    <h3 class="text-primary mb-2 text-2xl font-bold">
                        Let's Start A Cult
                    </h3>
                    <p class="text-base-content mb-4">Fan Favorite</p>
                    <div class="mb-4 flex flex-wrap gap-2">
                        <span
                            class="bg-error/20 text-error rounded-full px-3 py-1 text-sm"
                            >Cult Classic</span
                        >
                        <span
                            class="bg-info/20 text-info rounded-full px-3 py-1 text-sm"
                            >Gyrrgy</span
                        >
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-base-content/70 text-sm"
                            >Released: 2023</span
                        >
                        <button
                            class="btn btn-primary hover:bg-secondary transform transition-transform hover:scale-105"
                        >
                            Listen Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

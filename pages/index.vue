<script setup lang="ts">
const img = useImage();

const bgImg = computed(() => {
    const imgUrl = img("/Jan24th25-12.webp");
    return `background-image: url(${imgUrl}); fixed; cover;`;
});

</script>
<template>
    <div>
        <!-- Hero Section -->
        <div class="hero min-h-screen bg-cover bg-center" :style="bgImg">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-neutral-content text-center">
                <div class="max-w-lg">
                    <h1 class="mb-5 text-5xl font-bold">
                        Welcome to Alternate Era
                    </h1>
                    <p class="mb-5">
                        Experience the fusion of hip-hop, electronic, and
                        experimental rock.
                    </p>
                    <Socialmediacomponent />
                </div>
            </div>
        </div>

        <!-- About Section -->
        <div id="about" class="bg-base-200 py-10">
            <div class="container mx-auto px-4">
                <Aboutcomponent />
            </div>
        </div>

        <!-- Music Section -->
        <div id="music" class="bg-base-100 py-10">
            <div class="container mx-auto px-4">
                <h2 class="mb-5 text-center text-3xl font-bold">Our Music</h2>
                <div
                    class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
                >
                    <div
                        class="music-card bg-base-200 rounded-lg p-5 shadow-lg transition-shadow duration-300 hover:shadow-xl"
                    >
                        <iframe
                            class="animate-fade-in h-64 w-full rounded-lg shadow-lg lg:h-96"
                            src="https://www.youtube.com/embed/JNdUTsWolgE"
                            title="Sway With Me (ft Ross A.M.) by Alternate Era"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                        <h3 class="mb-2 text-lg font-semibold sm:text-xl">
                            Sway With Me
                        </h3>
                        <p class="text-base-content mb-4 text-sm sm:text-base">
                            Upcoming Single to be released soon!
                        </p>
                        <p class="text-base-content mb-4 text-sm sm:text-base">
                            Psychedelic Soundscape, perfect for a late night
                            drive through the desert
                        </p>
                        <NuxtLink
                            to="https://youtu.be/JNdUTsWolgE?si=RUWF2xAHWwGJhsqG"
                        >
                            <button
                                class="btn btn-primary hover:bg-secondary w-full transform transition-transform hover:scale-105"
                            >
                                Listen Now
                            </button>
                        </NuxtLink>
                    </div>
                    <div
                        class="music-card bg-base-200 rounded-lg p-5 shadow-lg transition-shadow duration-300 hover:shadow-xl"
                    >
                        <iframe
                            class="animate-fade-in h-64 w-full rounded-lg shadow-lg lg:h-96"
                            src="https://www.youtube.com/embed/jmSAeINdo1Y?si=ReuoCoLp75BixZkU"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                        <h3 class="mb-2 text-lg font-semibold sm:text-xl">
                            King of the Jungle
                        </h3>
                        <p class="text-base-content mb-4 text-sm sm:text-base">
                            Channel your inner animal with this high energy, in
                            your face track
                        </p>
                        <p class="text-base-content mb-4 text-sm sm:text-base">
                            Return to the stone age
                        </p>
                        <NuxtLink
                            to="https://link.alternateera.com/kingofthejungle"
                        >
                            <button
                                class="btn btn-primary hover:bg-secondary w-full transform transition-transform hover:scale-105"
                            >
                                Listen Now
                            </button>
                        </NuxtLink>
                    </div>
                    <div
                        class="music-card bg-base-200 rounded-lg p-5 shadow-lg transition-shadow duration-300 hover:shadow-xl"
                    >
                        <iframe
                            class="animate-fade-in h-64 w-full rounded-lg shadow-lg lg:h-96"
                            src="https://www.youtube.com/embed/GTX06Ytp9rw?si=4REeESkG6wJYEflA"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                        <h3 class="mb-2 text-lg font-semibold sm:text-xl">
                            Let's Start A Cult
                        </h3>
                        <p class="text-base-content mb-4 text-sm sm:text-base">
                            Join our cult as we lead the charge into bringing
                            back Gyrrgy
                        </p>
                        <p class="text-base-content mb-4 text-sm sm:text-base">
                            Gyrrgy will be back soon
                        </p>
                        <NuxtLink
                            to="https://link.alternateera.com/letsstartacult"
                        >
                            <button
                                class="btn btn-primary hover:bg-secondary w-full transform transition-transform hover:scale-105"
                            >
                                Listen Now
                            </button>
                        </NuxtLink>
                    </div>
                    <!-- Add more music cards as needed -->
                </div>
            </div>
        </div>

        <!-- Contact Section -->
        <div id="contact" class="bg-base-200 py-10">
            <div class="container mx-auto px-4">
                <h2 class="mb-5 text-center text-3xl font-bold">Contact Us</h2>
                <Contactform />
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-base-100 py-4">
            <div class="container mx-auto px-4 text-center">
                <p class="text-base-content">
                    &copy; {{ new Date().getFullYear() }} Alternate Era. All
                    rights reserved.
                </p>
            </div>
        </footer>
    </div>
</template>

<style>
@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-out;
}

.animate-slide-in {
    animation: slide-in 0.5s ease-out;
}
</style>

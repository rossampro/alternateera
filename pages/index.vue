<script setup lang="ts">
useSeoMeta({
    title: "Alternate Era | Refined Chaos",
    description: "Alternate Era Entertainment. Skits, Music, Gaming, and pure chaos.",
    ogTitle: "Alternate Era | Refined Chaos",
    ogDescription: "Alternate Era Entertainment. Skits, Music, Gaming, and pure chaos.",
});

const img = useImage();

const ogImage = computed(() => {
    const imgUrl = img(
        "https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/OgImages/homePageOG.png"
    );
    return `background-image: url(${imgUrl}); fixed; cover;`;
});

defineOgImageComponent("AeOg", {
    image: ogImage.value,
});

defineWebPage({
    name: "Alternate Era | Refined Chaos",
    description: "Alternate Era Entertainment. Skits, Music, Gaming, and pure chaos.",
    publisher: {
        "@id": "#identity"
    }
});

const bgImg = computed(() => {
    const imgUrl = img(
        "https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/Jan24th25Photos/Jan24th25-12.webp"
    );
    return `background-image: url(${imgUrl}); background-attachment: fixed; background-size: cover; background-position: center;`;
});

// Fetch latest gaming videos
const { data: youtubeData } = await useFetch('/api/youtube');
</script>

<template>
    <div class="bg-base-100">
        <!-- Hero Section -->
        <section id="hero" class="hero min-h-screen relative overflow-hidden" :style="bgImg">
            <div class="hero-overlay bg-base-300/80 backdrop-blur-sm z-0"></div>
            
            <!-- decorative background elements -->
            <div class="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-20 -left-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div class="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl bottom-10 right-10 animate-[pulse_5s_ease-in-out_infinite]" style="animation-delay: 1s;"></div>
            
            <div class="hero-content text-center z-10 flex-col">
                <div class="max-w-3xl">
                    <h1 class="mb-5 text-6xl md:text-8xl font-black uppercase tracking-tighter glitch-text text-base-content" data-text="Alternate Era">
                        Alternate Era
                    </h1>
                    <p class="mb-8 text-xl md:text-2xl font-bold tracking-widest text-secondary text-neon">
                        ENTERTAINMENT // REFINED CHAOS
                    </p>
                    <div class="flex flex-wrap justify-center gap-4 mb-10">
                        <a href="#skits" class="btn btn-outline border-primary text-primary-content hover:bg-primary hover:text-base-100 box-neon-primary rounded-none border-2">Skits</a>
                        <a href="#music" class="btn btn-outline border-secondary text-secondary-content hover:bg-secondary hover:text-base-100 box-neon-secondary rounded-none border-2">Music</a>
                        <a href="#gaming" class="btn btn-outline border-accent text-accent-content hover:bg-accent hover:text-base-100 box-neon-accent rounded-none border-2">Gaming</a>
                        <a href="/about" class="btn btn-outline border-secondary text-secondary-content hover:bg-secondary hover:text-base-100 box-neon-secondary rounded-none border-2">About</a>
                        <a href="https://alternate-era.printify.me/" target="_blank" rel="noopener noreferrer" class="btn btn-outline border-primary text-primary-content hover:bg-primary hover:text-base-100 box-neon-primary rounded-none border-2">Store</a>
                    </div>
                </div>
                <div class="mt-12 animate-bounce">
                    <a href="#skits" class="text-base-content/50 hover:text-primary transition-colors">
                        <Icon name="heroicons:chevron-down" class="w-10 h-10" />
                    </a>
                </div>
            </div>
        </section>

        <!-- Gaming Section -->
        <section id="gaming" class="py-24 bg-base-300 relative border-y border-accent/30 overflow-hidden">
             <!-- decorative elements -->
             <div class="absolute -left-48 top-20 w-96 h-96 border-4 border-accent/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
             <div class="absolute right-10 bottom-10 text-accent/5 font-black text-9xl pointer-events-none select-none">GG</div>

             <div class="container mx-auto px-4 relative z-10">
                <div class="flex flex-col lg:flex-row items-center gap-12">
                    <div class="flex-1 text-center lg:text-left">
                        <h2 class="text-5xl font-black mb-4 uppercase tracking-widest text-accent text-neon">Gaming</h2>
                        <h3 class="text-2xl font-bold mb-6">Live Streams & Lets Plays</h3>
                        <p class="text-lg text-base-content/80 mb-8 max-w-xl mx-auto lg:mx-0">
                            Watch us fail spectacularly at the hardest games, rage quit, and occasionally do something incredibly sick. Catch us live on YouTube or check out the VODs.
                        </p>
                        <div class="flex gap-4 justify-center lg:justify-start">
                            <a href="https://youtube.com/@alternateeraofficial" target="_blank" class="btn btn-accent btn-lg box-neon-accent rounded-none">
                                <Icon name="simple-icons:youtube" class="w-6 h-6 mr-2" />
                                Subscribe on YouTube
                            </a>
                        </div>
                    </div>
                    <div class="flex-1 w-full">
                        <div v-if="youtubeData?.videos && youtubeData.videos.length > 0" class="aspect-video bg-base-100/50 backdrop-blur rounded-box border border-accent/50 box-neon shadow-2xl overflow-hidden group">
                           <videoplayer :video-id="youtubeData.videos[0].id" class="w-full h-full object-cover" />
                        </div>
                        <div v-else class="aspect-video bg-base-100/50 backdrop-blur rounded-box border border-accent/50 box-neon shadow-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
                           <div class="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <Icon name="simple-icons:youtube" class="w-20 h-20 text-base-content/20 mb-4 group-hover:text-accent transition-colors duration-500" />
                           <h4 class="text-2xl font-bold text-base-content/50 group-hover:text-base-content transition-colors duration-500">More Coming Soon</h4>
                           <p class="text-base-content/40 mt-2 font-mono">Check back for the latest uploads!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skits Section -->
        <section id="skits" class="py-24 bg-base-200 relative border-t border-primary/30">
            <div class="container mx-auto px-4 z-10 relative">
                <div class="text-center mb-16">
                    <h2 class="text-5xl font-black mb-4 uppercase tracking-widest text-primary text-neon">Skits</h2>
                    <p class="text-xl text-base-content/70 max-w-2xl mx-auto">Unfiltered comedy, short films, and absolute madness.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="card bg-base-100 shadow-2xl overflow-hidden box-neon hover:scale-[1.02] transition-transform duration-300 border border-base-300">
                        <div class="aspect-video bg-neutral flex items-center justify-center relative group">
                            <div class="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                            <videoplayer video-id="ASw7c7ORGaw" class="w-full h-full object-cover" />
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-2xl font-bold">ROSS IS KING OF THE ROCK?</h3>
                            <p class="text-base-content/80">You won't imagine what happens next!!!!</p>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-2xl overflow-hidden box-neon hover:scale-[1.02] transition-transform duration-300 border border-base-300">
                        <div class="aspect-video bg-neutral flex items-center justify-center relative group">
                            <div class="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                            <videoplayer video-id="WTghfG1i3og" class="w-full h-full object-cover" />
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-2xl font-bold">WHEN YOUR CAT TRIES TO MIRDER YOU</h3>
                            <p class="text-base-content/80">Nova is cute but also terrifying!</p>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-12">
                     <button class="btn btn-primary btn-lg rounded-none box-neon-primary">View All Skits on YouTube</button>
                </div>
            </div>
        </section>

        <!-- Music Section -->
        <section id="music" class="py-24 bg-base-100 relative border-t border-secondary/30">
            <!-- decorative bg -->
            <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div class="container mx-auto px-4 relative z-10">
                <div class="text-center mb-16">
                    <h2 class="text-5xl font-black mb-4 uppercase tracking-widest text-secondary text-neon">Music</h2>
                    <p class="text-xl text-base-content/70 max-w-2xl mx-auto">The sonic foundation of the Alternate Era.</p>
                </div>
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="card bg-base-200 shadow-2xl box-neon-secondary group overflow-hidden border border-base-300 hover:-translate-y-2 transition-transform duration-300">
                        <figure class="px-4 pt-4 relative">
                            <div class="absolute inset-0 bg-gradient-to-t from-base-200 to-transparent z-10"></div>
                            <videoplayer
                                video-id="uIm_N5IyAYo"
                                class="h-48 md:h-64 w-full rounded-box object-cover shadow-lg relative z-20"
                            />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h3 class="card-title text-2xl font-bold group-hover:text-secondary transition-colors">Sway With Me</h3>
                            <p class="text-sm opacity-80 mb-4">Psychedelic Soundscape, perfect for a late night drive through the desert.</p>
                            <div class="card-actions w-full">
                                <NuxtLink to="https://youtu.be/JNdUTsWolgE?si=RUWF2xAHWwGJhsqG" target="_blank" class="btn btn-secondary w-full rounded-none">
                                    Listen Now
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-base-200 shadow-2xl box-neon-secondary group overflow-hidden border border-base-300 hover:-translate-y-2 transition-transform duration-300">
                        <figure class="px-4 pt-4 relative">
                            <div class="absolute inset-0 bg-gradient-to-t from-base-200 to-transparent z-10"></div>
                            <videoplayer
                                video-id="jmSAeINdo1Y"
                                class="h-48 md:h-64 w-full rounded-box object-cover shadow-lg relative z-20"
                            />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h3 class="card-title text-2xl font-bold group-hover:text-secondary transition-colors">King of the Jungle</h3>
                            <p class="text-sm opacity-80 mb-4">Channel your inner animal with this high energy, in your face track.</p>
                            <div class="card-actions w-full">
                                <NuxtLink to="https://link.alternateera.com/kingofthejungle" target="_blank" class="btn btn-secondary w-full rounded-none">
                                    Listen Now
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-base-200 shadow-2xl box-neon-secondary group overflow-hidden border border-base-300 hover:-translate-y-2 transition-transform duration-300">
                        <figure class="px-4 pt-4 relative">
                            <div class="absolute inset-0 bg-gradient-to-t from-base-200 to-transparent z-10"></div>
                            <videoplayer
                                video-id="GTX06Ytp9rw"
                                class="h-48 md:h-64 w-full rounded-box object-cover shadow-lg relative z-20"
                            />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h3 class="card-title text-2xl font-bold group-hover:text-secondary transition-colors">Let's Start A Cult</h3>
                            <p class="text-sm opacity-80 mb-4">Join our cult as we lead the charge into bringing back Gyrrgy.</p>
                            <div class="card-actions w-full">
                                <NuxtLink to="https://link.alternateera.com/letsstartacult" target="_blank" class="btn btn-secondary w-full rounded-none">
                                    Listen Now
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-24 bg-base-100 relative">
            <div class="container mx-auto px-4">
                <div class="max-w-2xl mx-auto bg-base-200 p-8 md:p-12 rounded-2xl border border-primary/30 shadow-2xl box-neon-primary relative overflow-hidden group hover:border-primary transition-colors">
                    <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent group-hover:w-2 transition-all"></div>
                    <h2 class="text-4xl font-black mb-2 uppercase tracking-wide text-center">Join The Cult</h2>
                    <p class="text-center text-base-content/70 mb-8">Get the latest skits, music drops, and stream schedules before anyone else.</p>
                    
                    <div class="relative z-10 w-full">
                        <Contactform />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "About Us | Alternate Era",
    description: "Learn about the founders and the story of Alternate Era.",
    ogTitle: "About Us | Alternate Era",
    ogDescription: "Learn about the founders and the story of Alternate Era.",
});

const img = useImage();

const bgImg = computed(() => {
    const imgUrl = img(
        "https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/Jan24th25Photos/Jan24th25-14.webp"
    );
    return `background-image: url(${imgUrl}); background-attachment: fixed; background-size: cover; background-position: center;`;
});

const rossImg = computed(() => {
    return img("https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/About/ross_profile.webp");
});

const clockImg = computed(() => {
    return img("https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/About/c_lock_profile.png");
});
</script>

<template>
    <div class="bg-base-100">
        <!-- Joint Hero Section -->
        <section id="about-hero" class="hero min-h-screen relative overflow-hidden" :style="bgImg">
            <div class="hero-overlay bg-base-300/80 backdrop-blur-sm z-0"></div>
            
            <!-- decorative background elements -->
            <div class="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-20 -left-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div class="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl bottom-10 right-10 animate-[pulse_5s_ease-in-out_infinite]" style="animation-delay: 1s;"></div>
            
            <div class="hero-content text-center z-10 flex-col">
                <div class="max-w-4xl bg-base-200/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-primary/30 box-neon shadow-2xl">
                    <h1 class="mb-5 text-5xl md:text-7xl font-black uppercase tracking-tighter glitch-text text-base-content" data-text="Alternate Era">
                        Alternate Era
                    </h1>
                    <p class="mb-8 text-xl md:text-2xl font-bold tracking-widest text-secondary text-neon">
                        ENTERTAINMENT // REFINED CHAOS
                    </p>
                    <div class="text-left text-lg md:text-xl space-y-6 text-base-content/90 font-medium">
                        <p>
                            Alternate Era was founded in 2018 by Ross A.M. and C-Lock the Watchman. What started as a band slowly transformed into an entire multi-media entertainment conglomerate.
                        </p>
                        <p>
                            Our previous music includes releases like 2018's "Ascension" and 2019's "Trips on the Space Whip." We have continued to push forward with our latest 2025 single "Sway With Me" and our upcoming "Level Up" album in 2026.
                        </p>
                        <p>
                            The transition to YouTube streaming was a natural shift. Super Smash Bros was always a core tenet of Ross and C-Lock's friendship together, and bringing that dynamic online expanded what we do into a broader entertainment space.
                        </p>
                        <p>
                            As Alternate Era continues to grow, we continue to push the boundaries of what we can do. From music to skits to gaming, we are always looking for new ways to entertain our audience.
                        </p>
                    </div>
                </div>
                <div class="mt-12 animate-bounce">
                    <a href="#founder-ross" class="text-base-content/50 hover:text-primary transition-colors">
                        <Icon name="heroicons:chevron-down" class="w-10 h-10" />
                    </a>
                </div>
            </div>
        </section>

        <!-- Founder: Ross A.M. -->
        <section id="founder-ross" class="py-24 bg-base-300 relative border-y border-primary/30 overflow-hidden">
             <div class="absolute -left-48 top-20 w-96 h-96 border-4 border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
             <div class="absolute right-10 bottom-10 text-primary/5 font-black text-9xl pointer-events-none select-none">SD</div>

             <div class="container mx-auto px-4 relative z-10">
                <div class="flex flex-col lg:flex-row items-center gap-12">
                    <div class="flex-1 w-full order-2 lg:order-1">
                        <div class="aspect-[4/5] md:aspect-video lg:aspect-[4/5] bg-base-100/50 backdrop-blur rounded-box border border-primary/50 box-neon-primary shadow-2xl overflow-hidden group">
                           <img :src="rossImg" alt="Ross A.M." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                    <div class="flex-1 text-center lg:text-left order-1 lg:order-2">
                        <h2 class="text-5xl font-black mb-2 uppercase tracking-widest text-primary text-neon">Ross A.M.</h2>
                        <h3 class="text-2xl font-bold mb-6 text-base-content/80">Producer / Multi-Instrumentalist / Singer</h3>
                        <div class="text-lg text-base-content/80 space-y-4 mb-8 max-w-xl mx-auto lg:mx-0">
                            <p>
                                The man, the myth, the Ross A.M. Truly a jack of all trades, Ross is the musical and organizational force behind Alternate Era. 
                            </p>
                            <p>
                                Born and raised in San Diego, California. Ross A.M. represents becoming within the chaos of life. From the moment he was a young boy he always knew that music and entertainment was his calling.
                            </p>
                            <p>
                                He has been playing instruments since he was 16 years old, and has been producing music since he was 17. He is a multi-instrumentalist, and can play guitar, bass, drums, and keyboards. He is also a singer, and has a range of 3 octaves.
                            </p>
                            <p>
                                Today, Ross focuses on driving Alternate Era forward, producing music, and creating content for the YouTube channel. The Alternate Era drums bang louder and louder everyday, <strong>can you hear them?</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Founder: C-Lock The Watchman -->
        <section id="founder-clock" class="py-24 bg-base-200 relative border-b border-secondary/30 overflow-hidden">
             <div class="absolute -right-48 top-20 w-96 h-96 border-4 border-secondary/20 rounded-full animate-[spin_20s_linear_reverse_infinite]"></div>
             <div class="absolute left-10 bottom-10 text-secondary/5 font-black text-9xl pointer-events-none select-none">NY</div>

             <div class="container mx-auto px-4 relative z-10">
                <div class="flex flex-col lg:flex-row items-center gap-12">
                    <div class="flex-1 text-center lg:text-right">
                        <h2 class="text-5xl font-black mb-2 uppercase tracking-widest text-secondary text-neon">C-Lock</h2>
                        <h3 class="text-2xl font-bold mb-6 text-base-content/80">The Watchman / Lyricist</h3>
                        <div class="text-lg text-base-content/80 space-y-4 mb-8 max-w-xl mx-auto lg:mx-0 lg:ml-auto">
                            <p>
                                Repping <strong>Manhattan, NY</strong>, C-Lock delivers the raw, high-energy lyricism that cuts straight through the noise.
                            </p>
                            <p>
                                Bringing the East Coast grit to the Alternate Era universe, his sharp bars and commanding presence anchor the experimental chaos into something tangible and hard-hitting.
                            </p>
                        </div>
                    </div>
                    <div class="flex-1 w-full">
                        <div class="aspect-[4/5] md:aspect-video lg:aspect-[4/5] bg-base-100/50 backdrop-blur rounded-box border border-secondary/50 box-neon-secondary shadow-2xl overflow-hidden group">
                           <img :src="clockImg" alt="C-Lock The Watchman" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

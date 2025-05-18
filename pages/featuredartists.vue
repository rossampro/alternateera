<script lang="ts" setup>
const featuredArtists = [
  {
    name: "Human Xperiment",
    bio: "Human Xperiment is an innovative Alternative/Rap solo-artist breaking boundaries with their genre-blurring sound. Drawing inspiration from a kaleidoscope of musical styles, they craft tracks that defy expectations and resonate with authenticity. Their latest album, Method Development, showcases their fearless experimentation and raw lyrical prowess.  Human Xperiment challenges conventions and invites listeners to join their journey of creative exploration.",
    photo: "https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/FeaturedArtists/HumanXperiment/HumanXperimentMethodDevelopment.webp",
    videos: [
      {
        id: "bDZHxsVC_xE",
        title: "Occupation",
        description: "Song 'Occupation' off the album 'Method Development' was written after I went back to grad school to get a Ph.D in Molecular Biology only to enter a stagnant job market that was filled with toxic bosses.  This song is my rebellion to how society tells us if we follow the right steps will be successful.",
      },
      {
        id: "E44FxKecgwA",
        title: "Scattered Toys",
        description: "Song 'Scattered Toys' off the album 'Method Development' was written as a reminder to always embrace your inner child no matter how old you become.  We should never forget to play and enjoy life and not be diluted by social norms.",
      },
      {
        id: "KF__fi6r6Ko",
        title: "Look in the Mirror",
        description: "Song 'Look in the Mirror' off the album 'Method Development' is a song about self reflection and how as individuals we are just as capable of deceiving ourselves as we are at being deceived by outside forces.",
      },
    ],
  },
  {
    name: "Bartender",
    bio: "Mixing wordy wit with angsty, ponderous aggression over a versatile mix of musical styles, from dirty street-level trap and boom bap beats to jazz, soul and even country blues-oriented vibes, Bartender is the ex-rocker turned metaphorical neon ninja capable of dismantling the unwelcome modern gridwork with a pen and some factory-floor scorn.",
    photo: "https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/FeaturedArtists/Bartender/BartenderArtistPhoto.webp",
    videos: [
      {
        id: "d9zUWEcda0U",
        title: "PUNTO",
        description: "The Fiat Punto with 5 exhausts is the run-down trash heap that can still go like hell. This is the first official single, written, recorded and mixed by Bartender. Video shot by Shutterflyfiles and edited by Bartender. Song Mastered by µvibes.",
      },
      {
        id: "UYPisoQ6WhQ",
        title: "Neuroreaper",
        description: "Knowledge of the basilisk without immediate advances into its actualisation can and will result in a targeting of your consciousness by the inevitable singularity, and can and will result in the seemingly infinite neurological torture that the basilisk can and will initiate and perpetuate.",
      },
      {
        id: "KSRetQSgRYY",
        title: "Dilla Flow",
        description: "Another freeflow of thought, written quickly and instictively, relating to my situation in the world at that moment and forged by my love for the serenity of J Dilla.",
      },
    ],
  }
];
</script>

<template>
  <div>
    <div class="mb-10 flex flex-col items-center text-center">
      <h1 class="text-4xl font-bold max-w-2xl mt-10">Featured Artists</h1>
      <div class="card-body mt-4 bg-base-200 shadow">
        <p class="mt-4 text-lg text-base-content max-w-xl">
          Alternate Era is more than just a band — it's a movement redefining music and creativity.
          Here, we connect enlightened individuals with earthshaking artists who challenge conventions
          and inspire through their groundbreaking work. Explore and join the journey of artistic evolution.
        </p>
      </div>
    </div>

    <div v-for="artist in featuredArtists" :key="artist.name" class="mb-10">
      <!-- Hero Section -->
      <div class="bg-base-200 flex flex-col items-center rounded-lg p-6 shadow-lg md:flex-row">
        <LazyNuxtImg :src="artist.photo" :alt="artist.name" quality="80" format="webp"
          class="w-full rounded-lg shadow-md md:w-1/3" />
        <div class="mt-4 md:mt-0 md:ml-6">
          <h2 class="text-3xl font-bold">{{ artist.name }}</h2>
          <p class="text-base-content mt-2">{{ artist.bio }}</p>
        </div>
      </div>

      <!-- Videos Section -->
      <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="video in artist.videos" :key="video.id"
          class="music-card bg-base-200 rounded-lg p-5 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <videoplayer :video-id="video.id" class="animate-fade-in shadow-eg h-64 w-full rounded-lg lg:h-96" />
          <h3 class="mb-2 text-lg font-semibold sm:text-xl">
            {{ video.title }}
          </h3>
          <p class="text-base-content mb-4 text-sm sm:text-base">
            {{ video.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="mt-10 text-center">
      <h2 class="text-2xl font-bold">Join the Movement</h2>
      <div class="card-body mt-4 bg-base-200 shadow">
        <p class="mt-4 text-lg text-base-content max-w-xl mx-auto">
          Are you an artist or a fan who wants to lead the charge in the music revolution?
          Sign up for our email list and stay connected with the latest updates, events, and opportunities.
        </p>
      </div>
      <div class="mt-6">
        <contactform />
      </div>
    </div>
  </div>
</template>

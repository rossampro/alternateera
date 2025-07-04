<script setup lang="ts">
useSeoMeta({
  title: 'EPK',
  description: "Alternate Era Electronic Press Kit"
})

defineOgImageScreenshot()
const Jan2425Credits = "Jackie Lynn 2025";
import Videoplayer from "@/components/videoplayer.vue";
</script>

<template>
  <div class="bg-base-200 text-base-content mx-auto max-w-4xl rounded-lg p-8 shadow-lg">
    <!-- Header Section -->
    <div class="mb-8 flex flex-col items-center justify-center space-y-4">
      <h2 class="text-primary text-3xl font-bold md:text-4xl">
        Alternate Era
      </h2>
      <h3 class="text-primary text-xl md:text-2xl">
        Electronic Press Kit
      </h3>
    </div>

    <div class="divider"></div>
    <Socialmediacomponent></Socialmediacomponent>
    <div class="divider"></div>
    <biocomponent></biocomponent>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Photobrowsercomponent
        filename="https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/Jan24th25Photos/Jan24th25-27.webp"
        :credits="Jan2425Credits"></Photobrowsercomponent>
      <Photobrowsercomponent
        filename="https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/Jan24th25Photos/Jan24th25-9.webp"
        :credits="Jan2425Credits"></Photobrowsercomponent>
      <Photobrowsercomponent
        filename="https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/Jan24th25Photos/Jan24th25-14.webp"
        :credits="Jan2425Credits"></Photobrowsercomponent>
      <Photobrowsercomponent
        filename="https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/Jan24th25Photos/Jan24th25-17.webp"
        :credits="Jan2425Credits"></Photobrowsercomponent>
    </div>
    <div class="divider"></div>
    <div class="prose m-auto flex flex-col text-center underline">
      <h2 class="text-primary">Media</h2>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="mockup-browser border-base-300 bg-base-300 border">
        <div class="mockup-browser-toolbar">
          <NuxtLink to="https://youtu.be/JNdUTsWolgE" class="link link-hover">
            https://yt.com/swaywithme
          </NuxtLink>
        </div>
        <div class="border-base-300 bg-secondary-focus flex justify-center border-t">
          <Videoplayer video-id="JNdUTsWolgE" />
        </div>
      </div>
      <div class="mockup-browser border-base-300 bg-base-300 border">
        <div class="mockup-browser-toolbar">
          <NuxtLink to="https://youtu.be/jmSAeINdo1Y?si=d76jM25CYFGHoo04" class="link link-hover">
            https://yt.com/kingofthejungle
          </NuxtLink>
        </div>
        <div class="border-base-300 bg-secondary-focus flex justify-center border-t">
          <Videoplayer video-id="jmSAeINdo1Y" />
        </div>
      </div>
      <div class="mockup-browser border-base-300 bg-base-300 border">
        <div class="mockup-browser-toolbar">
          <NuxtLink to="https://youtu.be/Nph92gcaoAs?si=hi323jTH5_dwp5qb" class="link link-hover">
            https://yt.com/drivingtogroovetown
          </NuxtLink>
        </div>
        <div class="border-base-300 bg-secondary-focus flex justify-center border-t">
          <Videoplayer video-id="Nph92gcaoAs" />
        </div>
      </div>
      <div class="mockup-browser border-base-300 bg-base-300 border">
        <div class="mockup-browser-toolbar">
          <NuxtLink to="https://youtu.be/S9PYaI1kI-E?si=_nbuZoOLdc2WP76S" class="link link-hover">
            https://yt.com/RoNLive
          </NuxtLink>
        </div>
        <div class="border-base-300 bg-secondary-focus flex justify-center border-t">
          <Videoplayer video-id="wqE69tC28p8" />
        </div>
      </div>
    </div>
    <div class="divider divider-base-300"></div>
    <div class="prose m-auto flex flex-col text-center underline">
      <h2 class="text-primary">Notable Past Venues</h2>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div class="card bg-base-100 shadow-sm">
        <figure>
          <NuxtLink to="https://www.somasandiego.com">
            <NuxtImg src="/somalogo.webp" class="rounded-lg"></NuxtImg>
          </NuxtLink>
        </figure>
      </div>
      <div class="card bg-base-100 shadow-sm">
        <figure>
          <NuxtLink to="https://info6594074.wixsite.com/thechecafe">
            <NuxtImg src="/checafelogo.webp" class="rounded-lg"></NuxtImg>
          </NuxtLink>
        </figure>
      </div>
      <div class="card bg-base-100 shadow-sm">
        <figure>
          <NuxtLink to="https://www.queenbeessd.com/">
            <NuxtImg src="/queenbees.webp" class="rounded-lg"></NuxtImg>
          </NuxtLink>
        </figure>
      </div>
    </div>
    <div class="prose m-auto flex flex-col text-center underline">
      <h2 class="text-primary">Press</h2>
    </div>
    <div class="mockup-browser border-base-300 bg-base-300 border">
      <div class="mockup-browser-toolbar">
        <NuxtLink to="https://sdvoyager.com/interview/meet-ross-m-c-lock-watchman-alternate-era-mushroom-caves/"
          class="link link-hover">
          https://sdvoyager.com/alternateera
        </NuxtLink>
      </div>
      <div class="border-base-300 bg-secondary-focus flex flex-shrink justify-center border-t px-4 py-16">
        <NuxtImg src="/sdvoyager.png" class="rounded-lg"></NuxtImg>
      </div>
    </div>
  </div>
</template>

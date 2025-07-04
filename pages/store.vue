<script setup lang="ts">
useSeoMeta({
  title: 'Alternate Era Merch Store',
  description: "Official Alternate Era Merch Store",
  ogDescription: 'Official Alternate Era Merch Store',
  ogTitle: 'Alternate Era Merch Store'
})

defineOgImageScreenshot({
  delay: 5000
})
</script>
<template>
  <div class="h-screen w-screen">
    <iframe src="https://alternate-era.printify.me/" frameborder="0" class="h-full w-full" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade" sandbox="allow-forms allow-scripts allow-same-origin"></iframe>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Alternate Era",
  meta: [
    {
      name: "description",
      content: "Official website for Alternate Era"
    }
  ]
})

useSeoMeta({
  title: "Alternate Era",
  description: "Official website for Alternate Era"

})
</script>
<template>
  <div>
    <NuxtLayout>
      <LazyNuxtLoadingIndicator />
      <LazyNuxtPage />
    </NuxtLayout>
  </div>
</template>

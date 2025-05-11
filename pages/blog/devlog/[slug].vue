<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`devlog-${slug}`, () => {
  return queryCollection('content').path(`/devlog/${slug}`).first()
})
</script>

<template>
  <!-- Render the blog post as Prose & Vue components -->
  <div class="prose prose-lg mx-auto mt-8">
    <ContentRenderer :value="post" />
  </div>
</template>

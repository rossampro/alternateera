<script setup lang="ts">
const { data: blog } = await useAsyncData('blog', () => queryCollection('content').path('/').first());

const { data: devlogposts } = await useAsyncData('devlog', () => queryCollection('content').path('/devlog').all());

useSeoMeta({
  title: blog.value?.title,
  description: blog.value?.description
})
</script>

<template>
  <div class="prose prose-lg mx-auto mt-8">
    <LazyContentRenderer v-if="blog" :value="blog" />
    <div v-else>Blog not found</div>
  </div>
</template>

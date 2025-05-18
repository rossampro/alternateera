<script setup lang="ts">
const route = useRoute()
console.log(route.path)
const { data: post } = await useAsyncData(route.path, () => queryCollection('devlog').path(route.path).first())
</script>


<template>
  <div class="prose prose-lg mx-auto mt-8 text-center">
    <ContentRenderer v-if="post" :value="post" />
    <div v-else>Content not found</div>
    <NuxtLink to="/devlog" class="link link-hover">Back</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(() => queryCollection('devlog').path('/devlog').first());
const { data: posts } = await useAsyncData('devlog-posts', () => queryCollection('devlog').where('path', '<>', '/devlog').order('date', 'DESC').all())

</script>
<template>
  <div class="prose prose-lg mx-auto mt-8">
    <ContentRenderer v-if="post" :value="post"></ContentRenderer>
    <div v-else>Cannot fetch the requested content</div>
    <div>
      <h2>Posts</h2>
      <ol>
        <li v-for="post in posts" :key="post.id">
          <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>: {{ post.description }}
        </li>
      </ol>
    </div>
  </div>
</template>

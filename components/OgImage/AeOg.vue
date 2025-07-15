<script setup lang="ts">
withDefaults(defineProps<{
  image?: string;
}>(), {
  image: undefined
})

</script>

<template>
  <div class="h-full w-full flex items-start justify-start border-solid border-blue-500 border-[12px] bg-gray-50" :style="image">
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full">
      </div>
    </div>
  </div>
</template>

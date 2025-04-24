<template>
    <ScriptYouTubePlayer :video-id="videoId" class="h-96 w-full md:h-[32rem]" trigger="visible">
        <template #placeholder>
            <div class="relative h-full w-full">
                <img :src="`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`" alt="Video Thumbnail"
                    class="h-full w-full object-cover rounded-lg" />
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="bg-black bg-opacity-50 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.752 11.168l-4.586-2.664A1 1 0 009 9.402v5.196a1 1 0 001.166.986l4.586-2.664a1 1 0 000-1.736z" />
                        </svg>
                    </div>
                </div>
            </div>
        </template>
    </ScriptYouTubePlayer>
</template>

<script setup lang="ts">
defineProps({
    videoId: {
        type: String,
        required: true,
    },
});
</script>

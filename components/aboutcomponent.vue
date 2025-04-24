<script setup lang="ts">
let img = "~/assets/images/Jan24th25-14.webp";
</script>
<template>
    <div class="bg-base-100 py-10">
        <div class="container mx-auto px-4">
            <h2 class="mb-5 text-center text-3xl font-bold">
                About Alternate Era
            </h2>
            <div class="flex flex-col items-center md:flex-row">
                <Biocomponent class="md:w-1/2"></Biocomponent>
                <div
                    class="biography-images flex flex-col flex-wrap justify-center gap-2 md:w-1/2 md:flex-row"
                >
                    <LazyNuxtImg
                        src="https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/Jan24th25Photos/Jan24th25-14.webp"
                        alt="Alternate Era"
                        class="h-auto w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        format="webp"
                    />
                    <LazyNuxtImg
                        src="https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/Jan24th25Photos/Jan24th25-26.webp"
                        alt="Alternate Era"
                        class="h-auto w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        format="webp"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

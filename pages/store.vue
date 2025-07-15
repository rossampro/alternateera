<script setup lang="ts">
useSeoMeta({
    title: "Alternate Era Merch Store",
    description: "Official Alternate Era Merch Store",
    ogDescription: "Official Alternate Era Merch Store",
    ogTitle: "Alternate Era Merch Store",
});

const img = useImage();

const ogImage = computed(() => {
    const imgUrl = img(
        "https://nnmczhbqcqxnoffzdijp.supabase.co/storage/v1/object/public/images/OgImages/storeOg.png",
    );
    return `background-image: url(${imgUrl}); fixed; cover;`;
});

defineOgImageComponent("AeOg", {
    image: ogImage.value,
});
</script>
<template>
    <div class="h-screen w-screen">
        <iframe
            src="https://alternate-era.printify.me/"
            frameborder="0"
            class="h-full w-full"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            sandbox="allow-forms allow-scripts allow-same-origin"
        ></iframe>
    </div>
</template>

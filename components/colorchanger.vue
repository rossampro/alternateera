<script setup>
import { themeChange } from 'theme-change';
import { onMounted } from 'vue';
import { useColorStore } from '~/stores/colorchange';

const colorStore = useColorStore();

const themes = [
    "dracula",
    "night",
    "luxury"
];

onMounted(() => {
    themeChange(false);
    getTheme();
});

const getTheme = () => {
    const theme = colorStore.getTheme;
    localStorage.setItem('theme', theme);
    colorStore.setTheme(theme);
    return theme;
}

</script>
<template>
    <div class="dropdown dropdown-end">
        <div tabindex="0" class="btn normal-case btn-ghost">
            <span class="hidden font-normal md:inline">Theme</span>
            <Icon name="heroicons-outline:arrow-down" />
        </div>
        <div
            class="dropdown-content bg-base-300 text-base-content rounded-box top-px h=[70vh] max-h-32 w-56 overscroll-y-auto shadow mt-16">
            <div tabindex="0" class="grid grid-cols-1 gap-3 p-3 outline-primary">
                <button v-for="theme in themes" class="outline-base-100 overflow-hidden rounded-lg text-left"
                    :data-set-theme="theme">
                    {{ theme }}
                </button>
            </div>
        </div>
    </div>
</template>

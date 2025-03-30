<script setup lang="ts">
import { themeChange } from "theme-change";
import { onMounted } from "vue";
import { useColorStore } from "~/stores/colorchange";

const colorStore = useColorStore();

const themes = ["night", "luxury"];

onMounted(() => {
    themeChange(false);
    getTheme();
});

const getTheme = () => {
    const theme = colorStore.getTheme;
    localStorage.setItem("theme", theme);
    colorStore.setTheme(theme);
    return theme;
};
</script>
<template>
    <div class="dropdown dropdown-end">
        <div tabindex="0" class="btn btn-ghost normal-case">
            <span class="hidden font-normal md:inline">Theme</span>
            <Icon name="heroicons-outline:arrow-down" />
        </div>
        <div
            class="dropdown-content bg-base-300 text-base-content rounded-box h=[70vh] top-px mt-16 max-h-32 w-56 overscroll-y-auto shadow"
        >
            <div
                tabindex="0"
                class="outline-primary grid grid-cols-1 gap-3 p-3"
            >
                <button
                    v-for="theme in themes"
                    class="outline-base-100 overflow-hidden rounded-lg text-left"
                    :data-set-theme="theme"
                >
                    {{ theme }}
                </button>
            </div>
        </div>
    </div>
</template>

import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/app.css"],
    vite: {
        plugins: [
            tailwindcss()
        ]
    },

    modules: [
        "@nuxt/image",
        "@nuxt/icon",
        "@pinia/nuxt",
        "nuxt-meta-pixel",
    ],

    compatibilityDate: "2025-02-15",
    runtimeConfig: {
        public: {
            metapixel: {
                default: { id: '' }
            }
        }
    }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        "@nuxt/image",
        "@nuxt/icon",
        "@nuxtjs/tailwindcss",
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

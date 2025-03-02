// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt"
  ],

  compatibilityDate: "2025-02-15",
})
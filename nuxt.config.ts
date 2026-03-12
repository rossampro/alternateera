import tailwindcss from "@tailwindcss/vite";
import { defineOrganization } from "nuxt-schema-org/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: true,
    app: {
        head: {
            script: [
                {
                    async: true,
                    src: "/js/mailerlitepopup.js",
                },
            ],
        },
    },
    css: ["~/assets/app.css"],
    site: {
        name: "Alternate Era",
        url: "https://alternateera.com",
    },
    schemaOrg: {
        identity: defineOrganization({
            name: "Alternate Era",
            logo: "/alteralogotransparent.png",
        }),
    },
    seo: {
        meta: {
            title: "Alternate Era",
            description: "Mind-bending Alternative Hip Hop Fusion",
            ogImage: "/og-image.png",
            ogTitle: "Alternate Era",
            ogDescription: "Mind-bending Alternative Hip Hop Fusion",
        },
    },
    ogImage: {
        debug: true,
    },
    vite: {
        plugins: [tailwindcss()],
    },
    scripts: {
        registry: {
            googleAnalytics: {
                id: "G-DZS2CF48HP",
            },
        },
    },

    modules: [
        "@nuxt/image",
        "@nuxt/icon",
        "nuxt-meta-pixel",
        "@nuxtjs/seo",
        "@nuxt/scripts",
    ],

    compatibilityDate: "2025-02-15",
    runtimeConfig: {
        youtubeApiKey: process.env.YOUTUBE_API_KEY,
        youtubeChannelId: process.env.YOUTUBE_CHANNEL_ID,
        public: {
            metapixel: {
                default: { id: "" },
            },
        },
    },
});

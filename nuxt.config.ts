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
    routeRules: {
        "/store": { redirect: { to: "https://alternate-era.printify.me/", statusCode: 302 } },
    },
    runtimeConfig: {
        minecraftApplicationDestination: process.env.MINECRAFT_APPLICATION_DESTINATION,
        minecraftEmailProvider: process.env.MINECRAFT_EMAIL_PROVIDER,
        mailerliteApiToken: process.env.MAILERLITE_API_TOKEN,
        mailerliteGroupId: process.env.MAILERLITE_GROUP_ID,
        discordMinecraftApplicationWebhook: process.env.DISCORD_MINECRAFT_APPLICATION_WEBHOOK,
        youtubeApiKey: process.env.YOUTUBE_API_KEY,
        youtubeChannelId: process.env.YOUTUBE_CHANNEL_ID,
        public: {
            discordInviteUrl: process.env.NUXT_PUBLIC_DISCORD_INVITE_URL,
            metapixel: {
                default: { id: "" },
            },
        },
    },
});

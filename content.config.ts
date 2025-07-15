import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import { asOgImageCollection } from "nuxt-og-image/content";

export default defineContentConfig({
    collections: {
        // blog: defineCollection({
        //     type: "page",
        //     source: "blog/**/*.md",
        //     schema: z.object({
        //         tags: z.array(z.string()),
        //         image: z.string(),
        //         date: z.date(),
        //     }),
        // }),
        blog: defineCollection(
            asOgImageCollection({
                type: "page",
                source: "blog/**/*.md",
                schema: z.object({
                    tags: z.array(z.string()),
                    image: z.string(),
                    date: z.date(),
                }),
            }),
        ),
        devlog: defineCollection(
            asOgImageCollection({
                type: "page",
                source: "devlog/**/*.md",
                schema: z.object({
                    tags: z.array(z.string()),
                    image: z.string(),
                    date: z.date(),
                }),
            }),
        ),
    },
});

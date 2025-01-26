import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: "blog/*.md",
      type: "page",
      schema: z.object({
        author: z.string(),
        avatar: z.string(),
        title: z.string(),
        description: z.string(),
        image: z.string(),
        alt: z.string(),
        date: z.string(),
      }),
    }),
  },
});

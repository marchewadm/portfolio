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
    selectedWorks: defineCollection({
      source: "selected-works/*.md",
      type: "page",
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        demoUrl: z.string().optional(),
        sourceCodeUrl: z.string().optional(),
        image: z.string(),
        alt: z.string(),
        description: z.string(),
        technologies: z.array(
          z.object({
            name: z.string(),
            homepageUrl: z.string(),
          }),
        ),
        createdAt: z.date(),
      }),
    }),
  },
});

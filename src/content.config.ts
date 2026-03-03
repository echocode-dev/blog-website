// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      summary: z.string(),
      author: z.string(),
      cover: z.union([image(), z.string().url()]),
      coverAlt: z.string(),
      tags: z.array(z.string()),
      translationKey: z.string(),
    }),
});
// Register `blog` collection
export const collections = { blog };

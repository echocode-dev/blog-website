// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      summary: z.string(),
      author: z.string(),
      cover: image(),
      coverAlt: z.string(),
      tags: z.array(z.string()),
    }),
});
// Register `blog` collection
export const collections = { blog };

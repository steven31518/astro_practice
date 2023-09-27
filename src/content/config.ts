// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import { collectionSchema } from "./_schema.ts";
const { portfolioSchema, authorSchema, experienceSchema } = collectionSchema;
// 2. Define your collection(s)
const portfolioCollection = defineCollection({
  type: "content",
  schema: portfolioSchema,
  /* ... */
});
const authorCollection = defineCollection({
  type: "data",
  schema: authorSchema,
});
const experienceCollection = defineCollection({
  type: "content",
  schema: experienceSchema,
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  "portfolio": portfolioCollection,
  "authors": authorCollection,
  "experience": experienceCollection,
};

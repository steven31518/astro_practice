import { z } from "astro:content";

const portfolioSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  link: z.string(),
  tags: z.array(z.string()),
});

const authorSchema = z.object({
  name: z.string(),
  job: z.string(),
  introduce: z.string(),
  
});
const experienceSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  link: z.string(),
  tags: z.array(z.string()),
});

export const collectionSchema = {
  portfolioSchema,
  authorSchema,
  experienceSchema,
};

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/now' }),
  schema: z.object({
    updated: z.coerce.date(),
  }),
});

const interests = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/interests' }),
  schema: z.object({}),
});

const cv = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cv' }),
  schema: z.object({
    name: z.string(),
    contact: z.string(),
  }),
});

const photography = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/photography' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    // Photos live in src/assets/photography/<id>/ and are picked up
    // automatically (sorted by filename), then optimized at build time.
  }),
});

export const collections = { blog, now, interests, cv, photography };

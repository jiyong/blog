import { defineCollection, defineConfig } from "@content-collections/core";

const blogs = defineCollection({
  name: "blogs",
  directory: "src/content/blog",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    featured: z.boolean().optional().default(false),
    summary: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    category: z.string().optional(),
  }),
  transform: async (document) => {
    return {
      ...document,
      slug: `${document._meta.path}`,
    };
  },
});

const books = defineCollection({
  name: "books",
  directory: "src/content/book",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    featured: z.boolean().optional().default(false),
    summary: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    category: z.string().optional(),
  }),
  transform: async (document) => {
    return {
      ...document,
      slug: `${document._meta.path}`,
    };
  },
});

console.log(blogs, books);

export default defineConfig({
  collections: [blogs, books],
});

import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    cover: z.string(),
  }),
});

const workCategory = z.enum(["ai", "fintech", "security"]);

export type WorkCategory = z.infer<typeof workCategory>;

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    cover: z.string(),
    category: z.array(workCategory),
    display: z.object({
      title: z.string(),
      description: z.string(),
      company: z
        .object({
          logo: z.string().optional(),
          link: z.string().optional(),
        })
        .optional(),
    }),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    cover: z.string(),
  }),
});

export const collections = {
  services,
  work,
  blog,
};

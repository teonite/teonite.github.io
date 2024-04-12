import { defineCollection, z } from "astro:content";

const services = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        cover: z.string(),
    }),
});


const work = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        cover: z.string(),
        category: z.array(z.enum(['ai', 'fintech', 'security'])),
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
    blog
};

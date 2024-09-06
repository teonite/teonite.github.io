import { z } from "astro:content";

export const facebookMeta = z.object({
    title: z.string().min(1).default("haha"),
    description: z.string().min(1).default("Deeptech studio crafting mission-critical software"),
    image: z.string().min(1).default("/public/images/pages/home/teonite.png"),
    image_alt: z.string().min(1).default("teonite"),
    imageWidth: z.string().min(3).default("1200"),
    imageHeight: z.string().min(3).default("630"),
});


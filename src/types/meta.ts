import { z } from "astro:content";

export const metaOGDefault = {
    title: "teonite — deeptech studio",
    description: "Deeptech studio crafting mission-critical software",
    image: "github.com/teonite/teonite.github.io/raw/main/public/images/pages/home/teonite.png",
};

export const metaOG = z.object({
    title: z.string().min(1).default(metaOGDefault.title),
    description: z.string().min(1).default(metaOGDefault.description),
    image: z.string().min(1).default(metaOGDefault.image),
});

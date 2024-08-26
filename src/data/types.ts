import { z } from "astro/zod";

export const trustedBySchema = z.object({
  name: z.string().min(1),
  logoPath: z.string().min(1),
  href: z.string().optional(),
});

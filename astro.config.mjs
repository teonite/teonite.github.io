import mdx from "@astrojs/mdx";
import rehypeFigure from "@microflash/rehype-figure";
import yaml from "@rollup/plugin-yaml";
import { defineConfig } from "astro/config";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import robotsTxt from 'astro-robots-txt';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: "https://teonite.com",
  vite: {
    plugins: [yaml()],
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/global" as *;`,
        },
      },
    },
  },
  integrations: [mdx(), robotsTxt()],
  markdown: {
    rehypePlugins: [rehypeFigure],
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
});

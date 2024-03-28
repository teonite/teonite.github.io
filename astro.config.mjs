import mdx from "@astrojs/mdx";
import rehypeFigure from "@microflash/rehype-figure"; 
import yaml from "@rollup/plugin-yaml";
import { defineConfig } from "astro/config";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: "https://teonite.com",
  vite: {
    server: {
      port: 3000,
    },
    plugins: [yaml()],
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
      },
    },
  },
  integrations: [mdx()],
  markdown: {
    rehypePlugins: [rehypeFigure],
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'github-light',
      // Alternatively, provide multiple themes
      // https://shiki.style/guide/dual-themes
      // themes: {
      //   light: 'github-light',
      //   dark: 'github-dark',
      // },
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  }
});

const html = await codeToHtml(
  code,
  {
    lang: 'js',
    theme: 'min-dark',
    colorReplacements: {
      '#fff': '#189eff'
    }
  }
)

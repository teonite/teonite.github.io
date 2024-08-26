import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import rehypeFigure from "@microflash/rehype-figure";
import yaml from "@rollup/plugin-yaml";
import { defineConfig } from "astro/config";
import { link } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
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
  integrations: [
    sitemap(),
    starlight({
      title: "teonite best practices",
      social: {
        github:'https://github.com/teonite',
      },
      logo: {
        src: "./src/assets/svg/tntLogo.svg",
      },
      disable404Route: true,
      customCss: ["./src/styles/docs/variables.scss", "./src/styles/docs/index.scss"],
      components: {
        ThemeProvider: "./src/components/starlight/ThemeProvider.astro",
      },
      sidebar: [
        { 
          label : 'Development Process', 
          autogenerate: {directory: 'Development Process'}
        },
        {
          label: 'Open Source',
          autogenerate: {directory: 'Open Source'}
        }
      ]
    }),
    mdx(),
  ],
  markdown: {
    rehypePlugins: [rehypeFigure],
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
});

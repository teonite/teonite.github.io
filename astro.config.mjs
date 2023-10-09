import mdx from "@astrojs/mdx";
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
});

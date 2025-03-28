import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://elkradio.com",
  integrations: [mdx(), sitemap(), tailwind()],
  server: { host: '0.0.0.0', port: 4321 },
});

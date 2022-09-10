import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://vpotti.me",
  integrations: [image(), prefetch(), sitemap(), tailwind()],
});

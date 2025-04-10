// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://lucastheliu.github.io",
  base: "template",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), mdx(), icon()],
});

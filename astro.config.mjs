// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://camparry.github.io",
  base: "/links.camparry.com",
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from "astro/config";
import qwikdev from "@qwikdev/astro";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev(), tailwind(), react()],
  site: "https://tunacarparts.github.io",
  base: "/",
});

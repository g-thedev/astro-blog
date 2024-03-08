import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://fabulous-bombolone-26ee68.netlify.app/",
  integrations: [preact()]
});
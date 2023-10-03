import { defineConfig } from 'astro/config';

// https://astro.build/config
import node from "@astrojs/node";
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: import.meta.env.NODE_ENV === 'production' ? 'static' : 'server',
  adapter: node({
    mode: "standalone"
  })
});
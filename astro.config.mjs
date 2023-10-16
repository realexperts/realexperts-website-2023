import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import vercelStatic from '@astrojs/vercel/static';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import robotsConfig from './robots-txt.config';

let adapter;
switch (process.env.NODE_ENV) {
  case 'production': {
    adapter = vercelStatic();
  }
  case 'draft': {
    adapter = vercel();
  }
  default: {
    adapter = node({
      mode: 'standalone'
    });
  }
}
const output = process.env.NODE_ENV === 'production' ? 'static' : 'server';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output,
  adapter
});

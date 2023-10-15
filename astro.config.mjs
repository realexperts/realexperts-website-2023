import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import vercelStatic from '@astrojs/vercel/static';
import { defineConfig } from 'astro/config';

// https://astro.build/config

let adapter;
switch (process.env.NODE_ENV) {
  case 'production': {
    adapter = vercelStatic();
  }
  case 'draft': {
    adapter = vercel();
  }
  default: {
    adapter = node({ mode: 'standalone' });
  }
}
const output = process.env.NODE_ENV === 'production' ? 'static' : 'server';

export default defineConfig({
  integrations: [tailwind()],
  output,
  adapter
});

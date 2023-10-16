import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import vercelStatic from '@astrojs/vercel/static';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import robotsConfig from './robots-txt.config';

// https://astro.build/config

export default defineConfig({
  integrations: [tailwind(), robotsTxt(robotsConfig)],
  output: process.env.NODE_ENV === 'production' ? 'static' : 'server',
  adapter:
    process.env.NODE_ENV === 'production'
      ? vercelStatic()
      : process.env.NODE_ENV === 'draft'
      ? vercel()
      : node({ mode: 'standalone' })
});

import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import vercelStatic from '@astrojs/vercel/static';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import robotsConfig from './robots-txt.config';

// https://astro.build/config
const isProduction = process.env.NODE_ENV === 'production';
const isDraft = process.env.NODE_ENV === 'draft';
const isDev = !isProduction && !isDraft;

let adapter = node({ mode: 'standalone' });

if (isProduction) {
  adapter = vercelStatic();
}

if (isDraft) {
  adapter = vercel();
}

export default defineConfig({
  integrations: [tailwind(), robotsTxt(robotsConfig)],
  output: isProduction ? 'static' : 'server',
  adapter
});

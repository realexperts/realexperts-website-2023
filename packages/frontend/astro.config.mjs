import node from '@astrojs/node';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import vercelStatic from '@astrojs/vercel/static';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import robotsConfig from './robots-txt.config';

const isProduction = process.env.BUILD_MODE === 'production';
const isDraft = process.env.BUILD_MODE === 'draft';
const isDevelopment = !isProduction && !isDraft;
const site = process.env.SITE;

let adapter = node({
  mode: 'standalone'
});

if (isProduction) {
  adapter = vercelStatic();
}

if (isDraft) {
  adapter = vercel();
}

if (isDevelopment) {
  adapter = node({
    mode: 'development'
  });
}

console.log('isProduction', isProduction);
console.log('isDraft', isDraft);
console.log('isDev', isDevelopment);

// https://astro.build/config
export default defineConfig({
  site,
  image: {
    remotePatterns: [
      {
        protocol: 'https'
      }
    ]
  },
  integrations: [
    tailwind(),
    robotsTxt(robotsConfig),
    react({
      include: ['**/react/*']
    }),
    sitemap()
  ],
  output: isProduction || isDevelopment ? 'static' : 'server',
  adapter
});

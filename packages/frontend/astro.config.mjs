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
const isDev = !isProduction && !isDraft;

let adapter = node({
  mode: 'standalone'
});

if (isProduction) {
  adapter = vercelStatic();
}

if (isDraft) {
  adapter = vercel();
}

if (isDev) {
  adapter = node({
    mode: 'development'
  });
}

console.log('isProduction', isProduction);
console.log('isDraft', isDraft);
console.log('isDev', isDev);

// https://astro.build/config
export default defineConfig({
  site: 'https://www.realexperts.de',
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
  output: isProduction || isDev ? 'static' : 'server',
  adapter
});

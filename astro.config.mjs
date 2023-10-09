import {defineConfig} from 'astro/config';

import vercel from '@astrojs/vercel/serverless';
import vercelStatic from '@astrojs/vercel/static';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
const adapter = process.env.NODE_ENV === 'production' ?
    vercelStatic() : process.env.NODE_ENV === 'draft' ?
        vercel() : node({
            mode: "standalone"
        });
const output = process.env.NODE_ENV === 'production' ? 'static' : 'server';

export default defineConfig({
    integrations: [tailwind()],
    output,
    adapter
});

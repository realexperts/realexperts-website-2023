import fs from 'node:fs/promises';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const apiUrl = process.env.DIRECTUS_URL;
const directusToken = process.env.DIRECTUS_TOKEN;

if (!apiUrl) {
  console.error('DIRECTUS_URL not defined in .env file');
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
}

if (!directusToken) {
  console.error('DIRECTUS_TOKEN not defined in .env file');
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
}

try {
  const fields = ['robots_index'];
  const response = await fetch(
    `${apiUrl}/items/settings?access_token=${directusToken}&fields[]=${fields.join(
      ','
    )}`
  );

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }

  const settings = await response.json();

  if (typeof settings.data.robots_index !== 'boolean') {
    throw new TypeError(
      'Invalid API response: missing or incorrect type for robots_index'
    );
  }

  const config = {
    disableIndexing: !settings.data.robots_index
  };

  const configJS = `export default ${JSON.stringify(config, undefined, 2)};\n`;

  await fs.writeFile('./site.config.mjs', configJS);
} catch (error) {
  console.error(error);
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
}

/* eslint-disable unicorn/prevent-abbreviations */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnvironment {
  readonly DIRECTUS_URL: string;
  readonly DIRECTUS_TOKEN: string;
  readonly BUILD_MODE: string;
}

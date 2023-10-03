import { z } from 'zod';

const BlockSchema = z.object({
  id: z.number(),
  sections_id: z.number(),
  item: z.string(),
  collection: z.string(),
  sort: z.number(),
});

const SectionSchema = z.object({
  blocks: z.array(BlockSchema),
});

const TranslationSchema = z.object({
  title: z.string(),
  url: z.string(),
  sections: z.array(SectionSchema),
});

const DataSchema = z.object({
  translations: z.array(TranslationSchema),
});

export const RootSchema = z.object({
  data: z.array(DataSchema),
});

export const PageSchema = z.object({
  slug: z.string().optional(),
  title: z.string(),
});
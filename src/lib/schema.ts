import { z } from 'zod';

const TextBlockSchema = z.object({
  id: z.number(),
  text: z.string(),
});

const BlockSchema = z.object({
  id: z.number(),
  sections_id: z.number(),
  item: TextBlockSchema,
  collection: z.string(),
  sort: z.number().nullable(),
});

const SectionSchema = z.object({
  sections_id: z.object({
    blocks: z.array(BlockSchema),
  }),
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

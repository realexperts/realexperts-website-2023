import { z } from 'zod';

const BlockTextSchema = z.object({
  id: z.number(),
  text: z.string(),
  design: z.enum(['style_1', 'style_2', 'style_3', 'style_4', 'style_5'])
});
export type BlockText = z.infer<typeof BlockTextSchema>;

const CTAInternalSchema = z.object({
  collection: z.enum(['element_cta_internal']),
  item: z.object({
    id: z.number(),
    title: z.string(),
    linked_page: z
      .object({
        url: z.string()
      })
      .nullable()
  })
});
export type CTAInternal = z.infer<typeof CTAInternalSchema>;

const CTAExternalSchema = z.object({
  collection: z.enum(['element_cta_external']),
  item: z.object({
    id: z.number(),
    title: z.string(),
    url: z.string()
  })
});
export type CTAExternal = z.infer<typeof CTAExternalSchema>;

const CTASchema = z.lazy(() => z.union([CTAExternalSchema, CTAInternalSchema]));

const BlockHeroSchema = z.object({
  id: z.number(),
  image: z
    .object({
      id: z.string(),
      width: z.number(),
      height: z.number()
    })
    .nullable(),
  image_styles: z
    .array(z.enum(['rounded_bl', 'rounded_br', 'rounded_tl', 'rounded_tr']))
    .nullable(),
  title: z.string().nullable(),
  subtitle: z.string().nullable(),
  ctas: z.array(CTASchema)
});
export type BlockHero = z.infer<typeof BlockHeroSchema>;

const BlockSchema = z.object({
  id: z.number(),
  sections_id: z.number(),
  item: z.lazy(() => z.union([BlockTextSchema, BlockHeroSchema])),
  collection: z.enum(['block_text', 'block_hero']),
  sort: z.number().nullable()
});

const SectionSchema = z.object({
  section_styles: z.array(z.enum(['full_width'])).nullable(),
  color: z.string().nullable(),
  blocks: z.array(BlockSchema)
});
export type Section = z.infer<typeof SectionSchema>;

const TranslationSchema = z.object({
  show_title: z.boolean(),
  title: z.string(),
  url: z.string(),
  sections: z.array(
    z.object({
      sections_id: SectionSchema
    })
  )
});

const DataSchema = z.object({
  translations: z.array(TranslationSchema)
});

export const RootSchema = z.object({
  data: z.array(DataSchema)
});

export const PageSchema = z.object({
  showTitle: z.boolean(),
  slug: z.string().optional(),
  title: z.string(),
  sections: z.array(SectionSchema)
});

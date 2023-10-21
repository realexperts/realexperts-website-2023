import { z } from 'zod';

const maxWidthValues = z.enum([
  'max-w-none',
  'max-w-xs',
  'max-w-sm',
  'max-w-md',
  'max-w-lg',
  'max-w-xl',
  'max-w-2xl',
  'max-w-3xl',
  'max-w-4xl'
]);

const BlockTextSchema = z.object({
  id: z.number(),
  text: z.string(),
  design: z.enum(['style_1', 'style_2', 'style_3', 'style_4', 'style_5']),
  alignment: z.enum(['left', 'center', 'right']),
  max_width: maxWidthValues,
  max_width_container: maxWidthValues
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
      .nullable(),
    anchor: z
      .object({
        slug: z.string().nullable()
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

const CTAsSchema = z.array(
  z.lazy(() => z.union([CTAExternalSchema, CTAInternalSchema]))
);
export type CTAs = z.infer<typeof CTAsSchema>;

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
  ctas: CTAsSchema
});
export type BlockHero = z.infer<typeof BlockHeroSchema>;

const BlockCTASchema = z.object({
  id: z.number(),
  alignment: z.enum(['left', 'center', 'right']),
  ctas: CTAsSchema
});
export type BlockCTA = z.infer<typeof BlockCTASchema>;

const BlockLogoSliderSchema = z.object({
  id: z.number(),
  slides: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      image: z
        .object({
          id: z.string(),
          width: z.number(),
          height: z.number()
        })
        .nullable()
    })
  )
});
export type BlockLogoSlider = z.infer<typeof BlockLogoSliderSchema>;

const BlockSchema = z.object({
  id: z.number(),
  sections_id: z.number(),
  item: z.lazy(() =>
    z.union([
      BlockTextSchema,
      BlockHeroSchema,
      BlockCTASchema,
      BlockLogoSliderSchema
    ])
  ),
  collection: z.enum([
    'block_text',
    'block_hero',
    'block_cta',
    'block_logo_slider'
  ]),
  sort: z.number().nullable()
});

const SectionSchema = z.object({
  section_styles: z.array(z.enum(['full_width'])).nullable(),
  color: z.string().nullable(),
  blocks: z.array(BlockSchema),
  slug: z.string().nullish()
});
export type Section = z.infer<typeof SectionSchema>;

const TranslationSchema = z.object({
  id: z.number(),
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
  id: z.number(),
  showTitle: z.boolean(),
  slug: z.string().optional(),
  title: z.string(),
  sections: z.array(SectionSchema)
});

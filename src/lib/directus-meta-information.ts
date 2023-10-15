import { z } from 'zod';

export const MetaInformationSchema = z.object({
  data: z
    .object({
      meta_title: z.string().nullable(),
      meta_description: z.string().nullable(),
      meta_image: z
        .object({
          id: z.string(),
          width: z.number(),
          height: z.number()
        })
        .nullable()
    })
    .optional()
});

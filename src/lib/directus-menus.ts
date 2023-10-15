import { z } from 'zod';

// Define a schema for the `linked_page` object.

const linkedPageSchema = z.object({
  url: z.string()
});

// Define a schema for the `anchor` object.

const anchorSchema = z.object({
  slug: z.string()
});

// Define a schema for the nodes in the translations array.

const nodeSchema = z.object({
  title: z.string(),
  type: z.enum(['intern', 'extern']),
  url: z.string().nullable(),
  linked_page: linkedPageSchema.nullable(),
  anchor: anchorSchema.nullable()
});
export type Node = z.infer<typeof nodeSchema>;

// Define a schema for the translations array.

const translationsSchema = z.object({
  title: z.string(),
  languages_code: z.string(),
  nodes: z.array(nodeSchema)
});

export const MainMenuSchema = z.object({
  data: z.object({
    translations: z.array(translationsSchema)
  })
});

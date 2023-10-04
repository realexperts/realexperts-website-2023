import type { z } from 'zod';

import type { PageSchema } from '@/lib/schema';

export type Page = z.infer<typeof PageSchema>;

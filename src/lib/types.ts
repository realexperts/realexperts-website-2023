import type { PageSchema } from '@/lib/schema';
import type { z } from 'zod';

export type Page = z.infer<typeof PageSchema>;

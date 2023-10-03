import { z } from 'zod';
import { PageSchema } from '@/lib/schema';

export type Page = z.infer<typeof PageSchema>;
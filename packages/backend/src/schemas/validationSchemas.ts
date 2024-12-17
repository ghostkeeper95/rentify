import { z } from 'zod'

export const productFiltersSchema = z.object({
  search: z.string().optional(),
  minPrice: z.string().transform(Number).optional(),
  maxPrice: z.string().transform(Number).optional(),
  category: z.string().optional(),
  location: z.string().optional(),
  page: z.string().transform(Number).optional(),
  limit: z.string().transform(Number).optional(),
  sortBy: z.string().optional(),
  sortOrder: z
    .enum(['asc', 'desc'])
    .optional()
    .transform(value => value ?? null),
})

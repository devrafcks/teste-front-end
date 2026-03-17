import { z } from 'zod'

export const ProductSchema = z.object({
  id: z
    .union([z.string(), z.number()])
    .transform(String),
  name: z.string(),
  price: z.number(),
  oldPrice: z.number().optional().nullable(),
  installments: z
    .object({
      count: z.number(),
      value: z.number(),
    })
    .optional()
    .nullable(),
  image: z.string(),
  description: z.string().optional().nullable(),
  freeShipping: z.boolean().optional().default(false),
  category: z.string().optional().nullable(),
})

export const ProductsResponseSchema = z.object({
  products: z.array(ProductSchema),
})

export type Product = z.infer<typeof ProductSchema>
export type ProductsResponse = z.infer<typeof ProductsResponseSchema>
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '@/services/products.service'
import type { Product } from '@/schemas/product.schema'

export const PRODUCTS_QUERY_KEY = ['products'] as const

export function useProducts() {
  return useQuery<Product[], Error>({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
    retry: 2,
    refetchOnWindowFocus: false,
  })
}
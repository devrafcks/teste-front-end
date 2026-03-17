import axios, { AxiosError } from 'axios'
import { API_URL } from '@/constants'
import { ProductSchema, type Product } from '@/schemas/product.schema'
import { z } from 'zod'

function normalizeProducts(data: unknown): Product[] {
  let raw: unknown[] = []
  if (Array.isArray(data)) {
    raw = data
  } else if (
    data !== null &&
    typeof data === 'object' &&
    'products' in data &&
    Array.isArray((data as Record<string, unknown>).products)
  ) {
    raw = (data as Record<string, unknown>).products as unknown[]
  } else {
    throw new Error('Formato de resposta inválido da API')
  }
  const results: Product[] = []
  raw.forEach((item: any, index: number) => {
    const price = item?.price ?? 0
    const oldPrice = Math.round(price * 1.15)
    const installmentCount = 3
    const installmentValue = Math.round(price / installmentCount)

    const mapped = {
      id: String(index),
      name: item?.productName || item?.name,
      price: price,
      oldPrice: oldPrice,
      installments: {
        count: installmentCount,
        value: installmentValue,
      },
      image: item?.photo || item?.image,
      description: item?.descriptionShort || item?.description,
      freeShipping: true,
    }
    const parsed = ProductSchema.safeParse(mapped)
    if (parsed.success) {
      results.push(parsed.data)
    } else {
      console.warn('[Product validation] Item ignorado:', parsed.error.flatten())
    }
  })

  return results
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const { data } = await axios.get(API_URL)
    return normalizeProducts(data)
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(`Erro ao buscar produtos: ${err.message}`)
    }
    if (err instanceof z.ZodError) {
      throw new Error(`Erro de validação: ${err.message}`)
    }
    throw err
  }
}
import { useState, useMemo } from 'react'
import type { Product } from '@/schemas/product.schema'
import { PRODUCT_TABS } from '@/constants'

export function useProductTabs(products: Product[]) {
  const [activeTab, setActiveTab] = useState(PRODUCT_TABS[0].id)

  const filteredProducts = useMemo(() => {
    if (!products.length) return []
    if (activeTab === 'todos') return products
    const hasCategories = products.some((p) => p.category)
    if (!hasCategories) return products
    const filtered = products.filter(
      (p) => p.category?.toLowerCase() === activeTab.toLowerCase()
    )
    return filtered.length ? filtered : products
  }, [products, activeTab])

  return { activeTab, setActiveTab, filteredProducts }
}
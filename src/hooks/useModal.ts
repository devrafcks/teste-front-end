import { useState, useCallback, useEffect } from 'react'
import type { Product } from '@/schemas/product.schema'

export function useModal() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const isOpen = selectedProduct !== null

  const openModal = useCallback((product: Product) => {
    setSelectedProduct(product)
  }, [])

  const closeModal = useCallback(() => {
    setSelectedProduct(null)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    if (isOpen) document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeModal])

  return { selectedProduct, isOpen, openModal, closeModal }
}
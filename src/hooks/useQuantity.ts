import { useState, useCallback } from 'react'

export function useQuantity(initial = 1, min = 1, max = 99) {
  const [quantity, setQuantity] = useState(initial)

  const increment = useCallback(() => {
    setQuantity((q) => Math.min(q + 1, max))
  }, [max])

  const decrement = useCallback(() => {
    setQuantity((q) => Math.max(q - 1, min))
  }, [min])

  const reset = useCallback(() => {
    setQuantity(initial)
  }, [initial])

  return { quantity, increment, decrement, reset }
}
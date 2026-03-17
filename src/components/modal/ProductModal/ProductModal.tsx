import { useEffect, useRef } from 'react'
import { formatCurrency } from '@/utils'
import { Button } from '@/components/ui/Button'
import { useQuantity } from '@/hooks'
import type { Product } from '@/schemas/product.schema'
import styles from './ProductModal.module.scss'

interface ProductModalProps {
    product: Product
    onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
    const { quantity, increment, decrement } = useQuantity(1)
    const closeRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        closeRef.current?.focus()
    }, [])

    return (
        <div
            className={styles.overlay}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Detalhes de ${product.name}`}
        >
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button
                    ref={closeRef}
                    className={styles.closeBtn}
                    onClick={onClose}
                    aria-label="Fechar modal"
                >
                    <CloseIcon />
                </button>

                <div className={styles.imageWrapper}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className={styles.image}
                        onError={(e) => {
                            const img = e.currentTarget
                            img.src = 'https://placehold.co/300x300?text=Sem+imagem'
                        }}
                    />
                </div>

                <div className={styles.info}>
                    <h2 className={styles.name}>{product.name.toUpperCase()}</h2>
                    <p className={styles.price}>{formatCurrency(product.price)}</p>

                    {product.description && (
                        <p className={styles.description}>{product.description}</p>
                    )}

                    <a href="#" className={styles.detailLink}>
                        Veja mais detalhes do produto &gt;
                    </a>

                    <div className={styles.actions}>
                        <div className={styles.quantity} role="group" aria-label="Quantidade">
                            <button
                                className={styles.qtyBtn}
                                onClick={decrement}
                                aria-label="Diminuir quantidade"
                            >
                                <MinusIcon />
                            </button>
                            <span className={styles.qtyValue} aria-live="polite">
                                {String(quantity).padStart(2, '0')}
                            </span>
                            <button
                                className={styles.qtyBtn}
                                onClick={increment}
                                aria-label="Aumentar quantidade"
                            >
                                <PlusIcon />
                            </button>
                        </div>

                        <Button variant="accent" size="lg" fullWidth>
                            COMPRAR
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CloseIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    )
}

function MinusIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    )
}

function PlusIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    )
}

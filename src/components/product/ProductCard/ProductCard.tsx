import { formatCurrency } from '@/utils'
import { Button } from '@/components/ui/Button'
import type { Product } from '@/schemas/product.schema'
import styles from './ProductCard.module.scss'

interface ProductCardProps {
    product: Product
    onOpenModal: (product: Product) => void
}

export function ProductCard({ product, onOpenModal }: ProductCardProps) {
    function handleClick() {
        onOpenModal(product)
    }

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === 'Enter') onOpenModal(product)
    }

    function handleBuyClick(e: React.MouseEvent) {
        e.stopPropagation()
        onOpenModal(product)
    }

    return (
        <article
            className={styles.card}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label={`Ver detalhes de ${product.name}`}
        >
            <div className={styles.imageWrapper}>
                <img
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                    loading="lazy"
                    onError={(e) => {
                        const img = e.currentTarget
                        img.src = 'https://placehold.co/200x200?text=Sem+imagem'
                    }}
                />
            </div>

            <div className={styles.body}>
                <h3 className={styles.name}>{product.name}</h3>

                {product.description && (
                    <p className={styles.description}>{product.description}</p>
                )}

                <div className={styles.pricing}>
                    {product.oldPrice != null && (
                        <span className={styles.oldPrice}>
                            {formatCurrency(product.oldPrice)}
                        </span>
                    )}
                    <span className={styles.price}>{formatCurrency(product.price)}</span>
                    {product.installments != null && (
                        <span className={styles.installments}>
                            ou {product.installments.count}x de{' '}
                            {formatCurrency(product.installments.value)} sem juros
                        </span>
                    )}
                    {product.freeShipping && (
                        <span className={styles.freeShipping}>Frete grátis</span>
                    )}
                </div>
            </div>

            <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={handleBuyClick}
            >
                COMPRAR
            </Button>
        </article>
    )
}

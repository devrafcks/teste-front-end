import { cn } from '@/utils'
import { PRODUCT_TABS } from '@/constants'
import { useProductTabs } from '@/hooks'
import { ProductCard } from '../ProductCard'
import { Spinner } from '@/components/ui/Spinner'
import type { Product } from '@/schemas/product.schema'
import styles from './ProductShelf.module.scss'

interface ProductShelfProps {
    title: string
    products: Product[]
    isLoading: boolean
    isError: boolean
    showTabs?: boolean
    onOpenModal: (product: Product) => void
}

export function ProductShelf({
    title,
    products,
    isLoading,
    isError,
    showTabs = false,
    onOpenModal,
}: ProductShelfProps) {
    const { activeTab, setActiveTab, filteredProducts } = useProductTabs(products)

    return (
        <section className={styles.shelf} aria-label={title}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>{title}</h2>
                    </div>
                    {!showTabs && <a href="#" className={styles.viewAll}>Ver todos</a>}
                </div>

                {showTabs && (
                    <div className={styles.tabs} role="tablist">
                        {PRODUCT_TABS.map((tab) => (
                            <button
                                key={tab.id}
                                role="tab"
                                aria-selected={activeTab === tab.id}
                                className={cn(
                                    styles.tab,
                                    activeTab === tab.id ? styles.tabActive : null,
                                )}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                )}

                {isLoading && (
                    <div className={styles.state}>
                        <Spinner size={40} />
                        <span>Carregando produtos...</span>
                    </div>
                )}

                {isError && !isLoading && (
                    <div className={styles.state}>
                        <p className={styles.error}>
                            Não foi possível carregar os produtos.
                        </p>
                    </div>
                )}

                {!isLoading && !isError && (
                    <div className={styles.grid}>
                        {filteredProducts.slice(0, 4).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onOpenModal={onOpenModal}
                            />
                        ))}
                    </div>
                )}

                {!isLoading && !isError && (
                    <>
                        <button className={cn(styles.arrow, styles.arrowLeft)} aria-label="Anterior">
                            <ChevronLeft />
                        </button>
                        <button className={cn(styles.arrow, styles.arrowRight)} aria-label="Próximo">
                            <ChevronRight />
                        </button>
                    </>
                )}
            </div>
        </section>
    )
}

function ChevronLeft() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
        </svg>
    )
}

function ChevronRight() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
        </svg>
    )
}

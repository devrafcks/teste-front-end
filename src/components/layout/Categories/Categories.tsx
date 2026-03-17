import { useState } from 'react'
import { cn } from '@/utils'
import { CATEGORIES } from '@/constants'
import { CategoryIcon } from './CategoryIcon'
import styles from './Categories.module.scss'

export function Categories() {
    const [active, setActive] = useState(CATEGORIES[0].id)

    return (
        <section className={styles.categories} aria-label="Categorias">
            <div className={styles.inner}>
                <ul className={styles.list} role="list">
                    {CATEGORIES.map((cat) => (
                        <li key={cat.id}>
                            <button
                                className={cn(
                                    styles.item,
                                    active === cat.id ? styles.active : null,
                                )}
                                onClick={() => setActive(cat.id)}
                                aria-current={active === cat.id ? 'true' : undefined}
                            >
                                <span className={styles.iconWrapper}>
                                    <CategoryIcon id={cat.icon} />
                                </span>
                                <span className={styles.label}>{cat.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

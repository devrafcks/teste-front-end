import styles from './Brands.module.scss'

const BRANDS = [1, 2, 3, 4, 5]

export function Brands() {
    return (
        <section className={styles.brands} aria-label="Navegue por marcas">
            <div className={styles.inner}>
                <h2 className={styles.title}>Navegue por marcas</h2>
                <ul className={styles.list} role="list">
                    {BRANDS.map((id) => (
                        <li key={id}>
                            <a href="#" className={styles.brandItem} aria-label="Ver produtos da marca">
                                <img src="/Logo.png" alt="Econverse" width={100} height={30} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

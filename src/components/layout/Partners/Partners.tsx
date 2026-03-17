import { Button } from '@/components/ui/Button'
import styles from './Partners.module.scss'

const PARTNERS = [
    { id: 1, title: 'Parceiros', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Parceiros', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

export function Partners() {
    return (
        <section className={styles.partners} aria-label="Parceiros">
            <div className={styles.inner}>
                {PARTNERS.map((partner) => (
                    <article key={partner.id} className={styles.card}>
                        <img
                            src="/parceiros.png"
                            alt="Parceiros"
                            className={styles.cardImage}
                        />
                        <div className={styles.overlay} />
                        <div className={styles.content}>
                            <h3 className={styles.title}>{partner.title}</h3>
                            <p className={styles.description}>{partner.description}</p>
                            <Button
                                variant="accent"
                                size="md"
                                onClick={() => { }}
                            >
                                CONFIRA
                            </Button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

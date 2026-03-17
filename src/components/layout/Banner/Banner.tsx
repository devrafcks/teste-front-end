import { Button } from '@/components/ui/Button'
import styles from './Banner.module.scss'

export function Banner() {
  return (
    <section className={styles.banner} aria-label="Promoção Black Friday">
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Venha conhecer nossas <br />
          promoções
        </h1>
        <p className={styles.subtitle}>
          <strong>50% Off</strong> nos produtos
        </p>
        <Button variant="accent" size="lg">
          Ver produto
        </Button>
      </div>
    </section>
  )
}

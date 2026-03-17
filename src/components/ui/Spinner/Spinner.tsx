import styles from './Spinner.module.scss'

interface SpinnerProps {
  size?: number
}

export function Spinner({ size = 32 }: SpinnerProps) {
  return (
    <span
      className={styles.spinner}
      style={{ width: size, height: size }}
      role="status"
      aria-label="Carregando"
    />
  )
}
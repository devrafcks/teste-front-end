import { cn } from '@/utils'
import styles from './Button.module.scss'

type ButtonVariant = 'primary' | 'accent' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  children: React.ReactNode
}

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  accent: styles.accent,
  outline: styles.outline,
  ghost: styles.ghost,
}

const sizeClass: Record<ButtonSize, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        styles.button,
        variantClass[variant],
        sizeClass[size],
        fullWidth ? styles.fullWidth : null,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
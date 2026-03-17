import { useState } from 'react'
import { cn } from '@/utils'
import { NAV_ITEMS } from '@/constants'
import styles from './Header.module.scss'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header} role="banner">
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <span className={styles.topBarItem}>
            <ShieldIcon />
            Compra <strong>100% segura</strong>
          </span>
          <span className={styles.topBarItem}>
            <TruckIcon />
            <strong>Frete grátis</strong> acima de R$ 200
          </span>
          <span className={styles.topBarItem}>
            <CardIcon />
            <strong>Parcele</strong> suas compras
          </span>
        </div>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.mainHeaderInner}>
          <a href="/" className={styles.logo} aria-label="Econverse">
            <img src="/Logo.png" alt="Econverse" width={140} height={40} />
          </a>

          <div className={styles.searchWrapper}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="O que você está buscando?"
              aria-label="Buscar produtos"
            />
            <button className={styles.searchBtn} aria-label="Pesquisar">
              <SearchIcon />
            </button>
          </div>

          <div className={styles.headerActions}>
            <button className={styles.actionBtn} aria-label="Comparar">
              <CompareIcon />
            </button>
            <button className={styles.actionBtn} aria-label="Favoritos">
              <HeartIcon />
            </button>
            <button className={styles.actionBtn} aria-label="Minha conta">
              <UserIcon />
            </button>
            <button className={styles.actionBtn} aria-label="Carrinho">
              <CartIcon />
            </button>
          </div>

          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseMenuIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      <nav
        className={cn(styles.navbar, menuOpen ? styles.navbarOpen : null)}
        aria-label="Navegação principal"
      >
        <div className={styles.navbarInner}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                styles.navItem,
                item.highlight ? styles.highlight : null,
                item.icon ? styles.withIcon : null,
              )}
            >
              {item.icon && <HomeIcon />}
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" />
      <path d="M16 8h4l3 5v3h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

function CardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function CompareIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseMenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
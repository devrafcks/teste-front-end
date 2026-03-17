import styles from './Footer.module.scss'

const FOOTER_LINKS: Record<string, string[]> = {
    Institucional: ['Sobre Nós', 'Manifesto', 'Trabalhe Conosco'],
    Ajuda: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
    Termos: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
}

export function Footer() {
    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <a href="/" aria-label="Econverse">
                        <img src="/Logo.png" alt="Econverse" width={130} height={38} />
                    </a>
                    <p className={styles.brandDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className={styles.social} aria-label="Redes sociais">
                        <a href="#" className={styles.socialLink} aria-label="Instagram">
                            <InstagramIcon />
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Facebook">
                            <FacebookIcon />
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>

                {Object.entries(FOOTER_LINKS).map(([section, links]) => (
                    <nav key={section} aria-label={section}>
                        <h3 className={styles.colTitle}>{section}</h3>
                        <ul className={styles.linkList}>
                            {links.map((link) => (
                                <li key={link}>
                                    <a href="#" className={styles.link}>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}
            </div>

            <div className={styles.bottomBar}>
                <div className={styles.bottomInner}>
                    <p>
                        Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. <br />
                        É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
                    </p>
                </div>
            </div>
        </footer>
    )
}

function InstagramIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    )
}

function FacebookIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}

function LinkedInIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}

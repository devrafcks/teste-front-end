import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import styles from './Newsletter.module.scss'

export function Newsletter() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [accepted, setAccepted] = useState(false)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!accepted) return
        console.log('Newsletter subscribe:', { name, email })
    }

    return (
        <section className={styles.newsletter} aria-labelledby="newsletter-title">
            <div className={styles.inner}>
                <div className={styles.textBlock}>
                    <h2 id="newsletter-title" className={styles.title}>
                        Inscreva-se na nossa newsletter
                    </h2>
                    <p className={styles.subtitle}>
                        Assine a nossa newsletter e receba de novidades e conteúdos exclusivos
                        da Econverse.
                    </p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-label="Seu nome"
                    />
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Seu e-mail"
                    />
                    <Button variant="accent" size="md" type="submit">
                        INSCREVER
                    </Button>

                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={accepted}
                            onChange={(e) => setAccepted(e.target.checked)}
                        />
                        <span>Aceito os termos e política de privacidade</span>
                    </label>
                </form>
            </div>
        </section>
    )
}

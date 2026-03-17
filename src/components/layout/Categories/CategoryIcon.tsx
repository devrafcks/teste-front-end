interface Props {
    id: string
}

export function CategoryIcon({ id }: Props) {
    const icons: Record<string, React.ReactNode> = {
        technology: (
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 20H15C12.2386 20 10 22.2386 10 25V50C10 52.7614 12.2386 55 15 55H50C52.7614 55 55 52.7614 55 50V25C55 22.2386 52.7614 20 50 20Z" stroke="currentColor" strokeWidth="2.5" />
                <path d="M25 60H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M32.5 55V60" stroke="currentColor" strokeWidth="2.5" />
                <rect x="58" y="42" width="12" height="22" rx="2" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="64" cy="60" r="1.5" fill="currentColor" />
            </svg>
        ),
        supermarket: (
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 30H65V65H15V30Z" stroke="currentColor" strokeWidth="2.5" />
                <path d="M25 30V25C25 19.4772 29.4772 15 35 15H45C50.5228 15 55 19.4772 55 25V30" stroke="currentColor" strokeWidth="2.5" />
                <path d="M30 45H50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M30 55H45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
        ),
        drinks: (
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 15H35L38 30H22L25 15Z" stroke="currentColor" strokeWidth="2.5" />
                <path d="M22 30V65H38V30" stroke="currentColor" strokeWidth="2.5" />
                <rect x="50" y="40" width="15" height="25" stroke="currentColor" strokeWidth="2.5" />
                <path d="M50 45H65" stroke="currentColor" strokeWidth="2.5" />
            </svg>
        ),
        tools: (
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 60L45 35M45 35L35 25L60 15M45 35L55 45L65 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M60 60L35 35M35 35L25 45L15 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        health: (
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 35C40 35 35 25 25 25C15 25 15 35 15 35C15 50 40 65 40 65C40 65 65 50 65 35C65 35 65 25 55 25C45 25 40 35 40 35Z" stroke="currentColor" strokeWidth="2.5" />
                <path d="M25 55C20 50 10 40 10 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
        ),
        sports: (
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 65H65" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M25 65V45L40 30H60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="45" cy="20" r="5" stroke="currentColor" strokeWidth="2.5" />
            </svg>
        ),
        fashion: (
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 15L30 10H50L60 15L55 40H25L20 15Z" stroke="currentColor" strokeWidth="2.5" />
                <path d="M25 40V65H55V40" stroke="currentColor" strokeWidth="2.5" />
                <path d="M60 55L70 65H55" stroke="currentColor" strokeWidth="2.5" />
            </svg>
        ),
    }

    return <>{icons[id] ?? icons.technology}</>
}

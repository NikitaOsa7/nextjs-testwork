import Link from 'next/link';
import s from '../styles/CustomLink.module.css'

export default function CustomLink({text, href}) {
    return (
        <Link legacyBehavior href={href}>
            <a className={s.link}>{text}</a>
        </Link>
    )
}
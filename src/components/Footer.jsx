import React from 'react'
import styles from '@/styles/footer.module.css'
import Link from 'next/link'
import { FaAngleDown } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <footer>
                <ul className={styles.container}>
                    <Link href='/'>
                        <li>Termos de Uso</li>
                    </Link>
                    <Link href='/'>
                        <li className={styles.borda}>Política de Privacidade</li>
                    </Link>
                    <Link href='/'>
                        <li className={styles.borda}>Ferramenta de Consentimento de Cookies</li>
                    </Link>
                </ul>
                <hr className={styles.linha} />
                <ul className={styles.container2}>
                    <Link href='/'>
                        <li>Atlântico Avanti</li>
                    </Link>
                    <Link href='/'>
                        <li className={styles.borda}>Look do Sino</li>
                    </Link>
                    <div className={styles.separado}>
                    </div>
                    <div className={styles.icons}>
                        <FaAngleDown className={styles.icons2} />
                        <Link href='/'>
                            <li>Português (BR)</li>
                        </Link>
                    </div>
                </ul>

            </footer>
        </div >
    )
}

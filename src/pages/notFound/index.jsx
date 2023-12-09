import styles from '@/styles/notFound.module.css'
import Link from 'next/link';

export default function NotFound() {

  return (
    <div className={styles.caixa}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>404</h1>
        <div className={styles.card}>
          <p>Page Not Found</p>
          <div className={styles.imagem}>
            <img src="/img/Icon1.svg" alt="" />
          </div>
          <div className={styles.link}>
            <Link href='/'>Voltar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


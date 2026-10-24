import Link from 'next/link';
import styles from './page.module.scss';

export default function CatalogoPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>Vértice</Link>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/cotacao">Solicitar cotação</Link>
          </nav>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.container}>
          <h1>Catálogo</h1>
          <p className={styles.subtitle}>Busque por nome, marca, código ou descrição</p>
          
          <div className={styles.searchBox}>
            <input type="text" placeholder="Buscar produtos..." className={styles.searchInput} disabled />
            <p className={styles.hint}>Busca e filtros serão implementados com dados reais</p>
          </div>

          <div className={styles.emptyState}>
            <p>Nenhum produto cadastrado ainda.</p>
            <p>Catálogo gerenciável pelo painel administrativo.</p>
            <Link href="/cotacao" className={styles.btn}>Solicitar cotação geral</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

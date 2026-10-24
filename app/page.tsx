import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.logo}>Vértice Representações Comerciais</h1>
          <nav className={styles.nav}>
            <Link href="/catalogo">Catálogo</Link>
            <Link href="/cotacao">Solicitar cotação</Link>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.container}>
          <h2 className={styles.heroTitle}>Catálogo B2B para solicitação de cotações</h2>
          <p className={styles.heroSubtitle}>
            Hidráulica e acessórios para materiais de construção. Angra dos Reis e Costa Verde - RJ
          </p>
          <div className={styles.heroActions}>
            <Link href="/catalogo" className={styles.btnPrimary}>Explorar catálogo</Link>
            <Link href="/cotacao" className={styles.btnSecondary}>Solicitar cotação</Link>
          </div>
        </div>
      </section>

      <section className={styles.steps}>
        <div className={styles.container}>
          <h3>Como funciona</h3>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <h4>Encontre produtos</h4>
              <p>Navegue pelo catálogo por categoria</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <h4>Solicite cotação</h4>
              <p>Adicione itens e informe seus dados</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <h4>Receba proposta</h4>
              <p>Nossa equipe entrará em contato</p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; {new Date().getFullYear()} Vértice Representações Comerciais</p>
          <nav>
            <Link href="/privacidade">Privacidade</Link>
            <Link href="/termos">Termos</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}

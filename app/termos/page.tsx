import Link from 'next/link';
import styles from './page.module.scss';

export default function TermosPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>Vértice</Link>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/catalogo">Catálogo</Link>
          </nav>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.container}>
          <h1>Termos de Uso</h1>
          <p className={styles.warning}><strong>ATENÇÃO:</strong> Este documento é provisório e precisa de revisão humana por profissional jurídico antes da publicação em produção.</p>
          
          <h2>1. Serviço</h2>
          <p>Este site é um catálogo B2B para solicitação de cotações, não sendo um e-commerce com checkout ou pagamento.</p>
          
          <h2>2. Uso</h2>
          <p>As informações são fornecidas para fins comerciais. Não é necessário criar conta para solicitar cotação.</p>
          
          <h2>3. Limitações</h2>
          <p>Os preços, prazos e condições serão informados diretamente pela empresa após análise da solicitação.</p>
        </div>
      </section>
    </main>
  );
}

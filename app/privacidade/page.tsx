import Link from 'next/link';
import styles from './page.module.scss';

export default function PrivacidadePage() {
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
          <h1>Aviso de Privacidade</h1>
          <p className={styles.warning}><strong>ATENÇÃO:</strong> Este documento é provisório e precisa de revisão humana por profissional jurídico antes da publicação em produção.</p>
          
          <h2>1. Finalidade</h2>
          <p>Os dados coletados no formulário de cotação são utilizados exclusivamente para responder à solicitação de cotação enviada.</p>
          
          <h2>2. Dados coletados</h2>
          <p>Coletamos: nome, empresa, e-mail, telefone/WhatsApp, cidade, UF, itens solicitados e informações complementares opcionais.</p>
          
          <h2>3. Consentimento</h2>
          <p>O consentimento para marketing é separado, opcional e não condiciona o envio da cotação.</p>
          
          <h2>4. Armazenamento</h2>
          <p>Os dados são armazenados em arquivo JSON privado, não acessível publicamente. Este método tem limitações para ambientes com múltiplas instâncias.</p>
          
          <h2>5. Contato</h2>
          <p>Para exercer seus direitos, entre em contato através dos canais informados na proposta.</p>
        </div>
      </section>
    </main>
  );
}

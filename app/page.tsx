import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoSection}>
            <Image 
              src="/logo-vertice.png" 
              alt="Vértice Representações Comerciais" 
              width={32} 
              height={32}
              className={styles.logoImg}
            />
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>VÉRTICE</span>
              <span className={styles.logoSubtitle}>Conectando marcas e mercados</span>
            </div>
          </div>
          
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Início</Link>
            <Link href="/catalogo" className={styles.navLink}>Catálogo</Link>
            <Link href="#" className={styles.navLink}>Sobre a Vértice</Link>
            <Link href="#" className={styles.navLink}>Como Funciona</Link>
            <Link href="/cotacao" className={styles.navLink}>Contato</Link>
          </nav>
          
          <div className={styles.headerActions}>
            <div className={styles.quoteListBtn}>
              <span className={`material-symbols-outlined ${styles.icon}`}>assignment</span>
              <span className={styles.text}>Lista de Cotação</span>
              <span className={styles.badge}>0 itens</span>
            </div>
            <Link href="/cotacao" className={styles.ctaBtn}>Solicitar Cotação</Link>
            <div className={styles.userBtn}>
              <span className={`material-symbols-outlined ${styles.icon}`}>person</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <svg className="w-full h-full" fill="none" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="48" id="arch-grid" patternUnits="userSpaceOnUse" width="48">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#00162c" strokeWidth="1"></path>
              </pattern>
            </defs>
            <rect fill="url(#arch-grid)" height="100%" width="100%"></rect>
            <path d="M720 180 L1120 780 L960 780 L720 380 L480 780 L320 780 Z" fill="#00162c"></path>
          </svg>
        </div>
        <div className={styles.heroGlow} aria-hidden="true"></div>
        
        <div className={styles.heroContainer}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            <span className={styles.text}>Representação Comercial e Distribuição Regional • Angra dos Reis e Costa Verde</span>
          </div>
          
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div>
                <span className={styles.heroLabel}>Parceria B2B Direta da Fábrica</span>
                <h1 className={styles.heroTitle}>
                  Sua loja precisa.<br />
                  <span className={styles.accent}>A Vértice conecta.</span>
                </h1>
              </div>
              <p className={styles.heroSubtitle}>
                Conectamos fabricantes e fornecedores industriais ao comércio varejista de materiais de construção, hidráulica, elétrica e acabamentos com atendimento presencial ágil e condições comerciais diretas de fábrica.
              </p>
              <div className={styles.heroActions}>
                <Link href="/catalogo" className={styles.btnPrimary}>
                  <span>Explorar catálogo de produtos</span>
                  <span className={`material-symbols-outlined ${styles.icon}`}>arrow_forward</span>
                </Link>
                <Link href="/cotacao" className={styles.btnSecondary}>
                  <span className={`material-symbols-outlined ${styles.icon}`}>request_quote</span>
                  <span>Solicitar cotação rápida</span>
                </Link>
              </div>
              <div className={styles.heroMicro}>
                <div className={styles.microItem}>
                  <span className={`material-symbols-outlined ${styles.microIcon}`}>verified</span>
                  <span>Venda exclusiva para CNPJ cadastrado</span>
                </div>
                <div className={styles.microItem}>
                  <span className={`material-symbols-outlined ${styles.microIcon}`}>local_shipping</span>
                  <span>Faturamento e frete direto de fábrica</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricIconWrap}>
                <span className="material-symbols-outlined">map</span>
              </div>
              <div className={styles.metricContent}>
                <span className={styles.metricTitle}>Atendimento Regional Especializado</span>
                <span className={styles.metricDesc}>Cobertura dedicada em Angra dos Reis, Paraty e Mangaratiba com visitas técnicas periódicas.</span>
              </div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricIconWrapBlue}>
                <span className="material-symbols-outlined">factory</span>
              </div>
              <div className={styles.metricContent}>
                <span className={styles.metricTitle}>Linha Direta com Fabricantes</span>
                <span className={styles.metricDesc}>Sem intermediários desnecessários: tabela comercial oficial, políticas de desconto e bonificações.</span>
              </div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricIconWrap}>
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <div className={styles.metricContent}>
                <span className={styles.metricTitle}>Cotações em até 24h úteis</span>
                <span className={styles.metricDesc}>Retorno ágil de cotações com cálculo de impostos, prazos e faturamento via representante local.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

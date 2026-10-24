'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logoSection}>
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
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Início</Link>
          <Link href="/catalogo" className={styles.navLink}>Catálogo</Link>
          <Link href="/sobre" className={styles.navLink}>Sobre a Vértice</Link>
          <Link href="#" className={styles.navLink}>Como Funciona</Link>
          <Link href="/contato" className={styles.navLink}>Contato</Link>
        </nav>
        
        <div className={styles.headerActions}>
          <Link href="/lista-cotacao" className={styles.quoteListBtn}>
            <span className={`material-symbols-outlined ${styles.icon}`}>assignment</span>
            <span className={styles.text}>Lista de Cotação</span>
            <span className={styles.badge}>0 itens</span>
          </Link>
          <Link href="/cotacao" className={styles.ctaBtn}>Solicitar Cotação</Link>
          <div className={styles.userBtn}>
            <span className={`material-symbols-outlined ${styles.icon}`}>person</span>
          </div>
        </div>
      </div>
    </header>
  );
}

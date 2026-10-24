import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <div className={styles.brandHeader}>
              <span className={styles.brandName}>VÉRTICE</span>
            </div>
            <p className={styles.brandDesc}>
              Representação comercial institucional conectando fábricas líderes a revendas e distribuidores de materiais de construção, hidráulica, elétrica e acabamentos na Costa Verde - RJ.
            </p>
            <div className={styles.location}>
              <span className={`material-symbols-outlined ${styles.locationIcon}`}>location_on</span>
              <span>Angra dos Reis • Paraty • Mangaratiba</span>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <span className={styles.sectionTitle}>Navegação Comercial</span>
            <ul className={styles.linkList}>
              <li><Link href="/catalogo">Catálogo de Produtos</Link></li>
              <li><Link href="/cotacao">Solicitação de Cotação</Link></li>
              <li><Link href="#">Como Funciona</Link></li>
              <li><Link href="/sobre">Sobre a Vértice</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <span className={styles.sectionTitle}>Políticas & Atendimento</span>
            <ul className={styles.linkList}>
              <li><Link href="/privacidade">Política de Privacidade</Link></li>
              <li><Link href="/termos">Termos de Uso</Link></li>
              <li><Link href="/contato">Central de Atendimento</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <span className={styles.sectionTitle}>Acesso Restrito</span>
            <p className={styles.restrictedDesc}>
              Painel operacional para representantes de campo, coordenação regional e gestão de pedidos industriais.
            </p>
            <Link href="/admin/login" className={styles.adminBtn}>
              <span className="material-symbols-outlined">lock</span>
              <span>Acesso da Equipe</span>
            </Link>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.footerNote}>
            Atendimento exclusivo B2B para lojistas de materiais de construção, hidráulica, elétrica e acabamentos. Não comercializamos no varejo nem realizamos checkout online.
          </p>
          <span className={styles.copyright}>© 2025 Vértice Comercial. CNPJ & Marcas Registradas.</span>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.breadcrumb}>
            <nav>
              <Link href="/">Início</Link>
              <span className="material-symbols-outlined">chevron_right</span>
              <span className={styles.current}>Catálogo de Produtos</span>
            </nav>
            <div className={styles.headerInfo}>
              <div>
                <div className={styles.badge}>Tabela de Fornecimento B2B</div>
                <h1 className={styles.title}>Catálogo de Produtos</h1>
                <p className={styles.subtitle}>
                  Consulte nossa linha de produtos para materiais de construção, hidráulica, elétrica e acabamentos. 
                  Adicione itens à sua lista de cotação para receber condições comerciais diretas.
                </p>
              </div>
              <div className={styles.infoBox}>
                <span className={styles.infoDot}></span>
                <span>Venda Direta Indústria</span>
                <div className={styles.divider}></div>
                <span>Faturamento CNPJ</span>
              </div>
            </div>
          </section>

          <section className={styles.filters}>
            <div className={styles.searchBar}>
              <span className="material-symbols-outlined">search</span>
              <input type="text" placeholder="Buscar por nome do produto, linha, SKU ou fabricante..." />
            </div>
            <div className={styles.filterRow}>
              <div className={styles.sort}>
                <span>Ordenar por:</span>
                <select>
                  <option>Mais cotados</option>
                  <option>Nome (A-Z)</option>
                  <option>Lançamentos</option>
                </select>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
              <div className={styles.viewToggle}>
                <button className={styles.active}>
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button>
                  <span className="material-symbols-outlined">view_list</span>
                </button>
              </div>
            </div>
            <div className={styles.categoryChips}>
              <button className={styles.chipActive}>Todos (163)</button>
              <button>Hidráulica & Conexões (42)</button>
              <button>Metais & Torneiras (38)</button>
              <button>Elétrica & Iluminação (54)</button>
              <button>Ferramentas & Acessórios (29)</button>
            </div>
          </section>

          <div className={styles.contentGrid}>
            <aside className={styles.sidebar}>
              <div className={styles.filterCard}>
                <div className={styles.filterHeader}>
                  <div className={styles.filterTitle}>
                    <span className="material-symbols-outlined">tune</span>
                    <span>Filtros Avançados</span>
                  </div>
                  <button className={styles.clearBtn}>Limpar</button>
                </div>
                <div className={styles.filterSection}>
                  <span className={styles.filterLabel}>Fabricante / Linha</span>
                  <div className={styles.checkboxGroup}>
                    <label><input type="checkbox" defaultChecked /> Tigre Brasil <span>32</span></label>
                    <label><input type="checkbox" defaultChecked /> Deca / Duratex <span>28</span></label>
                    <label><input type="checkbox" /> Prysmian Group <span>24</span></label>
                    <label><input type="checkbox" /> Schneider Electric <span>19</span></label>
                    <label><input type="checkbox" /> Norton Abrasivos <span>15</span></label>
                  </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.filterSection}>
                  <span className={styles.filterLabel}>Aplicação Técnica</span>
                  <div className={styles.checkboxGroup}>
                    <label><input type="checkbox" /> Residencial & Comercial Leve <span>88</span></label>
                    <label><input type="checkbox" /> Predial / Infraestrutura <span>61</span></label>
                    <label><input type="checkbox" /> Industrial & Náutico <span>34</span></label>
                  </div>
                </div>
              </div>
              
              <div className={styles.ctaCard}>
                <div className={styles.ctaIcon}>
                  <span className="material-symbols-outlined">contact_support</span>
                </div>
                <h3>Item fora de catálogo?</h3>
                <p>Representamos mais de 12 mil itens industriais. Envie seu memorial descritivo ou lista de compras para cotação sob medida.</p>
                <Link href="/cotacao" className={styles.ctaCardBtn}>
                  Falar com Representante
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </aside>

            <main className={styles.productGrid}>
              <div className={styles.resultsHeader}>
                <span>Exibindo <strong>8</strong> de <strong>163</strong> produtos industriais disponíveis para faturamento direto</span>
                <span className={styles.hiddenMobile}>Lote Mínimo & Prazos conforme política da fábrica</span>
              </div>
              
              <div className={styles.products}>
                {[1,2,3,4,5,6,7,8].map((i) => (
                  <div key={i} className={styles.productCard}>
                    <div className={styles.productImage}>
                      <div className={styles.categoryTag}>Hidráulica</div>
                      <div className={styles.skuTag}>SKU: VER-HID-2041</div>
                    </div>
                    <div className={styles.productInfo}>
                      <span className={styles.brand}>Censi Mecanismos</span>
                      <h3>Kit Válvula de Descarga e Mecanismo para Caixa Acoplada Universal</h3>
                      <p>Compatível com acionamento superior e lateral; vedação em silicone de alta durabilidade e economia de água.</p>
                    </div>
                    <div className={styles.productFooter}>
                      <div className={styles.productMeta}>
                        <span>Emb. Master: 12 un</span>
                        <span className={styles.highlight}>Pronta Entrega RJ</span>
                      </div>
                      <div className={styles.productActions}>
                        <Link href="/catalogo/detalhes" className={styles.detailsBtn}>
                          <span className="material-symbols-outlined">visibility</span>
                          Detalhes
                        </Link>
                        <button className={styles.quoteBtn}>
                          <span className="material-symbols-outlined">add</span>
                          Cotar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

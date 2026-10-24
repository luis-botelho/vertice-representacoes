import Link from 'next/link';
import styles from './page.module.scss';

export default function CotacaoPage() {
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
          <h1>Solicitar cotação</h1>
          <p className={styles.subtitle}>Preencha os dados abaixo. Nenhuma conta é necessária.</p>

          <form className={styles.form} action="/api/quotes" method="post">
            <fieldset className={styles.fieldset}>
              <legend>Dados de contato</legend>
              
              <div className={styles.formGroup}>
                <label htmlFor="contactName">Nome completo *</label>
                <input type="text" id="contactName" name="contactName" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="companyName">Empresa *</label>
                <input type="text" id="companyName" name="companyName" required />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">E-mail *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Telefone/WhatsApp *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="city">Cidade *</label>
                  <input type="text" id="city" name="city" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="state">UF *</label>
                  <input type="text" id="state" name="state" maxLength={2} required />
                </div>
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend>Itens da cotação</legend>
              <div className={styles.formGroup}>
                <label htmlFor="items">Descreva os itens, quantidades e unidades *</label>
                <textarea id="items" name="items" rows={4} required placeholder="Ex: Tubo PVC 100mm - Qtd: 50 un"></textarea>
              </div>
            </fieldset>

            <fieldset className={styles.fieldset}>
              <legend>Informações complementares (opcionais)</legend>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" rows={3} placeholder="Outras informações relevantes"></textarea>
              </div>
            </fieldset>

            <div className={styles.privacy}>
              <label>
                <input type="checkbox" name="privacyAccepted" value="true" required />
                Li e aceito o <Link href="/privacidade">aviso de privacidade</Link> *
              </label>
              <label>
                <input type="checkbox" name="consentMarketing" value="true" />
                Desejo receber informações comerciais (opcional)
              </label>
              <input type="hidden" name="privacyNoticeVersion" value="1.0" />
            </div>

            <button type="submit" className={styles.submitBtn}>Enviar solicitação</button>
          </form>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';
import styles from './page.module.scss';

export default function ConfirmacaoPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Solicitação enviada</h1>
        <p>Recebemos sua solicitação de cotação. Nossa equipe entrará em contato em breve.</p>
        <p className={styles.note}>Caso não tenha recebido confirmação por e-mail, não se preocupe - sua solicitação foi registrada.</p>
        <div className={styles.actions}>
          <Link href="/" className={styles.btn}>Voltar ao início</Link>
          <Link href="/catalogo" className={styles.btnSecondary}>Ver catálogo</Link>
        </div>
      </div>
    </main>
  );
}

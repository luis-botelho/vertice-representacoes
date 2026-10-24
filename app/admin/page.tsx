import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth/session';
import Link from 'next/link';
import styles from './page.module.scss';

export default async function AdminPage() {
  const session = await getSession();
  if (!session) {
    redirect('/admin/login');
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>Painel Administrativo</h1>
          <p>Logado como: {session.email}</p>
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <Link href="/admin/produtos" className={styles.card}>
              <h2>Produtos</h2>
              <p>Gerenciar catálogo</p>
            </Link>
            <Link href="/admin/categorias" className={styles.card}>
              <h2>Categorias</h2>
              <p>Gerenciar categorias</p>
            </Link>
            <Link href="/admin/leads" className={styles.card}>
              <h2>Leads</h2>
              <p>Gerenciar solicitações de cotação</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

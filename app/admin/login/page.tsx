import styles from './page.module.scss';

export default function AdminLoginPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Acesso Administrativo</h1>
        <p className={styles.warning}>Rota não aparece na navegação pública. Proteção server-side obrigatória.</p>
        <form className={styles.form} action="/api/admin/login" method="post">
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>E-mail</label>
            <input type="email" id="email" name="email" required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Senha</label>
            <input type="password" id="password" name="password" required className={styles.input} />
          </div>
          <button type="submit" className={styles.btn}>Entrar</button>
        </form>
      </div>
    </main>
  );
}

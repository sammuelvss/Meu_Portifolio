import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Meu Portfólio. Desenvolvido com Next.js.</p>
      </div>
    </footer>
  );
}

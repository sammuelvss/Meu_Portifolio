import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          &copy; {new Date().getFullYear()} Por {""}
          <a href="https://github.com/sammuelvss" className={styles.link}>
            Sammuel Victor
          </a>
          . Desenvolvido com Next.js.
        </p>
      </div>
    </footer>
  );
}

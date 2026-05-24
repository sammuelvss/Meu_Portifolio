import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Olá, eu sou Sammuel Victor</h1>
        <p className={styles.description}>
          Estudante de Sistemas para Internet na UNICAP e entusiasta em Desenvolvimento de Sistemas. 
          Focado em criar soluções eficientes com Java, React e inovação tecnológica.
        </p>
        <div className={styles.cta}>
          <Link href="/projetos" className={styles.primaryButton}>Ver Projetos</Link>
          <Link href="/sobre" className={styles.secondaryButton}>Conhecer Trajetória</Link>
        </div>
        <div className={styles.contactInfo}>
          <p>📍 Recife, PE</p>
          <p>📧 sammuelvictor7@gmail.com</p>
          <p>📱 (81) 99937-3658</p>
        </div>
      </section>
    </main>
  );
}

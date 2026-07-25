import styles from "./page.module.css";
import Link from "next/link";
import ParticleField from "@/components/ParticleField"; // <-- Nova importação

export default function Home() {
  return (
    <>
      <ParticleField />{" "}
      {/* <-- Substituindo a bolha pelo campo de partículas */}
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Olá, eu sou Sammuel Victor</h1>

          <p className={styles.description}>
            Estudante de Sistemas para Internet na UNICAP e entusiasta em
            Desenvolvimento de Sistemas. Focado em criar soluções eficientes com
            Java, React e inovação tecnológica.
          </p>

          <div className={styles.cta}>
            <Link href="/contato" className={styles.liquidGlassWrapper}>
              <div className={styles.liquidGlassEffect}></div>
              <div
                className={`${styles.liquidGlassTint} ${styles.tintPrimary}`}
              ></div>
              <div className={styles.liquidGlassShine}></div>
              <span className={styles.liquidGlassText}>Contato</span>
            </Link>

            <Link href="/sobre" className={styles.liquidGlassWrapper}>
              <div className={styles.liquidGlassEffect}></div>
              <div
                className={`${styles.liquidGlassTint} ${styles.tintSecondary}`}
              ></div>
              <div className={styles.liquidGlassShine}></div>
              <span className={styles.liquidGlassText}>
                Conhecer Trajetória
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

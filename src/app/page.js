import styles from "./page.module.css";
import Link from "next/link";
import BackgroundShader from "@/components/BackgroundShader";

export default function Home() {
  return (
    <>
      <BackgroundShader />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Olá, eu sou Sammuel Victor</h1>

          <p className={styles.description}>
            Estudante de Sistemas para Internet na UNICAP e entusiasta em
            Desenvolvimento de Sistemas. Focado em criar soluções eficientes com
            Java, React e inovação tecnológica.
          </p>

          <div className={styles.cta}>
            {/* BOTÃO 1 - PRIMÁRIO */}
            <Link href="/projetos" className={styles.liquidGlassWrapper}>
              <div className={styles.liquidGlassEffect}></div>
              <div
                className={`${styles.liquidGlassTint} ${styles.tintPrimary}`}
              ></div>
              <div className={styles.liquidGlassShine}></div>
              <span className={styles.liquidGlassText}>Ver Projetos</span>
            </Link>

            {/* BOTÃO 2 - SECUNDÁRIO */}
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

          <div className={styles.contactInfo}>
            <p> Recife, PE</p>
            <p> sammuelvictor7@gmail.com</p>
            <p> (81) 99937-3658</p>
          </div>
        </section>

        {/* --- FILTRO SVG INVISÍVEL PARA O EFEITO LÍQUIDO --- */}
        <svg
          style={{ width: 0, height: 0, position: "absolute" }}
          aria-hidden="true"
          focusable="false"
        >
          <filter id="glass-distortion">
            {/* Cria a textura orgânica que causa a distorção do fundo */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
      </main>
    </>
  );
}

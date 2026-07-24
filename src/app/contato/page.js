import styles from "./page.module.css";

export default function Contato() {
  return (
    <main>
      <h1>Entre em Contato</h1>
      <p className={styles.subtitle}>
        Sinta-se à vontade para me mandar uma mensagem ou acompanhar minhas
        redes.
      </p>

      <div className={styles.contactContainer}>
        <div className={styles.card}>
          <h3>E-mail</h3>
          <a href="mailto:sammuelvictor7@gmail.com" className={styles.link}>
            sammuelvictor7@gmail.com
          </a>
        </div>

        <div className={styles.card}>
          <h3>Telefone / WhatsApp</h3>
          <a
            href="https://wa.me/5581999373658"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            (81) 99937-3658
          </a>
        </div>

        <div className={styles.card}>
          <h3>GitHub</h3>
          <a
            href="https://github.com/sammuelvss"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            github.com/sammuelvss
          </a>
        </div>
        <div className={styles.card}>
          <h3>Linkedin</h3>
          <a
            href="https://www.linkedin.com/in/sammuel-victor/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            linkedin.com/sammuel-victor
          </a>
        </div>

        <div className={styles.card}>
          <h3>Localização</h3>
          <p>Recife, PE — Brasil</p>
        </div>
      </div>
    </main>
  );
}

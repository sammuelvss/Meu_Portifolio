import styles from "./page.module.css";

export default function Sobre() {
  const techs = [
    { name: "Linguagens", description: "Java (Spring Boot), JavaScript (React), C++, Arduino, HTML5, CSS3." },
    { name: "Ferramentas", description: "Git, GitHub, Figma, MySQL, Trello, Jira, Metodologias Ágeis." },
    { name: "Idiomas", description: "Inglês Intermediário (B1) e Português Nativo." },
    { name: "Soft Skills", description: "Proatividade, Resolução de problemas, Comunicação, Criatividade e Trabalho em equipe." },
  ];

  const projectTechs = [
    { name: "Next.js 14", description: "Framework utilizado para a estrutura e roteamento do site." },
    { name: "React", description: "Biblioteca base para os componentes da interface." },
    { name: "CSS Modules", description: "Utilizado para estilização moderna e isolada." },
    { name: "GitHub API", description: "Integração dinâmica para exibir seus repositórios fixados." },
  ];

  return (
    <main>
      <h1>Sobre Mim</h1>
      <section className={styles.section}>
        <p>
          Sammuel Victor Santana de Souza. Atualmente graduando em Sistemas Para Internet pela UNICAP (conclusão 2027.1). 
          Sou um desenvolvedor em busca de desafios que unam tecnologia, inovação e impacto real.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Habilidades e Competências</h2>
        <div className={styles.techList}>
          {techs.map((tech) => (
            <div key={tech.name} className={styles.techItem}>
              <strong>{tech.name}</strong>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Tecnologias deste Portfólio</h2>
        <p>Este site foi desenvolvido com as seguintes tecnologias:</p>
        <div className={styles.techList}>
          {projectTechs.map((tech) => (
            <div key={tech.name} className={styles.techItem}>
              <strong>{tech.name}</strong>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

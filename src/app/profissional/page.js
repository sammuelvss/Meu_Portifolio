import styles from "./page.module.css";

export default function Profissional() {
  const experiencias = [
    {
      empresa: "Empresa Júnior UNICAP",
      cargo: "Consultor de Projetos & Dev",
      periodo: "Mar/2026 – Atual",
      atividades: [
        "Atuação como consultor de projetos e membro da equipe interna de tecnologia.",
        "Diagnóstico e execução de projetos de identidade visual e gestão organizacional.",
        "Manutenção e evolução da plataforma web da empresa, focando em UX.",
      ],
    },
    {
      empresa: "Residência Tecnológica (Porto Digital)",
      cargo: "Robótica Educacional",
      periodo: "Experiência de Projeto",
      atividades: [
        "Desenvolvimento de raciocínio lógico para estudantes do ensino fundamental I.",
        "Prototipagem digital (modelagem 3D) e Hardware com Arduino.",
        "Programação em C++ aplicada à robótica.",
      ],
    },
    {
      empresa: "Hackathon EdScript",
      cargo: "Esportes da Sorte",
      periodo: "Evento/Competição",
      atividades: [
        "Desenvolvimento de solução digital em equipe para desafio corporativo.",
        "Ideação e construção do protótipo utilizando Design Thinking.",
        "Mapeamento do problema até a entrega final.",
      ],
    },
  ];

  return (
    <main>
      <h1>Experiência Profissional e Projetos</h1>
      <div className={styles.experienceList}>
        {experiencias.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <div className={styles.header}>
              <h3>{exp.cargo}</h3>
              <span className={styles.periodo}>{exp.periodo}</span>
            </div>
            <p className={styles.empresa}>{exp.empresa}</p>
            <ul className={styles.atividades}>
              {exp.atividades.map((atv, i) => (
                <li key={i}>{atv}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

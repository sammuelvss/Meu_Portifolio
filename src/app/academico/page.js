import styles from "./page.module.css";

export default function Academico() {
  const educacao = [
    {
      instituicao: "UNICAP (Universidade Católica de Pernambuco)",
      curso: "Graduação em Sistemas Para Internet",
      periodo: "Em curso (Conclusão 2027.1)",
      descricao: "Foco no desenvolvimento de aplicações para web, design de interfaces e arquitetura de sistemas.",
    },
    {
      instituicao: "Porto Digital",
      curso: "Residência Tecnológica",
      periodo: "Concluído / Em curso",
      descricao: "Resolução de problemas reais através de desafios de inovação em parceria com empresas do ecossistema Porto Digital.",
    },
  ];

  return (
    <main>
      <h1>Formação Acadêmica</h1>
      <div className={styles.timeline}>
        {educacao.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.header}>
              <h3>{item.curso}</h3>
              <span className={styles.periodo}>{item.periodo}</span>
            </div>
            <p className={styles.instituicao}>{item.instituicao}</p>
            <p>{item.descricao}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

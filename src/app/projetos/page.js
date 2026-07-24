import styles from "./page.module.css";

async function getRepos() {
  const res = await fetch(
    "https://api.github.com/users/sammuelvss/repos?per_page=100",
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error("Falha ao buscar repositórios");
  }

  const allRepos = await res.json();
  const pinnedNames = [
    "PROJECT-FILM-SITE-AvaliaFilmes-",
    "Estudos",
    "LISTAS-EM-JAVA",
    "Projeto-de-Robotica-Educacional-FRAME",
    "React_Training_project",
    "SpringBoot_Training",
  ];

  return allRepos.filter((repo) => pinnedNames.includes(repo.name));
}

export default async function Projetos() {
  const repos = await getRepos();

  return (
    <main>
      <h1>Projetos Desenvolvidos e Estudos Práticos</h1>
      <p className={styles.subtitle}>
        Repositórios públicos buscados dinamicamente via GitHub API.
      </p>

      <div className={styles.grid}>
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>{repo.name}</h3>
            <p className={styles.description}>
              {repo.description || "Sem descrição disponível."}
            </p>
            <div className={styles.footer}>
              {/*<span className={styles.language}>{repo.language}</span>*/}
              <span className={styles.stars}>⭐ {repo.stargazers_count}</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}

const programs = [
  {
    title: "SOC Operator",
    description:
      "Workflow complet pour analyser, qualifier et escalader des incidents."
  },
  {
    title: "Pentest avancé",
    description:
      "OSINT, exploitation web, pivoting et rédaction de rapports exploitables."
  },
  {
    title: "Cloud Defense",
    description:
      "Protection multi-cloud, IAM, threat modeling et remédiation rapide."
  }
];

const modules = [
  {
    name: "Fondations",
    hours: "12h",
    lessons: "12 lessons"
  },
  {
    name: "Détection",
    hours: "18h",
    lessons: "19 lessons"
  },
  {
    name: "Réponse",
    hours: "16h",
    lessons: "14 lessons"
  }
];

export default function ProgramsPage() {
  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h1>Programmes complets</h1>
          <p>
            Des parcours structurés pour aller du niveau débutant à expert avec
            des checkpoints hebdomadaires.
          </p>
        </div>
        <button className="button-primary">Télécharger la brochure</button>
      </div>

      <div className="panel-grid">
        {programs.map((program) => (
          <article key={program.title} className="panel">
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </article>
        ))}
      </div>

      <div className="module-grid">
        {modules.map((module) => (
          <div key={module.name} className="module-card">
            <h3>{module.name}</h3>
            <p>{module.hours} · {module.lessons}</p>
            <button className="button-secondary">Voir les leçons</button>
          </div>
        ))}
      </div>
    </section>
  );
}

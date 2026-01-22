const highlights = [
  {
    title: "Parcours adaptatif",
    description:
      "Des modules qui s'ajustent à ton niveau et débloquent des challenges chaque jour."
  },
  {
    title: "Labs live",
    description:
      "Des environnements isolés pour tester les attaques et défense en conditions réelles."
  },
  {
    title: "Coaching humain",
    description:
      "Mentors disponibles pour corriger tes scripts et améliorer ta posture sécurité."
  }
];

const dailyPlan = [
  "5 minutes de veille cyber",
  "1 mini-quiz de 6 questions",
  "1 challenge guidé",
  "1 recap personnalisé"
];

export default function Home() {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Cyber Defense Training Platform</p>
        <h1>
          Apprends la cyber sécurité comme un jeu quotidien.
        </h1>
        <p>
          Un parcours complet inspiré des méthodes Duolingo : des lessons courtes,
          des tests interactifs et des défis progressifs pour maîtriser le SOC,
          le pentest et la défense réseau.
        </p>
        <div className="cta">
          <button className="button-primary">Démarrer aujourd'hui</button>
          <button className="button-secondary">Voir un parcours</button>
        </div>
        <div className="hero-metrics">
          <div>
            <strong>+120</strong>
            <span>Leçons interactives</span>
          </div>
          <div>
            <strong>45</strong>
            <span>Challenges actifs</span>
          </div>
          <div>
            <strong>98%</strong>
            <span>Satisfaction cohorte</span>
          </div>
        </div>
      </div>
      <div className="console">
        &gt; mission: <span>daily training</span>
        <br />
        &gt; focus: <span>phishing response</span>
        <br />
        &gt; streak: <span>12 jours consécutifs</span>
        <br />
        &gt; next: <span>API security lab</span>
      </div>

      <div className="panel-grid">
        {highlights.map((item) => (
          <article key={item.title} className="panel">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <div className="daily-card">
        <h2>Routine quotidienne recommandée</h2>
        <p>
          Construis ta progression jour après jour avec une routine guidée et
          des micro-défis motivants.
        </p>
        <ul>
          {dailyPlan.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

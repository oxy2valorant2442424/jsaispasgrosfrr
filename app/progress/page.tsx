const progress = [
  {
    title: "SOC Essentials",
    percent: 68,
    status: "En cours"
  },
  {
    title: "Threat Hunting",
    percent: 42,
    status: "À reprendre"
  },
  {
    title: "Web Exploitation",
    percent: 82,
    status: "Presque terminé"
  }
];

const achievements = [
  "Badge Blue Team niveau 2",
  "7 jours de streak",
  "Premier rapport SOC livré"
];

export default function ProgressPage() {
  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h1>Suivi de progression</h1>
          <p>
            Visualise tes progrès, tes badges et les prochaines leçons à compléter.
          </p>
        </div>
        <button className="button-secondary">Exporter le rapport</button>
      </div>

      <div className="progress-grid">
        {progress.map((item) => (
          <div key={item.title} className="progress-card">
            <div>
              <h3>{item.title}</h3>
              <p>{item.status}</p>
            </div>
            <div className="progress-bar">
              <span style={{ width: `${item.percent}%` }} />
            </div>
            <strong>{item.percent}%</strong>
          </div>
        ))}
      </div>

      <div className="achievement-card">
        <h2>Badges récents</h2>
        <ul>
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button className="button-primary">Débloquer un nouveau badge</button>
      </div>
    </section>
  );
}

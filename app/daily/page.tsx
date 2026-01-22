const routine = [
  {
    title: "Warm-up",
    detail: "5 minutes de quiz sur la veille et les incidents récents."
  },
  {
    title: "Leçon guidée",
    detail: "Cours interactif sur la sécurisation API et les bonnes pratiques."
  },
  {
    title: "Challenge",
    detail: "Simulation d'attaque pour tester ta réponse en temps limité."
  },
  {
    title: "Feedback",
    detail: "Analyse automatique et tips pour progresser demain."
  }
];

export default function DailyPage() {
  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h1>Routine quotidienne</h1>
          <p>
            Une progression quotidienne pour renforcer tes réflexes et maintenir
            ton streak.
          </p>
        </div>
        <div className="streak-card">
          <strong>12 jours</strong>
          <span>Streak actuel</span>
        </div>
      </div>

      <div className="routine-grid">
        {routine.map((item) => (
          <div key={item.title} className="routine-card">
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="daily-actions">
        <button className="button-primary">Commencer la routine</button>
        <button className="button-secondary">Planifier un rappel</button>
      </div>
    </section>
  );
}

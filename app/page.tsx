const panels = [
  {
    title: "Bootcamp Zero Trust",
    description:
      "Simulations live d'attaques, posture Zero Trust et micro-segmentation guidée."
  },
  {
    title: "SOC immersif",
    description:
      "Dashboards temps réel, corrélation d'alertes et triage collaboratif."
  },
  {
    title: "Labs offensifs",
    description:
      "Exploits contrôlés, red team playbooks et reverse engineering."
  },
  {
    title: "Blue Team Ops",
    description:
      "Hardening, réponse aux incidents et automatisation SOAR."
  }
];

export default function Home() {
  return (
    <main>
      <nav>
        <div className="logo">CYBER SENTINEL</div>
        <div className="menu">
          <span>Programmes</span>
          <span>Labs</span>
          <span>Experts</span>
          <span>Contact</span>
        </div>
      </nav>

      <section className="hero">
        <div>
          <h1>
            Entraînement cyber sécurité nouvelle génération.
          </h1>
          <p>
            Passez en mode défense avancée grâce à des scénarios réalistes,
            des coachs certifiés et des environnements sécurisés inspirés des
            SOC modernes.
          </p>
          <div className="cta">
            <button className="button-primary">Rejoindre la session</button>
            <button className="button-secondary">Voir la démo</button>
          </div>
        </div>
        <div className="console">
          &gt; status: <span>active</span>
          <br />
          &gt; threat-level: <span>elevated</span>
          <br />
          &gt; trainees: <span>128 analysts connectés</span>
          <br />
          &gt; next-drill: <span>ransomware containment</span>
        </div>
      </section>

      <section className="panel-grid">
        {panels.map((panel) => (
          <article key={panel.title} className="panel">
            <h3>{panel.title}</h3>
            <p>{panel.description}</p>
          </article>
        ))}
      </section>

      <footer>
        Cyber Sentinel Training · Paris / Remote · 24/7 Mission Control
      </footer>
    </main>
  );
}

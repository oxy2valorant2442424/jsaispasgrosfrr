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

const tracks = [
  {
    name: "Analyste SOC",
    focus: "Triage, chasse et réponse aux incidents en temps réel.",
    duration: "8 semaines"
  },
  {
    name: "Threat Hunter",
    focus: "Détection proactive, YARA, Sigma et playbooks avancés.",
    duration: "6 semaines"
  },
  {
    name: "Red Team",
    focus: "Intrusion contrôlée, OSINT, exploitation et reporting.",
    duration: "10 semaines"
  }
];

const timeline = [
  {
    step: "Onboarding",
    detail: "Audit des compétences et plan de progression personnalisé.",
    time: "Semaine 1"
  },
  {
    step: "Simulations",
    detail: "Scénarios d'attaque guidés dans nos environnements isolés.",
    time: "Semaines 2-6"
  },
  {
    step: "Capstone",
    detail: "Exercice final avec rapport exécutif et score de défense.",
    time: "Dernières semaines"
  }
];

const faqs = [
  {
    question: "Est-ce 100% remote ?",
    answer:
      "Oui, tous les labs et classes live sont accessibles à distance avec coaching 1:1."
  },
  {
    question: "Quel niveau est requis ?",
    answer:
      "Nous proposons des parcours débutant, intermédiaire et expert avec un test d'entrée."
  },
  {
    question: "Peut-on intégrer une équipe entreprise ?",
    answer:
      "Oui, nous adaptons les scénarios à votre stack et fournissons un rapport ROI."
  }
];

export default function Home() {
  return (
    <main>
      <nav>
        <div className="logo">CYBER SENTINEL</div>
        <div className="menu">
          <a href="#programmes">Programmes</a>
          <a href="#tracks">Tracks</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="button-secondary">Connexion</button>
      </nav>

      <section className="hero">
        <div>
          <p className="eyebrow">Cyber Defense Training Platform</p>
          <h1>
            Entraînement cyber sécurité nouvelle génération.
          </h1>
          <p>
            Passez en mode défense avancée grâce à des scénarios réalistes,
            des coachs certifiés et des environnements sécurisés inspirés des
            SOC modernes.
          </p>
          <div className="cta">
            <button className="button-primary">Réserver une session</button>
            <button className="button-secondary">Voir la démo live</button>
          </div>
          <div className="hero-metrics">
            <div>
              <strong>96%</strong>
              <span>Taux de réussite</span>
            </div>
            <div>
              <strong>32</strong>
              <span>Scénarios actifs</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Mentoring</span>
            </div>
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
          <br />
          &gt; response: <span>automated playbook v3</span>
        </div>
      </section>

      <section id="programmes" className="panel-grid">
        {panels.map((panel) => (
          <article key={panel.title} className="panel">
            <h3>{panel.title}</h3>
            <p>{panel.description}</p>
          </article>
        ))}
      </section>

      <section id="tracks" className="split-section">
        <div>
          <h2>Tracks de spécialisation</h2>
          <p>
            Choisissez un parcours ciblé pour accélérer votre montée en
            compétence. Chaque track est animé par un expert certifié.
          </p>
          <div className="track-list">
            {tracks.map((track) => (
              <div key={track.name} className="track-card">
                <h3>{track.name}</h3>
                <p>{track.focus}</p>
                <span>{track.duration}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="highlight-card">
          <h3>Mission Control</h3>
          <p>
            Surveillez vos KPI en direct : MTTR, couverture MITRE, posture
            Zero Trust et niveau de risque global.
          </p>
          <ul>
            <li>Alertes en temps réel &mdash; Slack / Teams</li>
            <li>Rapports PDF automatiques</li>
            <li>API pour intégrer vos outils internes</li>
          </ul>
          <button className="button-primary">Planifier une démo</button>
        </div>
      </section>

      <section id="roadmap" className="timeline">
        <div>
          <h2>Roadmap de progression</h2>
          <p>
            Notre méthode combine mentorat, labs guidés et simulations live
            pour livrer une progression mesurable.
          </p>
        </div>
        <div className="timeline-grid">
          {timeline.map((item) => (
            <div key={item.step} className="timeline-card">
              <h3>{item.step}</h3>
              <p>{item.detail}</p>
              <span>{item.time}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="metrics">
        <div>
          <h2>Impact mesurable pour vos équipes</h2>
          <p>
            Nos cohortes réduisent le temps de détection et améliorent la
            coordination inter-équipes dès les premières semaines.
          </p>
        </div>
        <div className="metrics-grid">
          <div>
            <strong>+43%</strong>
            <span>vitesse de détection</span>
          </div>
          <div>
            <strong>-37%</strong>
            <span>temps de réponse</span>
          </div>
          <div>
            <strong>5x</strong>
            <span>automatismes SOC</span>
          </div>
        </div>
      </section>

      <section className="faq">
        <div>
          <h2>Questions fréquentes</h2>
          <p>Tout ce que vous devez savoir avant de démarrer.</p>
        </div>
        <div className="faq-grid">
          {faqs.map((item) => (
            <div key={item.question} className="faq-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <h2>Parlons de votre mission</h2>
          <p>
            Recevez un audit gratuit et un plan de formation sur mesure pour
            votre équipe.
          </p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Nom complet" />
          <input type="email" placeholder="Email professionnel" />
          <input type="text" placeholder="Organisation" />
          <textarea placeholder="Objectifs de formation" rows={4} />
          <button className="button-primary" type="submit">
            Envoyer la demande
          </button>
        </form>
      </section>

      <footer>
        Cyber Sentinel Training · Paris / Remote · 24/7 Mission Control
      </footer>
    </main>
  );
}

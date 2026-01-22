"use client";

import { useState } from "react";

const categories = ["Tous", "Blue Team", "Red Team", "Forensics"];

const challenges = [
  {
    title: "Contain a phishing wave",
    category: "Blue Team",
    level: "Intermédiaire",
    duration: "25 min"
  },
  {
    title: "Privilege escalation path",
    category: "Red Team",
    level: "Avancé",
    duration: "40 min"
  },
  {
    title: "Malware triage",
    category: "Forensics",
    level: "Débutant",
    duration: "20 min"
  },
  {
    title: "SOC alert storm",
    category: "Blue Team",
    level: "Avancé",
    duration: "35 min"
  }
];

export default function ChallengesPage() {
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous"
      ? challenges
      : challenges.filter((item) => item.category === active);

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h1>Challenges interactifs</h1>
          <p>
            Choisis un scénario, valide tes réponses et débloque des badges.
            Chaque challenge fournit un feedback instantané.
          </p>
        </div>
        <div className="filter-group">
          {categories.map((category) => (
            <button
              key={category}
              className={
                category === active
                  ? "button-primary"
                  : "button-secondary"
              }
              onClick={() => setActive(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="challenge-grid">
        {filtered.map((challenge) => (
          <article key={challenge.title} className="challenge-card">
            <div>
              <h3>{challenge.title}</h3>
              <p>{challenge.category}</p>
            </div>
            <div className="challenge-meta">
              <span>{challenge.level}</span>
              <span>{challenge.duration}</span>
            </div>
            <button className="button-primary">Lancer</button>
          </article>
        ))}
      </div>
    </section>
  );
}

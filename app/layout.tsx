import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Cyber Sentinel Training",
  description: "Plateforme immersive de formation cyber sécurité."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="app-shell">
          <header className="site-header">
            <div className="logo">CYBER SENTINEL</div>
            <nav className="nav-links">
              <a href="/">Accueil</a>
              <a href="/programs">Programmes</a>
              <a href="/challenges">Challenges</a>
              <a href="/daily">Routine</a>
              <a href="/progress">Progression</a>
            </nav>
            <div className="nav-actions">
              <button className="button-secondary">Connexion</button>
              <button className="button-primary">Créer un compte</button>
            </div>
          </header>
          <main className="page">{children}</main>
          <footer className="site-footer">
            <div>
              Cyber Sentinel Training · Paris / Remote · 24/7 Mission Control
            </div>
            <div className="footer-links">
              <span>Support</span>
              <span>Conditions</span>
              <span>Confidentialité</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

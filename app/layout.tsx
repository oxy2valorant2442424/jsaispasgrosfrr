import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Cyber Sentinel Training",
  description: "Plateforme immersive de formation cyber sécurité."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

import type { NextConfig } from "next";

// Statischer Export: `npm run build` erzeugt eine reine HTML/CSS/JS-Seite im Ordner `out/`.
// NEXT_PUBLIC_BASE_PATH wird beim Veröffentlichen auf GitHub Pages gesetzt (z. B. "/Resume"),
// lokal bleibt es leer und die Seite läuft unter http://localhost:3000/.
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true },
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;

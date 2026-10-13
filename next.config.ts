import type { NextConfig } from "next";

// Statischer Export: `npm run build` erzeugt eine reine HTML/CSS/JS-Seite im Ordner `out/`.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

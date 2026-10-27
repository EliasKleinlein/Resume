"use client";

import { useEffect, useState } from "react";
import { profile, ui } from "@/data/resume";
import type { Lang } from "@/lib/i18n";
import { PortfolioLayout } from "./PortfolioLayout";
import { ClassicLayout } from "./ClassicLayout";

type Layout = "classic" | "portfolio";

export function Resume() {
  const [lang, setLang] = useState<Lang>("de");
  const [layout, setLayout] = useState<Layout>("portfolio");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`page page-${layout}`}>
      <nav className="toolbar">
        <button
          type="button"
          className="toggle"
          aria-label={ui.layoutLabel[lang]}
          onClick={() => setLayout(layout === "classic" ? "portfolio" : "classic")}
        >
          {layout === "classic" ? ui.layoutToPortfolio[lang] : ui.layoutToClassic[lang]}
        </button>
        <button
          type="button"
          className="toggle"
          aria-label={ui.toggleLabel[lang]}
          onClick={() => setLang(lang === "de" ? "en" : "de")}
        >
          {ui.toggle[lang]}
        </button>
      </nav>

      {layout === "classic" ? <ClassicLayout lang={lang} /> : <PortfolioLayout lang={lang} />}

      <footer className="footer">
        © 2026 {profile.name}. {ui.rights[lang]}
      </footer>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { profile, ui } from "@/data/resume";
import type { Lang } from "@/lib/i18n";
import { BentoLayout } from "./BentoLayout";
import { ClassicLayout } from "./ClassicLayout";

type Layout = "classic" | "bento";

export function Resume() {
  const [lang, setLang] = useState<Lang>("de");
  const [layout, setLayout] = useState<Layout>("bento");

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
          onClick={() => setLayout(layout === "classic" ? "bento" : "classic")}
        >
          {layout === "classic" ? ui.layoutToBento[lang] : ui.layoutToClassic[lang]}
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

      {layout === "classic" ? <ClassicLayout lang={lang} /> : <BentoLayout lang={lang} />}

      <footer className="footer">
        © 2026 {profile.name}. {ui.rights[lang]}
      </footer>
    </div>
  );
}

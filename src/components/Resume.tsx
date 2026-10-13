"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  education,
  experience,
  other,
  profile,
  seminars,
  skills,
  techStack,
  ui,
} from "@/data/resume";
import type { Lang } from "@/lib/i18n";
import { TagGroups } from "./TagGroups";
import { Timeline } from "./Timeline";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="section" aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      {children}
    </section>
  );
}

export function Resume() {
  const [lang, setLang] = useState<Lang>("de");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <header className="hero">
        <button
          type="button"
          className="lang-toggle"
          aria-label={ui.toggleLabel[lang]}
          onClick={() => setLang(lang === "de" ? "en" : "de")}
        >
          {ui.toggle[lang]}
        </button>
        <img className="hero-photo" src={profile.photo} alt={profile.name} width={160} height={160} />
        <h1>{profile.name}</h1>
        <p className="hero-headline">{profile.headline[lang]}</p>
      </header>

      <main className="container">
        <Section id="focus" title={ui.focus[lang]}>
          <p className="focus">{profile.focus[lang]}</p>
        </Section>

        <Section id="tech-stack" title={ui.techStack[lang]}>
          <TagGroups groups={techStack} lang={lang} />
        </Section>

        <Section id="experience" title={ui.experience[lang]}>
          <Timeline entries={experience} lang={lang} />
        </Section>

        <Section id="education" title={ui.education[lang]}>
          <Timeline entries={education} lang={lang} />
          <h3 className="subheading">{ui.seminars[lang]}</h3>
          <Timeline entries={seminars} lang={lang} />
        </Section>

        <Section id="other" title={ui.other[lang]}>
          <Timeline entries={other} lang={lang} />
        </Section>

        <Section id="skills" title={ui.skills[lang]}>
          <TagGroups groups={skills} lang={lang} />
        </Section>
      </main>

      <footer className="footer">
        © 2026 {profile.name}. {ui.rights[lang]}
      </footer>
    </>
  );
}

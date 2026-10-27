import type { ReactNode } from "react";
import {
  cncControls,
  education,
  experience,
  interests,
  languages,
  other,
  profile,
  seminars,
  software,
  techStack,
  ui,
  type LabeledList,
} from "@/data/resume";
import { t, type Lang } from "@/lib/i18n";
import { Timeline } from "./Timeline";

const expertise: { list: LabeledList; wide?: boolean }[] = [
  { list: techStack[0], wide: true },
  { list: techStack[1] },
  { list: techStack[2] },
  { list: software, wide: true },
  { list: cncControls },
  { list: languages },
  { list: interests },
];

function Section({
  id,
  index,
  title,
  lead,
  children,
}: {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="pf-section pf-reveal" aria-labelledby={`${id}-title`}>
      <header className="pf-section-head">
        <p className="pf-index" aria-hidden="true">
          {index}
        </p>
        <h2 id={`${id}-title`}>{title}</h2>
        {lead && <p className="pf-lead">{lead}</p>}
      </header>
      <div className="pf-section-body">{children}</div>
    </section>
  );
}

function Card({ list, lang, wide }: { list: LabeledList; lang: Lang; wide?: boolean }) {
  return (
    <article className={wide ? "pf-card pf-card--wide" : "pf-card"}>
      <h3 className="pf-card-title">{t(list.label, lang)}</h3>
      <ul className="pf-tags">
        {list.items.map((item) => {
          const text = t(item, lang);
          return <li key={text}>{text}</li>;
        })}
      </ul>
    </article>
  );
}

export function PortfolioLayout({ lang }: { lang: Lang }) {
  return (
    <main className="pf">
      <header className="pf-hero">
        <div className="pf-hero-text">
          <p className="pf-meta">
            <span>{ui.focus[lang]}</span>
            <span>{profile.focus[lang]}</span>
          </p>
          <h1 className="pf-name">{profile.name}</h1>
          <p className="pf-headline">{profile.headline[lang]}</p>
          <div className="pf-actions">
            <a className="pf-button pf-button--primary" href="#experience">
              {ui.heroExperience[lang]}
            </a>
            <a className="pf-button" href="#contact">
              {ui.heroContact[lang]}
            </a>
            <button type="button" className="pf-button" onClick={() => window.print()}>
              {ui.print[lang]}
            </button>
          </div>
        </div>
        <img className="pf-photo" src={profile.photo} alt={profile.name} width={224} height={280} />
      </header>

      <Section id="expertise" index="01" title={ui.expertise[lang]} lead={ui.expertiseLead[lang]}>
        <div className="pf-bento">
          {expertise.map(({ list, wide }, i) => (
            <Card key={i} list={list} lang={lang} wide={wide} />
          ))}
        </div>
      </Section>

      <Section id="experience" index="02" title={ui.experience[lang]}>
        <Timeline entries={experience} lang={lang} />
      </Section>

      <Section id="about" index="03" title={ui.about[lang]}>
        <p className="pf-quote">{profile.focus[lang]}</p>
        <p className="pf-about">{profile.about[lang]}</p>
      </Section>

      <Section id="further" index="04" title={ui.further[lang]}>
        <div className="pf-further">
          <div className="pf-subgroup">
            <h3 className="pf-subtitle">{ui.education[lang]}</h3>
            <Timeline entries={education} lang={lang} />
          </div>
          <div className="pf-subgroup">
            <h3 className="pf-subtitle">{ui.seminars[lang]}</h3>
            <Timeline entries={seminars} lang={lang} />
          </div>
          <div className="pf-subgroup">
            <h3 className="pf-subtitle">{ui.other[lang]}</h3>
            <Timeline entries={other} lang={lang} />
          </div>
        </div>
      </Section>

      <Section id="contact" index="05" title={ui.contact[lang]} lead={ui.contactLead[lang]}>
        <ul className="pf-links">
          {profile.links.map((link) => (
            <li key={link.href}>
              <a className="pf-link" href={link.href} target="_blank" rel="noopener noreferrer">
                <span>{link.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}

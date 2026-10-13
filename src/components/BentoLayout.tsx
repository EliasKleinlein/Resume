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
import { TagGroups } from "./TagGroups";
import { Timeline } from "./Timeline";

interface TileProps {
  area: string;
  id?: string;
  title?: string;
  variant?: "accent";
  children: ReactNode;
}

function Tile({ area, id, title, variant, children }: TileProps) {
  return (
    <section
      className={`tile tile-${area}${variant ? ` tile-${variant}` : ""}`}
      aria-labelledby={id}
    >
      {title && <h2 id={id}>{title}</h2>}
      {children}
    </section>
  );
}

function TagTile({ area, list, lang }: { area: string; list: LabeledList; lang: Lang }) {
  return (
    <Tile area={area} id={`bento-${area}`} title={t(list.label, lang)}>
      <ul className="tags">
        {list.items.map((item) => {
          const text = t(item, lang);
          return <li key={text}>{text}</li>;
        })}
      </ul>
    </Tile>
  );
}

export function BentoLayout({ lang }: { lang: Lang }) {
  return (
    <main className="bento">
      <Tile area="profile" variant="accent">
        <img className="bento-photo" src={profile.photo} alt={profile.name} width={112} height={112} />
        <div>
          <h1>{profile.name}</h1>
          <p className="bento-headline">{profile.headline[lang]}</p>
        </div>
      </Tile>

      <Tile area="focus" id="bento-focus" title={ui.focus[lang]}>
        <p className="bento-focus">{profile.focus[lang]}</p>
      </Tile>

      <TagTile area="languages" list={languages} lang={lang} />

      <Tile area="tech" id="bento-tech" title={ui.techStack[lang]}>
        <TagGroups groups={techStack} lang={lang} />
      </Tile>

      <Tile area="experience" id="bento-experience" title={ui.experience[lang]}>
        <Timeline entries={experience} lang={lang} />
      </Tile>

      <TagTile area="cnc" list={cncControls} lang={lang} />
      <TagTile area="software" list={software} lang={lang} />

      <Tile area="education" id="bento-education" title={ui.education[lang]}>
        <Timeline entries={education} lang={lang} />
      </Tile>

      <Tile area="seminars" id="bento-seminars" title={ui.seminars[lang]}>
        <Timeline entries={seminars} lang={lang} />
      </Tile>

      <Tile area="other" id="bento-other" title={ui.other[lang]}>
        <Timeline entries={other} lang={lang} />
      </Tile>

      <TagTile area="interests" list={interests} lang={lang} />
    </main>
  );
}

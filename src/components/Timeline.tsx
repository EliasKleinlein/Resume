import type { TimelineEntry } from "@/data/resume";
import { t, type Lang } from "@/lib/i18n";

interface Props {
  entries: TimelineEntry[];
  lang: Lang;
}

export function Timeline({ entries, lang }: Props) {
  return (
    <ol className="timeline">
      {entries.map((entry, i) => {
        const bullets = entry.bullets?.[lang];
        const heading = (
          <div className="entry-head">
            <span className="entry-period">{t(entry.period, lang)}</span>
            <span className="entry-title">{t(entry.title, lang)}</span>
            {entry.org && <span className="entry-org">{entry.org}</span>}
          </div>
        );

        return (
          <li key={i} className="timeline-item">
            {bullets ? (
              <details>
                <summary>{heading}</summary>
                <ul className="entry-bullets">
                  {bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </details>
            ) : (
              heading
            )}
          </li>
        );
      })}
    </ol>
  );
}

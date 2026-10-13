import type { LabeledList } from "@/data/resume";
import { t, type Lang } from "@/lib/i18n";

interface Props {
  groups: LabeledList[];
  lang: Lang;
}

export function TagGroups({ groups, lang }: Props) {
  return (
    <dl className="tag-groups">
      {groups.map((group) => {
        const label = t(group.label, lang);
        return (
          <div key={label} className="tag-group">
            <dt>{label}</dt>
            <dd>
              <ul className="tags">
                {group.items.map((item) => {
                  const text = t(item, lang);
                  return <li key={text}>{text}</li>;
                })}
              </ul>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

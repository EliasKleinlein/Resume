export type Lang = "de" | "en";

export const LANGS: Lang[] = ["de", "en"];

/** Text, der in beiden Sprachen vorliegt. */
export type Localized = Record<Lang, string>;

/** Sprachneutraler Text (z. B. Firmenname) oder übersetzter Text. */
export type Text = string | Localized;

export function t(text: Text, lang: Lang): string {
  return typeof text === "string" ? text : text[lang];
}

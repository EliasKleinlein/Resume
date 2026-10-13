# Resume – Elias Kleinlein

Zweisprachiger Lebenslauf (Deutsch/Englisch) als statische Website.

## Technik

- Next.js (App Router, statischer Export)
- React, TypeScript
- CSS (Hell-/Dunkelmodus, responsiv, Druckansicht)
- Vitest + Testing Library

## Struktur

- `src/data/resume.ts` – alle Inhalte (DE/EN), typisiert
- `src/components/` – Oberfläche (Resume, Timeline, TagGroups)
- `src/app/` – Layout, Seite, globales CSS
- `public/` – Profilfoto

## Befehle

```bash
npm install     # Abhängigkeiten installieren
npm run dev     # Entwicklungsserver auf http://localhost:3000
npm run build   # statische Seite im Ordner out/ erzeugen
npm run lint    # TypeScript-Prüfung
npm test        # Tests ausführen
```

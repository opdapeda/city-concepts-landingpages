# City Concepts Landingpages

Landingpages für **city concepts** (Marke der unity concepts GmbH) zur Lead-Generierung bei der öffentlichen Hand. Pro Themen-Cluster eine eigene Landingpage.

## Wichtigste Quellen (vor jeder Umsetzung lesen)
- `docs/00-briefing.md` – Unternehmen, Zielgruppe, Tonalität, Ziele
- `docs/cluster/NN-*.md` – Briefing je Landingpage (Inhalte, Sektionen, CTA, Akzeptanzkriterien)
- `docs/design.md` – Farben, Typografie, Gestaltungsmerkmale
- `docs/quellen/` – Rohmaterial je Cluster (PPTX nur lokal, Textauszüge als .md)
- `docs/tracking.md` – Conversion- und Analytics-Anforderungen
- `docs/entscheidungen.md` – getroffene Entscheidungen (nicht stillschweigend umwerfen)
- `docs/backlog.md` – offene Aufgaben und Status

## Arbeitsteilung
- **Cowork** (Konzept, Recherche, Texte) schreibt in `docs/` und `assets/`. Fasst `src/` nicht an.
- **Claude Code** (Umsetzung) arbeitet in `src/`, pflegt den Status in `docs/backlog.md`.
- Briefings in `docs/cluster/` ändert Claude Code nicht eigenmächtig, sondern schlägt Änderungen vor.
- **Git (Commit/Push) macht ausschließlich Claude Code.**
- Neue Entscheidungen mit Datum und Begründung in `docs/entscheidungen.md` eintragen.

## Ordnerstruktur
- `docs/` – Briefings, Konzepte, Keywords, Tracking
  - `docs/cluster/` – ein Briefing pro Landingpage
- `assets/` – Bilder, Logos, Fonts, Referenzen
- `src/` – Quellcode der Landingpages

## Tech-Stack
Statische Seiten ohne CMS (reines Frontend), gepflegt über Claude Code. Bestehende Website city-concepts.de läuft auf WordPress – die Landingpages sind davon unabhängig. Framework: **Astro** (statisch, ohne UI-Framework), Node ≥ 22. Hosting noch offen – siehe `docs/entscheidungen.md`.

Struktur in `src/`: `layouts/`, `components/`, `pages/` (eine Datei pro Landingpage), `styles/tokens.css` (Design-Tokens als CSS-Variablen), `styles/global.css`. Roboto liegt selbst gehostet in `public/fonts/`. Offene Punkte aus den Briefings sind im Seitentext mit `.todo` (gelb) markiert.

## Konventionen
- Sprache der Inhalte: Deutsch, Sie-Ansprache
- Commit-Messages: Deutsch, kurz, im Imperativ (z. B. „Briefing Leitsysteme ergänzen“)
- Code-Stil: Astro-Komponenten, Farben/Abstände nur über Tokens aus `tokens.css`; Barrierefreiheit nach `docs/design.md` (WCAG 2.1 AA)
- Branching: noch offen

## Befehle
- `npm install` – Abhängigkeiten
- `npm run dev` – Dev-Server (http://localhost:4321/innenstadtbelebung/)
- `npm run build` – statischer Build nach `dist/`

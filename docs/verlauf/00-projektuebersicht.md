# city concepts Landingpages – Projektübersicht

> Stand der Spiegelung: 18.11.2026. Die führende Quelle ist das Git-Repo (lokaler Ordner/GitHub). Die Dokumente in diesem Claude-Projekt sind eine **Kopie zum Nachlesen**, damit Konzept-Chats (privater Account) und Umsetzung (unity-concepts-Account) dieselbe Grundlage haben. Bei Änderungen: im Repo ändern und hier neu spiegeln lassen („Projekt-Docs aktualisieren“).

## Wichtige Links
| Was | Link |
|---|---|
| **Finale Landingpage Innenstadtbelebung** (Vercel, freigegeben 18.11.2026) | https://city-concepts-landingpages.vercel.app/innenstadtbelebung/ |
| GitHub-Repo | https://github.com/opdapeda/city-concepts-landingpages |
| Figma – Design-Richtungen v2 (Favorit: B2 „Hell & dynamisch“) | https://www.figma.com/design/kX4gzfIbCpLeEfl7VFx1AO?node-id=4-2 |
| Figma – Referenz unity concepts Keynote-Landingpage (Typografie/Layout) | https://www.figma.com/design/CM4pfjIu68Z6klYcN7qi9E/?node-id=14-16 |
| Figma – city concepts UI-Update 2026 (Barrierefreiheit, Petrol/Pastellgrün) | https://www.figma.com/design/qBrpYjD8VsQa6aXm1WjJAP/?node-id=61-757 |
| Bestehende Website | https://city-concepts.de |
| Magnific-Projekt (generierte Bilder) | „city concepts – Landingpage Innenstadtbelebung“ im Magnific-Account |

Lokaler Projektordner (Mac): `~/Claude/Projects/city-concepts-landingpages`

## Arbeitsweise & Accounts
- **Konzept, Recherche, Texte, Bilder, Reviews:** Claude Cowork (privater Pro-Account) – schreibt in `docs/` und `assets/`
- **Umsetzung (Code), Commit, Push, Deployment:** Claude Code (unity-concepts-Account) – arbeitet in `src/`
- Beide greifen auf denselben lokalen Ordner zu; das gemeinsame Gedächtnis sind die Dateien (`CLAUDE.md`, `docs/`), nicht die Chats.
- Git (Commit/Push) macht ausschließlich Claude Code. Vercel deployt automatisch aus GitHub.

## Tech-Stack
Astro (statisch), Roboto selbst gehostet, Bilder über `astro:assets` (AVIF/WebP), Vercel-Hosting. Matomo (matomo.city-concepts.de, Site-ID 2) vorbereitet, Snippet/Consent offen.

## Stand Landingpage Innenstadtbelebung
- **Freigegeben (18.11.2026)**, vorerst auf Vercel gehostet
- Design v2 (B2) umgesetzt: Hero-Collage, Logo-Banderole (28 Kommunen), Handlungsfelder mit Icons, versetzte Maßnahmen-Karten, Beteiligung, Projekte mit Detail-Overlays, FAQ, Kontakt mit 2-Schritt-Formular, Sticky-CTA mobil
- Originallogo und Kontaktdaten von city-concepts.de eingebaut (Hans-Bunte-Straße 20, 69123 Heidelberg · 06221 75908-0 · info@city-concepts.de)
- Offene Punkte: siehe `repo/docs/backlog.md` (u. a. Logo-Freigaben, Ansprechpartner, Formular-Versand, Matomo/Consent, Kennzahlen bestätigen, E-Mail info@ vs. mail@)

## Ordnerstruktur im Repo
- `CLAUDE.md` – Projektregeln für Claude Code
- `docs/` – Briefing, Design, Entscheidungen, Backlog, Tracking, Keywords, Reviews, Umsetzungsaufträge
- `docs/cluster/` – Briefing je Landingpage (01 Leitsysteme, 02 Innenstadtbelebung, 03 Stadtmöblierung, 04 offen)
- `docs/quellen/` – Sales-PowerPoints je Cluster (nur lokal, nicht im Git), Textauszüge, Referenzbilder (`_kontaktbogen/`)
- `assets/` – Bilder (`innenstadtbelebung/`), Logos Kommunen (`logos/`), Markenlogo (`brand/`), Projektfotos (`projekte/`)
- `src/` – Astro-Code

## Dokumente in diesem Claude-Projekt
- `repo/CLAUDE.md`
- `repo/docs/00-briefing.md`, `design.md`, `entscheidungen.md`, `backlog.md`, `tracking.md`, `keywords.md`
- `repo/docs/review-2026-11-02-innenstadtbelebung.md`, `umsetzung-v2-innenstadtbelebung.md`
- `repo/docs/cluster/01–04`
- `repo/docs/sales-paper-textauszug.md` (Text der Innenstadt-Präsentation)

Bilder, Logos und PowerPoints liegen nur im Repo bzw. lokalen Ordner (nicht als Projekt-Docs).

## Regeln für alle Chats in diesem Projekt (gemeinsames Gedächtnis)
- Chats sehen sich gegenseitig nicht – geteilt werden nur die Projekt-Docs und der lokale Ordner/das Repo.
- Neue Entscheidungen, Feedback und Erkenntnisse am Ende eines Arbeitsschritts festhalten:
  - fachlich/gestalterisch → im Repo (`docs/entscheidungen.md`, `docs/design.md`, `docs/backlog.md`, Briefings), danach in `repo/…` spiegeln
  - Chat-Verlauf/Arbeitsweise → eigene Datei je Chat: `claude/NN-verlauf-<thema>.md` (nicht die Datei eines anderen Chats überschreiben)
- Vor jedem Schreiben das Projekt-Doc frisch lesen (Schreiben ersetzt die ganze Datei).

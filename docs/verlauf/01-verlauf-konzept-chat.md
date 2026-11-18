# Verlauf des Konzept-Chats (Cowork) – Übergabe für alle Sitzungen

> Zusammenfassung des Konzept-Chats in Claude Cowork (privater Account), 02.–18.11.2026. Details stehen in den übrigen `docs/`-Dateien; diese Datei erklärt das Warum und die Arbeitsweise.

## Einstieg für neue Sitzungen
1. `docs/verlauf/00-projektuebersicht.md` (Links, Struktur, Accounts)
2. `docs/backlog.md` (offene Punkte) und `docs/design.md` (verbindliche Gestaltungsregeln)
3. `docs/entscheidungen.md`, Briefings in `docs/cluster/`

## Arbeitsweise
- Konzept, Texte, Bilder, Reviews: Cowork (privater Account) → schreibt in `docs/` und `assets/`
- Code, Commit, Push: Claude Code (unity-concepts-Account) → `src/`; Vercel deployt aus GitHub
- Ausnahme auf Wunsch von JPO: Cowork hat Logo-Banderole, Logo, Kontaktdaten und Schriftgrößen direkt in `src/` umgesetzt (Commit trotzdem durch Claude Code)
- JPO möchte möglichst wenig manuell machen: Anweisungen an Claude Code so formulieren, dass sie ohne Handarbeit umsetzbar sind (z. B. Bildzuordnung als Tabelle)
- Sales-PowerPoints liegen unter `docs/quellen/` (nicht im Git, zu groß)

## Wichtige Entscheidungen & Feedback (chronologisch)
- Landingpages als statische Seiten ohne CMS (Astro), unabhängig vom WordPress von city-concepts.de
- Start mit Cluster Innenstadtbelebung; Basis ist das Sales Paper „Erlebnisraum Innenstadt?“ inkl. Anpassungsnotizen vom 31.7. (neutral, Aktivierung statt Leerstand, einfache Sprache für kleinere Kommunen)
- Farben: CI-Grün `#AFCA0B` + Grautöne aus den Präsentationen, ergänzt um Petrol `#01534E` und Pastellgrün `#CCDDDC` aus dem eigenen Redesign; Typografie/Layout angelehnt an das unity-concepts-Redesign (Roboto); keine Unity-Farben
- Barrierefreiheit WCAG 2.1 AA ist Pflicht; CI-Grün nie als Textfarbe, keine weiße Schrift auf CI-Grün
- Erster Entwurf wirkte „KI-lastig“, zu kastenartig, Kontraste flau → Review vom 02.11. und Design v2
- Design-Richtung: **B2 „Hell & dynamisch“** (Text auf Weiß, Bild-Collage mit überlagernden, leicht gedrehten Karten, eingerückte Petrol-Panels) – angelehnt an die Dynamik des Unity-Redesigns
- **Keine Pfeil-/Chevron-Grafiken** (von Claude gezeichnet geometrisch nicht sauber)
- Bilder mit Magnific; Bildsprache nach Referenzen aus den Präsentationen: moderne Leitsysteme (anthrazit, weiße Fingerwegweiser, dunkelblaue Stelen), **nie Gusseisen-Optik**; Haltestellen mit Klebebanderole im Stadtdesign, Begrünung/PV dezent; Innenstädte typisch deutsch, verputzt, belebt, nicht zu viel Fachwerk/Heidelberg-Klischee; Workshop-Bilder mit deutschen Verwaltungsmitarbeitenden; keine lesbaren Marken (auch kein falsches Apothekenschild)
- Projektreferenzen nur mit echten Fotos, nicht generiert
- Logos der 28 Kommunen (Folie 10 Sales Paper) als laufende, verschiebbare Banderole – nebeneinander, nie untereinander
- Mindestschriftgröße 16 px; Listen und Zitat-Namen 18 px
- Originallogo und Kontaktdaten von city-concepts.de übernommen
- 18.11.2026: Landingpage Innenstadtbelebung **freigegeben**, vorerst auf Vercel gehostet: https://city-concepts-landingpages.vercel.app/innenstadtbelebung/
- Gemeinsames Gedächtnis: Verlaufsdateien je Sitzung in `docs/verlauf/`, gespiegelt ins claude.ai-Projekt

## Offene Punkte (Stand 18.11.)
Siehe `docs/backlog.md`, u. a.: Freigabe Logos und Kundenstimmen, Ansprechpartner mit Foto, Formular-Versandweg, Matomo-Snippet + Consent, Kennzahlen (20+, 120, 30+) bestätigen, E-Mail info@ vs. mail@, SVG-Logo, Briefings für die weiteren Cluster, Keyword-Recherche, Zuordnung der Cluster (Präsentationen: Tourismus, Indoor/Gebäude, Events, Innenstadt vs. ursprüngliche Liste).

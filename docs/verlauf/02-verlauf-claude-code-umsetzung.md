# Verlauf Claude Code – Umsetzung (02.–18.11.2026)

> Eigene Verlaufsdatei der Claude-Code-Sitzungen (unity-concepts-Account). Rekonstruiert aus Git-Historie, `docs/` und den Verlaufsdateien 00, 01 und 03; die Sitzungen selbst sind nicht mehr einsehbar. Feedback von JPO ist daher nur dort wörtlich festgehalten, wo es in den Commits oder Docs belegt ist. Fachliche Entscheidungen stehen zusätzlich in `docs/entscheidungen.md`.

## Umgesetzt (chronologisch)

### 02.11.2026 – Grundlage und Design v2
- Projekt-Setup, Briefings und Design-Grundlagen übernommen; Astro statisch, Roboto selbst gehostet, Design-Tokens in `src/styles/tokens.css`.
- Landingpage Innenstadtbelebung zuerst als Entwurf, dann nach Design v2 (B2 „Hell & dynamisch“): Hero-Collage, Handlungsfelder, versetzte Maßnahmen-Karten, Beteiligung, Projekte, FAQ, Kontakt, mobile Sticky-CTA. Lighthouse lokal: Performance 98, Accessibility 100, SEO 100.
- Vercel-Konfiguration mit `noindex`, Berechtigung für `git push` im Projekt.
- Nachbesserung: Maßnahmen-Karten gleich groß, Beteiligungsbild gerade und bündig am Panel.
- Logo-Banderole der 28 Kommunen, Originallogo, Kontaktdaten und Schriftgrößen (Mindestgröße 16 px) übernommen (in Cowork vorbereitet, durch Claude Code committet).

### 09.11.2026 – Projekt-Overlays und Icons
- **Projekt-Detail-Overlays:** Projektreferenzen öffnen sich als Overlay mit Bildern und Fakten (nur echte Projektfotos).
- **Handlungsfelder:** Icons statt Nummerierung.

### 16.11.2026 – Kontaktformular, Kennzahlen, Award, Ansprechpartnerin
- **Kontaktformular einstufig:** Pflichtfelder zuerst, „Worum geht es?“ als optionale Chips inkl. „Etwas anderes“ mit Freitext; „Noch offen“ entfällt; Funktion/Telefon unter „Weitere Angaben“. Formularfelder ohne graue Kontur, Fehlermarkierung korrigiert.
- Abstände zwischen Warum und Ablauf korrigiert.
- Kennzahl auf „28 Jahre für Städte und Kommunen“ geändert.
- **German Design Award 2027 Winner** in Hero und Footer (per Pull Request #1; Award-Kachel typografisch an die Kennzahlen-Kacheln angeglichen).
- **Ansprechpartnerin Miriam Berberich** als Kachel im Kontaktbereich (Foto, Durchwahl, E-Mail), später als kompakte Kachel im Hero mit Award-Teaser darunter.
- Zeitangabe im Kontakttext durch „umgehend“ ersetzt.

### 17.11.2026 – FAQ, Kennzahl, Rückruf-Formular
- Kennzahl im Hero: 8 Expertinnen und Experten.
- Ablauf von JPO bestätigt, Todo-Hinweis entfernt.
- **FAQ:** Kostenfrage entfernt; Kompetenzen und Leistungen von city concepts ergänzt; Fragen in der Sie-Form formuliert; Fördermittel um Beispielprogramme mit Links ergänzt; Frage zur Projektdauer beantwortet.
- **Rückruf-Formular** mit Umschalter „Anfrage“ / „Rückruf“ im Kontaktbereich (Kommune, Name, Telefon, Wunschtag nur Werktage, Zeitfenster vormittags/mittags/nachmittags), eigene Variante der Dankeseite. Letzter Code-Commit: `c7ac45a`.

### 18.11.2026 – Freigabe und Go-live-Check
- JPO hat die Seite freigegeben (Vercel). Go-live-Check durch Chat 03, Ergebnisse in `docs/backlog.md`; diese Sitzung hat dazu `CLAUDE.md` (Abschnitt „Abschluss einer Session“, Verlauf-Regeln) sowie Backlog, Entscheidungen und Tracking aktualisiert.

## Feedback von JPO (soweit belegt)
- Formular war im Usability-Test nicht als solches erkennbar, Themenauswahl als erster Schritt wirkte wie eine Hürde → einstufiges Formular.
- Handlungsfelder mit Icons statt Nummern; Projekte sollen Detail-Overlays bekommen.
- FAQ: kein Kosteneintrag, Sie-Form, Fördermittel mit konkreten Beispielprogrammen, Projektdauer beantworten.
- Kennzahlen mehrfach angepasst (28 Jahre, 8 Expertinnen und Experten); Zeitzusage im Kontakttext nur als „umgehend“.
- Rückruf als niedrigschwelliger Kontaktweg neben der Anfrage.
- Wunsch: möglichst wenig Handarbeit; Seite soll später per DNS-Umstellung über die city-concepts-Website erreichbar sein.

## Offen
Siehe `docs/backlog.md`, Abschnitt „Go-live-Check“. Blocker vor der DNS-Umstellung:
- Formulare verschicken keine Daten (Versandweg offen).
- Matomo-Snippet, Consent und Google-Ads-Conversion fehlen.
- Interne Notiz zu den Kundenstimmen ist öffentlich sichtbar.
- `tel:`-Link der Durchwahl falsch, Canonical/og:image, Bildhinweis im Footer, Alt-Text Award-Logo, Mobilprüfung.

## Commit
Code-Stand `c7ac45a`; Docs-Stand dieser Sitzung im Commit „Verlauf, Go-live-Check und Entscheidungen dokumentieren“.

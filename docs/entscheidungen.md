# Entscheidungslog

| Datum | Entscheidung | Begründung |
|---|---|---|
| 02.11.2026 | Konzept in Cowork, Umsetzung in Claude Code, gemeinsamer Ordner + GitHub-Repo | Briefings als Dateien = gemeinsames Gedächtnis beider Tools |
| 02.11.2026 | Landingpages ohne CMS als reines Frontend (statisch), gepflegt über Claude Code – nicht im bestehenden WordPress | Volle gestalterische Kontrolle, schnelle Ladezeiten, unabhängig vom WordPress |
| 02.11.2026 | Brainstorming startet mit Cluster 02 Innenstadtbelebung | Wunsch JPO |
| 02.11.2026 | Farbwelt: Grün- und Grautöne aus den city-concepts-Sales-Papers; Struktur/Typografie angelehnt an unity-concepts-Landingpage, aber keine Unity-Farben | Wunsch JPO |
| 02.11.2026 | Vorerst CI-Grün `#AFCA0B` (nicht die Farben aus dem CC-Redesign); Kontrastregeln nach WCAG AA, abgeleitet aus dem CC-Redesign | Redesign noch nicht final abgestimmt |
| 02.11.2026 | Ergänzend Petrol `#01534E` und Pastellgrün `#CCDDDC` aus dem CC-Redesign – Mischung aus klassischem CD und neuem Ansatz | Moderneres Erscheinungsbild |
| 02.11.2026 | Quell-PPTX/PDF unter docs/quellen/ nicht im Git (zu groß); stattdessen Textauszüge als .md | GitHub-Limit 100 MB |
| 02.11.2026 | Framework: Astro (statisch, ohne UI-Framework), Roboto selbst gehostet unter `public/fonts/`; Design-Tokens als CSS-Variablen in `src/styles/tokens.css` | Schlank, schnelle Ladezeiten, mehrere Landingpages mit gemeinsamen Komponenten; Roboto lokal wegen DSGVO |
| 16.11.2026 | Kontaktformular einstufig statt 2 Schritte: Pflichtfelder zuerst, „Worum geht es?“ als optionale Chips inkl. „Etwas anderes“ (blendet Freitext ein); „Noch offen“ entfällt; Funktion/Telefon unter „Weitere Angaben“ | Usability-Test: Formular war nicht als solches erkennbar, Themenauswahl als erster Schritt wirkte wie eine Hürde |
| 17.11.2026 | Kontaktbereich mit Umschalter „Anfrage“ / „Rückruf“: Rückruf-Formular mit Kommune, Name, Telefon (mobil/dienstlich), Wunschtag (nur Werktage) und Zeitfenster (vormittags 9–12, mittags 12–14, nachmittags 14–17 Uhr); eigene Variante der Dankeseite | Niedrigschwelliger Kontaktweg für Verwaltungen, die lieber telefonieren; Versandweg weiterhin offen |
| 09.11.2026 | Projektreferenzen öffnen als Detail-Overlay mit Bildern und Fakten; Handlungsfelder erhalten Icons statt Nummerierung | Mehr Tiefe ohne Seitenwechsel; Icons sind schneller erfassbar als Nummern |
| 16.11.2026 | Hero-Kennzahlen: „28 Jahre für Städte und Kommunen“ (statt bisheriger Angabe), am 17.11. „8 Expertinnen und Experten“; Kontakttext sagt „umgehend“ statt fester Antwortzeit | Wunsch JPO; keine Zusage, die nicht gehalten werden kann |
| 16.11.2026 | German Design Award 2027 Winner in Hero (Teaser) und Footer; Ansprechpartnerin Miriam Berberich als kompakte Kachel im Hero und im Kontaktbereich | Vertrauen und persönlicher Kontakt für Verwaltungen |
| 17.11.2026 | FAQ: kein Eintrag zu Kosten; Fragen in Sie-Form; Fördermittel mit Beispielprogrammen und Links; Kompetenzen/Leistungen und Projektdauer beantwortet; Ablauf-Abschnitt als bestätigt markiert | Wunsch JPO; Kosten sind projektabhängig und gehören ins Gespräch |
| 18.11.2026 | Landingpage Innenstadtbelebung freigegeben, vorerst auf Vercel. Geplant: Umzug weg von der vercel.app-Adresse per DNS-Umstellung, sodass die Seite über die city-concepts-Website erreichbar ist | Wunsch JPO; Go-live-Blocker siehe backlog.md „Go-live-Check“ |

## Offene Fragen
- **Schrift:** Roboto (Unity-Referenz) oder Inter (CC-Redesign)? Vorerst Roboto.
- **Veröffentlichung:** Richtung entschieden (DNS-Umstellung, erreichbar über city-concepts-Website, 18.11.) – offen: Subdomain oder Unterverzeichnis, Hosting danach weiter Vercel?
- **Formular:** Wohin gehen die Anfragen? (Stand 18.11.: Formulare verschicken noch nichts – Go-live-Blocker)
- **Viertes Cluster:** Thema?
- **Bildmaterial:** vorhandene Referenzfotos / Projekte nutzbar?

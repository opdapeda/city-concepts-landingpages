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
| 17.11.2026 | SEO-Basis umgesetzt: Title „Innenstadtbelebung für Städte & Gemeinden \| city concepts“ (57 Z.), neue Description (145 Z.), Canonical, Open Graph/Twitter Cards (Bild 1200×630 automatisch aus Hero-Foto), JSON-LD (Organization, WebSite, WebPage, Service, FAQPage ohne .todo-Einträge). Absolute URLs aus `site` in `astro.config.mjs`, per `SITE_URL` überschreibbar | Briefing-Title/-Description waren auf Keyword „Innenstadtentwicklung“ ausgelegt; Zielgruppe sucht eher nach Städten/Gemeinden. Abweichung vom Briefing 02, Abschnitt 6 – zur Freigabe durch JPO |

## Offene Fragen
- **Schrift:** Roboto (Unity-Referenz) oder Inter (CC-Redesign)? Vorerst Roboto.
- **Veröffentlichung:** Wo laufen die statischen Seiten? (Unterverzeichnis von city-concepts.de, Subdomain oder eigene Domain; Hosting/Deployment)
- **Formular:** bestehendes Formular nutzen oder neu? Wohin gehen die Anfragen?
- **Viertes Cluster:** Thema?
- **Bildmaterial:** vorhandene Referenzfotos / Projekte nutzbar?

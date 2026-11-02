# Backlog

## Konzept (Cowork)
- [x] Quellen sortiert, Textauszug Sales Paper Innenstadt, design.md (Farben) angelegt
- [x] Typografie & Layout aus Unity-Figma in design.md übernommen
- [ ] Briefing: Zielgruppe & Tonalität schärfen
- [ ] Keyword-Recherche je Cluster → `keywords.md`
- [ ] Briefing Cluster 01 Leitsysteme
- [x] Briefing Cluster 02 Innenstadtbelebung – Entwurf v1 (Abstimmung offen)
- [ ] Briefing Cluster 03 Stadtmöblierung & Stadtbild
- [ ] Viertes Cluster klären

## Design-Überarbeitung v2 (siehe docs/review-2026-11-02-innenstadtbelebung.md)
- [x] Design-Richtung festgelegt: B2 „Hell & dynamisch“ (02.11.) – Figma: https://www.figma.com/design/kX4gzfIbCpLeEfl7VFx1AO – A „Bildstark & offen“ / B „Grafisch & klar“
- [x] Hero- und Maßnahmen-Bilder mit Magnific generiert → assets/innenstadtbelebung/ (Entwürfe)
- [x] Bild moeblierung-begruenung: Ladenschilder neutralisiert (02.11.)
- [ ] Finale Hero-Bilder hochskalieren (aktuell 1376 px breit, Ziel ≥ 2560 px)
- [ ] Echte Projektfotos ablegen → assets/projekte/ (JPO)
- [x] Umsetzung v2 in Claude Code (02.11.2026) → Auftrag: docs/umsetzung-v2-innenstadtbelebung.md; Lighthouse lokal: Performance 98, Accessibility 100, SEO 100. Gepusht 02.11.2026, Vercel: https://city-concepts-landingpages.vercel.app/innenstadtbelebung/ (Deployment noch prüfen). Offen: Vergleich mit Figma durch JPO
- [x] Logos Kommunen (28) aus Sales Paper Innenstadt, Folie 10, extrahiert → assets/logos/ + src/assets/logos/; Logo-Banderole `src/components/LogoBand.astro` eingebaut (Cowork, 02.11.) – Build lokal getestet, **noch committen**
- [ ] Freigabe zur Nutzung der Kommunen-Logos auf der Website klären

## Umsetzung (Claude Code)
- [x] Tech-Stack entscheiden: Astro, statisch (02.11.2026)
- [x] Grundgerüst / Design-System (Tokens, Global-CSS, Komponenten)
- [ ] Landingpage 01 Leitsysteme
- [x] Landingpage 02 Innenstadtbelebung – Entwurf v1 mit Platzhaltern (`src/pages/innenstadtbelebung.astro`); offen: echte Bilder/Logos, Formular-Versandweg, Tracking, Lighthouse-Lauf, Impressum/Datenschutz/Barrierefreiheit-Seiten
- [ ] Tracking: Ereignisse (CTA-Position, tel, mailto, Formular) sind als Matomo-Events (`_paq`) vorbereitet; Matomo-Snippet und Consent-Lösung fehlen noch

## Erledigt
- [x] Repo & Ordnerstruktur angelegt (02.11.2026)

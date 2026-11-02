# Umsetzungsauftrag v2 – Landingpage Innenstadtbelebung

> Für Claude Code. Stand 02.11.2026. Ersetzt das bisherige Layout von `/innenstadtbelebung/`.
> Lies vorher: `CLAUDE.md`, `docs/design.md` (v. a. „Gestaltungsrichtung v2“, Farben, Kontraste, Typografie), `docs/cluster/02-innenstadtbelebung.md` (Texte), `docs/review-2026-11-02-innenstadtbelebung.md` (Befund).

## Design-Referenz
Figma, Frame „Richtung B2 – Hell & dynamisch“: https://www.figma.com/design/kX4gzfIbCpLeEfl7VFx1AO?node-id=4-2
Per Figma-MCP abrufbar (`get_design_context` / `get_screenshot`, Node `4:2`). Die Bildflächen sind dort grau – die Bilder kommen aus `assets/innenstadtbelebung/` (Zuordnung unten). Sektionen, die im Figma fehlen (Projekte, Warum, Ablauf, FAQ, Kontakt, Footer), im selben Stil gestalten.

## Gestaltungsprinzipien (verbindlich)
- Hell: Grundfläche Weiß mit sehr leichtem Pastellverlauf (`#F3F7F7`); Pastellgrün `#CCDDDC` / `#E6EEEE` für Flächen
- **Überlagerung statt Kästen:** Bildkarten mit Radius 16–20 px, weichem Schatten (`0 24px 48px rgba(31,37,43,.18)`), teils leicht gedreht (−4° bis +3°), überlappend; Bilder ragen über Panelkanten hinaus
- Petrol `#01534E` nur als **eingerückte, abgerundete Panels** (Radius 24–28 px, seitlich 64 px Abstand), nicht vollflächig
- Schwebende Kennzahl-Badges (weiß, Radius 14 px, Schatten)
- Buttons als Pills; Primär: CI-Grün `#AFCA0B` mit Schrift `#1F252B`; auf Hell sekundär Outline `#1F252B`; Header-CTA Petrol mit weißer Schrift
- Headlines `#1F252B`, Fließtext `#3B4654` 18 px, kein Light unter 24 px, Eyebrow 14 px Bold Versalien mit grünem Strich davor
- Textmarker-Highlight in CI-Grün hinter Schlüsselwörtern der H1
- **Keine Pfeil-/Chevron-Grafiken**
- Dezente Scroll-Animationen (Fade/Slide-up, leichte Parallax der Hero-Karten), alles deaktiviert bei `prefers-reduced-motion`
- Mobile: Collagen werden zu gestapelten Karten mit leichter Überlappung; Drehung auf Mobile max. ±2°

## Seitenstruktur (Ziel ~10 Sektionen)
1. **Header** (sticky, weiß, beim Scrollen mit Schatten): Logo, Anker-Navi, Telefonnummer (Desktop), CTA „Erstgespräch anfragen“
2. **Hero** – Text links auf Weiß (Eyebrow, H1 „Innenstädte, in denen man gerne bleibt.“, Subline, 2 CTAs, Telefonzeile), rechts Bild-Collage + 2 Badges
3. **Logo-Leiste** Kommunen (vorerst Textplatzhalter in weißen Kacheln; echte Logos folgen in `assets/logos/`)
4. **Handlungsfelder** – links Petrol-Panel mit überragendem Bild + Statement „Die Zukunft der Innenstadt …“, rechts nummerierte Liste 01–05
5. **Maßnahmen** – Pastell-Hintergrund, 4 versetzte Bildkarten (Stagger) mit Nummern-Chips; darunter **Zwischen-CTA**
6. **Beteiligung & Kennzahlen** – Petrol-Panel, Workshop-Bild ragt oben heraus, Badge, CTA
7. **Projekte** – Karten mit Ortsmarke + Kundenstimmen (Ellwangen, Deidesheim) groß gesetzt; danach **Zwischen-CTA**
8. **Warum city concepts + Ablauf** – 3 Argumente, darunter 4 Schritte horizontal
9. **FAQ** – zweispaltig, Akkordeon (`<details>`/`<summary>` oder ARIA-konform)
10. **Kontakt** – Petrol-Panel mit Ansprechpartner (Foto-Platzhalter), Telefon, 2-Schritt-Formular; **Footer**
- **Mobile:** Sticky-CTA-Leiste unten („Erstgespräch anfragen“ + Telefon-Icon)
- Texte aus `docs/cluster/02-innenstadtbelebung.md` übernehmen; „Kommunikation & Beteiligung“-Inhalte und Statement wie dort. Sektionen „Ausgangslage“ und „Lead-Magnet“ entfallen vorerst.

## Bildzuordnung (`assets/innenstadtbelebung/`)
| Sektion | Position | Datei | Alt-Text |
|---|---|---|---|
| Hero | große Karte (hinten, −2,5°) | `gestaltungssatzung.jpg` | Belebte Fußgängerzone einer Innenstadt mit Cafés und Passanten |
| Hero | kleine Karte links unten (+3°) | `moeblierung-begruenung.jpg` | Holzpodest mit Pflanzinseln, auf dem Menschen sitzen |
| Hero | kleine Karte rechts unten (−4°) | `platzgestaltung-alt.jpg` | Platz mit bunten Sitzpodesten und Sonnensegeln |
| Handlungsfelder | Bild über dem Petrol-Panel | `gestaltungssatzung-alt.jpg` | Gepflegte Einkaufsstraße mit Blumenschmuck und Außengastronomie |
| Maßnahmen | Karte 01 Besucherlenkung | `besucherlenkung.jpg` | Moderner Fußgänger-Wegweiser und Info-Stele in der Innenstadt |
| Maßnahmen | Karte 02 Platzgestaltung | `platzgestaltung.jpg` | Temporäre Platzgestaltung mit Sitzpodesten und Sonnensegeln |
| Maßnahmen | Karte 03 Aufwertung | `aufwertung-haltestelle.jpg` | Haltestelle mit farbiger Willkommens-Banderole im Stadtdesign |
| Maßnahmen | Karte 04 Digitale Medien | `digitale-medien.jpg` | Smartphone mit digitaler Stadtkarte und Fußweg-Route |
| Beteiligung | Bildkarte (−2°) | `beteiligung-workshop.jpg` | Workshop zur Bürgerbeteiligung mit Stadtplan und Klebezetteln |
| Projekte | Projektkarten | **echte Fotos folgen** in `assets/projekte/` – bis dahin neutrale Platzhalter mit Bildbeschreibung | – |
| Kontakt | Ansprechpartner | Platzhalter (Foto folgt) | – |

Nicht verwenden: `hero-a.jpg` bis `hero-d.jpg` (zu viel Fachwerk), `besucherlenkung-alt.jpg` (echte Zielnamen), `aufwertung-haltestelle-alt.jpg` (Ellwangen-Wortmarke), `beteiligung-workshop-alt.jpg` (Reserve).

**Bildverarbeitung:** Originale nicht überschreiben; responsive Varianten (z. B. 480/800/1200 px) als AVIF/WebP + JPG-Fallback erzeugen, `width`/`height` setzen, `loading="lazy"` außer Hero, Hero-Bilder mit `fetchpriority="high"`. Hinweis im Footer oder Impressum vorbereiten: „Symbolbilder (KI-generiert)“.

## Barrierefreiheit (WCAG 2.1 AA)
Kontrastregeln aus `design.md` einhalten; gedrehte Bilder sind dekorativ angeordnet, Texte nie gedreht; Fokus-Ring sichtbar; Tastaturbedienung Akkordeon/Formular; `lang="de"`; Überschriften-Hierarchie H1 → H2 → H3; Formularfelder mit Labels und Fehlermeldungen.

## Tracking
Wie `docs/tracking.md`: Formular-Absendung (Dankeseite), Klicks auf Telefon/E-Mail, alle CTA-Klicks als Ereignis mit Position (hero, zwischen-cta-1, zwischen-cta-2, sticky, kontakt).

## Abnahme
- [ ] Optik entspricht Figma B2 (Screenshot-Vergleich Desktop 1440 px)
- [ ] Mobile 375 px sauber (keine horizontalen Scrollbalken, Sticky-CTA)
- [ ] Lighthouse Performance/Accessibility/SEO ≥ 90
- [ ] Alle Bilder gemäß Tabelle eingebunden, mit Alt-Texten
- [ ] Commit + Push → Vercel-Preview-Link in `docs/backlog.md` eintragen

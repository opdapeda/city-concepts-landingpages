# Design-Grundlagen

> Stand: 02.11.2026 – Entwurf. Farben aus dem Sales Paper „Innenstadtsterben“ (PPT-Theme „Cicon_2025_Bluegrey“), Struktur nach der unity-concepts-Keynote-Landingpage.

## Referenzen
- **Farben & Bildsprache:** `docs/quellen/innenstadtbelebung/` (Sales Paper, Vorschau-PDF)
- **Seitenaufbau / Sektionslogik:** Projekt „unity concepts Keynote Landingpage“ → `01-messaging-und-struktur.md`
  (Hero → Proof-Leiste → Problem/Lösung → Showcase → Ablauf → Leistungen → Case Study → FAQ → Kontakt → Footer)
- **Typografie / Layout des Unity-Redesigns:** Figma „unity concepts – Keynote Landingpage“, Frame „v3 Desktop – 1440 (hell)“
  https://www.figma.com/design/CM4pfjIu68Z6klYcN7qi9E/?node-id=14-16 (Claude Code kann per Figma-MCP darauf zugreifen)
- **Eigenes city-concepts-Redesign (älter, nicht final abgestimmt):** Figma „city concepts UI Update Website 2026“
  https://www.figma.com/design/qBrpYjD8VsQa6aXm1WjJAP/?node-id=61-757
  → Referenz für **Barrierefreiheit/Kontraste** und für inhaltliche Bausteine. Farben daraus (Dunkelgrün `#01534E`, Hellgrün `#CCDDDC`, Orange `#E07400`, Ortsschild-Gelb `#FCCD21`) vorerst **nicht** übernehmen – zunächst CI-Grün.
- **Keine Farben von unity concepts übernehmen.**

## Farbpalette (Grün- und Grautöne)
| Rolle | Hex | Verwendung |
|---|---|---|
| Primärgrün | `#AFCA0B` | Markenfarbe, Flächen (Hero/Titel), Akzentlinien, Buttons |
| Grün dunkel | `#93AC09` | Hover, Akzent auf hellem Grund, Auszeichnungen (z. B. „Auswahl“) |
| Text / Headlines | `#3B4654` | Blaugrau – Überschriften, Fließtext |
| Grau mittel | `#454B53` | Fließtext alternativ |
| Grau hell-mittel | `#56616B` | Sekundärtext, Meta |
| Fast-Schwarz | `#1F252B` | dunkle Flächen, Footer |
| Linien | `#D5D8DB` | Trenner, Rahmen |
| Hintergrund hell | `#EFF0F2` | Karten, Sektionswechsel |
| Weiß | `#FFFFFF` | Grundfläche |

### Ergänzende Farben (aus dem CC-Redesign, für ein modernes Erscheinungsbild)
| Rolle | Hex | Verwendung |
|---|---|---|
| Petrol | `#01534E` | dunkle, vollflächige Sektionen (Statement, Kennzahlen, Kontakt), Footer; weiße Schrift (8,9:1); CI-Grün als Akzent darauf (4,8:1) |
| Pastellgrün | `#CCDDDC` | helle Sektionshintergründe, Karten, Hero-Fläche; Text in `#3B4654` (6,8:1) oder Petrol (6,4:1) |

**Mischprinzip:** CI-Grün = Markensignal (Akzente, Buttons, Pfeil-Motiv, Linien) · Petrol = Tiefe und Ruhe (dunkle Flächen) · Pastellgrün = helle Flächen statt Grau · Blaugrau/Grau = Typografie.
Orange `#E07400` und Ortsschild-Gelb `#FCCD21` aus dem Redesign vorerst nicht verwenden.

**Nur sparsam / prüfen:** `#03538B` (Blau, im Deck als Kontrast zu Grün, z. B. „Maßnahmen“). Gewünscht ist primär Grün + Grau.

**Optionale Kategorie-Farben** (Handlungsfelder im Deck, gedeckt): `#A8352A` Rot · `#D8A33D` Ocker · `#7A8B6D` Salbei · `#56738A` Graublau · `#1F252B` Schwarz – mit sehr hellen Tönen als Kartenhintergrund.

**Grün Text** `#5C6A06` – abgeleitet aus dem CI-Grün, für grüne Links/Auszeichnungen auf Weiß (Kontrast 6,0:1).

## Barrierefreiheit – Kontraste (WCAG 2.1 AA, Pflicht bei öffentlicher Hand)
| Kombination | Kontrast | Regel |
|---|---|---|
| Weiß auf `#AFCA0B` | 1,9:1 | ❌ nie verwenden |
| Weiß auf `#01534E` | 8,9:1 | ✅ Text auf Petrol-Sektionen |
| `#AFCA0B` auf `#01534E` | 4,8:1 | ✅ grüne Akzente/Headlines auf Petrol |
| `#3B4654` auf `#CCDDDC` | 6,8:1 | ✅ Text auf Pastellgrün |
| `#AFCA0B` auf Weiß (Text) | 1,9:1 | ❌ CI-Grün nie als Textfarbe |
| `#3B4654` auf `#AFCA0B` | 5,2:1 | ✅ Text auf grünen Flächen |
| `#1F252B` auf `#AFCA0B` | 8,3:1 | ✅ Primär-Button (grün, dunkle Schrift) |
| `#3B4654` auf Weiß | 9,6:1 | ✅ Fließtext/Headlines |
| `#3B4654` auf `#EFF0F2` | 8,4:1 | ✅ Text auf Karten |
| `#56616B` auf Weiß | 6,3:1 | ✅ Sekundärtext |
| `#5C6A06` auf Weiß | 6,0:1 | ✅ grüne Links |

Weitere Regeln:
- CI-Grün `#AFCA0B` nur als **Fläche, Akzentlinie, Dekor** – nie als Text auf Hell.
- Formularfelder: Rahmen in `#56616B` (≥ 3:1), nicht in Grün oder `#D5D8DB`.
- Sichtbarer Fokus-Ring (2 px `#1F252B`, Offset), alle Funktionen per Tastatur bedienbar.
- Links zusätzlich unterstrichen bzw. eindeutig erkennbar, nicht nur über Farbe.
- Bilder mit Alt-Texten, Überschriften-Hierarchie sauber, Sprache `de` gesetzt.

## Typografie (übernommen aus Unity-Figma)
Schrift: **Roboto** (Google Fonts, selbst hosten – DSGVO). Das Deck nutzt Arial; Roboto ist die Web-Entsprechung des Unity-Redesigns.

| Token | Schnitt | Größe / Zeilenhöhe | Letter-Spacing | Einsatz |
|---|---|---|---|---|
| Display | Medium 500 | 112 / 108 | -3 | Hero-Headline (Versalien) |
| Statement | Light 300 | 60 / 70 | -1.5 | Großes Statement-Zitat |
| Title (H2) | Regular 400 | 44 / 52 | -1 | Sektionsüberschrift |
| Row | Regular 400 | 36 / 44 | -0.5 | Gruppentitel, FAQ-Fragen |
| H3 | Medium 500 | 28 / 36 | -0.5 | Karten-/Bausteintitel |
| H4 | Medium 500 | 20 / 28 | 0 | Zwischentitel |
| Body Large | Light 300 | 20 / 32 | 0 | Intro-/Leadtext |
| Body | Regular 400 | 16 / 26 | 0 | Fließtext |
| Body Small | Regular 400 | 14 / 22 | 0 | Meta, Captions |
| Eyebrow/Nav | Medium 500 | 13 / 16 | +6 (Versalien) | Sektionslabel, Navigation |
| Button | Medium 500 | 16 / 20 | 0 | Buttons |

## Layout (übernommen aus Unity-Figma)
- Desktop 1440 px, Content-Breite 1312 px (64 px Rand), 12er-Raster; 3 Spalten à 416 px / 32 px Gap, 4 Spalten à 304 px
- Sektionsabstand oben ~120 px; jede Sektion: Eyebrow-Label → H2 → Inhalt
- Nummerierte Punkte „01 / 02 / 03“ für Argumente und Ablauf
- Abwechselnd helle und vollflächig farbige Sektionen (bei Unity Blau → bei city concepts **Grün bzw. Dunkelgrau**)
- Buttons: Primary (Akzentfarbe), Ink (dunkel, Outline), White (auf farbigem Grund); Höhe 54 px
- Kontakt: großes farbiges Panel mit 2-Schritt-Formular (Chips + Felder) und Ansprechpartner mit Foto
- FAQ zweispaltig (Titel links, Akkordeon rechts)

## Token-Mapping Unity → city concepts
| Unity-Token | Unity-Wert | city concepts |
|---|---|---|
| l/ink | `#0A1B2E` | `#1F252B` |
| l/ink-2 | `#3F5470` | `#3B4654` |
| brand/blue (farbige Sektionen) | `#00538A` | `#01534E` (Petrol) bzw. `#AFCA0B` (CI-Grün) |
| brand/blue-deep | `#003A63` | `#013F3B` (Petrol dunkel, abgeleitet) |
| accent/primary (CTA) | `#C90A0A` | `#AFCA0B` mit Schrift `#1F252B` |
| l/bg | `#D5E2F2` | `#CCDDDC` (Pastellgrün) |
| l/bg-soft | `#E9F0F9` | `#EFF0F2` bzw. `#E6EEEE` (Pastellgrün hell, abgeleitet) |
| l/line | `#0A1B2E38` | `#D5D8DB` |

## Gestaltungsmerkmale aus dem Deck
- Wortmarke „**city** concepts“ (city fett kursiv, concepts kursiv)
- Großflächige grüne Flächen mit transparenten **diagonalen Pfeil-/Winkelformen** (Wegeleitungs-Motiv) – **auf der Landingpage vorerst nicht verwenden** (Entscheidung JPO 02.11.)
- Panorama-Stadtfotos, helle Karten mit leichtem Schatten, Listen mit quadratischen Bullets
- Grüne vertikale Akzentbalken an Listenelementen
- Referenzen als Logo-Wand der Kommunen

## Bildsprache (aus Anpassungsnotizen 31.7.)
- Keine erkennbaren Marken-/Ladennamen, keine problematischen Personendarstellungen
- Nicht zu negativ („kompletter Niedergang“ vermeiden)
- Mehr Beteiligung, Workshops, Events zeigen – nicht nur Leitsysteme

## Bausteine aus dem city-concepts-Redesign (inhaltlich übernehmenswert)
- Hero mit hervorgehobenen Schlüsselwörtern („Entdecken, Erleben und Verstehen Ihrer Stadt“) + Leistungs-Links mit Pfeil
- Logo-Leiste der Kommunen direkt unter dem Hero
- „Warum Kommunen sich für city concepts entscheiden“ – 3 Argumente mit Label
- Kennzahlen auf Stadtpanorama: 20+ Jahre · 15 Leit- und Orientierungssysteme · 120 begleitete Vergabeverfahren _(Zahlen vor Veröffentlichung bestätigen)_
- Projektkarten mit Kategorie-Label und Ortsmarke (Pin + Stadtname)
- Lead-Magnet: „Leitsysteme vergaberechtssicher beschaffen“ – kostenloser Leitfaden (PDF) mit Formular

## Bildsprache Leitsysteme & Stadtraum (verbindlich für generierte Bilder)
Abgeleitet aus den Referenz-PPTs (`docs/quellen/_kontaktbogen/`, Auswahl in `_kontaktbogen/ref/`). Feedback JPO 02.11.2026.
- **Leitsysteme modern, nie historisierend:** schlanke anthrazitfarbene Rund- oder Rechteckmasten, weiße/hellgraue Fingerwegweiser mit dunkelblauer Schrift, klare Piktogramme, Meterangaben, Barrierefreiheits-Symbole (Rollstuhl, Steigung in %); dunkelblaue Info-Stelen mit Stadtplan, QR-Code, grüne Nummernkreise. **Kein Gusseisen, keine Nostalgie-Laternen-Optik.**
- **Haltestellen/Aufwertung:** moderne Glas-/Stahlhäuschen mit farbiger Klebebanderole im oberen Glasbereich (Stadtdesign, z. B. Pixel-Mosaik „Willkommen / Innenstadt →“ wie Ellwangen); Begrünung oder PV nur dezent.
- **Platzgestaltung:** Holz-Pflanzkästen, Sitzpodeste, Sonnensegel, Corten-Elemente, Kunstobjekte (z. B. Stahl-Pferd).
- **Innenstädte:** typische, gepflegte und belebte deutsche Mittelstädte (verputzte Fassaden in warmen Tönen, teils Fachwerk) – nicht Heidelberg-Altstadt-Klischee, nicht leer oder trist.
- Keine lesbaren Marken-/Ladennamen.

## Gestaltungsrichtung v2 (Stand 02.11.2026)
Favorit JPO: **Richtung B2 „Hell & dynamisch“** in https://www.figma.com/design/kX4gzfIbCpLeEfl7VFx1AO
- Hero: Text auf Weiß links, rechts Bild-Collage aus überlagernden, leicht gedrehten Bildkarten (Radius 16–20 px, weicher Schatten) auf Pastellfläche, dazu schwebende Kennzahl-Badges – angelehnt an das Unity-Redesign
- Petrol als eingerückte, abgerundete Panels (nicht vollflächig), Bilder ragen über die Panelkante hinaus
- Maßnahmen als versetzte Kartenreihe (Stagger), Nummern-Chips in CI-Grün
- Buttons als Pills (voll gerundet)
- Keine Pfeil-/Chevron-Grafiken

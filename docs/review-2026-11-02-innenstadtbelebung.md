# Design-Review Landingpage Innenstadtbelebung – Stand 02.11.2026

Geprüft: https://city-concepts-landingpages.vercel.app/innenstadtbelebung/ (Desktop 1440 px)

## Befund

### 1. Kontraste – technisch bestanden, wirken aber schwach
- Messung aller Textelemente: **keine WCAG-AA-Verletzung**.
- Der schwache Eindruck kommt aus der **fehlenden Hierarchie**: Headlines, Fließtext und Labels sind alle Blaugrau `#3B4654`; Meta-Texte 12–14 px in `#56616B`; Leadtext in Light 300.
- Hero: Pastellgrün + helle CI-Grün-Pfeile hinter dunkler Schrift → wenig Figur-Grund-Kontrast, alles wirkt „milchig“.

### 2. Kastenlastig, wenig Dynamik
- Fast jede Sektion folgt demselben Muster: Eyebrow → H2 → gleichförmiges Karten-Raster (3er/4er).
- Keine Asymmetrie, keine vollflächigen Bilder, keine Überlagerungen, kein Wechsel im Rhythmus.
- 15 Sektionen, ca. 13.000 px Seitenlänge → zu lang für eine Kaltakquise-Landingpage.

### 3. Inhaltliche Dopplung
- „Fünf Hebel“ (Handlungsfelder) und „Vom Konzept zur sichtbaren Veränderung“ (Maßnahmen) überschneiden sich stark.

### 4. Conversion
- Nur zwei CTA-Punkte (Hero + Kontakt am Ende); dazwischen ca. 11.000 px ohne Handlungsaufforderung.
- Vertrauenssignale schwach: Kommunen als Textliste statt Logos, Kundenstimmen weit unten, kein Ansprechpartner mit Gesicht nahe CTA.
- Keine Telefonnummer sichtbar; kein Sticky-CTA auf Mobile.

### 5. Bilder
- 0 Bilder – überall Platzhalter. Hero-Bild liegt unterhalb des Falzes.

## Maßnahmen

### Typografie & Kontrast
- Headlines in `#1F252B` (fast schwarz) bzw. Petrol `#01534E`, Fließtext `#3B4654`
- Fließtext 18 px (statt 16), Meta mindestens 14 px; **kein Light 300 unter 24 px**
- Eyebrow 14 px, CI-Grün nur als Strich/Marker davor
- Hero auf Weiß bzw. Vollbild-Foto mit dunklem Verlauf statt Pastell + Pfeile hinter Text

### Layout & Dynamik
- Hero: Vollbild-Bild (Magnific) mit Headline darüber oder Split (Text links, Bild rechts angeschnitten)
- Handlungsfelder + Maßnahmen zusammenführen: **ein** Abschnitt mit großen Bildkacheln in Bento-Layout (unterschiedliche Größen)
- Abwechselnd: Bild links/Text rechts, vollflächige Petrol-Bänder, Zitate groß gesetzt
- Pfeil-/Winkel-Motiv gezielt als grafisches Element (Sektionsübergänge, Bildanschnitte), nicht als Hintergrundmuster
- Weniger Kartenrahmen: Inhalte über Weißraum, Linien und Typografie gliedern
- Dezente Scroll-Animationen (mit `prefers-reduced-motion`)

### Struktur (Ziel: ca. 9–10 Sektionen)
1. Hero (Bild, H1, 2 CTAs, Mini-Vertrauenszeile)
2. Logo-Leiste (echte Logos)
3. Ausgangslage + Statement zusammengeführt
4. Handlungsfelder & Maßnahmen (Bento mit Bildern) + Zwischen-CTA
5. Beteiligung & Kommunikation (Bild + Text)
6. Projekte mit Kundenstimme + Zwischen-CTA
7. Warum city concepts + Kennzahlen (ein Petrol-Band)
8. Ablauf (kompakt, horizontal)
9. FAQ
10. Kontakt (mit Ansprechpartner, Telefon) + Footer

### Conversion
- CTA nach Handlungsfeldern und nach Projekten
- Ansprechpartner mit Foto + Telefonnummer im Kontaktbereich und im Header (Desktop)
- Sticky-CTA-Leiste auf Mobile
- Kundenstimme früher (direkt nach Handlungsfeldern oder im Hero-Umfeld)

### Bilder (Magnific)
- Hero: belebter Altstadtplatz, Menschen mit Aufenthaltsqualität (Grün, Sitzmöbel, Cafés), keine erkennbaren Marken
- Bento-Kacheln: Besucherlenkung, Möblierung & Begrünung, Platzgestaltung, Gestaltungssatzung/Fassaden, Haltestelle/Aufwertung, Info-App
- Beteiligung: Workshop-Situation
- Projektreferenzen: **echte Fotos** (JPO legt sie ab)

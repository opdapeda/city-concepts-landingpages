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

- [x] Schriftgrößen: Mindestgröße Fließtext 16 px (--fs-small), Beteiligungs-Liste und Kundenstimmen-Namen 18 px (Cowork, 02.11.)
- [x] Originallogo city concepts (von city-concepts.de, PNG 374×70) in Header/Footer; weiße Variante für Footer – **SVG/Vektor-Logo nachreichen für maximale Schärfe**
- [x] Kontaktdaten von city-concepts.de: Hans-Bunte-Straße 20, 69123 Heidelberg, 06221 75908-0, info@city-concepts.de; Impressum/Datenschutz verlinken auf city-concepts.de – **noch committen**
- [ ] E-Mail klären: Startseite nennt info@, Kontaktseite mail@city-concepts.de
- [x] Ansprechpartnerin Miriam Berberich (Foto, Durchwahl +49 6221 75 90 824) als Kachel im Kontaktbereich (16.11.2026). E-Mail mb@city-concepts.de. Offen: Funktion, Foto-Freigabe

## Go-live-Check Innenstadtbelebung (Chat 02, 18.11.2026)
Geprüft auf https://city-concepts-landingpages.vercel.app/innenstadtbelebung/ (Code-Stand `c7ac45a`). **Muss vor der DNS-Umstellung erledigt sein:**
- [ ] **Formularversand fehlt:** Beide Formulare (`#kontakt-form`, `#rueckruf-form`) validieren nur und leiten per JS auf `/danke/` weiter – es werden keine Daten verschickt (nativer POST auf `/danke/` → 405). Versandweg umsetzen (z. B. Vercel-/Serverless-Function → Mail bzw. Zapier-Webhook), UTM/gclid mitschicken
- [ ] **Matomo nicht eingebunden:** kein Snippet, `_paq`-Events laufen ins Leere. Snippet (matomo.city-concepts.de, Site-ID 2) + Consent-Lösung; Formular-Absendung als Ziel (siehe `tracking.md`)
- [ ] **Google-Ads-Conversion** für Formular-Absendung fehlt (erfordert Consent-Banner)
- [ ] **Interne Notiz sichtbar:** „Freigabe der Kundenstimmen für das Web klären“ (`.todo` unter den Kundenstimmen) – Freigabe klären, bis dahin Notiz bzw. Zitate entfernen
- [ ] **Durchwahl Miriam Berberich falsch verlinkt:** `tel:+496221759824` (Hero + Kontakt) – angezeigt wird +49 6221 75 90 824, richtig wäre `tel:+4962217590824`
- [ ] **Canonical + og:image fehlen** – nach Umzug canonical auf die finale city-concepts-Adresse setzen, vercel.app-Version auf noindex lassen/umleiten
- [ ] **Barrierefreiheitserklärung:** Link ist relativ (`/barrierefreiheit/`), Impressum/Datenschutz zeigen auf city-concepts.de – beim Umzug sicherstellen, dass `/barrierefreiheit/` unter der neuen Adresse existiert (Inhalte sind noch `.todo`)
- [ ] **Bildhinweis Footer** „Symbolbilder (KI-generiert)“ gilt pauschal, Projektreferenzen sind echte Fotos → Hinweis präzisieren (z. B. „Symbolbilder in Hero und Maßnahmen KI-generiert“)
- [ ] **Kennzahl „30+ Kommunen betreut“** neben Logo-Band mit 28 Kommunen – bestätigen (siehe offene Kennzahlen)
- [ ] Alt-Text für Award-Logo im Hero (`gda27-winner-farbig.svg`) ergänzen (Logo-Duplikate im Band sind korrekt `aria-hidden`)
- [ ] Mobile Ansicht nach den letzten Änderungen noch einmal prüfen (im Check nicht getestet)

## Umsetzung (Claude Code)
- [x] Tech-Stack entscheiden: Astro, statisch (02.11.2026)
- [x] Grundgerüst / Design-System (Tokens, Global-CSS, Komponenten)
- [ ] Landingpage 01 Leitsysteme
- [x] Landingpage 02 Innenstadtbelebung – Entwurf v1 mit Platzhaltern (`src/pages/innenstadtbelebung.astro`); offen: echte Bilder/Logos, Formular-Versandweg, Tracking, Lighthouse-Lauf, Impressum/Datenschutz/Barrierefreiheit-Seiten
- [ ] Tracking: Ereignisse (CTA-Position, tel, mailto, Formular) sind als Matomo-Events (`_paq`) vorbereitet; Matomo-Snippet und Consent-Lösung fehlen noch

- [x] Projekt-Detail-Overlays (Texte, Bilder, Fakten) aus PPT-Projektreferenzen, `src/data/projekte.ts` + `ProjektDialog.astro` (09.11.2026). Offen: Freigabe Personenfotos (Deidesheim Pressetermin), Ansprechpartner bewusst nicht aufgenommen, Möblierung Ellwangen ohne eigenes Foto ausgelassen

## Erledigt
- [x] Repo & Ordnerstruktur angelegt (02.11.2026)
- [x] Kontaktformular einstufig umgebaut, Anliegen optional inkl. „Etwas anderes“ mit Freitext (16.11.2026). Briefing `docs/cluster/02-innenstadtbelebung.md` S14 beschreibt noch 2 Schritte – Anpassung vorgeschlagen, nicht eigenmächtig geändert
- [x] Barrierefreiheits-Durchlauf Innenstadtbelebung (16.11.2026): Überschriftenhierarchie (Ablauf als eigener H2-Abschnitt), SVG-Attribute, eindeutige Dialog-CTA-Namen, Klickflächen ≥ 24 px, Fehlertexte je Formularfeld (aria-invalid/aria-describedby), Logo-Band mit Pausieren-Button und aria-hidden-Duplikat, Gerüst `/barrierefreiheit/`; axe-core ohne Befunde. Offen: Inhalte der Barrierefreiheitserklärung (alle `.todo`) fachlich/rechtlich klären, Datenschutz-Link im Formular (21 px hoch, bewusst unverändert), manuelle Screenreader-Prüfung

# Tracking & Conversions

## Bestehendes Setup
- **Matomo** (selbst gehostet): matomo.city-concepts.de – Website city concepts = Site-ID 2
- **Google Ads** (Search) – Conversion bisher über Kontaktformular
- Geplant: Gesamtdashboard (Google Ads → Google Sheet, Matomo Reporting-API, Leads über Zapier)

## Anforderungen an die Landingpages
- [ ] Matomo-Tracking auf allen Landingpages
- [ ] Formular-Absendung als Matomo-Ziel und Google-Ads-Conversion
- [ ] Klicks auf Telefon / E-Mail als Ereignis
- [ ] UTM-/gclid-Übergabe ins Formular (Lead-Quelle nachvollziehbar)
- [ ] Cookie-/Consent-Lösung klären

## Ist-Stand Live-Seite Innenstadtbelebung (18.11.2026)
- Matomo-Snippet **nicht eingebunden** – Events (`_paq`: CTA-Position, tel, mailto, `form-submit`) sind im Code vorbereitet, werden aber nicht erfasst
- Kein Google-Ads-Tag, kein Consent-Banner
- Formulare enthalten versteckte Felder `utm_source`, `utm_medium`, `utm_campaign`, `gclid` – werden mangels Versandweg noch nirgends übergeben
- Folge: Ohne Fix wären Kampagnen auf die Landingpage nicht messbar und Leads gingen verloren

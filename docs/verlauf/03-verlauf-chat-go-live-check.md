# Verlauf Chat 03 – Go-live-Check Innenstadtbelebung (claude.ai-Projekt-Chat, 16.–18.11.2026)

> Chat im privaten Account, Projekt „city concepts Landingpages“. Fachliche Ergebnisse stehen in `docs/backlog.md` (Abschnitt „Go-live-Check“), `docs/entscheidungen.md` (Eintrag 18.11.) und `docs/tracking.md` (Ist-Stand). Diese Datei beschreibt Verlauf und Arbeitsweise. Nummer 02 ist für Claude Code reserviert.

## Verlauf
1. **16.11.:** JPO suchte den ursprünglichen Konzept-Chat aus Cowork. Über die Chat-Suche war er nicht auffindbar (Cowork-Sessions laufen lokal in der Desktop-App, dazu zwei Accounts und projektgebundene Chats). Inzwischen ersetzt durch `01-verlauf-konzept-chat.md`.
2. **18.11.:** JPO hat die letzten Änderungen in Claude Code gemacht und die Seite erstmals live gebracht. Der Chat hat die Live-Seite im Browser und per Code-Analyse geprüft (Code-Stand `c7ac45a`).
3. Danach wurde der Chat ans Projekt angebunden und der Repo-Ordner freigegeben. Die Ergebnisse stehen in `docs/` und sind nach `repo/…` im Projekt gespiegelt.
4. JPO fragte, wie Claude Code die finalen Stände für claude.ai zugänglich macht. Ablauf siehe unten. `CLAUDE.md` wurde um den Abschnitt „Abschluss einer Session“ ergänzt.

## Entscheidungen / Aussagen von JPO
- Landingpage Innenstadtbelebung ist **freigegeben**.
- Geplant: Umzug weg von der vercel.app-Adresse per **DNS-Umstellung**, sodass die Seite über die city-concepts-Website erreichbar ist. Offen: Subdomain oder Unterverzeichnis.
- Alle Chats sollen denselben Stand nutzen.

## Ablauf Synchronisation Repo → claude.ai-Projekt
- Claude Code (unity-concepts-Account) kann das claude.ai-Projekt im privaten Account **nicht** beschreiben. Es pflegt `docs/` und `docs/verlauf/` und committet bzw. pusht.
- Gespiegelt wird über einen Chat im claude.ai-Projekt (privater Account, Repo-Ordner freigegeben). Auslöser: „Projekt-Docs aktualisieren“. Der Chat liest den lokalen Ordner und schreibt `docs/verlauf/*` nach `claude/` und die übrigen Docs nach `repo/…`.

## Ergebnis Go-live-Check (Details in `docs/backlog.md`)
**Blocker vor der DNS-Umstellung:**
- Die Formulare (Anfrage und Rückruf) **verschicken keine Daten**. Nach der JS-Validierung erfolgt nur eine Weiterleitung auf `/danke/`, ein POST wird mit 405 abgewiesen.
- **Matomo ist nicht eingebunden**, die `_paq`-Events laufen ins Leere. Es gibt keinen Google-Ads-Tag und keinen Consent-Banner, UTM und gclid werden nirgends übergeben.
- Die interne Notiz „Freigabe der Kundenstimmen für das Web klären“ ist **öffentlich sichtbar**.

**Weitere Befunde:**
- Der `tel:`-Link der Durchwahl von Miriam Berberich hat eine Ziffer zu wenig.
- Canonical und og:image fehlen.
- Der Hinweis „Symbolbilder (KI-generiert)“ gilt pauschal, obwohl die Projektbilder echte Fotos sind.
- Die Seite nennt „30+ Kommunen“, das Logo-Band zeigt 28.
- Das Award-Logo hat keinen Alt-Text.

**Korrektur:** Der Link zur Barrierefreiheitserklärung ist relativ (`/barrierefreiheit/`) und nicht auf vercel.app festgelegt. Die Seite muss also mit umziehen.

**Nicht geprüft:** Mobilansicht.

## Hinweise für folgende Chats
- Eine Leitsystem-Landingpage gibt es noch nicht, `docs/cluster/01-leitsysteme.md` ist leer. Unter `~/Claude/Projects/` liegt der Ordner `leitsystem-kalkulator`, möglicherweise die von JPO gemeinte „Leitsystem-Seite aus der Vorkonzeption“. Noch nicht geprüft.
- Angeboten, aber noch nicht erstellt: ein Auftrag für Claude Code zu Formularversand und Matomo mit Consent.

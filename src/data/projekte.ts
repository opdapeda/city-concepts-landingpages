// Projektreferenzen für die Detail-Overlays. Inhalte nach den PPT-Projektreferenzen (docs/quellen/tourismus/CL1_Tourismus_Projektbeispiele.pptx).
// Kontakte der Ansprechpartner sind bewusst nicht enthalten.
import type { ImageMetadata } from 'astro';

import img_ellwangen_bahnhof_0 from '../assets/projekte/ellwangen-bahnhof/01-bushaeuschen-willkommen.jpg';
import img_ellwangen_bahnhof_1 from '../assets/projekte/ellwangen-bahnhof/02-bushaeuschen-innenstadt.jpg';
import img_ellwangen_bahnhof_2 from '../assets/projekte/ellwangen-bahnhof/03-bushaeuschen-detail.jpg';
import img_ellwangen_bahnhof_3 from '../assets/projekte/ellwangen-bahnhof/04-wegweiser-montage.jpg';
import img_ellwangen_bahnhof_4 from '../assets/projekte/ellwangen-bahnhof/05-wegweiser-mast.jpg';
import img_ellwangen_bahnhof_5 from '../assets/projekte/ellwangen-bahnhof/06-treppenverkleidung.jpg';
import img_ellwangen_bahnhof_6 from '../assets/projekte/ellwangen-bahnhof/07-banderole-motiv.png';
import img_ellwangen_pferde_0 from '../assets/projekte/ellwangen-pferde/01-scheibenpferd-marktplatz.jpg';
import img_ellwangen_pferde_1 from '../assets/projekte/ellwangen-pferde/02-scheibenpferd-aufbau.jpg';
import img_ellwangen_pferde_2 from '../assets/projekte/ellwangen-pferde/03-scheibenpferd-abend.jpg';
import img_ellwangen_pferde_3 from '../assets/projekte/ellwangen-pferde/04-standort-vorher.jpg';
import img_ellwangen_pferde_4 from '../assets/projekte/ellwangen-pferde/05-scheibenpferd-werkstatt.jpg';
import img_ellwangen_pferde_5 from '../assets/projekte/ellwangen-pferde/06-platz-mit-installation.jpg';
import img_ellwangen_pferde_6 from '../assets/projekte/ellwangen-pferde/08-montage.jpg';
import img_heidelberg_0 from '../assets/projekte/heidelberg/01-satzung-titel.png';
import img_heidelberg_1 from '../assets/projekte/heidelberg/02-skizze-werbeanlagen.png';
import img_heidelberg_2 from '../assets/projekte/heidelberg/03-arten-werbeanlagen.png';
import img_heidelberg_3 from '../assets/projekte/heidelberg/04-altstadtgasse.jpg';
import img_deidesheim_0 from '../assets/projekte/deidesheim/01-fingerwegweiser.jpg';
import img_deidesheim_1 from '../assets/projekte/deidesheim/02-stele-im-ortskern.jpg';
import img_deidesheim_2 from '../assets/projekte/deidesheim/03-wegweiser-historische-runde.jpg';
import img_deidesheim_3 from '../assets/projekte/deidesheim/04-wegweiser-barrierefrei.jpg';
import img_deidesheim_4 from '../assets/projekte/deidesheim/05-infotafel-museum.jpg';
import img_deidesheim_5 from '../assets/projekte/deidesheim/06-uebersichtskarte.jpg';
import img_deidesheim_6 from '../assets/projekte/deidesheim/07-infotafel-schloss.jpg';
import img_deidesheim_7 from '../assets/projekte/deidesheim/08-pressetermin.jpg';
import img_deidesheim_8 from '../assets/projekte/deidesheim/09-begehung.jpg';

export interface Projekt {
  id: string; titel: string; untertitel: string; tag: string; ort: string; kunde: string;
  zeitraum: { label: string; wert: string }[];
  text: string[]; leistungen: string[];
  bilder: { src: ImageMetadata; caption: string; alt: string }[];
  stimme?: { zitat: string; wer: string; rolle: string };
}

export const projekte: Projekt[] = [
  {
    id: "ellwangen-bahnhof", titel: "Vom Bahnhof in die Innenstadt", untertitel: "Vom Bahnhof zur Innenstadt und zurück – Besucherlenkung in Ellwangen", tag: "Besucherlenkung", ort: "Ellwangen", kunde: "Stadt Ellwangen",
    zeitraum: [{ label: "Konzept", wert: "2023 bis 2025" }, { label: "Fertigstellung", wert: "2026" }],
    text: [
      "Der Ellwanger Bahnhof liegt außerhalb der Innenstadt. Um Ortsfremden die Orientierung zu erleichtern, wurde eine Leitung entwickelt, die das Zentrum zielgerichtet zugänglich macht und eine sichere Rückführung zum Bahnhof gewährleistet.",
      "Vom Bahnhof startend, werden Besucher auf farbenfrohe Bushäuschen aufmerksam. Beidseitig beklebt, heißen diese herzlich willkommen und geben eine erste Orientierung zur Innenstadt. Den Weg entlang leiten zuverlässig kompakte Wegweiser, befestigt an bestehenden Verkehrs- oder Lichtmasten.",
    ],
    leistungen: ["Ortsbegehung", "Bestands- und Bedarfsanalyse", "Konzeption mit Vorüberlegungen und Ideenskizzen", "Gestaltungsskizzen", "Kreation und Design", "Abstimmung mit Herstellern", "Begleitung der Vergabe", "Dokumentation"],
    bilder: [
      { src: img_ellwangen_bahnhof_0, caption: "Bushäuschen am Bahnhof", alt: "Bushäuschen am Bahnhof mit bunter Willkommen-Beklebung im Stadtdesign" },
      { src: img_ellwangen_bahnhof_1, caption: "Bushäuschen mit Hinweis zur Innenstadt", alt: "Bushäuschen mit farbiger Beklebung und Hinweis auf die Innenstadt" },
      { src: img_ellwangen_bahnhof_2, caption: "Detail der Beklebung", alt: "Nahaufnahme der beklebten Glasflächen eines Bushäuschens" },
      { src: img_ellwangen_bahnhof_3, caption: "Montage eines kompakten Wegweisers", alt: "Eine Hand befestigt einen kompakten Wegweiser an einem Laternenmast" },
      { src: img_ellwangen_bahnhof_4, caption: "Wegweiser an bestehendem Mast", alt: "Wegweiser in Richtung Innenstadt an einem bestehenden Mast" },
      { src: img_ellwangen_bahnhof_5, caption: "Temporäre Treppenverkleidung", alt: "Gebäudefassade mit großflächiger bunter Verkleidung im Stadtdesign" },
      { src: img_ellwangen_bahnhof_6, caption: "Gestaltungsmotiv der Beklebung", alt: "Pixelmosaik-Motiv mit Hinweis auf die Innenstadt" },
    ],
    stimme: { zitat: "Die Zusammenarbeit mit city concepts war sehr gut und hat hervorragende Ergebnisse gebracht.", wer: "Verena Kiedaisch", rolle: "City-Managerin und Wirtschaftsbeauftragte, Stadt Ellwangen" },
  },
  {
    id: "ellwangen-pferde", titel: "Aufs richtige Pferd gesetzt", untertitel: "Ellwanger Blickpunkte – interaktive Spielpferde für Ellwangens Innenstadt", tag: "Platzgestaltung", ort: "Ellwangen", kunde: "Stadt Ellwangen",
    zeitraum: [{ label: "Zeitraum", wert: "2023 bis 2026" }],
    text: [
      "Seit dem 8. Jahrhundert prägen Pferde das Stadtbild und die Identität von Ellwangen. Um dieses kulturelle Erbe zeitgemäß weiterzuentwickeln, begleitet city concepts die Stadt dabei, ihre Positionierung als „Pferdestadt“ im öffentlichen Raum erlebbar zu machen.",
      "Im Konzept „Ellwanger Blickpunkte“ entstanden interaktive Installationen, die neue Perspektiven auf die Stadt eröffnen und Besucherinnen und Besucher einbeziehen. Auf dem Marktplatz steht eine sich scheinbar auflösende Pferdefigur aus präzise angeordneten Metallplatten, die ihr Erscheinungsbild je nach Blickwinkel verändert.",
    ],
    leistungen: ["Ortsbegehungen", "Bedarfsanalyse", "Entwicklung der konzeptionellen Basis", "Ideenentwicklung und Planungsskizzen", "Zwischenabstimmungen", "Markterkundung zur Umsetzung", "Dokumentation"],
    bilder: [
      { src: img_ellwangen_pferde_0, caption: "Scheibenpferd auf dem Marktplatz", alt: "Pferdefigur aus Metallscheiben auf einem Holzpodest am Marktplatz" },
      { src: img_ellwangen_pferde_1, caption: "Scheibenpferd mit Besuchern", alt: "Scheibenpferd auf dem Marktplatz mit Besuchern unter Sonnenschirmen" },
      { src: img_ellwangen_pferde_2, caption: "Abendstimmung", alt: "Beleuchtetes Scheibenpferd am Abend vor einer Kirche" },
      { src: img_ellwangen_pferde_3, caption: "Der Standort vor der Installation", alt: "Rundes Holzpodest auf dem Ellwanger Marktplatz" },
      { src: img_ellwangen_pferde_4, caption: "Herstellung des Scheibenpferds", alt: "Pferdefigur aus Metallplatten in der Werkstatt" },
      { src: img_ellwangen_pferde_5, caption: "Platz mit Sitzmöbeln und Sonnensegel", alt: "Platz vor einem Gebäude mit Sitzmöbeln und Sonnensegel" },
      { src: img_ellwangen_pferde_6, caption: "Aufbau der Installation", alt: "Arbeiter setzt per Kran die Pferdefigur auf ihren Sockel" },
    ],
  },
  {
    id: "heidelberg", titel: "Altstadtflair bewahren", untertitel: "Überarbeitung und visuelle Aufbereitung der Werbeanlagensatzung für die Altstadt Heidelberg", tag: "Werbeanlagensatzung", ort: "Heidelberg", kunde: "Stadt Heidelberg",
    zeitraum: [{ label: "Zeitraum", wert: "2022 bis 2023" }],
    text: [
      "Ein Regelwerk für den historischen Kernbereich einer weltberühmten Universitätsstadt, das die Balance zwischen Einkaufslage und Denkmalschutz bewahrt.",
      "Ein reiner Satzungstext wurde durch Skizzen und Grafiken aufgewertet und verständlich illustriert. Der Erhalt des städtebaulichen Charakters steht im Fokus. Die Visualisierungen des Erlaubten zeigen jedem Gewerbetreibenden, wie eine genehmigungsfähige Werbeanlage aussieht.",
    ],
    leistungen: ["Analyse und Auswertung von Best-Practice-Beispielen", "Ideenfindung und Konzeption", "Ortsbegehung im Geltungsbereich", "Entwicklung von Grafiksprache und Gesamtgestaltung", "Visuelle und textliche Aufbereitung", "Finalisierung von Satz und Layout"],
    bilder: [
      { src: img_heidelberg_0, caption: "Titel der Satzung", alt: "Titelseite der Werbeanlagensatzung für die Altstadt Heidelberg" },
      { src: img_heidelberg_1, caption: "Begleitende Skizze", alt: "Technische Skizze zu Abmessungen von Werbeanlagen an einer Fassade" },
      { src: img_heidelberg_2, caption: "Arten von Werbeanlagen", alt: "Seiten der Satzung mit Skizzen zu Arten von Werbeanlagen" },
      { src: img_heidelberg_3, caption: "Altstadtgasse", alt: "Fußgängerzone in der Heidelberger Altstadt mit Passanten" },
    ],
  },
  {
    id: "deidesheim", titel: "Dem Geißbock auf der Spur", untertitel: "Ein barrierefreies touristisches Fußwegeleitsystem für Deidesheim", tag: "Barrierefreies touristisches Leitsystem", ort: "Deidesheim", kunde: "Stadt Deidesheim",
    zeitraum: [{ label: "Zeitraum", wert: "2019 bis 2023" }],
    text: [
      "Der historische Kernbereich eines berühmten Weinortes – mit Kopfsteinpflaster und Denkmalschutz, verwinkelten Gassen und schwierigen Verkehrsräumen – als Erlebnisraum für alle.",
      "Die Herausforderung: diesen sensiblen Bereich mit einem barrierefreien Fußwegeleitsystem zu erschließen. Dazu wurden die Wege qualifiziert, die Leitung in Themenrouten gebündelt und mit eigens gefertigter Kartografie unterstützt.",
      "Eine behutsame Farbgebung in Anlehnung an historische Vorgaben und ein besonderes Wiedererkennungszeichen auf allen Komponenten verknüpfen die beiden Themenrouten für Historie und Freizeit – einfach und für alle Altersgruppen.",
    ],
    leistungen: ["Bestands- und Bedarfsanalyse", "Wegequalifizierung und Testberollung", "Entwurfs-, Genehmigungs- und Ausführungsplanung", "Grafik", "Vergabe", "Begleitung der Montage inklusive Abnahme", "Dokumentation und Abschlussbericht"],
    bilder: [
      { src: img_deidesheim_0, caption: "Fingerwegweiser", alt: "Fingerwegweiser mit Entfernungsangaben zur Evangelischen Kirche und zum Brauchtumsbrunnen" },
      { src: img_deidesheim_1, caption: "Orientierungsstele im Ortskern", alt: "Platz im Ortskern mit Orientierungsstele und Passanten" },
      { src: img_deidesheim_2, caption: "Wegweiser zur Historischen Runde", alt: "Wegweiser mit Hinweisen zur Historischen Runde, zum Bahnhof und zur Tourist-Information" },
      { src: img_deidesheim_3, caption: "Meter- und Steigungsangaben", alt: "Wegweiser mit Meterangaben und Steigungsprozenten" },
      { src: img_deidesheim_4, caption: "Infotafel am Museum", alt: "Infotafel mit Geißbock-Symbol an einer Hauswand" },
      { src: img_deidesheim_5, caption: "Übersichtskarte der Rundwege", alt: "Übersichtstafel mit barrierefreier Karte der Rundwege" },
      { src: img_deidesheim_6, caption: "Infotafel am ehemaligen Schloss", alt: "Infotafel mit Geißbock-Motiv am ehemaligen Schloss" },
      { src: img_deidesheim_7, caption: "Pressetermin, 16. Mai 2023", alt: "Gruppe von Personen bei der Vorstellung des Leitsystems" },
      { src: img_deidesheim_8, caption: "Vorstellung vor Ort", alt: "Gruppe von Personen vor einem Gebäude in Deidesheim" },
    ],
    stimme: { zitat: "[…] Ihr Umgang mit den Herausforderungen einer barrierefreien Gestaltung in einem denkmalgeschützten Bereich war beispielhaft. […]", wer: "Manfred Dörr", rolle: "Stadtbürgermeister, Deidesheim" },
  },
];

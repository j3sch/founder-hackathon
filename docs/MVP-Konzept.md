# MVP-Konzept: KI-gestützte Wissensplattform für Bauprojekte

**Arbeitstitel:** ImpactView  
**Branche / Demo:** Bauwesen & Gebäudetechnik – Sanierung Bürogebäude „Campus Nord“  
**Ziel:** Überzeugender Hackathon-MVP mit einem klaren Entscheidungsszenario und personalisierten Wissensansichten (kein Chatbot).

---

## 1. Kurzbeschreibung des MVPs

ImpactView liest vorhandene Projektdokumente (Meeting Notes, Projektbeschreibung, Aufgaben, Zuständigkeiten) ein, erkennt daraus eine zentrale Projektentscheidung und zeigt Mitarbeitern **automatisch generierte, interaktive Wissensansichten** – angepasst an Fachbereich und Kenntnisniveau.

**Kernversprechen der Demo:**  
Ein Mitarbeiter öffnet das Projekt, sieht die Entscheidung „Lüftungsanlage verlegen“, versteht auf einen Blick, was das für *seine* Arbeit bedeutet, und kann Auswirkungen und Zusammenhänge visuell erkunden – ohne Protokolle manuell durchsuchen zu müssen.

**Was der MVP bewusst nicht ist:** kein freier Chat, keine Live-Anbindung an DMS/ERP, kein Multi-Projekt-Dashboard, keine Benutzerverwaltung.

---

## 2. Demo-Szenario: Campus Nord – Lüftungsverlegung

### 2.1 Projektziele und Ausgangssituation

| Feld | Inhalt |
|------|--------|
| **Projekt** | Generalsanierung Bürogebäude „Campus Nord“, Baujahr 1987, 4 Geschosse, ca. 6.200 m² BGF |
| **Ziel** | Modernisierung TGA (Lüftung, Elektro, Brandschutz), energetische Sanierung, Weiterbetrieb teilweise während der Bauzeit |
| **Zeitraum** | Geplant: 14 Monate; aktuell Woche 11 / Phase Rohmontage TGA |
| **Auftraggeber** | Eigentümergesellschaft Campus Nord GmbH |
| **Generalplaner / Bauleitung** | intern koordiniert; Fachplaner Lüftung & Elektro beauftragt |

**Ausgangssituation vor der Entscheidung:**  
Die zentrale Lüftungsanlage (RLT) war im ursprünglichen Entwurf im Technikraum **TR-B2** im Untergeschoss vorgesehen. TR-B2 liegt nahe den Haupttrassen für Zuluft/Abluft und war in den Bestandsplänen als Technikfläche ausgewiesen.

### 2.2 Beteiligte Fachbereiche und Verantwortlichkeiten

| Fachbereich | Rolle im Projekt | Typische Aufgaben |
|-------------|------------------|-------------------|
| **Bauleitung** | Koordination Termine, Flächen, Gewerke, Baustellenlogistik | Ablaufplanung, Freigaben, Konfliktlösung zwischen Gewerken, Meldung an AG |
| **Elektrotechnik** | Stark-/Schwachstrom, Schaltanlagen, Kabelwege, Anbindung TGA | Planung und Ausführung Elektroanschlüsse der RLT, Brandschutzklappen-Ansteuerung, Mess-/Steuerleitungen |
| **Einkauf** | Beschaffung Anlagen, Komponenten, Nachträge | Ausschreibung/Bestellung RLT-Komponenten, Liefertermine, Kostenänderungen, Lieferantenkommunikation |

### 2.3 Ursprüngliche Planung (dokumentierte Fakten)

- RLT-Standort: **Technikraum TR-B2** (UG)
- Leistungsdaten (laut Projektbeschreibung): ca. 18.000 m³/h, zentral
- Elektro: Zuleitung und Steuerung von Schaltschrank **SS-UG-03** zu TR-B2 vorgesehen
- Einkauf: RLT-Gerät und Kanäle bereits angefragt; Liefertermin Gerät KW 18 avisiert (noch nicht verbindlich bestätigt in den Demo-Quellen)
- Bauleitung: Montagefenster RLT in KW 19–21 eingeplant

### 2.4 Die zentrale Entscheidung

**Entscheidung (aus Projektbesprechung KW 11):**  
Die Lüftungsanlage wird **nicht** in TR-B2, sondern in **Technikraum TR-C1** (UG, Ostflügel) installiert.

**Begründung (laut Meeting Notes):**  
Bei der Bestandsaufnahme vor Ort stellte sich heraus, dass TR-B2 durch eine nachträglich eingebaute Server-Nische und zusätzliche Brandschutztüren **räumlich zu eng** für die vorgesehene RLT-Einheit inkl. Wartungsgängen ist. Eine Verkleinerung des Geräts würde die geforderten Luftmengen laut Fachplaner nicht sicherstellen. TR-C1 bietet ausreichend Aufstellfläche; die Kanalführung verlängert sich.

**Entscheider / Protokoll:** Bauleitung (Leitung), Fachplaner Lüftung, Vertreter Elektro und Einkauf anwesend.

### 2.5 Mögliche Auswirkungen auf Fachbereiche

> **Wichtig für Demo und KI-Logik:** Nur klar in Quellen genannte Fakten gelten als bestätigt. Auswirkungen auf andere Gewerke sind teils **explizit genannt**, teils **plausible Ableitungen** – und müssen in der UI als solche gekennzeichnet werden (siehe Abschnitt 7).

| Fachbereich | Dokumentiert / nahegelegt | Als Ableitung markieren |
|-------------|---------------------------|-------------------------|
| **Bauleitung** | Neuer Aufstellort TR-C1; längere Kanalführung; Abstimmung mit AG nötig | Terminanpassung Montagefenster; Logistik Weg TR-C1 |
| **Elektrotechnik** | Zuleitung/Steuerung waren auf TR-B2 und SS-UG-03 ausgelegt | Neue Trasse zu TR-C1; möglicher Mehraufwand Kabel; Prüfung ob SS-UG-03 weiterhin sinnvoll |
| **Einkauf** | Gerät war für TR-B2 spezifiziert / angefragt | Klärung ob Geräteabmessungen/Anschlüsse für TR-C1 passen; Nachtrag Lieferant; Kosten-/Terminrisiko |

### 2.6 Situationen, in denen Mitarbeiter das Wissen brauchen

1. **Elektro-Monteur (Montag):** Soll Kabelwege vorbereiten – weiß nicht, dass der Zielraum gewechselt hat.
2. **Einkäuferin (Dienstag):** Lieferant fragt nach finaler Aufstellskizze – sie braucht schnell: Was hat sich geändert, was muss nachverhandelt werden?
3. **Bauleiter-Assistent (fachfremd):** Soll AG kurz briefen – braucht eine verständliche Kurzfassung ohne TGA-Jargon.
4. **Erfahrene Bauleiterin:** Will Abhängigkeiten und offene Punkte sehen, nicht die Grundlagen der Lüftungstechnik.

---

## 3. Nutzerrollen und Informationsbedürfnisse

Personalisierung läuft über zwei Achsen:

1. **Fachbereich** → *welche* Informationen relevant sind  
2. **Kenntnisniveau** → *wie tief / mit welchem Fachjargon* erklärt wird  

### 3.1 Bauleitung

| Aspekt | Einsteiger / fachfremd | Erfahrene Fachkraft |
|--------|------------------------|---------------------|
| **Aufgabe** | Termine kommunizieren, Protokolle nachhalten, AG informieren | Gewerke steuern, Risiken und Meilensteine freigeben |
| **Info-Bedarf über andere** | Was Elektro und Einkauf *jetzt* tun müssen (in Alltagssprache) | Konkrete Abhängigkeiten, offene Klärungen, Terminhebel |
| **Relevante Auswirkungen** | Standortwechsel, warum, wer betroffen, nächste Schritte | Kanalführung, Schnittstellen Elektro/Einkauf, AG-Freigabe, Terminrisiko |
| **Vorausgesetztes Wissen** | Kaum TGA | Ablaufplanung, Nachtragslogik, Baustellenkoordination |
| **Erklärungstil** | „Was wurde entschieden? Warum? Was bedeutet das für den Bauablauf?“ + Glossar | Kompakte Decision Card, Impact-Graph, offene Punkte-Liste |

### 3.2 Elektrotechnik

| Aspekt | Einsteiger / fachfremd | Erfahrene Fachkraft |
|--------|------------------------|---------------------|
| **Aufgabe** | Unterlagen sortieren, einfache Ausführungsschritte verstehen | Trassen, Anschlüsse, Schaltschrank-Zuordnung planen/ausführen |
| **Info-Bedarf über andere** | Dass Bauleitung den Raum gewechselt hat; dass Einkauf Gerät ggf. ändert | Technischer Bezug: alter vs. neuer Endpunkt, Bezug SS-UG-03, Schnittstelle RLT |
| **Relevante Auswirkungen** | „Kabel gehen woanders hin“; Arbeit stoppen bis Klarheit | Neue Trassenführung TR-C1, Prüfung Bestandsplanung, möglicher Mehraufwand |
| **Vorausgesetztes Wissen** | Grundbegriffe Strom/Kabel | Starkstrom/TGA-Anbindung, Pläne lesen |
| **Erklärungstil** | Schritt-für-Schritt: Was ändert sich an meinem Auftrag? | Diff alte vs. neue Elektro-Annahmen, offene technische Prüfungen |

### 3.3 Einkauf

| Aspekt | Einsteiger / fachfremd | Erfahrene Fachkraft |
|--------|------------------------|---------------------|
| **Aufgabe** | Bestellungen nachhalten, Lieferanten-Mails vorbereiten | Nachträge, Spezifikationsänderungen, Kosten-/Terminrisiko steuern |
| **Info-Bedarf über andere** | Entscheidung und betroffene Bestellung in Klartext | Ob Spezifikation/Abmessungen/Anschlüsse noch passen; was Bau/Elektro noch klären |
| **Relevante Auswirkungen** | Gerät könnte anders spezifiziert/geliefert werden müssen | Nachverhandlung, Lieferterminrisiko, Dokumentationsbedarf an Lieferant |
| **Vorausgesetztes Wissen** | Bestellprozess grob | TGA-Beschaffung, Nachtragsfähigkeit |
| **Erklärungstil** | Checkliste: „Kläre mit Lieferant X diese Punkte“ | Impact + Beschaffungs-Diff + offene kommerzielle Punkte |

### 3.4 Relevanz vs. Tiefe (Regel für den MVP)

- **Relevanzfilter (Rolle):** Impact Explorer und Knowledge View zeigen primär Impacts und Tasks des eigenen Fachbereichs; andere Bereiche nur als Kontext/Abhängigkeit.
- **Tiefenfilter (Niveau):** Dieselben Fakten, aber Einsteiger erhalten Plain-Language, Definitionen und geführte „Was bedeutet das für mich?“-Schritte; Experten erhalten knappe Fakten, IDs (TR-C1, SS-UG-03), Diffs und offene Prüfungen.

---

## 4. Zentrale User Journey

### Ablauf: Von der Entscheidung zur personalisierten Ansicht

```
[Quellen einlesen] → [Entscheidung erkennen] → [Auswirkungen zuordnen]
        → [Inhalte generieren] → [Nutzer wählt Rolle + Niveau]
        → [Personalisierte Views] → [Vertiefung bei Bedarf]
```

### Schritt für Schritt

| Schritt | Was passiert | Demo-Inhalt |
|---------|--------------|-------------|
| **1. Input** | MVP erhält vorbereitete Projektdateien (kein Live-Upload nötig, oder ein Demo-„Sync“-Button mit Fake-Progress) | `projektbeschreibung.md`, `meeting-kw11.md`, `team.md`, `aufgaben.md`, optional `technik-rlt.md` |
| **2. KI-Erkennung** | System extrahiert strukturierte Objekte | Decision: Standort RLT TR-B2 → TR-C1; Reason: räumliche Einschränkung; Entities: TR-B2, TR-C1, SS-UG-03, RLT |
| **3. Impact-Zuordnung** | Je Fachbereich Impacts + Confidence/Quelle | Bau: Ort/Kanal/AG; Elektro: Trasse/Schaltschrank; Einkauf: Spezifikation/Lieferant |
| **4. Content-Generierung** | Views werden befüllt (vorberechnet oder on-the-fly aus strukturierten Demo-Daten) | Decision Card, Impact Graph, Rollen-Erklärungen (2 Niveaus × 3 Rollen) |
| **5. Einstieg Nutzer** | Mitarbeiter öffnet Projekt „Campus Nord“ | Project Overview mit Status + Highlight „Neue Entscheidung“ |
| **6. Personalisierung** | Nutzer wählt Fachbereich + Kenntnisniveau (MVP: manuell, kein Login) | z. B. Elektrotechnik / Einsteiger |
| **7. Exploration** | Nutzer öffnet Impact Explorer | Sieht Kante Entscheidung → Elektro; klickt Impact „Neue Kabeltrasse zu TR-C1“ |
| **8. Knowledge View** | Personalisierte Erklärung + bei Einsteigern Guided Steps | „Was du jetzt tun solltest“ + optional „Warum Technikräume wichtig sind“ |
| **9. Vertiefung** | Quellen-Links / Originalauszüge | Sprung zur Meeting-Note-Passage; Kennzeichnung Fakt vs. Ableitung |

### Was Rolle und Niveau konkret ändern

- **Gleiche Decision Card**, aber unterschiedliche „Für dich relevant“-Badges und Reihenfolge der Impacts.
- **Gleicher Graph**, aber eigener Fachbereich hervorgehoben; andere ausgegraut/sekundär.
- **Knowledge View:** Einsteiger = Narrative + Glossar + Schritte; Experte = Diff-Tabelle + offene Punkte.

---

## 5. Konzept der Benutzeroberfläche

Drei Hauptansichten. Navigation: horizontale Tabs oder linke Rail – **Project Overview | Impact Explorer | Knowledge View**. Oben persistent: Projektname, Rollen-Umschalter, Niveau-Umschalter.

### 5.1 Project Overview

| Dimension | Konzept |
|-----------|---------|
| **Zweck** | Sofortiger Überblick: Wo steht das Projekt, was ist die wichtigste neue Information? |
| **Informationen** | Projektkurzprofil; Phase/Woche; Decision Highlight (Titel, Datum, Kurzbegründung); betroffene Fachbereiche als Chips; 3–5 Top-Offene-Punkte |
| **Visualisierung** | Decision Card (dominant); kleiner Timeline-Strip (Vorher → Entscheidung → Folgeschritte); Status-Pills je Fachbereich (z. B. „Klärung nötig“) – keine Dashboard-Stat-Flut |
| **Interaktion** | Klick auf Decision → Impact Explorer; Klick auf Fachbereich-Chip filtert; „Quelle anzeigen“ öffnet Meeting-Auszug |
| **Personalisierung** | Decision bleibt gleich; „Auswirkung auf dich“-Teaser und offene Punkte werden nach Rolle sortiert/gefiltert; Niveau steuert Wortlaut des Teasers |

### 5.2 Impact Explorer

| Dimension | Konzept |
|-----------|---------|
| **Zweck** | Zusammenhänge zwischen Entscheidung und Fachbereichen sichtbar und erkundbar machen |
| **Informationen** | Knoten: Entscheidung, Räume (TR-B2/TR-C1), Fachbereiche, ggf. Artefakte (Gerät, Schaltschrank); Kanten: wirkt auf / hängt ab von; je Impact: Kurztext, Fakt/Ableitung, Quelle |
| **Visualisierung** | **Primär:** gerichteter Graph oder Flussdiagramm (Entscheidung in der Mitte → 3 Fachbereich-Zweige). **Sekundär:** Liste/Cards der Impacts mit Filter. Optional einfache Vorher/Nachher-Raumskizze (schematisch, kein CAD) |
| **Interaktion** | Knoten/Kante anklicken → Detailpanel; Filter nach Fachbereich; Toggle „Nur dokumentierte Fakten“ vs. „inkl. Ableitungen“; Drill-down in Knowledge View |
| **Personalisierung** | Eigener Zweig hervorgehoben und zuerst expandiert; fremde Zweige komprimiert; Detailtexte niveauabhängig |

### 5.3 Knowledge View

| Dimension | Konzept |
|-----------|---------|
| **Zweck** | Personalisierte, verständliche Aufbereitung – das „Was bedeutet das für mich?“ |
| **Informationen** | Rollenbezogene Erklärung der Entscheidung; relevante Impacts; empfohlene nächste Schritte; Glossar-Einträge (Einsteiger); technische Diffs (Experte); Quellenangaben |
| **Visualisierung** | Strukturierte Abschnitte statt Fließtext-Wand: Hero-Erklärung (kurz), Impact-Liste mit Icons, **Schritt-für-Schritt** (Einsteiger) oder **Diff-/Checklist-Tabelle** (Experte), Quellen-Accordion |
| **Interaktion** | Niveau umschalten live; „Mehr Kontext“ klappt Fachwissen auf; Sprung zur Quelle; Markierung Fakt (grün/neutral) vs. Ableitung (gestrichelt/Hinweis) |
| **Personalisierung** | Inhalt und Reihenfolge strikt rollenbasiert; Tiefe und Sprache niveaubasiert |

### 5.4 Designprinzipien für den MVP

- Visuell und strukturiert vor Textwänden  
- Eine Entscheidung als roter Faden in allen Views  
- Immer Quelle + Fakt/Ableitung-Kennzeichnung  
- Personalisierung über zwei sichtbare Umschalter (Rolle, Niveau) – für Jury sofort erlebbar  

---

## 6. Priorisierte funktionale Anforderungen

### Must-have (Hackathon-Kern)

| ID | Anforderung |
|----|-------------|
| M1 | Ein Demo-Projekt „Campus Nord“ mit der Entscheidung RLT TR-B2 → TR-C1 |
| M2 | Strukturierte Darstellung der Entscheidung (Titel, Begründung, Datum, Entscheider) inkl. Quellenverweis |
| M3 | Drei Fachbereich-Profile: Bauleitung, Elektrotechnik, Einkauf |
| M4 | Zwei Kenntnisniveaus: Einsteiger, Erfahrene Fachkraft – umschaltbar |
| M5 | Project Overview mit Decision Highlight und rollenbezogenem Teaser |
| M6 | Impact Explorer mit visueller Abhängigkeitsdarstellung Entscheidung → Fachbereiche |
| M7 | Mindestens 2 Impacts pro Fachbereich, jeweils mit Kennzeichnung Fakt vs. Ableitung |
| M8 | Knowledge View mit rollen- und niveauabhängigen Erklärungen und nächsten Schritten |
| M9 | Anzeige von Originalauszügen / Quellenlinks zu Meeting Notes / Projektbeschreibung |
| M10 | Klare Abgrenzung in der UI: kein Chat-Eingabefeld als Hauptinteraktion |

### Should-have (wenn Zeit)

| ID | Anforderung |
|----|-------------|
| S1 | Toggle „Nur Fakten“ im Impact Explorer |
| S2 | Vorher/Nachher-Schema der Technikräume (einfache Grafik) |
| S3 | Glossar-Tooltips für Einsteiger (RLT, TR, Schaltschrank, Nachtrag) |
| S4 | „Demo einlesen“-Animation, die Analyse simuliert (Storytelling für die Jury) |
| S5 | Diff-Ansicht alt/neu für Elektro-Annahmen und Beschaffungsstatus |
| S6 | Export/Share einer rollenspezifischen Kurzzusammenfassung (PDF oder Copy) |

### Out of scope

| ID | Bewusst ausgeschlossen |
|----|------------------------|
| O1 | Freier KI-Chat / multi-turn Assistent |
| O2 | Echtes Login, Rechteverwaltung, Multi-Tenancy |
| O3 | Live-Anbindung SharePoint/Procore/ERP |
| O4 | Mehrere parallele Projekte / Portfolio |
| O5 | Bearbeitung von Aufgaben in Fremdsystemen |
| O6 | CAD/BIM-Viewer, echte Grundriss-Analyse |
| O7 | E-Mail-/Teams-Benachrichtigungen |
| O8 | Vollautomatische Nachtragskalkulation oder Terminplan-Neuberechnung |
| O9 | Beliebige neue Dokumente zur Laufzeit zuverlässig verarbeiten (Demo darf vorgenerierte Inhalte nutzen) |

---

## 7. Benötigte Informationsquellen

### 7.1 Quellenkatalog für Beispieldaten (nächster Schritt)

| Quelle | Inhalt (Soll) | Daraus gewinnbar |
|--------|---------------|------------------|
| **Projektbeschreibung** | Ziele, Gebäude, ursprünglicher RLT-Standort TR-B2, grobe Termine, Leistungsdaten | Projektkontext, Baseline-Planung |
| **Meeting Notes KW 11** | Entscheidung TR-C1, Begründung Raumknappheit TR-B2, Anwesende, offene Punkte | Decision + Reason + dokumentierte Follow-ups |
| **Team / Zuständigkeiten** | Personen oder Rollen je Fachbereich | Rollenmapping für Personalisierung |
| **Aufgabenliste** | Offene Tasks vor/nach Entscheidung (auch unaktualisierte Tasks als „Konflikt“-Demo) | Relevanz „veraltete Aufgabe vs. neue Lage“ |
| **Kurz-Doku RLT / Elektro** | SS-UG-03, geplante Anbindung TR-B2, Gerätebezug Einkauf | Technische Anker für Elektro/Einkauf-Impacts |
| **Optional: Schema-Grundriss** | Stark vereinfachte Lage TR-B2 vs. TR-C1 | Visualisierung Vorher/Nachher (S2) |

### 7.2 Fakten vs. Ableitungen vs. Lücken

| Typ | Beispiele im Szenario | Umgang im MVP |
|-----|----------------------|---------------|
| **Dokumentierte Fakten** | Entscheidung TR-C1; Begründung Enge TR-B2; ursprüngliche Planung TR-B2; Anwesenheit der Fachbereiche; Bezug SS-UG-03 in Technikdoku | Als Fakt anzeigen, Quelle zitieren |
| **KI-Ableitungen (plausibel, unsicher)** | Elektro braucht neue Trasse; Einkauf muss Spezifikation/Liefertermin prüfen; Bauleitung muss AG informieren und Montagefenster prüfen | Als „Abgeleitet“ labeln; Begründung der Ableitung kurz zeigen; niedrige/mittlere Confidence ok |
| **Fehlende Informationen** | Exakte Mehrkosten; verbindlicher neuer Liefertermin; freigegebene Elektro-Neuplanung; ob SS-UG-03 technisch ausreicht | Als „Offen / unbekannt“ führen – **nicht** als eingetretene Auswirkung verkaufen |

**Regel für Demo-Texte und spätere KI-Prompts:**  
Formuliere Ableitungen als Hypothesen („Wahrscheinlich relevant für …“, „Zu prüfen:“), nie als beschlossene Projektwahrheit.

---

## 8. Akzeptanz- und Erfolgskriterien

### 8.1 Funktional / inhaltlich

| # | Kriterium | Prüfung |
|---|-----------|---------|
| A1 | Entscheidung wird korrekt erkannt bzw. in Daten als solche geführt | Titel, Von-Ort, Nach-Ort, Begründung stimmen mit Meeting Notes überein |
| A2 | Impacts sind den richtigen Fachbereichen zugeordnet | Bau, Elektro, Einkauf haben jeweils ≥2 passende Impacts; keine groben Fehlzuordnungen (z. B. Lieferanten-Nachtrag nicht unter Elektro als Fakt) |
| A3 | Fakt vs. Ableitung vs. Offen sind unterscheidbar | Spot-Check: mindestens 1 Fakt, 1 Ableitung, 1 offener Punkt sichtbar und korrekt gelabelt |
| A4 | Personalisierung nach Rolle | Bei Wechsel Bau → Elektro ändern sich Teaser, hervorgehobene Impacts und Knowledge-Inhalt ersichtlich |
| A5 | Personalisierung nach Niveau | Bei Wechsel Einsteiger → Experte ändern sich Sprache/Struktur (Schritte/Glossar vs. Diff/Kompakt), Kernfakten bleiben gleich |
| A6 | Quellen nachvollziehbar | Jede Decision und jeder Fakt-Impact hat einen nachprüfbaren Quellenbezug |

### 8.2 Nutzbarkeit (Demo-/Jury-Test)

| # | Kriterium | Prüfung |
|---|-----------|---------|
| B1 | Einstieg unter 30 Sekunden | Unbeteiligte Person versteht nach Overview: „Es gibt eine Entscheidung zur Lüftung und sie betrifft mehrere Gewerke“ |
| B2 | Rollenwert unter 2 Minuten | Testnutzer in Rolle Elektro/Einkauf kann benennen: „Was bedeutet das für mich?“ und „Was ist noch unklar?“ |
| B3 | Schneller als Rohdoku | Gegenüber dem Lesen der Meeting Notes + Projektbeschreibung findet Testnutzer die rollenrelevanten Punkte spürbar schneller (qualitativer A/B mit 2–3 Personen reicht) |
| B4 | Kein Chatbot-Eindruck | Jury sieht primär Views/Graph/strukturierte Erklärungen; Chat ist nicht der Einstieg |

### 8.3 Hackathon-Definition of Done

- Ein lauffähiger UI-Prototyp mit den drei Views  
- Beispieldaten für Campus Nord geladen  
- Rollen- und Niveau-Umschalter funktionsfähig  
- Mindestens ein durchgängiger Happy Path für alle drei Fachbereiche  

---

## 9. Abgrenzung des MVP-Umfangs

| In Scope | Out of Scope |
|----------|--------------|
| Ein Projekt, eine Leitentscheidung | Multi-Projekt, Decision-Inbox für Monate |
| 3 Rollen × 2 Niveaus | Feingranulare Persona-Modelle, Skill-Assessments |
| Vorgenerierte oder semi-automatisch erzeugte Inhalte aus Demo-Quellen | Produktionsreife Document-AI-Pipeline |
| Visuelle Impact- und Knowledge-Views | Freier Assistenten-Chat |
| Kennzeichnung Fakt / Ableitung / Offen | Juristisch belastbare Compliance-Berichte |
| Schema-Visualisierung Technikräume (optional) | BIM/CAD |

**Erfolg des Wochenend-MVP:**  
Eine Jury-Person in der Rolle „Einkauf / Einsteiger“ öffnet Campus Nord, versteht in unter zwei Minuten die Lüftungs-Entscheidung und ihre Beschaffungsrelevanz – inklusive dem, was noch *nicht* bekannt ist.

---

## Anhang A – Inhaltsgerüst für Beispieldaten (nächster Schritt)

Vorschlag Dateistruktur:

```text
data/campus-nord/
  projektbeschreibung.md
  meeting-kw11-lueftung.md
  team-zustaendigkeiten.md
  aufgaben.md
  technik-rlt-elektro.md
  derived/
    decision.json
    impacts.json
    knowledge-by-role.json
```

`derived/` kann zunächst handkuratiert werden (zuverlässige Demo); später durch KI-Generierung ersetzt oder ergänzt.

## Anhang B – Kurz-Storyboard für die Demo (3 Minuten)

1. **Overview:** „Neue Entscheidung“ – RLT von TR-B2 nach TR-C1, Begründung Raum.  
2. **Rolle Einkauf / Einsteiger:** Knowledge View – Checkliste Lieferant.  
3. **Impact Explorer:** Graph – Zweige Bau / Elektro / Einkauf; Toggle Ableitungen.  
4. **Wechsel Elektro / Experte:** andere Hervorhebung, Diff SS-UG-03 / TR-C1.  
5. **Quelle öffnen:** Meeting-Passage – Vertrauen durch Nachvollziehbarkeit.  

---

*Dokumentstatus: Grundlage für Beispieldaten und UI-Umsetzung. Keine Architektur-/Framework-Festlegung.*

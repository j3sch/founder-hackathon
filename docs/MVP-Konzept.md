# MVP-Konzept: ImpactView – Personalisierte Wissensvermittlung für Bauprojekte

**Version:** 1.1 – überarbeitetes MVP-Konzept  
**Branche / Demo:** Bauwesen & Gebäudetechnik – Sanierung des fiktiven Bürogebäudes „Campus Nord“  
**Ziel:** Ein funktionsfähiger Hackathon-MVP, der aus vorhandenen Projektinformationen eine Entscheidung erkennt und verschiedenen Mitarbeitern **rollen- und wissensstandabhängige, interaktive Wissensansichten** bietet.  
**Produktkategorie:** Knowledge-to-Understanding, nicht primär Bauprojektmanagement oder Chatbot.  
**Status:** Grundlage für Beispieldaten, Interface-Design und Implementierung; keine Festlegung auf einen Tech-Stack.

---

## 1. Kurzbeschreibung und Produktfokus

ImpactView unterstützt Mitarbeiter dabei, **Entscheidungen, Änderungen und die Arbeit anderer Fachbereiche zu verstehen**, ohne dafür zahlreiche Besprechungsprotokolle, Aufgaben und Fachunterlagen selbst zusammenführen zu müssen.

Die Anwendung analysiert vorhandene Projektinformationen, erkennt dokumentierte Entscheidungen und verknüpft diese mit beteiligten Fachbereichen, Aufgaben und technischen Hintergründen. Daraus entstehen **verständliche Wissensansichten**, deren **Informationsauswahl** sich an der Rolle und deren **Erklärungstiefe** sich am Vorwissen des Nutzers orientiert.

### 1.1 Zentrale Nutzerfragen

Jede relevante Detailansicht sollte fünf Fragen beantworten:

1. **Was ist passiert?** – Welche Entscheidung oder Änderung liegt vor?
2. **Warum?** – Welche Gründe und bisherigen Planungen stehen dahinter?
3. **Wie hängt das mit meiner Arbeit zusammen?** – Welche anderen Fachbereiche, Aufgaben und Abhängigkeiten sind relevant?
4. **Was muss ich darüber wissen?** – Welche Fachbegriffe oder technischen Zusammenhänge fehlen mir zum Verständnis?
5. **Was bedeutet das für mich?** – Welche dokumentierten Aufgaben, möglichen Auswirkungen und offenen Prüfungen gibt es?

### 1.2 Kernversprechen der Demo

Eine Person öffnet „Campus Nord“ und sieht sofort, dass die Lüftungsanlage verlegt werden soll. Sie wählt etwa **Einkauf / Einsteiger** und erhält eine verständliche Erklärung der Entscheidung, die mögliche Beschaffungsrelevanz, offene Fragen und eine optionale kurze Lernvertiefung. Nach dem Wechsel zu **Elektrotechnik / erfahren** werden bei **gleicher Faktenbasis** andere Aspekte, präzisere Fachbegriffe und technische Abhängigkeiten hervorgehoben.

### 1.3 Klare Abgrenzung

- **Kein Chat als Hauptoberfläche:** Informationen erscheinen proaktiv in Karten und Detailansichten. Rückfragen sind optional und nicht Bestandteil des ersten MVPs.
- **Kein vollständiges Bauprojektmanagement:** ImpactView führt keine Freigaben, Nachträge, Bauzeitenplan-Neuberechnungen oder Auftragsänderungen aus.
- **Keine automatisch autorisierten Arbeitsanweisungen:** Die KI kann Zusammenhänge und Prüfbedarf erläutern, aber keine freigegebenen technischen Ausführungsanweisungen ersetzen.
- **Kein bloß statisches Dashboard:** Mindestens eine echte KI-Extraktion und eine dynamische, rollen-/niveauabhängige Erklärung müssen funktionieren.

---

## 2. Demo-Szenario: Campus Nord – Verlegung der Lüftungsanlage

### 2.1 Projektziele und Ausgangssituation

| Feld | Inhalt |
|---|---|
| **Projekt** | Generalsanierung Bürogebäude „Campus Nord“, Baujahr 1987, 4 Geschosse, ca. 6.200 m² BGF |
| **Ziel** | Modernisierung TGA (Lüftung, Elektro, Brandschutz), energetische Sanierung, teilweiser Weiterbetrieb während der Bauzeit |
| **Zeitraum** | Geplant: 14 Monate; aktuell Projektwoche 11 / Rohmontage TGA |
| **Auftraggeber** | Fiktive Campus Nord GmbH |
| **Bauleitung / Planung** | Projektintern koordiniert; Fachplaner Lüftung und Elektrotechnik beauftragt |

Der ursprüngliche Entwurf sieht die zentrale Raumlufttechnische Anlage (**RLT**) in **Technikraum TR-B2** im Untergeschoss vor. TR-B2 liegt nahe den Haupttrassen der Zuluft und Abluft.

### 2.2 Beteiligte Fachbereiche

| Fachbereich | Zuständigkeit | Was andere Teams davon wissen müssen |
|---|---|---|
| **Bauleitung** | Gewerke, Termine, Abstimmungen, Klärungen, Kommunikation an Auftraggeber | Welche technischen und beschaffungsbezogenen Fragen noch offen sind und welche Koordination erforderlich wird |
| **Elektrotechnik** | Elektrische Versorgung, Leitungswege, Schalt- und Steueranschlüsse der RLT | Wo die Anlage installiert werden soll und welche Lüftungs-/Planungsentscheidungen die eigene Planung betreffen |
| **Einkauf** | Geräteanfragen, Komponentenbeschaffung, Liefertermine und mögliche Änderungsbedarfe | Ob technische Spezifikationen, Lieferumfang oder Termine tatsächlich geändert werden müssen |

### 2.3 Ursprüngliche Planung (in Demo-Quellen zu dokumentieren)

- Geplanter RLT-Standort: **TR-B2** (Untergeschoss).
- Geplanter Volumenstrom: etwa **18.000 m³/h**.
- Elektrische Zuleitung/Steuerung: ursprünglich vom Schaltschrank **SS-UG-03** in Richtung TR-B2 vorgesehen.
- RLT-Gerät und Kanäle sind angefragt; Liefertermin **KW 18** wurde genannt, aber **noch nicht verbindlich bestätigt**.
- Montagefenster der RLT: **KW 19–21** im bisherigen Plan vorgesehen.

Diese Aussagen werden erst dann als „belegt“ angezeigt, wenn sie in den vorbereiteten Demo-Unterlagen tatsächlich enthalten sind.

### 2.4 Zentrale Entscheidung aus der Projektbesprechung KW 11

**Im Meeting beschlossen:** Die RLT soll statt in **TR-B2** in **TR-C1** (Untergeschoss, Ostflügel) installiert werden.

**Dokumentierte Begründung im Demo-Protokoll:** Eine nachträglich eingebaute Server-Nische und zusätzliche Brandschutztüren begrenzen den nutzbaren Raum in TR-B2. Die vorgesehene Anlage samt Wartungsflächen passt dort nicht ausreichend hinein; laut Lüftungsfachplanung wäre ein kleineres Gerät für die vorgesehene Luftmenge ungeeignet. TR-C1 bietet mehr Aufstellfläche, allerdings mit längerer Kanalführung.

**Wichtige Statusabgrenzung:** „Im Meeting beschlossen“ bedeutet **nicht automatisch**, dass alle geänderten Fachpläne oder die Ausführung bereits formal freigegeben wurden. Der **Freigabestatus der aktualisierten Elektro-/Montageplanung bleibt offen**, sofern keine eigenständige Quelle die Freigabe bestätigt.

**Teilnehmer gemäß Demo-Protokoll:** Bauleitung, Lüftungsfachplanung sowie Vertretungen von Elektrotechnik und Einkauf. Ein verbindlicher „Entscheider“ wird nur ausgewiesen, wenn das Protokoll diesen ausdrücklich benennt.

### 2.5 Auswirkungen, Wissensbedarf und offene Fragen

| Fachbereich | Aus Quellen direkt belegbarer Kontext | Mögliche Auswirkung – **noch zu prüfen** | Sinnvolle Wissensvertiefung |
|---|---|---|---|
| **Bauleitung** | Neuer Standort TR-C1 beschlossen; bisheriges Montagefenster KW 19–21 | Montageabfolge und beteiligte Gewerke müssen möglicherweise neu koordiniert werden | Warum eine neue Anlagenposition andere Gewerke und Bauabläufe beeinflussen kann |
| **Elektrotechnik** | Bisherige Planung zielte auf TR-B2; Bezug zu SS-UG-03 | Leitungswege, Anschlusspositionen und Schaltschrankzuordnung könnten geprüft oder angepasst werden müssen | Wie RLT, Schaltschrank, Stromversorgung und Steuerleitungen zusammenspielen |
| **Einkauf** | Gerät und Kanäle waren angefragt; Liefertermin KW 18 unverbindlich | Technische Spezifikation, Materialbedarf oder Liefertermin könnten betroffen sein | Warum ein Standortwechsel Beschaffung, Lieferumfang und Freigaben beeinflussen kann |

**Explizit offene Informationen:** Neue freigegebene Elektroplanung; bestätigte Gerätespezifikation für TR-C1; tatsächlicher Materialmehrbedarf; zusätzliche Kosten; verbindlicher Liefertermin; Auswirkungen auf den verbindlichen Terminplan.

**Regel:** Es gibt **keine Mindestanzahl an Auswirkungen pro Fachbereich**. Wenn die Quellen für eine Auswirkung nicht ausreichen, wird sie als mögliche Folge oder offene Frage gekennzeichnet – nicht als Tatsache ausgegeben.

### 2.6 Konkrete Nutzungssituationen

1. **Elektro-Monteur:** Möchte verstehen, warum sich der geplante Zielraum geändert hat; darf vor einer Ausführung nicht ungeprüft alte Planunterlagen verwenden.
2. **Einkäuferin:** Muss eine Lieferantenrückfrage einordnen und erkennen, welche technischen Angaben noch bestätigt werden müssen.
3. **Bauleiter-Assistent (fachfremd):** Benötigt eine verständliche Erklärung für ein Gespräch mit dem Auftraggeber.
4. **Erfahrene Bauleiterin:** Will knappe, nachvollziehbare Informationen zu Abhängigkeiten, offenen Freigaben und möglichen Folgen.

---

## 3. Nutzerprofile und Personalisierung

Die Personalisierung nutzt im MVP **zwei unabhängige Achsen**:

1. **Fachbereich / aktuelle Aufgabe** → bestimmt, **welche** Aspekte für den Nutzer besonders relevant sind.
2. **Kenntnisniveau zum Thema** → bestimmt, **wie** fachlich detailliert erklärt und visualisiert wird.

Das Kenntnisniveau ist **thematisch**, nicht pauschal an die Berufsbezeichnung gebunden. Ein erfahrener Einkäufer kann beispielsweise wenig über die Funktion einer RLT-Anlage wissen. Im MVP erfolgt die Auswahl **manuell**, ohne automatisch erstelltes Mitarbeiterprofil.

### 3.1 Bauleitung

| Aspekt | Einsteiger / fachfremd | Erfahren |
|---|---|---|
| **Ziel** | Entscheidung verständlich wiedergeben | Abhängigkeiten und offene Klärungen steuern |
| **Relevanter Kontext** | Was wurde beschlossen? Warum? Wen betrifft es? | Planstatus, Schnittstellen zwischen Gewerken, mögliche Terminfolgen |
| **Wissensbedarf** | Grundlagen zu Lüftungsanlage und Gewerken | Vertiefende Entscheidungsgründe, Plan-/Terminabhängigkeiten |
| **Darstellung** | Kurze Zusammenfassung, einfache Beziehungsgrafik, Glossar | Kompakte Übersicht, offene Punkte, strukturierte Abhängigkeiten |

### 3.2 Elektrotechnik

| Aspekt | Einsteiger / fachfremd | Erfahren |
|---|---|---|
| **Ziel** | Verstehen, warum der Anlagenstandort die Elektroarbeit betrifft | Planung auf potenzielle Schnittstellenänderungen prüfen |
| **Relevanter Kontext** | Bisheriger und neuer Anlagenstandort; noch offene Freigaben | TR-B2 → TR-C1, SS-UG-03, Leitungstrassen und Anschlussdaten |
| **Wissensbedarf** | Zusammenhang zwischen RLT und elektrischer Versorgung | Technische Planungsannahmen, offene Prüf- und Freigabepunkte |
| **Darstellung** | Vereinfachtes Schema und Begriffserklärungen | Diff der dokumentierten Planannahmen und Prüffragen |

### 3.3 Einkauf

| Aspekt | Einsteiger / fachfremd | Erfahren |
|---|---|---|
| **Ziel** | Verstehen, warum eine bauliche Änderung den Einkauf betreffen könnte | Material-, Spezifikations- und Lieferterminrisiken einordnen |
| **Relevanter Kontext** | Welche Angaben des Fachplaners fehlen noch? | Anfragen, mögliche Bestelländerungen, Freigabestatus, Lieferantenklärung |
| **Wissensbedarf** | Warum Standort und Anschlüsse die Beschaffung beeinflussen können | Änderungsabgleich von Spezifikation und Bestellstand |
| **Darstellung** | Kurze Erklärung und offene Fragen | Gegenüberstellung bisherige Angaben / zu bestätigende Angaben |

### 3.4 Regeln für personalisierte Darstellungen

- **Eine gemeinsame Faktenbasis:** Entscheidung, Begründung, Status und Quellen bleiben für alle Rollen gleich.
- **Rollenbasierte Priorisierung:** Der eigene Fachbereich wird zuerst erklärt; andere Bereiche bleiben für den Zusammenhang zugänglich.
- **Wissensstandabhängige Tiefe:** Einsteiger erhalten Beispiele, Glossare und einfache Schemata; Erfahrene kompakte Fachbegriffe und technische Details.
- **Keine unzulässige Vereinfachung:** Wichtige Vorbehalte, Sicherheitsinformationen, Unsicherheiten und Quellen dürfen nicht ausgeblendet werden.
- **Jederzeit vertiefbar:** Einsteiger können technische Details öffnen; Experten können eine einfache Erklärung wählen.

---

## 4. Zentrale User Journey

### 4.1 Daten- und Nutzerfluss

```text
[Projektdateien vorhanden]
         ↓
[Echte KI-Extraktion mindestens eines Meeting-Protokolls]
         ↓
[Strukturierte Entscheidung + Fundstellen + offene Fragen]
         ↓
[Zuordnung zu bekannten Teamzuständigkeiten]
         ↓
[Mögliche Auswirkungen vorschlagen und kenntlich machen]
         ↓
[Nutzer wählt Fachbereich + Kenntnisniveau]
         ↓
[Personalisierte Übersicht → Entscheidungsdetail]
         ↓
[Bei Bedarf: Zusammenhänge / Wissensvertiefung / Quellen]
```

### 4.2 Nutzerablauf im MVP

| Schritt | Verhalten | Sichtbarer Nutzen |
|---|---|---|
| **1. Datenbasis** | Vorbereitete Projektbeschreibung, zwei Meeting-Protokolle, Aufgaben- und Teamdaten liegen lokal vor. | Verständlicher Ausgangskontext |
| **2. KI-Extraktion** | Ein realer Modellaufruf liest mindestens das Meeting-Protokoll KW 11 und liefert die strukturierte Entscheidung mit Fundstellen. | Technische Kernfunktion ist nachprüfbar |
| **3. Wissensverknüpfung** | Das System vergleicht die neue Entscheidung mit ursprünglicher Planung und bekannten Zuständigkeiten. | Änderungen und mögliche Folgen werden sichtbar |
| **4. Nutzerperspektive** | Nutzer wählt beispielsweise „Einkauf“ und „Einfach“. | Relevanteste Informationen stehen vorne |
| **5. Überblick** | Die Startseite zeigt die Entscheidung und ihre Bedeutung für diese Rolle. | Sofortige Orientierung |
| **6. Detailansicht** | Klick öffnet „Was? Warum? Wie hängt es zusammen? Was muss ich wissen? Was bedeutet das für mich?“. | Verständnis statt bloßer Statusbericht |
| **7. Vertiefung** | Nutzer öffnet ein vereinfachtes Diagramm, eine technische Erklärung oder Quellpassage. | Selbstbestimmte Erklärungstiefe |
| **8. Perspektivwechsel** | Wechsel zu „Elektrotechnik / Erfahren“ ändert Priorisierung, Sprache und Darstellung, nicht die belegten Fakten. | Personalisierung unmittelbar demonstrierbar |

### 4.3 Kerninteraktion: kontextbezogene Wissensvertiefung

Ein Nutzer liest: „Die Elektroplanung muss möglicherweise überprüft werden.“ Er wählt **„Warum ist das so?“** und erhält:

- Eine kurze, verständliche Erklärung des Zusammenhangs zwischen RLT, elektrischem Anschluss und Anlagenstandort.
- Ein einfaches Vorher-/Nachher-Schema der **dokumentierten** Planannahmen.
- Fachbegriffe nach Bedarf: RLT, Trasse, Schaltschrank, Technikraum.
- Offene technische Fragen, klar getrennt von bereits bestätigten Informationen.
- Die zugehörigen Quelldokumente bzw. Originalstellen.

**Abgrenzung:** Das ist zunächst ein **interaktiver Deep Dive**, kein vollständiger E-Learning-Kurs und keine freigegebene Montageanleitung.

---

## 5. Informationsarchitektur und UX-Konzept

### 5.1 Navigation: zwei Hauptansichten statt drei gleichrangiger Bereiche

**A. Personalisierte Projektübersicht („Für mich relevant“)**  
Die Startseite beantwortet auf einen Blick: *Was ist neu? Was betrifft mich? Gibt es Klärungsbedarf?*

**B. Entscheidungsdetail („Änderung verstehen“)**  
Die Detailansicht vermittelt die Hintergründe, Auswirkungen und Fachzusammenhänge. Ein Impact-Diagramm, eine Entscheidungs-Timeline und fachliche Erklärungen sind **Abschnitte dieser Ansicht**, keine eigenen Hauptseiten.

Für den MVP reicht ein einziger entscheidungsbezogener Einstiegspunkt. Eine mehrstufige Projekt- und Teamnavigation ist nicht nötig.

### 5.2 Ebene 1 – Überblick (sofort sichtbar)

| Element | Inhalt | Interaktion |
|---|---|---|
| **Projektkontext** | „Campus Nord“, Phase, knapper Kontext | Optional mehr Projektkontext |
| **Decision Card** | „RLT-Standort: TR-B2 → TR-C1“; kurze dokumentierte Begründung | Entscheidung öffnen |
| **Für dich relevant** | 1–2 rollenrelevante Auswirkungen, ggf. als „möglich“ markiert | Detail öffnen |
| **Offene Frage / Prüfbedarf** | Wichtigster noch zu klärender Punkt für die gewählte Rolle | Kontext ansehen |
| **Quellen-/Statushinweis** | z. B. „Im Meeting beschlossen, Fachplanung noch nicht freigegeben“ | Originalstelle anzeigen |

**UX-Regel:** Nicht mit Zahlen-Dashboards, langen Textblöcken oder einem gesamten Wissensgraphen beginnen.

### 5.3 Ebene 2 – Verständnis im Entscheidungsdetail

Die Detailansicht beantwortet die fünf Kernfragen aus Abschnitt 1.1 in dieser Reihenfolge:

1. **Was wurde entschieden?** Kurzer Faktentext, bisheriger/neuer Stand und Entscheidungsstatus.
2. **Warum?** Begründung aus dem Meeting, mit Quellenverweis.
3. **Wie hängt das zusammen?** Kompaktes interaktives Diagramm „Entscheidung → Fachbereiche → mögliche Prüfbedarfe“.
4. **Was muss ich darüber wissen?** Ein kontextbezogener Erklärabschnitt mit optionaler Vertiefung.
5. **Was bedeutet das für mich?** Rollenrelevante Auswirkungen, dokumentierte Aufgaben und offene Prüffragen.

Die Reihenfolge darf für die Startansicht zugunsten „Für dich relevant“ verkürzt werden; **in der Detailansicht bleiben die Zusammenhänge auffindbar**.

### 5.4 Ebene 3 – fachliche Vertiefung auf Wunsch

Nur bei Bedarf öffnen sich:

- **Einfach erklärt:** Grundlagen und Begriffserklärungen ohne unnötigen Fachjargon.
- **Fachlich im Detail:** Planannahmen, IDs, technische Abhängigkeiten, offene Prüfungen.
- **Visuelle Erläuterung:** Vorher-/Nachher-Schema, markierter Bereich oder vereinfachtes Flussdiagramm.
- **Entscheidungsverlauf:** ursprüngliche Planung → dokumentierte Entscheidung → noch offene Freigaben.
- **Originalquellen:** Dokumenttitel, Datum/Version und konkrete Textstelle.

Für die erste Version wird **genau ein funktionierender kontextbezogener Deep Dive** umgesetzt; weitere Inhalte dürfen statisch demonstriert werden, müssen aber als solche erkennbar sein.

### 5.5 Darstellungsformen und Auswahlregeln

| Informationstyp | Bevorzugtes UI-Muster | Warum? |
|---|---|---|
| Änderung / Entscheidung | Decision Card | Schnell erfassbar |
| Relevanz für eigene Rolle | Kurze Highlight-Karte | Persönlicher Nutzen auf einen Blick |
| Abhängigkeiten zwischen Gewerken | Kleines Impact-Diagramm (3 Fachbereiche) + zugängliche Liste | Zusammenhang visuell und textlich verständlich |
| Gründe / zeitliche Entwicklung | Kurze Timeline | „Wie kam es dazu?“ |
| Bisherige vs. neue Planannahme | Vorher-/Nachher-Vergleich | Konkrete Veränderung |
| Fachliches Hintergrundwissen | Aufklappbarer Erklärabschnitt oder seitliches Panel | Vertiefung ohne Kontextverlust |
| Offene Punkte / Aufgaben | Liste mit klarem Status | Handlungs- und Klärungsbedarf |
| Quellen | Direkt verlinkte Fundstellen | Nachvollziehbarkeit |

**UI-Prinzip:** Das System wählt für den MVP aus **fest definierten Komponenten** anhand eines Inhaltstyps. Das LLM generiert **nicht beliebigen UI-Code oder freie Layouts**.

### 5.6 Interaktionen und visuelle Priorisierung

- Rollen- und Niveau-Umschalter sind sichtbar, aber nicht die wichtigste Bildschirmfläche.
- „Mehr erfahren“, „Warum?“, „Technische Details“ und „Quelle ansehen“ öffnen kurze Inline-Bereiche oder ein Detailpanel.
- Im Impact-Diagramm wird die eigene Rolle hervorgehoben; alle anderen bleiben sichtbar, damit der Teamzusammenhang nicht verloren geht.
- Jede visualisierte Beziehung erhält einen verständlichen Text und gegebenenfalls ihren Belegstatus.
- **Bestätigt / mögliche Auswirkung / offen / überholt** werden durch **Textlabels und ggf. Icons**, nicht ausschließlich durch Farben, unterschieden.
- Keine sicherheitskritischen Schritte als einfache „Jetzt ausführen“-Checkliste ausgeben. Neutrale Formulierung: „Mit Fachplanung prüfen“ oder „Freigabe klären“.

### 5.7 Kompakter Screen-Aufbau (konzeptionell)

```text
PROJEKTÜBERSICHT
Campus Nord                          [Fachbereich] [Kenntnisniveau]

WICHTIGE ÄNDERUNG
Lüftungsanlage: TR-B2 → TR-C1
Warum? Raum TR-B2 ist zu klein.
Status: Im Meeting beschlossen · Ausführungsfreigabe offen

FÜR DICH RELEVANT (z. B. Einkauf)
Mögliche Folge: Material-/Bestellangaben überprüfen
Offene Frage: Ist die aktualisierte Spezifikation freigegeben?
[Änderung verstehen]

                           ↓

ENTSCHEIDUNGSDETAIL
Was? · Warum? · Wie hängt es zusammen?
[Entscheidung] → [Elektro] [Einkauf] [Bauleitung]

Was muss ich wissen? [Warum kann sich der Materialbedarf ändern? ▾]
Was bedeutet das für mich? [Prüfbedarf] [Offene Fragen]
[Quelle anzeigen] [Technische Details]
```

---

## 6. Priorisierte funktionale Anforderungen

### 6.1 Must-have: Hackathon-Kern

| ID | Anforderung |
|---|---|
| **M1** | Ein vollständiges, fiktives Demo-Projekt „Campus Nord“ mit ursprünglicher Planung und Meeting-Entscheidung TR-B2 → TR-C1 |
| **M2** | **Echte KI-Extraktion** aus mindestens einem vorbereiteten Meeting-Protokoll: Entscheidung, Begründung, beteiligte Bereiche und Quellfundstellen als strukturierte Daten |
| **M3** | Strukturierte Wissensbasis, die dokumentierte Fakten, mögliche Auswirkungen und offene Informationen getrennt speichert |
| **M4** | Drei wählbare Rollen (Bauleitung, Elektrotechnik, Einkauf) und zwei unabhängig wählbare Kenntnisniveaus (Einfach, Fachlich) |
| **M5** | Personalisierte Projektübersicht mit Decision Card, „Für dich relevant“ und offenem Prüfbedarf |
| **M6** | Interaktive Entscheidungsdetailansicht mit den fünf Kernfragen aus Abschnitt 1.1 |
| **M7** | Kompakte visuelle Darstellung der Beziehungen zwischen Entscheidung und betroffenen Fachbereichen, alternativ auch als verständliche Liste |
| **M8** | KI-generierte rollen- und niveauabhängige Erklärungen mit **identischen Kernfakten** und unterschiedlichen Schwerpunkten |
| **M9** | **Mindestens eine funktionierende, kontextbezogene Wissensvertiefung** („Warum?“ / „Mehr verstehen“) |
| **M10** | Nachprüfbare Quellenangaben, Kennzeichnung von Vermutungen und offenen Punkten sowie sichtbarer Status der Plan-/Ausführungsfreigabe |

**Nicht vorgeben:** Eine Mindestanzahl an Auswirkungen pro Rolle. Ist keine Aussage belegbar oder sinnvoll ableitbar, muss das System dies anzeigen können.

### 6.2 Should-have: sinnvolle Erweiterungen

| ID | Anforderung |
|---|---|
| **S1** | Vorher-/Nachher-Skizze TR-B2 → TR-C1, schematisch und klar als nicht maßstabsgetreu gekennzeichnet |
| **S2** | Kleine Timeline „bisherige Planung → Entscheidung → offene Freigabe“ |
| **S3** | Kontextbezogenes Glossar für RLT, TR, Schaltschrank, Kanalführung und Nachtrag |
| **S4** | Umschalter „Nur belegte Informationen / auch mögliche Auswirkungen“ |
| **S5** | Visuelle Diff-Darstellung der dokumentierten Elektro- oder Beschaffungsannahmen |
| **S6** | Ein zweites Meeting oder eine neue Quelle erneut analysieren, um eine aktualisierte Wissensansicht zu zeigen |
| **S7** | Eine rollenspezifische Kurzübersicht kopieren oder exportieren |

**Demohinweis:** Eine echte Modellverarbeitung darf mit einem sichtbaren Analysezustand dargestellt werden. Eine rein simulierte Animation darf **nicht als real durchgeführte KI-Analyse** präsentiert werden.

### 6.3 Out of scope

| ID | Bewusst nicht Bestandteil des MVPs |
|---|---|
| **O1** | Offener Multi-Turn-Chat als Hauptinteraktion |
| **O2** | Login, echte Rechteverwaltung, Multi-Tenancy und unternehmensweite Profile |
| **O3** | Live-Integration in Procore, SAP, SharePoint, Teams oder ERP |
| **O4** | Mehrere gleichzeitige Bauprojekte oder ein Portfolio-Dashboard |
| **O5** | Bearbeiten von Aufgaben, Bestellungen oder Planfreigaben in Fremdsystemen |
| **O6** | Vollständiger CAD-/BIM-Viewer, automatische IFC-Auswertung, umfangreiche Grundrissanalyse |
| **O7** | E-Mail-Benachrichtigungen und proaktive Push-Updates |
| **O8** | Verbindliche Berechnung von Kosten-, Material- oder Terminfolgen |
| **O9** | Beliebige neue Dokumente und Formate robust und fehlerfrei verarbeiten |
| **O10** | Vollständige Lernplattform, Skill-Assessment und freigegebene technische Arbeitsanweisungen |

---

## 7. Informationsquellen, Wissensmodell und Verlässlichkeit

### 7.1 Benötigte Demo-Dateien

| Quelle | Enthält | Wofür verwendet? |
|---|---|---|
| `projektbeschreibung.md` | Projektkontext, ursprünglicher RLT-Standort, Projektziele, Zeitangaben | Basiswissen und ursprünglicher Stand |
| `meeting-kw10-planung.md` | Früherer Planungsstand und Vereinbarungen | Vorher-Zustand und mögliche Überholung |
| `meeting-kw11-lueftung.md` | Beschlossene Standortverlegung, Gründe, Beteiligte, offene Fragen | Echte KI-Entscheidungsextraktion |
| `team-zustaendigkeiten.md` | Aufgaben der drei Fachbereiche | Relevanz- und Impact-Zuordnung |
| `aufgaben.md` | Bestehende Aufgaben, Zuständige, Status | Abgleich mit Entscheidung und offenen Prüfungen |
| `technik-rlt-elektro.md` | Ursprünglich vorgesehener Anschluss, SS-UG-03 und Fachbegriffe | Sachliche Grundlage der Wissensvertiefung |
| Optional: schematische Skizze | TR-B2 und TR-C1, **nicht maßstabsgetreu** | Vorher-/Nachher-Visualisierung |

### 7.2 Minimales strukturiertes Wissensmodell

| Objekt | Zentrale Felder |
|---|---|
| **Project** | ID, Name, Projektkontext |
| **Source** | ID, Dateiname, Dokumentdatum, Version, konkrete Fundstelle |
| **Decision** | ID, alter/neuer Stand, Entscheidungstext, Begründung, Meeting-Datum, **Beschlussstatus**, **Freigabestatus**, Quellen |
| **Team** | ID, Fachbereich, Zuständigkeitsbeschreibung |
| **Impact** | ID, betroffene Rolle, mögliche Folge, **Status**, Begründung, unterstützende Quellen oder Verweis auf notwendige Prüfung |
| **Task / Open Question** | ID, Titel, verantwortlicher Bereich, dokumentiert oder vorgeschlagen, Status |
| **Knowledge Topic** | Begriff/Frage, Erklärung, verwendete Quellen, passende Darstellungsform |
| **User Context** | gewählte Rolle, gewähltes thematisches Kenntnisniveau |

**Wichtige Unterscheidung:** Ein *belegter Fakt* kann sich auf einen dokumentierten Beschluss beziehen, ohne dass die **Ausführung** bereits freigegeben ist. Deshalb dürfen Aussage-Belegstatus und Freigabestatus nicht in ein einziges Feld gemischt werden.

### 7.3 Vier Informationsstatus

| Status | Bedeutung | Anzeige |
|---|---|---|
| **Belegt** | Aussage steht nachvollziehbar in einer Quelle | „Dokumentiert“, mit Fundstelle |
| **Mögliche Auswirkung** | Aus Quellen und Teamzuständigkeiten abgeleitet, aber ungeprüft | „Möglich – prüfen“, mit Begründung |
| **Offen** | Informationen oder Freigaben fehlen | „Noch ungeklärt“, ggf. zuständiger Fachbereich |
| **Überholt** | Frühere Planung wurde nachweislich durch eine neuere Entscheidung ersetzt | „Vorheriger Stand“, mit Verweis auf neue Quelle |

**Zusätzliche Fachstatus:** „Im Meeting beschlossen“, „Fachplanung in Prüfung“, „Zur Ausführung freigegeben“ dürfen nur entsprechend den tatsächlichen Quellen gesetzt werden.

### 7.4 Regeln für KI-Ausgaben

1. **Extraktion und Erklärung trennen:** Zuerst Quelleninhalte strukturiert erfassen, danach rollenabhängig erklären.
2. **Quellenbezug:** Keine erfundenen Protokollstellen, Verantwortlichen, Kosten, Termine oder Freigaben.
3. **Kein Zwang zu Auswirkungen:** Wenn die Daten eine Folge nicht stützen, lieber „noch nicht bestimmbar“ anzeigen.
4. **Ableitungen begründen:** Jede mögliche Folge verweist auf die Ausgangsfakten und den Zusammenhang, aus dem sie abgeleitet wurde.
5. **Aktualität beachten:** Frühere Planannahmen nicht als aktuellen Stand darstellen, wenn eine neuere Quelle sie ersetzt.
6. **Gleiche Fakten bei jeder Personalisierung:** Sprache, Detailtiefe und Priorisierung dürfen variieren; Wahrheit, Status und sicherheitsrelevante Vorbehalte nicht.
7. **Technische Sicherheit:** Kein ungeprüftes „so muss die Anlage angeschlossen werden“. Offene Planung und Freigaben klar kommunizieren.
8. **Unsicherheit nicht durch scheinpräzise Scores verschleiern:** Im MVP sind verständliche Statuslabels hilfreicher als unkalibrierte Prozentwerte.

### 7.5 KI-Verarbeitung im MVP: echte Funktion und zuverlässige Demo

Der MVP muss **mindestens einen echten KI-Schritt** enthalten:

1. Das vorbereitete Meeting-Protokoll KW 11 wird an ein Modell übergeben.
2. Das Modell extrahiert die Entscheidung, ihre Begründung, referenzierte Räume/Fachbereiche und Textfundstellen in ein festes Datenschema.
3. Der Output wird gegen die vorhandenen Dateien und ein Schema überprüft.
4. Die extrahierte Entscheidung wird mit vorbereiteten Zuständigkeiten und Planannahmen verknüpft; mögliche Auswirkungen werden deutlich markiert.
5. Mindestens eine rollen- und niveauabhängige Erklärung wird aus diesen strukturierten Daten durch KI generiert.

Für eine stabile Jury-Demo dürfen **zuvor tatsächlich erzeugte und geprüfte Ergebnisse** als Fallback geladen werden. Der UI-Zustand muss dann ehrlich als „vorbereitetes Analyseergebnis“ erkennbar sein. **Keine vorgetäuschte Echtzeitverarbeitung.**

---

## 8. Akzeptanz- und Erfolgskriterien

### 8.1 Funktional und fachlich

| ID | Kriterium | Wie wird es geprüft? |
|---|---|---|
| **A1** | Mindestens ein echter KI-Extraktionsdurchlauf funktioniert | Meeting KW 11 liefert strukturierte Entscheidung mit richtigem Vorher-/Nachher-Ort und Grund |
| **A2** | Quellinformationen sind nachvollziehbar | Jede dokumentierte Kernaussage verweist auf eine existierende Datei und konkrete Fundstelle |
| **A3** | Fakt, mögliche Folge, offen und überholt werden getrennt | Beispiel jeder vorkommenden Kategorie korrekt erkennbar; keine behauptete Freigabe ohne Beleg |
| **A4** | Rollenwechsel verändert den Schwerpunkt | Einkauf und Elektrotechnik sehen jeweils andere relevante Fragen und Zusammenhänge |
| **A5** | Niveauwechsel verändert die Vermittlung | Einfach und Fachlich unterscheiden sich sinnvoll; Kernaussagen und Unsicherheiten bleiben gleich |
| **A6** | Mindestens ein kontextbezogener Deep Dive funktioniert | Nutzer kann „Warum ist das relevant?“ öffnen und eine verständliche fachliche Erklärung sehen |
| **A7** | Visuelle Beziehungen stimmen mit den Daten überein | Im Diagramm erscheinen nur modellierte, korrekt gekennzeichnete Beziehungen |
| **A8** | Unbelegte Aussagen werden nicht als Fakten ausgegeben | Testfälle zu Kosten, Fristen und Freigaben bleiben „offen“ bzw. „möglich“ |
| **A9** | Die Demo kann bei einem Fehler des Live-Modells fortgesetzt werden | Geprüfter Fallback ist vorhanden und als vorbereitet gekennzeichnet |

### 8.2 Verständlichkeit und Nutzen

| ID | Kriterium | Prüfung |
|---|---|---|
| **B1** | Grundverständnis nach kurzer Orientierung | Testperson kann erklären, was sich von TR-B2 nach TR-C1 geändert hat und warum |
| **B2** | Rollenrelevanz wird erkannt | Testperson kann sagen, welche Punkte den ausgewählten Fachbereich betreffen könnten |
| **B3** | Unsicherheiten werden korrekt verstanden | Testperson kann mindestens eine **offene** Frage nennen und sie von einem belegten Fakt unterscheiden |
| **B4** | Wissensvertiefung hilft tatsächlich | Testperson kann nach dem Deep Dive den fachlichen Zusammenhang in eigenen Worten erklären |
| **B5** | Vergleich zur Rohdokumentation | Kleine Vergleichsaufgabe: gleiche Fragen einmal anhand Originalquellen, einmal anhand der Wissensansicht; Bearbeitungszeit und Richtigkeit erfassen |
| **B6** | Interface ist ohne Chat verständlich | Nutzer findet Entscheidung, Auswirkungen und Vertiefung ohne eine Frage formulieren zu müssen |

**Testumfang:** Erste explorative Tests mit 2–3 fachfremden Personen sind für einen Hackathon sinnvoll. Solche Tests liefern Beobachtungen und Verbesserungshinweise, **keine statistisch belastbaren Aussagen über Zeitersparnis**.

### 8.3 Definition of Done

Der MVP gilt als erfolgreich vorführbar, wenn:

- **Ein** Projekt und **eine** zentrale Entscheidung vollständig abgebildet sind.
- Eine **echte KI-Extraktion** demonstriert werden kann.
- Zwei Hauptansichten – Übersicht und Entscheidungsdetail – funktionieren.
- Alle drei Fachbereiche mit beiden Kenntnisniveaus sinnvolle, unterscheidbare Erklärungen erhalten.
- Ein interaktives Abhängigkeitsdiagramm oder eine gleichwertige Strukturansicht vorhanden ist.
- **Eine Wissensvertiefung** mit kontextbezogener Erklärung und Quellenbezug funktioniert.
- Belegstatus, offene Informationen und noch nicht erteilte Freigaben eindeutig erkennbar sind.
- Ein durchgängiger Demo-Pfad auch mit geprüften vorbereiteten Daten möglich ist.

---

## 9. MVP-Abgrenzung und Umsetzungsreihenfolge

### 9.1 Scope

| In Scope | Out of Scope |
|---|---|
| Fiktives Projekt mit einer entscheidenden Änderung | Multi-Projekt- und Unternehmensplattform |
| Zwei Hauptansichten und eine vertiefbare Detailansicht | Komplexe Navigation und zahlreiche Dashboards |
| Drei Fachbereiche × zwei Kenntnisniveaus | Automatisches Skill-Profiling |
| Echte KI-Extraktion aus einem Meeting | Beliebige Dokumente fehlerfrei analysieren |
| Eine dynamische, KI-generierte Wissensvertiefung | Vollständige E-Learning-Lösung |
| Einfacher Impact-Zusammenhang mit gekennzeichneten Hypothesen | Belastbare Kosten-/Termin-/Sicherheitsberechnung |
| Konkrete Quellen und offener Freigabestatus | Komplette BIM-/ERP-Integration |

### 9.2 Empfohlene Reihenfolge der Implementierung

1. **Szenario und Prüfantworten fixieren:** Alle Demo-Quellen, belegten Entscheidungen, offenen Fragen und erwarteten Antworten festlegen.
2. **UI mit Mock-Daten bauen:** Übersicht, Entscheidungsdetail, Rollen- und Niveau-Umschalter, ein Deep-Dive-Abschnitt.
3. **Strukturiertes Wissensmodell anlegen:** Entscheidungen, Quellen, Teams, mögliche Auswirkungen und offene Punkte.
4. **Echte KI-Extraktion implementieren:** KW-11-Protokoll → strukturierter, quellbezogener Output.
5. **Personalisierte Erklärung integrieren:** Erklärungstext und eine Wissensvertiefung auf Grundlage des Wissensmodells generieren.
6. **Validieren und Demo absichern:** Testfragen prüfen, Unsicherheiten korrekt anzeigen, geprüften Fallback einrichten.

**Prioritätsregel:** Wenn Zeit fehlt, lieber einen hochwertigen, belegten Wissens-Deep-Dive und echten KI-Extraktionsfluss fertigstellen als zusätzliche Diagramme, Tutorials oder Integrationen beginnen.

### 9.3 Produktthese für den Hackathon

> Kann ImpactView eine dokumentierte Entscheidung eines Fachbereichs so aufbereiten, dass andere Mitarbeiter **schneller und korrekter verstehen**, warum sie getroffen wurde, wie sie mit ihrer Arbeit zusammenhängt und welches zusätzliche Fachwissen sie dafür benötigen?

Der Kern ist **Wissensverständnis**. Ein Impact-Diagramm ist ein Mittel dazu, nicht der alleinige Produktzweck.

---

## Anhang A – Dateistruktur für Beispieldaten

```text
data/campus-nord/
  projektbeschreibung.md
  meeting-kw10-planung.md
  meeting-kw11-lueftung.md
  team-zustaendigkeiten.md
  aufgaben.md
  technik-rlt-elektro.md
  optional-raumskizze.png
  derived/
    decisions.json
    impacts.json
    knowledge-topics.json
    explanations-by-role.json
  tests/
    expected-decisions.json
    expected-statuses.json
    comprehension-questions.md
```

`derived/` enthält Ergebnisse, die **aus Quellen abgeleitet, geprüft und gegebenenfalls für die Demo vorbereitet** wurden. Die Dateien in `tests/` dienen dazu, die echte KI-Ausgabe auf korrekte Kerninformationen und den Umgang mit Unsicherheiten zu überprüfen.

## Anhang B – Demo-Storyboard (etwa 3 Minuten)

1. **Ausgangslage (ca. 25 s):** Kurzer Blick auf Projektbeschreibung und Meeting KW 11. „Wichtige Entscheidungen liegen verteilt in Dokumenten.“
2. **KI-Verarbeitung (ca. 35 s):** Echte Extraktion der Standortentscheidung zeigen; falls nötig transparent auf ein zuvor geprüftes Analyseergebnis zurückgreifen.
3. **Einkauf / Einfach (ca. 45 s):** Projektübersicht öffnen: Was wurde geändert? Warum betrifft mich das? Welche Punkte sind noch ungeklärt?
4. **Vertiefung (ca. 35 s):** „Warum kann die neue Position den Materialbedarf beeinflussen?“ öffnen und verständliche Erklärung mit Quellbezug zeigen.
5. **Perspektivwechsel (ca. 25 s):** „Elektrotechnik / Fachlich“ wählen; andere Priorisierung, technischer Zusammenhang, gleiche Faktenbasis.
6. **Abhängigkeiten und Vertrauenswürdigkeit (ca. 15 s):** Kleines Impact-Diagramm und Quellen/Status zeigen. Abschluss mit der Produktthese.

## Anhang C – Änderungen gegenüber Version 1.0

- **Fokus geschärft:** Wissensverständnis statt primär Projektmanagement und Impact-Tracking.
- **UX vereinfacht:** Zwei Hauptansichten; Impact-Diagramm und Knowledge Deep Dive als integrierte Elemente.
- **Personalisierung erweitert:** Nicht nur Wortwahl, sondern Relevanz, Fachkontext, Vertiefung und geeignete Darstellung.
- **Echte KI-Funktion als Pflicht:** Mindestens eine Extraktion und eine generierte personalisierte Erklärung.
- **Vertrauensmodell präzisiert:** Belegt, möglich, offen und überholt; separate Unterscheidung von Meeting-Beschluss und Ausführungsfreigabe.
- **Problematische Mengenanforderung entfernt:** Keine künstlichen „mindestens zwei Auswirkungen pro Fachbereich“.
- **Tests verbessert:** Verständnis, Richtigkeit, Quellenbezug, Unsicherheitsverständnis und Vergleich mit Rohdokumentation.
- **Hackathon-Grenzen erhalten:** Keine BIM-, ERP- oder vollumfängliche Lernplattform.

---

*Dokumentstatus: Überarbeitete Grundlage für die Erstellung von Beispieldaten und den MVP-Bau. Alle Projektnamen, Rollen und technischen Angaben sind fiktive Demo-Daten, sofern nicht ausdrücklich anders gekennzeichnet.*

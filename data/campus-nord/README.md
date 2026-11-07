# Campus Nord – Beispieldaten für ImpactView

Fiktives Demo-Projekt zur Sanierung des Bürogebäudes **Campus Nord**.  
Zentrale Entscheidung: Verlegung der RLT von **TR-B2** nach **TR-C1**.

Maßgebliche Fachgrundlage: `docs/MVP-Konzept.md` (Version 1.1).

## Struktur

```text
data/campus-nord/
├── projektbeschreibung.md      # Ausgangslage, ursprüngliche Planung
├── meeting-kw10-planung.md     # Früherer Stand (TR-B2 noch gültig)
├── meeting-kw11-lueftung.md    # Beschluss TR-C1 + offene Freigaben
├── team-zustaendigkeiten.md    # Bauleitung, Elektrotechnik, Einkauf
├── aufgaben.md                 # inkl. überholter Aufgabe A-10-01
├── technik-rlt-elektro.md      # Fachhintergrund RLT / SS-UG-03
├── derived/                    # für UI vorbereitete Strukturdaten
│   ├── decisions.json
│   ├── impacts.json
│   ├── knowledge-topics.json
│   └── explanations-by-role.json
└── tests/                      # Referenz für spätere KI-Prüfung
    ├── expected-decisions.json
    ├── expected-statuses.json
    └── comprehension-questions.md
```

TypeScript-Typen: `src/lib/knowledge-model/types.ts`

## Informationsfluss

1. **Ausgangsdokumente** simulieren reale, verteilte Projektinformationen (keine fertigen KI-Zusammenfassungen).
2. **`derived/`** enthält geprüfte Extraktionen und personalisierte Erklärungen für die UI ohne laufende KI.
3. **`tests/`** definiert, was eine spätere KI-Extraktion korrekt erkennen und wie sie Unsicherheiten behandeln muss.

## Verlässlichkeit

| Status | Bedeutung |
|---|---|
| `belegt` | In einer Quelle dokumentiert (mit Fundstelle) |
| `moegliche_auswirkung` | Abgeleitet, noch zu prüfen |
| `offen` | Information oder Freigabe fehlt |
| `ueberholt` | Durch neuere Entscheidung ersetzt |

**Separat:** `resolutionStatus` (z. B. im Meeting beschlossen) vs. `approvalStatus` (Ausführungs-/Planfreigabe).

## Nutzung im Frontend (nächster Schritt)

- Projektübersicht: Entscheidung aus `derived/decisions.json` + rollenrelevante Impacts aus `impacts.json`
- Rollen-/Niveau-Umschalter: Eintrag in `explanations-by-role.json` wählen (`role` × `knowledgeLevel`)
- Deep Dive: `knowledge-topics.json` (z. B. `topic-rlt-elektro-position`)
- Statuslabels und Quellenangaben direkt aus den JSON-Feldern rendern

Keine bestätigten Mehrkosten, Materialmengen oder Terminverschiebungen in den Daten – solche Aussagen bleiben `offen` bzw. `moegliche_auswirkung`.

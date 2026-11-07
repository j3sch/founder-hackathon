/**
 * Minimales Wissensmodell für ImpactView (MVP Campus Nord).
 * Gemeinsam nutzbar von Frontend und KI-Backend.
 *
 * Informationsstatus (reliability) und fachlicher Freigabestatus
 * (approvalStatus) sind bewusst getrennte Achsen.
 */

/** Verlässlichkeit / Belegstatus einer Aussage */
export type ReliabilityStatus =
  | 'belegt' // in einer Quelle dokumentiert
  | 'moegliche_auswirkung' // aus Fakten abgeleitet, ungeprüft
  | 'offen' // Information oder Freigabe fehlt
  | 'ueberholt' // durch neuere Entscheidung ersetzt

/** Fachlicher Freigabe-/Beschlussstatus (nicht mit Reliability vermischen) */
export type DecisionResolutionStatus =
  | 'im_meeting_beschlossen'
  | 'fachplanung_in_pruefung'
  | 'zur_ausfuehrung_freigegeben'

export type TeamId = 'bauleitung' | 'elektrotechnik' | 'einkauf'

export type KnowledgeLevel = 'einfach' | 'fachlich'

export type TaskStatus =
  | 'offen'
  | 'in_bearbeitung'
  | 'erledigt'
  | 'ueberholt'

export type VisualizationHint =
  | 'timeline'
  | 'before_after'
  | 'impact_diagram'
  | 'glossary'
  | 'diff_list'
  | 'checklist'

/** Verweis auf eine überprüfbare Fundstelle in den Ausgangsdokumenten */
export interface SourceRef {
  sourceId: string
  /** Dateiname relativ zu data/campus-nord/ */
  filename: string
  /** Abschnitt / TOP / Überschrift */
  section: string
  /** Optionaler Kurzauszug oder Paraphrase der Fundstelle */
  excerpt?: string
}

export interface Project {
  id: string
  name: string
  client: string
  context: string
  phase: string
  projectWeek: number
  building: {
    yearBuilt: number
    floors: number
    grossFloorAreaM2: number
  }
  sourceIds: string[]
}

export interface Source {
  id: string
  filename: string
  title: string
  documentDate: string // ISO date
  version: string
  kind:
    | 'projektbeschreibung'
    | 'meeting'
    | 'team'
    | 'aufgaben'
    | 'technik'
}

export interface Decision {
  id: string
  projectId: string
  title: string
  summary: string
  previousState: string
  newState: string
  rationale: string
  meetingDate: string
  /** Informationsstatus der Kernaussage „Entscheidung wurde getroffen“ */
  reliability: Extract<ReliabilityStatus, 'belegt'>
  /** Beschlusscharakter laut Quelle */
  resolutionStatus: DecisionResolutionStatus
  /** Separater Freigabestatus der Ausführung / Fachpläne */
  approvalStatus: DecisionResolutionStatus | 'offen'
  affectedTeamIds: TeamId[]
  sourceRefs: SourceRef[]
  /** IDs von Planannahmen/Aussagen, die durch diese Entscheidung überholt sind */
  supersedesIds: string[]
  openQuestionIds: string[]
}

export interface Team {
  id: TeamId
  name: string
  responsibilities: string
  typicalTasks: string[]
  neededInformation: string[]
  interfaceTeamIds: TeamId[]
  sourceRefs: SourceRef[]
}

export interface Impact {
  id: string
  decisionId: string
  teamId: TeamId
  title: string
  description: string
  /**
   * belegt = aus Quelle als Aufgabe/Prüfung dokumentiert
   * moegliche_auswirkung = fachlich abgeleitet, ungeprüft
   * offen = noch ungeklärte Folge / fehlende Info
   */
  reliability: Exclude<ReliabilityStatus, 'ueberholt'>
  rationale: string
  sourceRefs: SourceRef[]
  relatedTaskIds: string[]
  suggestedVisualization?: VisualizationHint
}

export interface Task {
  id: string
  title: string
  description: string
  teamId: TeamId
  status: TaskStatus
  /** dokumentiert in Quellen vs. nur aus Impacts vorgeschlagen */
  origin: 'dokumentiert' | 'vorgeschlagen'
  decisionIds: string[]
  dependsOnTaskIds: string[]
  sourceRefs: SourceRef[]
  /** Wenn status = ueberholt: Verweis auf ersetzende Aufgabe oder Entscheidung */
  supersededBy?: {
    decisionId?: string
    taskId?: string
    reason: string
  }
}

export interface KnowledgeTopic {
  id: string
  question: string
  shortAnswer: string
  decisionIds: string[]
  teamIds: TeamId[]
  sourceRefs: SourceRef[]
  glossaryTerms: string[]
  suggestedVisualization: VisualizationHint
  deepDiveSuitable: boolean
}

export interface UserContext {
  role: TeamId
  knowledgeLevel: KnowledgeLevel
}

export interface PersonalizedExplanation {
  id: string
  decisionId: string
  role: TeamId
  knowledgeLevel: KnowledgeLevel
  /** Gleiche Faktenbasis – nur Priorisierung/Tiefe variiert */
  headline: string
  whatHappened: string
  why: string
  relevanceForRole: string
  backgroundKnowledge: string
  openCheckQuestions: string[]
  priorityImpactIds: string[]
  priorityTopicIds: string[]
  suggestedVisualization: VisualizationHint
  sourceRefs: SourceRef[]
}

/** Optionaler Container für die gesamte Demo-Wissensbasis */
export interface KnowledgeBase {
  project: Project
  sources: Source[]
  teams: Team[]
  decisions: Decision[]
  impacts: Impact[]
  tasks: Task[]
  knowledgeTopics: KnowledgeTopic[]
  explanations: PersonalizedExplanation[]
}

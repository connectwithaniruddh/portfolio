export type TabType = 'home' | 'work' | 'journey' | 'notes';

export type CategoryFilter = 
  | 'ALL' 
  | 'ENTERPRISE FOUNDATIONS' 
  | 'GOVERNED BUSINESS SYSTEMS' 
  | 'DOMAIN SOLUTIONS' 
  | 'ADOPTION & ADVISORY';

export interface CaseStudy {
  id: string;
  title: string;
  category: CategoryFilter;
  categoryLabel: string;
  badgeStatus?: string;
  badgeColor?: string;
  summary: string;
  description: string;
  scale?: string;
  technologies?: string;
  artifactImage: string;
  artifactAlt: string;
  animalType: string;
  featured?: boolean;
  page?: number;
  
  // In-depth details for case study modal
  executiveContext: string;
  beforeState: string;
  transformationPromise: string;
  personalRole: string;
  decisiveChoices: {
    title: string;
    options: string;
    tradeoff: string;
    decision: string;
  }[];
  architectureAndModel: string[];
  trustAndControl: {
    title: string;
    detail: string;
  }[];
  outcomesAndEvidence: {
    metric: string;
    label: string;
    note: string;
  }[];
  reusableAdvantage: string;
  lessonsAndLimits: string;
}

export interface JourneyEra {
  period: string;
  eraTag: string;
  title: string;
  badges: {
    label: string;
    variant: 'default' | 'accent' | 'highlight' | 'sage';
  }[];
  description: string;
  carryForward: string;
  evidenceCard?: {
    icon: string;
    title: string;
    detail: string;
  };
  imageSrc: string;
  imageAlt: string;
  isFuture?: boolean;
}

export interface ADRItem {
  id: string;
  number: string;
  title: string;
  status: 'ACCEPTED' | 'PROPOSED' | 'DEPRECATED';
  date: string;
  context: string;
  decision: string;
  consequences: string[];
  optionsConsidered: {
    name: string;
    pros: string;
    cons: string;
    selected: boolean;
  }[];
}

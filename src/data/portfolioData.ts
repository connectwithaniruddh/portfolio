import { CaseStudy, JourneyEra, ADRItem } from '../types';
import { ANIMAL_SVGS } from './animalData';

const ANIMAL_ALIASES: Record<string, string> = {
  stag: 'reindeer',
};

export const getAnimalSvgUri = (type: string): string => {
  const normalized = type.toLowerCase().trim();
  const key = ANIMAL_ALIASES[normalized] || normalized;
  const rawSvg = ANIMAL_SVGS[key] || ANIMAL_SVGS['lion'];
  return `data:image/svg+xml;utf8,${encodeURIComponent(rawSvg)}`;
};

export const CASE_STUDIES: CaseStudy[] = [
  // ==========================================
  // TIER 1 - SIGNATURE PLATFORM FLAGSHIPS
  // ==========================================
  {
    id: 'agentic-studio',
    title: 'Agentic Studio - Citizen Prototype to Enterprise Production Platform',
    category: 'ENTERPRISE FOUNDATIONS',
    categoryLabel: 'PLATFORM & GOVERNANCE',
    summary: 'Governed citizen-development platform empowering business teams to rapidly compose multi-agent prototypes and smoothly transition approved patterns into production Microsoft Foundry workflows.',
    description: 'An enterprise agent orchestration platform establishing reusable marketplace blueprints, Model Context Protocol (MCP) server connectors, state checkpointing, automated guardrails, and Arize Phoenix tracing.',
    technologies: 'Microsoft Foundry (Azure AI Foundry), AutoGen, LangGraph, Deep Agents, Model Context Protocol (MCP), Azure OpenAI (GPT-5.6 & o3-mini), Copilot Studio, Azure Logic Apps, OpenTelemetry, Arize Phoenix',
    artifactImage: getAnimalSvgUri('Lion'),
    artifactAlt: 'Red 3D Low-Poly Lion - Agentic Studio Flagship',
    animalType: 'Lion',
    featured: true,
    page: 1,
    executiveContext: 'Enterprise leadership faced unmonitored, fragmented LLM point-scripting across engineering and business units. Without centralized oversight, teams built siloed scripts lacking state persistence, identity controls, or security guardrails.',
    beforeState: 'Siloed LLM scripts developed without state persistence, identity controls, or security guardrails, leading to unpredictable failure modes and zero auditable provenance.',
    transformationPromise: 'A governed citizen-friendly platform enabling non-technical teams and GTM specialists to compose, test, and deploy production-ready multi-agent workflows with human-in-the-loop review gates.',
    personalRole: 'Chief Architect & CoE Technical Lead. Built from the ground up the Agentic Studio platform, leading to 120+ reusable AI agents and 25+ plug-and-deploy GenAI assets across LegalTech, Life Sciences, Finance, Audit, and Sales.',
    decisiveChoices: [
      {
        title: 'Stateful Multi-Agent Orchestration & MCP Integration vs. Unmonitored Scripts',
        options: 'Deterministic AutoGen, LangGraph, & Deep Agents state machines with MCP server connectors vs. Unmonitored scripts',
        tradeoff: 'Slightly structured onboarding vs. absolute reproducibility, step-by-step state recovery, and mandatory human checkpoints.',
        decision: 'Implemented declarative graph topology with strict pre/post-condition validation on every node transition.'
      },
      {
        title: 'Centralized Guardrail Proxy vs. Per-Agent Prompt Rules',
        options: 'Shared streaming security proxy gateway vs. prompt-injected safety rules',
        tradeoff: 'Low proxy overhead vs. enterprise-wide compliance guarantee and instantaneous policy updates.',
        decision: 'Built an asynchronous streaming proxy layer verifying PII redaction, token budgets, and brand safety.'
      }
    ],
    architectureAndModel: [
      'Citizen Marketplace: Drag-and-drop catalog of 120+ agent blueprints, 25+ GenAI assets, MCP connectors, and prompt templates',
      'Multi-Agent Orchestration Engine: Executes complex multi-step agent squads via AutoGen and LangGraph with tool calling, MCP interoperability, and state checkpointing',
      'Microsoft Foundry Control Plane: Compiles validated prototypes into production-grade Microsoft Foundry cloud infrastructure',
      'Security & Guardrail Proxy: Real-time pre-flight inspection filtering PII, enforcing token budgets, and preventing prompt injection'
    ],
    trustAndControl: [
      {
        title: 'Human-in-the-Loop Approval Interceptors',
        detail: 'High-blast-radius operations trigger immutable approval queues with contextual diff previews.'
      },
      {
        title: 'Deterministic State Checkpointing',
        detail: 'Every agent step is serialized to a persistent ledger; failed runs can be rewound and resumed.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Value', label: 'Time-to-Market Acceleration', note: 'Compressed agent prototype ideation to production deployment lifecycle' },
      { metric: 'Control', label: 'Auditable Execution', note: 'Every model inference, tool call, and human approval step fully logged' },
      { metric: 'Optimization', label: 'Cloud & Inference Cost Reduction', note: 'Achieved via dynamic tiered routing between frontier models (GPT-5.6 Sol, o3-mini, Claude Sonnet 4.7) and lightweight LLMs' }
    ],
    reusableAdvantage: 'Established the blueprint library for Agentic Workflows used across LegalTech, Life Sciences, Finance, Audit, and Sales domains.',
    lessonsAndLimits: 'Agentic workflows excel in structured multi-step collation; strict guardrails remain mandatory for transactional operations.'
  },
  {
    id: 'unified-knowledge-platform',
    title: 'Unified Enterprise Knowledge Platform',
    category: 'ENTERPRISE FOUNDATIONS',
    categoryLabel: 'ENTERPRISE RETRIEVAL & RAG',
    summary: 'Governed data and retrieval foundation combining Microsoft Fabric and Azure AI Search across 12 enterprise data repositories, delivering citation-backed domain intelligence.',
    description: 'Hybrid semantic search engine with reciprocal rank fusion, fine-grained access control list inheritance, and zero-hallucination verification.',
    technologies: 'Microsoft Fabric, Azure AI Search, Microsoft Foundry, Azure Logic Apps, Model Context Protocol (MCP), Azure OpenAI (GPT-5.6 & Claude Sonnet 4.7), Arize Phoenix',
    artifactImage: getAnimalSvgUri('Owl'),
    artifactAlt: 'Red 3D Low-Poly Owl - Enterprise Knowledge Platform',
    animalType: 'Owl',
    featured: false,
    page: 1,
    executiveContext: 'Subject matter experts across corporate legal, operations, and engineering spent significant working hours hunting for critical guidance buried in fragmented silos across SharePoint, Confluence, Salesforce, ServiceNow, and file shares.',
    beforeState: 'Disjointed search tools lacking semantic context, producing outdated guidance, duplicated effort, and high onboarding friction.',
    transformationPromise: 'A unified enterprise retrieval engine delivering verifiable, grounded answers with strict document-level ACL security and exact source citations.',
    personalRole: 'Solution Architect. Formulated the hybrid retrieval strategy using Azure AI Search, defined the ACL-filtering vector architecture, and instituted RAG triad evaluation pipelines.',
    decisiveChoices: [
      {
        title: 'Azure AI Search Hybrid Vector + Sparse BM25 Fusion & MCP Interoperability',
        options: 'Pure Vector Semantic Search vs. Hybrid Reciprocal Rank Fusion via Azure AI Search with MCP data connectors',
        tradeoff: 'Marginal index storage increase vs. massive precision gains on technical acronyms and policy codes.',
        decision: 'Implemented dense vector search combined with sparse BM25 indexing in Azure AI Search, scored via Reciprocal Rank Fusion (RRF).'
      },
      {
        title: 'Query-Time ACL Inheritance vs. Post-Filtering',
        options: 'Pre-filtering with Active Directory tokens vs. LLM response redaction',
        tradeoff: 'Requires tighter directory sync, but guarantees zero information leakage at the retrieval layer.',
        decision: 'Embedded Active Directory group claims directly into vector payload metadata filters.'
      }
    ],
    architectureAndModel: [
      'Unified Fabric Ingestion: Connects Microsoft Fabric OneLake and Azure AI Search for parsing and metadata enrichment',
      'Azure AI Search Dual Retrieval Layer: Dense vector indexing + sparse inverted index with dynamic weights',
      'Model Context Protocol (MCP) & Azure Logic Apps: Standardizes secure connectivity and automated workflow orchestration between retrieval agents and enterprise data repositories',
      'Verifiable Citation Engine: Passage anchors linking directly to clickable source PDF page locations'
    ],
    trustAndControl: [
      {
        title: 'Mandatory Attribution Verification',
        detail: 'Responses failing semantic attribution scoring are rejected with an explicit refusal.'
      },
      {
        title: 'Zero Data Retention Agreements',
        detail: 'All vector embeddings and LLM completions processed in isolated, dedicated enterprise cloud tenants.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Efficiency', label: 'Knowledge Retrieval Speed', note: 'Dramatically reduced SME query resolution time across legal, operations, and technical teams' },
      { metric: 'Accuracy', label: 'Verifiable Citation Anchors', note: 'Eliminates hallucinations by requiring verified source passage attribution before generating answers' },
      { metric: 'Integration', label: 'Multi-Silo Enterprise Search', note: 'Single unified entry point across SharePoint, ServiceNow, Salesforce, Box, and file shares' }
    ],
    reusableAdvantage: 'Core retrieval modules became the universal knowledge engine powering specialized domain copilots.',
    lessonsAndLimits: 'Document chunking strategy must match layout semantics; fixed character chunking degrades policy tables.'
  },

  // ==========================================
  // TIER 2 - GOVERNED BUSINESS SYSTEMS
  // ==========================================
  {
    id: 'ebp-audit-automation',
    title: 'EBP Audit - Governed Agentic Audit Operations',
    category: 'GOVERNED BUSINESS SYSTEMS',
    categoryLabel: 'AUDIT & COMPLIANCE',
    summary: 'Automated Employee Benefit Plan audit workflows with dual LLM cross-verification, structured evidence extraction, and full regulatory traceability.',
    description: 'Specialized compliance platform automating workpaper generation, participant sampling verification, and ERISA regulatory check validation.',
    technologies: 'Microsoft Foundry, Azure OpenAI (GPT-5.6 & o3 reasoning), Azure AI Document Intelligence v4.0, LangGraph, Deep Agents, Model Context Protocol (MCP), Azure Logic Apps, Excel Engine, Local Redaction',
    artifactImage: getAnimalSvgUri('Wolf'),
    artifactAlt: 'Red 3D Low-Poly Wolf - EBP Audit Automation',
    animalType: 'Wolf',
    featured: false,
    page: 1,
    executiveContext: 'Annual Employee Benefit Plan (EBP) audits required tens of thousands of human hours manually inspecting census records, payroll files, and plan agreements under strict ERISA regulatory deadlines.',
    beforeState: 'Manual side-by-side document inspection, prone to human fatigue, inconsistent sampling documentation, and audit trail delays.',
    transformationPromise: 'An intelligent audit copilot extracting testing parameters, comparing payroll schedules against plan provisions, and generating pre-populated workpapers.',
    personalRole: 'Lead Architect. Spearheaded the dual-model cross-examination pattern and designed the interactive workpaper validation interface.',
    decisiveChoices: [
      {
        title: 'Dual-Model Cross-Examination Pattern (GPT-5.6 + o3 Reasoning)',
        options: 'Single LLM summarization vs. GPT-5.6 Extractor + o3 Auditor Model validation',
        tradeoff: 'Higher token processing vs. near-zero hallucination rate on numerical and legal clauses.',
        decision: 'Primary GPT-5.6 model extracts findings; secondary o3 reasoning model verifies findings against raw source text.'
      }
    ],
    architectureAndModel: [
      'Document Intelligence v4.0 Engine: High-fidelity tabular extraction from scanned census and payroll PDFs',
      'Audit Policy Engine: Encodes regulatory compliance requirements into programmatic validation constraints',
      'Automated Workpaper Generator & Azure Logic Apps: Standardized Excel and PDF documentation with visual bounding-box references'
    ],
    trustAndControl: [
      {
        title: 'Auditor-in-the-Loop Signoff',
        detail: 'System highlights discrepancy areas; final acceptance requires credentialed auditor sign-off.'
      },
      {
        title: 'Local Redaction Boundary',
        detail: 'Sensitive PII (SSNs, salaries) redacted locally before processing, maintaining strict data privacy controls.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Productivity', label: 'Audit Review Time Saved', note: 'Auditors transition from manual keying to high-value exception review and analysis' },
      { metric: 'Traceability', label: 'Complete Sampling Audit Trail', note: 'Every audited entry features a direct link to the raw source file for review' },
      { metric: 'Quality', label: 'Standardized Compliance Controls', note: 'Ensures consistent audit quality and policy enforcement across plan documents' }
    ],
    reusableAdvantage: 'Adversarial verification architecture adopted across Insurance Claims and Financial Operations.',
    lessonsAndLimits: 'Tabular alignment across multi-page scans requires specialized coordinate-aware layout models.'
  },
  {
    id: 'trusted-ai-control-tower',
    title: 'Trusted AI & Adoption Control Tower',
    category: 'ADOPTION & ADVISORY',
    categoryLabel: 'GOVERNANCE & TELEMETRY',
    summary: 'Enterprise AI governance dashboard, model evaluation tracing, operational telemetry, and ROI scorecard framework.',
    description: 'Comprehensive operational framework establishing intake criteria, ROI telemetry, shadow-AI detection, and executive decision-rights.',
    technologies: 'Cosmos DB, PowerBI, Arize Phoenix (Arize AX), Azure Monitor, OpenTelemetry (OTel AI), NeMo Guardrails, Python',
    artifactImage: getAnimalSvgUri('Bear'),
    artifactAlt: 'Red 3D Low-Poly Bear - Trusted AI Control Tower',
    animalType: 'Bear',
    featured: false,
    page: 1,
    executiveContext: 'Executive leadership and AI CoE steering committees lacked centralized visibility into enterprise AI adoption, operational performance, cost trends, and model safety.',
    beforeState: 'Uncontrolled deployment with no adoption telemetry, active user tracking, or centralized security auditing.',
    transformationPromise: 'A centralized AI Control Tower dashboard combining real-time operational telemetry, user adoption metrics, and red-team safety evaluations.',
    personalRole: 'AI Governance & Adoption Architect. Designed the telemetry harness, use-case evaluation scorecard, and executive dashboards.',
    decisiveChoices: [
      {
        title: 'Cosmos DB & Arize Phoenix Deep Observability',
        options: 'Siloed app logging vs. Cosmos DB, PowerBI, and Arize Phoenix tracing',
        tradeoff: 'Upfront integration standards vs. unified visibility across token spend, latency, and model evaluations.',
        decision: 'Built standardized telemetry hooks for token consumption, latency, and evaluation tracing.'
      }
    ],
    architectureAndModel: [
      'Cosmos DB & Arize Phoenix Tracing: Captures granular model traces, latency metrics, and evaluation scores using OpenTelemetry standards',
      'PowerBI Executive Dashboards: Visualizes active usage funnels, department token budgets, and cost trends',
      'Use-Case Intake & Evaluation: Automated framework ranking candidate AI projects by business value and feasibility'
    ],
    trustAndControl: [
      {
        title: 'Continuous Model Tracing & Safety Auditing',
        detail: 'Automated evaluation scanning and prompt-injection testing integrated into CI/CD pipelines.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Observability', label: 'Portfolio-Wide Governance', note: 'Complete visibility into operational health, user retention, and model evaluation metrics' },
      { metric: 'Optimization', label: 'Cloud Spend & Token Management', note: 'Identifies redundant model calls, optimizes token budgets, and eliminates idle cloud compute' },
      { metric: 'Compliance', label: 'Responsible AI & Safety Controls', note: 'Centralized tracking of model evaluations, output quality scores, and safety boundary events' }
    ],
    reusableAdvantage: 'Control tower framework adopted as standard corporate governance architecture.',
    lessonsAndLimits: 'Qualitative user feedback must be combined with hard usage telemetry to evaluate true product adoption.'
  },

  // ==========================================
  // DOMAIN SOLUTIONS & REUSABLE WORKFLOW SUITES
  // ==========================================
  {
    id: 'engineering-drawing-review',
    title: 'Engineering Drawing Review & BOM Validation',
    category: 'DOMAIN SOLUTIONS',
    categoryLabel: 'COMPUTER VISION & ENGINEERING',
    summary: 'Multimodal vision system analyzing CAD blueprints and engineering schematics for compliance with design codes and BOM accuracy.',
    description: 'Vision-LLM pipeline identifying missing symbols, dimensional tolerances, and drawing-to-BOM drift across domain checkpoints.',
    technologies: 'Azure AI Vision, GPT-5.6 Vision, Claude Sonnet 4.7 Vision, OpenCV, Azure Logic Apps, Ray Serve, Azure Storage',
    artifactImage: getAnimalSvgUri('Stag'),
    artifactAlt: 'Red 3D Low-Poly Reindeer - Engineering Drawing Review',
    animalType: 'Stag',
    featured: false,
    page: 2,
    executiveContext: 'Engineering quality teams faced extensive backlogs checking multi-page drawing sets against BOM spreadsheets and design standards, risking costly factory rework.',
    beforeState: 'Senior structural engineers spent hours manually scanning blueprints with magnifying loops to find symbology omissions.',
    transformationPromise: 'A high-resolution multimodal assistant segmenting drawing sheets, verifying geometric tolerances, and flagging standard compliance anomalies.',
    personalRole: 'AI Solution Architect. Conceived the tile-based high-resolution visual processing architecture and domain rule-mapping ontology.',
    decisiveChoices: [
      {
        title: 'Tiled High-Resolution Visual Decomposition',
        options: 'Full-image downsampling vs. Coordinate-aware tile decomposition',
        tradeoff: 'Requires image stitching logic, but preserves micro-text readability essential for blueprint tolerances.',
        decision: 'Implemented sliding window tiling with sub-pixel coordinate mapping to maintain vector fidelity.'
      }
    ],
    architectureAndModel: [
      'High-Resolution Tiling Pipeline: Splits large format drawings into context-linked segments',
      'Multimodal Symbology Classifier: Detects welding, hydraulic, electrical, and geometric symbols using GPT-5.6 Vision and Claude Sonnet 4.7',
      'Interactive CAD Overlay: Highlights flagged discrepancies directly on a drawing viewer layer'
    ],
    trustAndControl: [
      {
        title: 'Visual Bounding Box Annotations',
        detail: 'Every flagged issue is highlighted on an interactive viewer layer with exact rule citations.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Velocity', label: 'Accelerated Quality Review', note: 'Substantially reduces drawing package sign-off cycles from weeks to days' },
      { metric: 'Quality', label: 'Manufacturing Defect Prevention', note: 'Prevents tolerance errors and symbol omissions from escaping into physical manufacturing' }
    ],
    reusableAdvantage: 'High-resolution image tiling architecture transferred directly to medical imaging and aerial inspection programs.',
    lessonsAndLimits: 'Handwritten annotations and stamped revisions require hybrid classical OCR and vision-transformer pipelines.'
  },
  {
    id: 'finance-operations-automation',
    title: 'Finance Operations Automation (P2P / AP 3-Way Matching)',
    category: 'GOVERNED BUSINESS SYSTEMS',
    categoryLabel: 'FINANCIAL OPERATIONS',
    summary: 'Autonomous invoice reconciliation, 3-way matching, and discrepancy resolution engine integrated with SAP and Oracle ERP systems.',
    description: 'Enterprise financial processing agent parsing complex multi-currency invoices, resolving line-item variance, and triggering governed payment approvals.',
    technologies: 'SAP ERP Connect, Microsoft Foundry, Azure AI Document Intelligence v4.0, Azure OpenAI GPT-5.6, Azure Logic Apps',
    artifactImage: getAnimalSvgUri('Bull'),
    artifactAlt: 'Red 3D Low-Poly Bull - Finance Operations Automation',
    animalType: 'Bull',
    featured: false,
    page: 2,
    executiveContext: 'Global accounts payable teams struggled with high transaction volumes, manual 3-way matching errors (Invoice vs. Purchase Order vs. Goods Receipt), and delayed vendor payments triggering late fees.',
    beforeState: 'AP specialists manually keyed invoice data, cross-referenced purchase orders in SAP, and emailed back-and-forth for approval resolution.',
    transformationPromise: 'A straight-through financial automation engine handling ingestion, 3-way match reconciliation, and automated exception routing.',
    personalRole: 'Enterprise Architect. Direct transformation use cases across audit, FP&A, O2C, P2P, and R2R processes.',
    decisiveChoices: [
      {
        title: 'Dynamic Confidence Threshold Routing',
        options: 'Binary automated post vs. Multi-tier confidence escalation',
        tradeoff: 'Slightly higher queue triage logic vs. zero risk of incorrect ledger posting above variance tolerances.',
        decision: 'Transactions above high confidence thresholds post automatically; others route to human AP queues.'
      }
    ],
    architectureAndModel: [
      'Multi-Format Extraction: Ingests PDF, TIFF, EDI, and email attachments via Azure AI Document Intelligence v4.0',
      'Semantic 3-Way Matcher & Azure Logic Apps: Reconciles line-item descriptions, quantities, and currencies against ERP purchase orders via automated Logic Apps workflows',
      'ERP Connector: Bi-directional secure connector with SAP NetWeaver and Oracle Cloud'
    ],
    trustAndControl: [
      {
        title: 'Financial Separation of Duties',
        detail: 'System enforces role-based financial approval matrices with tamper-evident event logging.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Automation', label: 'Straight-Through Processing', note: 'Standard invoices reconciled and posted with minimal manual intervention' },
      { metric: 'Velocity', label: 'Faster Payment Turnaround', note: 'Processing cycle compressed from days to hours, improving vendor relationships' }
    ],
    reusableAdvantage: 'Reconciliation logic reused for vendor statement matching and corporate card expense audits.',
    lessonsAndLimits: 'Vendor name variation and currency fluctuations require strict master data normalization.'
  },
  {
    id: 'intelligent-document-processing',
    title: 'Intelligent Document Processing Patterns',
    category: 'ENTERPRISE FOUNDATIONS',
    categoryLabel: 'DOCUMENT INTELLIGENCE',
    summary: 'Universal document understanding framework extracting structured entities, tables, and clauses using Azure AI Language, custom NER, and Azure AI Search.',
    description: 'High-throughput document pipeline combining layout-aware parsing, metadata enrichment, content summarization, and hybrid retrieval indexing.',
    technologies: 'Azure AI Language, Custom Named Entity Recognition (NER), Azure AI Document Intelligence v4.0, Azure AI Search, Azure OpenAI GPT-5.6, Azure Logic Apps',
    artifactImage: getAnimalSvgUri('Fox'),
    artifactAlt: 'Red 3D Low-Poly Fox - Intelligent Document Processing',
    animalType: 'Fox',
    featured: false,
    page: 2,
    executiveContext: 'Enterprise intake departments received high volumes of unstructured contracts, tax filings, and legal forms in unpredictable layouts, overwhelming manual data-entry teams.',
    beforeState: 'Legacy OCR templates failed whenever document layout shifted slightly, requiring expensive ongoing template maintenance.',
    transformationPromise: 'A layout-resilient document platform utilizing Azure AI Language NER and metadata enrichment to extract structured data according to dynamic schemas.',
    personalRole: 'Platform Architect. Architected the asynchronous processing pipeline, Azure AI Language NER models, and content summarization engine.',
    decisiveChoices: [
      {
        title: 'Azure AI Language NER & Metadata Scoring vs. Static OCR',
        options: 'Static template OCR vs. Azure AI Language NER, metadata enrichment, and ranking',
        tradeoff: 'Slightly higher API pipeline complexity vs. 100% resilience against document layout shifts.',
        decision: 'Enforced Azure AI Language NER with content summarization and Azure AI Search indexing.'
      }
    ],
    architectureAndModel: [
      'Azure AI Language & Custom NER: Extracts domain-specific entities, key-value pairs, and tabular structures',
      'Metadata Enrichment & Summarization: Enriches text with contextual metadata tags and automated executive summaries powered by Azure OpenAI GPT-5.6',
      'Data Ranking & Scoring: Ranks extracted content relevance and applies confidence scoring to filter ingestion'
    ],
    trustAndControl: [
      {
        title: 'Field-Level Confidence Scoring',
        detail: 'Every extracted value carries a calibrated confidence metric; low confidence fields trigger targeted human micro-tasks.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Productivity', label: 'Manual Keying Reduction', note: 'Eliminates repetitive manual keying hours across operational teams' },
      { metric: 'Precision', label: 'High Field Extraction Precision', note: 'Ensures accurate capture of critical financial amounts, dates, and legal entity names' }
    ],
    reusableAdvantage: 'Serves as the front-door ingestion gateway for all downstream transactional AI agents.',
    lessonsAndLimits: 'Complex nested tables in low-DPI scans require multi-stage enhancement before extraction.'
  },
  {
    id: 'claims-adjudication-engine',
    title: 'Car Insurance Claims Adjudication Workflow',
    category: 'GOVERNED BUSINESS SYSTEMS',
    categoryLabel: 'CAR INSURANCE & CLAIMS',
    summary: 'Automated vehicle damage estimation, policy coverage verification, and claim triage for car insurance claims.',
    description: 'Autonomous claims workflow parsing vehicle photos, damage descriptions, and car insurance policy contracts to expedite settlement packages.',
    technologies: 'GPT-5.6 Vision, Azure AI Vision, Model Context Protocol (MCP), Azure Logic Apps, Azure OpenAI, React',
    artifactImage: getAnimalSvgUri('Tiger'),
    artifactAlt: 'Red 3D Low-Poly Tiger - Car Insurance Claims',
    animalType: 'Tiger',
    featured: false,
    page: 2,
    executiveContext: 'Car insurance adjusters faced severe claim processing backlogs following accidents and weather events, resulting in delayed policyholder vehicle repairs and elevated claim handling expenses.',
    beforeState: 'Car insurance claims sat in queues for days before initial review, requiring manual cross-referencing of policy exclusions, vehicle parts, and deductible limits.',
    transformationPromise: 'An intelligent claims triage platform analyzing car damage photos and crash descriptions to generate standardized repair estimates.',
    personalRole: 'Lead Architect. Formulated the car damage visual estimator, policy exclusion matching engine, and adjuster review workbench.',
    decisiveChoices: [
      {
        title: 'Calibrated Confidence Gating on Car Parts Estimation',
        options: 'Direct claim payout authorization vs. Adjuster verification workbench',
        tradeoff: 'Maintains human adjuster oversight vs. zero risk of incorrect payout estimates on complex vehicle damage.',
        decision: 'Fast-track simple vehicle damage claims; route all ambiguous structural damage to specialist adjusters.'
      }
    ],
    architectureAndModel: [
      'Car Damage Vision Estimator: Evaluates photos of damaged vehicle panels, bumpers, windshields, and lights using GPT-5.6 Vision and Azure AI Vision to estimate repair severity and required replacement parts',
      'Policy Coverage Matcher: Cross-references vehicle damage against policy deductibles, coverage limits, and driver endorsements via MCP server integrations',
      'Adjuster Workbench: Displays visual bounding-box highlights of vehicle damage alongside line-item repair estimates'
    ],
    trustAndControl: [
      {
        title: 'Adjuster Override Audit Trail',
        detail: 'Every adjuster modification to AI-generated repair estimates is recorded with structured reason codes.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Turnaround', label: 'Faster FNOL Car Claim Processing', note: 'First-notice-of-loss vehicle claim turnaround reduced from days to minutes' },
      { metric: 'Efficiency', label: 'Streamlined Vehicle Settlement', note: 'Accelerates simple vehicle damage claims with adjuster sign-off' }
    ],
    reusableAdvantage: 'Visual damage estimation and part matching architecture adapted for fleet vehicle maintenance.',
    lessonsAndLimits: 'Multimodal damage estimation requires localized regional automotive parts cost indices.'
  },
  {
    id: 'sensai-knowledge-foundation',
    title: 'SensAI - Semantic Retrieval Foundation',
    category: 'ENTERPRISE FOUNDATIONS',
    categoryLabel: 'SEMANTIC SEARCH & RAG',
    summary: 'Early 2023 RAG PoC solution delivering contextual search and structured solutioning offerings for SaaS implementations.',
    description: 'Low-latency search infrastructure with Pinecone vector search and Azure OpenAI, paving the way for enterprise-scale RAG architectures.',
    technologies: 'Azure OpenAI (GPT-4 / GPT-3.5), Pinecone, Go, gRPC, Redis',
    artifactImage: getAnimalSvgUri('Rhino'),
    artifactAlt: 'Red 3D Low-Poly Rhino - SensAI Semantic Retrieval',
    animalType: 'Rhino',
    featured: false,
    page: 2,
    executiveContext: 'Early in 2023, a high-growth SaaS platform needed an intelligent solutioning assistant to generate structured proposals without overloading relational databases.',
    beforeState: 'Manual creation of implementation proposals and solution offerings, causing onboarding bottlenecks and inconsistent standards.',
    transformationPromise: 'Delivered SensAI as an early 2023 RAG PoC technology with initial lower footfall, establishing vector search standards and proving operational value.',
    personalRole: 'Senior Solution Architect & Solution CoE Leader. Built SensAI, an Azure OpenAI and Pinecone RAG solution that saved 1,300+ hours monthly and 9 FTEs per quarter, supporting $500K MRR.',
    decisiveChoices: [
      {
        title: 'Early Vector Indexing vs. Relational SQL Queries',
        options: 'Relational full-text SQL vs. Pinecone vector namespaces + Azure OpenAI',
        tradeoff: 'Early PoC adoption curve vs. semantic query understanding and automated solutioning standards.',
        decision: 'Implemented Pinecone vector search integrated with Azure OpenAI completion pipelines.'
      }
    ],
    architectureAndModel: [
      'Early Vector Indexing: Implemented Pinecone vector namespaces to index service offerings and implementation standards',
      'Contextual Prompt Pipeline: Utilized Azure OpenAI to formulate structured solutioning proposals and technical offerings',
      'gRPC Query Layer: Low-latency microservice gateway delivering contextual search results to internal solution teams'
    ],
    trustAndControl: [
      {
        title: 'Solution Standard Verification',
        detail: 'Generated solution proposals verified against standardized implementation templates before customer presentation.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Efficiency', label: '1,300+ Hours Saved Monthly', note: 'Streamlined solution offering creation and implementation design' },
      { metric: 'Impact', label: '9 FTEs Saved / $500K MRR', note: 'Quarterly effort savings equivalent to 9 FTEs while supporting $500K in monthly recurring revenue' },
      { metric: 'Foundation', label: 'Early Scaled RAG Proof Point', note: 'Paved the way for subsequent enterprise Agentic Studio and Knowledge Platform deployments' }
    ],
    reusableAdvantage: 'Core RAG solutioning pipeline laid the groundwork for enterprise CoE asset libraries.',
    lessonsAndLimits: 'Early vector databases required careful manual index management during initial PoC rollout.'
  },

  // ==========================================
  // NEW TIER 3 & 4 CASE STUDIES
  // ==========================================
  {
    id: 'agentic-software-delivery',
    title: 'Agentic Software Delivery Workflow Suite',
    category: 'GOVERNED BUSINESS SYSTEMS',
    categoryLabel: 'SDLC & ENGINEERING',
    summary: 'Bounded multi-agent workflow suite guiding teams through requirements coaching, BRD authoring, Draw.io architecture diagrams, ADO stories, and automated test synthesis.',
    description: 'Specialized SDLC engineering assistant automating epic discovery, backlog generation, architectural diagramming, and QA test case preparation.',
    technologies: 'LangGraph, Deep Agents, Microsoft Foundry, Model Context Protocol (MCP), Azure DevOps (ADO), Azure Logic Apps, Draw.io API, GPT-5.6 Sol',
    artifactImage: getAnimalSvgUri('Gorilla'),
    artifactAlt: 'Red 3D Low-Poly Gorilla - Agentic Software Delivery',
    animalType: 'Gorilla',
    featured: false,
    page: 3,
    executiveContext: 'Product managers and solution architects faced heavy administrative friction translating business requirements into technical design specs, Draw.io diagrams, and Azure DevOps backlog items.',
    beforeState: 'Manual back-and-forth documentation, inconsistent user story acceptance criteria, and delayed sprint planning discovery.',
    transformationPromise: 'A bounded agentic SDLC suite accelerating requirements capture, architecture diagramming, and test case synthesis.',
    personalRole: 'Solution Architect & Lead. Designed the multi-agent SDLC workflow topology, Azure DevOps MCP integration, and Draw.io schema generator.',
    decisiveChoices: [
      {
        title: 'Bounded Sub-Task Agents vs. Monolithic LLM Prompts',
        options: 'Monolithic single prompt generation vs. Specialized sub-agents (Requirements, Diagramming, ADO Stories, QA Tests)',
        tradeoff: 'Slightly higher agent graph complexity vs. deterministic schema validity and clear step-by-step review gates.',
        decision: 'Implemented modular LangGraph & Deep Agents sub-agents with human review gates before ADO publication.'
      }
    ],
    architectureAndModel: [
      'Requirements Coach Agent: Interactively interviews product leads to structure clean BRD documentation',
      'Architecture Diagramming Agent: Generates structured Draw.io XML schematics and technical design specs',
      'Azure DevOps & Logic Apps Integrator: Automatically generates backlog items, acceptance criteria, and QA test cases in ADO via MCP and Azure Logic Apps'
    ],
    trustAndControl: [
      {
        title: 'ADO Publication Review Gate',
        detail: 'User stories and test cases require human architect signoff before publishing to Azure DevOps.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Velocity', label: 'Accelerated Backlog Preparation', note: 'Compresses epic discovery and technical specification preparation cycles' },
      { metric: 'Quality', label: 'Standardized ADO Backlog Quality', note: 'Enforces consistent acceptance criteria and test coverage across engineering pods' }
    ],
    reusableAdvantage: 'SDLC workflow blueprints adopted as default template for enterprise engineering pods.',
    lessonsAndLimits: 'Diagram generation requires strict XML validation to prevent rendering errors in Draw.io.'
  },
  {
    id: 'executive-research-briefing',
    title: 'Executive Research Briefing & Intelligence Engine',
    category: 'DOMAIN SOLUTIONS',
    categoryLabel: 'EXECUTIVE INTELLIGENCE',
    summary: 'Secure executive research assistant routing complex tasks across Work IQ, Foundry IQ, Code Interpreter, and approved web search to deliver citation-backed briefings.',
    description: 'High-security decision support engine executing analytical Code Interpreter scripts, verifying source permissions, and generating executive syntheses.',
    technologies: 'Microsoft Foundry IQ, Work IQ, Code Interpreter, Azure OpenAI GPT-5.6 Sol, Azure Logic Apps, Arize Phoenix',
    artifactImage: getAnimalSvgUri('Hippo'),
    artifactAlt: 'Red 3D Low-Poly Hippo - Executive Research Briefing',
    animalType: 'Hippo',
    featured: false,
    page: 3,
    executiveContext: 'C-suite executives needed fast, verified research syntheses combining internal enterprise metrics, market intelligence, and code execution without exposing confidential data.',
    beforeState: 'Executive staff spent days compiling research briefs, manually executing data scripts, and verifying citation sources.',
    transformationPromise: 'A secure executive research engine executing data scripts in sandboxed environments and delivering verifiable, citation-backed briefs.',
    personalRole: 'Enterprise Architect. Designed the Work IQ / Foundry IQ query router, analytical sandboxing architecture, and prompt-injection defense proxy.',
    decisiveChoices: [
      {
        title: 'Containerized Analytical Sandboxing vs. Direct Code Execution',
        options: 'Direct local code execution vs. Isolated containerized Code Interpreter sandbox',
        tradeoff: 'Container spin-up latency vs. zero risk of malicious code execution or data leakage.',
        decision: 'Enforced isolated container sandboxes for python analytical script execution.'
      }
    ],
    architectureAndModel: [
      'Work IQ & Foundry IQ Router: Queries authorized internal data assets and enterprise documentation',
      'Analytical Sandboxing: Executes Python data analysis in isolated containerized environments to generate visual charts',
      'Prompt Injection Defense Proxy: Inspects web sources to filter adversarial instructions before summarization'
    ],
    trustAndControl: [
      {
        title: 'Clickable Source Attribution',
        detail: 'Every metric and claim in generated briefs embeds direct, clickable passage anchors to source files.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Speed', label: 'Rapid Executive Synthesis', note: 'Synthesizes multi-source internal and market data in minutes' },
      { metric: 'Lineage', label: 'Verifiable Data Provenance', note: 'Full auditability across data sources, Code Interpreter execution logs, and output briefs' }
    ],
    reusableAdvantage: 'Analytical sandboxing architecture reused for automated financial reporting engines.',
    lessonsAndLimits: 'Web search ingestion requires strict filtering to strip sponsored noise and unverified blogs.'
  },
  {
    id: 'sales-opportunity-accelerator',
    title: 'Sales Opportunity Accelerator & Account Intelligence',
    category: 'DOMAIN SOLUTIONS',
    categoryLabel: 'SALES & GROWTH',
    summary: 'CRM-bounded sales assistant automating daily pipeline reviews, account news intelligence, win-theme proposal drafting, and call planning for 200+ sellers.',
    description: 'Specialized sales agent mesh connecting Salesforce CRM, financial filings, and proposal templates to accelerate deal velocity.',
    technologies: 'Salesforce CRM Connector, Microsoft Copilot Studio, Model Context Protocol (MCP), LangGraph, Azure OpenAI GPT-5.6 Sol, Azure Logic Apps',
    artifactImage: getAnimalSvgUri('Panther'),
    artifactAlt: 'Red 3D Low-Poly Panther - Sales Opportunity Accelerator',
    animalType: 'Panther',
    featured: false,
    page: 3,
    executiveContext: 'Enterprise sales executives spent hours daily conducting manual account research, reviewing pipeline updates, writing tailored proposals, and preparing call agendas.',
    beforeState: 'Account research was fragmented, sellers spent significant time on admin tasks, and deal velocity suffered from delayed proposal turnaround.',
    transformationPromise: 'A CRM-integrated sales accelerator pre-populating account intelligence, win-theme proposals, and structured call agendas.',
    personalRole: 'Solution Architect. Enabled 200+ sales executives through AI-assisted pipeline research, account intelligence, and opportunity-engagement workflows.',
    decisiveChoices: [
      {
        title: 'CRM-Bounded Data Access vs. Unrestricted Web Crawling',
        options: 'Unrestricted web scraping vs. Salesforce CRM bounded API access via MCP',
        tradeoff: 'Strict permissions management vs. complete protection of customer relationship data.',
        decision: 'Enforced Salesforce role-based permissions on all retrieval queries via MCP server.'
      }
    ],
    architectureAndModel: [
      'Salesforce CRM Integration: Fetches opportunity stage, deal history, and contact roles securely via MCP connectors',
      'Account Intelligence Agent: Scans approved news sources and financial filings to highlight trigger events',
      'Proposal Drafting Engine & Azure Logic Apps: Pre-populates win-theme proposals and call prep agendas for seller review'
    ],
    trustAndControl: [
      {
        title: 'Seller Editing & Acceptance Gate',
        detail: 'Generated proposals and call agendas require seller review and edit before client transmission.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Capacity', label: 'Increased Seller Client Time', note: 'Enables sales reps to spend more time on direct client conversations' },
      { metric: 'Velocity', label: 'Accelerated Deal Progression', note: 'Accelerates deal movement through key pipeline stages' }
    ],
    reusableAdvantage: 'Account intelligence module integrated into marketing RFP response engine.',
    lessonsAndLimits: 'Proposal templates must remain modular to accommodate custom enterprise pricing structures.'
  },
  {
    id: 'life-sciences-legal-knowledge-mining',
    title: 'Life Sciences & Legal Knowledge Mining with Live Sync',
    category: 'ENTERPRISE FOUNDATIONS',
    categoryLabel: 'REGULATED KNOWLEDGE',
    summary: 'Regulated knowledge mining engine with live-sync ingestion semantics, GxP audit tracing, and domain-specific citation verification across legal and clinical documents.',
    description: 'High-compliance knowledge system indexing GxP regulatory guidelines, clinical protocols, and legal contract precedents with live synchronization.',
    technologies: 'Microsoft Fabric, Azure AI Search, Azure OpenAI, GxP Audit Tracing, Azure Logic Apps',
    artifactImage: getAnimalSvgUri('Elephant'),
    artifactAlt: 'Red 3D Low-Poly Elephant - Life Sciences Knowledge Mining',
    animalType: 'Elephant',
    featured: false,
    page: 3,
    executiveContext: 'Regulated teams in Life Sciences (GxP / 21 CFR Part 11) and Corporate Legal struggled to locate critical regulatory precedents and clinical guidelines buried in legacy repositories.',
    beforeState: 'Manual document searching across static archives, risking reliance on superseded regulatory versions or outdated contract clauses.',
    transformationPromise: 'A live-synced knowledge engine delivering verifiable, grounded regulatory guidance with complete version lineage and GxP audit compliance.',
    personalRole: 'Enterprise Architect. Designed regulated learning and talent solutions for pharmaceutical organizations, supporting GxP and 21 CFR Part 11 requirements.',
    decisiveChoices: [
      {
        title: 'Live-Sync Ingestion with Incremental Re-Indexing vs. Batch Processing',
        options: 'Weekly batch ingestion vs. Real-time live-sync event trigger indexing in Azure AI Search',
        tradeoff: 'Higher stream monitoring overhead vs. zero risk of serving superseded regulatory guidance.',
        decision: 'Implemented event-driven live-sync ingestion connected to Microsoft Fabric OneLake and Azure AI Search.'
      }
    ],
    architectureAndModel: [
      'Live-Sync Ingestion Pipeline: Syncs new policy releases and clinical guidelines with incremental Azure AI Search indexing',
      'Domain Content Enrichment: Enriches passages with regulatory taxonomy tags, effective dates, and authority rankings',
      'GxP Compliant Audit Trail: Logs all embedding transformations, query requests, and retrieval events for compliance'
    ],
    trustAndControl: [
      {
        title: 'Non-Clinical / Non-Legal Advisory Boundary',
        detail: 'System explicitly tags outputs as internal reference, requiring credentialed specialist signoff.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Efficiency', label: 'Streamlined Regulatory Search', note: 'Reduces search time across voluminous legal contracts and clinical protocols' },
      { metric: 'Compliance', label: 'Audit-Ready Data Lineage', note: 'Guarantees complete version control and GxP auditability for regulated queries' }
    ],
    reusableAdvantage: 'Live-sync vector ingestion pipeline adopted for corporate policy repositories.',
    lessonsAndLimits: 'Superseded policy versions must be explicitly soft-deleted from vector indexes upon new publication.'
  },
  {
    id: 'ai-speech-scribe-infographics',
    title: 'AI Speech Scribing & Visual Meeting Infographics',
    category: 'ADOPTION & ADVISORY',
    categoryLabel: 'SPEECH & MEDIA',
    summary: 'Real-time speech scribing and visual infographic pipeline transcribing meeting audio with speaker diarization and compiling visual summary graphics.',
    description: 'Speech-to-visual intelligence platform capturing workshop audio, performing speaker diarization, and rendering structured SVG infographics.',
    technologies: 'Azure Speech API, Speaker Diarization, Azure OpenAI GPT-5.6, SVG Rendering Engine, React',
    artifactImage: getAnimalSvgUri('Koala'),
    artifactAlt: 'Red 3D Low-Poly Koala - Speech Scribing',
    animalType: 'Koala',
    featured: false,
    page: 3,
    executiveContext: 'Executive strategy sessions and client discovery workshops generated hours of recorded audio, but written text transcripts lacked visual structure and key decision highlights.',
    beforeState: 'Transcripts sat unread; staff spent hours after workshops manually compiling presentation summaries.',
    transformationPromise: 'An automated speech scribing engine transforming live audio into structured transcripts and visual SVG infographic summaries.',
    personalRole: 'AI CoE Lead. Directed development of real-time speech scribing and context-aware meeting synthesis tools.',
    decisiveChoices: [
      {
        title: 'Deterministic SVG Layout Engine vs. Freeform Canvas Generation',
        options: 'Generative image generation vs. Structured SVG template rendering',
        tradeoff: 'Slightly constrained visual layout vs. crisp, editable text and high contrast readability.',
        decision: 'Implemented structured SVG layout generator for clean, deterministic infographic summaries.'
      }
    ],
    architectureAndModel: [
      'Real-Time Diarization Stream: Captures multi-speaker audio streams via Azure Speech API with accurate speaker identification',
      'Semantic Summarizer: Identifies action items, decision gates, and key consensus points',
      'Visual Infographic Generator: Dynamically compiles key takeaways into structured SVG visual summary cards'
    ],
    trustAndControl: [
      {
        title: 'Consent & Speaker Notification',
        detail: 'Audio processing initiates only upon explicit consent acknowledgment by workshop participants.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Speed', label: 'Instant Visual Workshop Deliverables', note: 'Generates executive visual summaries immediately following meeting completion' },
      { metric: 'Alignment', label: 'Enhanced Stakeholder Consensus', note: 'Improves post-meeting recall and action item execution across teams' }
    ],
    reusableAdvantage: 'Real-time diarization and summarization module reused in customer support quality monitoring.',
    lessonsAndLimits: 'Acoustically challenging conference rooms require noise-cancellation preprocessing before transcription.'
  },
  {
    id: 'client-churn-scoring-prediction',
    title: 'Client Churn Scoring & Predictive Analytics Engine',
    category: 'ADOPTION & ADVISORY',
    categoryLabel: 'PREDICTIVE ANALYTICS',
    summary: 'Machine learning churn prediction pipeline analyzing customer usage telemetry, support ticket sentiment, and billing metrics with SHAP explainability.',
    description: 'Predictive customer analytics model identifying accounts at risk of non-renewal and triggering automated customer success interventions.',
    technologies: 'Azure Machine Learning, Python, XGBoost, PyTorch, Azure SQL Database, PowerBI',
    artifactImage: getAnimalSvgUri('Penguin'),
    artifactAlt: 'Red 3D Low-Poly Penguin - Churn Prediction',
    animalType: 'Penguin',
    featured: false,
    page: 3,
    executiveContext: 'Customer success leads lacked early warning indicators for account churn risk, often identifying dissatisfied enterprise accounts only after cancellation notices were submitted.',
    beforeState: 'Reactive account management relying on manual check-ins, leading to unexpected revenue loss.',
    transformationPromise: 'A predictive ML engine calculating calibrated churn probability scores and explaining top risk factors via SHAP values.',
    personalRole: 'Solutions Architect & Transformation Lead. Conceived the predictive risk scoring pipeline and CRM intervention triggers.',
    decisiveChoices: [
      {
        title: 'Temporal Train/Test Split vs. Random Cross-Validation',
        options: 'Random k-fold cross-validation vs. Strict temporal cutoff validation split in Azure ML',
        tradeoff: 'Slightly conservative accuracy score vs. zero data leakage from future customer actions.',
        decision: 'Enforced strict temporal validation split in Azure Machine Learning to guarantee true out-of-sample prediction accuracy.'
      }
    ],
    architectureAndModel: [
      'Leakage-Controlled ML Pipeline: Trains gradient boosted trees and neural nets in Azure Machine Learning on historical account behaviors',
      'SHAP Value Explainability: Calculates exact feature importance contributing to each account risk score',
      'Customer Success Trigger: Automatically flags high-risk accounts in CRM with recommended intervention playbooks'
    ],
    trustAndControl: [
      {
        title: 'Human Review before Account Escalation',
        detail: 'CSMs inspect SHAP risk factors before reaching out to client stakeholders.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Proactivity', label: 'Early Risk Detection', note: 'Enables customer success teams to address risk factors weeks before contract renewal' },
      { metric: 'Clarity', label: 'Actionable Risk Drivers', note: 'Provides clear SHAP explainability so managers understand why an account is flagged' }
    ],
    reusableAdvantage: 'Feature engineering pipeline adapted for customer upsell recommendation models.',
    lessonsAndLimits: 'Infrequent support interactions require weighting product usage telemetry over ticket counts.'
  },
  {
    id: 'fda-research-brief-generator',
    title: 'FDA Research Brief Generator',
    category: 'DOMAIN SOLUTIONS',
    categoryLabel: 'PHARMA & REGULATORY',
    summary: 'Multi-agent research squad built on CrewAI querying open FDA APIs and PubMed to produce structured, citation-backed pharmaceutical research briefs.',
    description: 'Specialized pharmaceutical research assistant automating regulatory drug safety searches, clinical trial cross-referencing, and brief compilation.',
    technologies: 'CrewAI, Azure OpenAI GPT-5.6, FDA Open API, PubMed API, Azure Logic Apps, FastAPI',
    artifactImage: getAnimalSvgUri('Ram'),
    artifactAlt: 'Red 3D Low-Poly Ram - FDA Research Brief',
    animalType: 'Ram',
    featured: false,
    page: 3,
    executiveContext: 'Regulatory affairs specialists spent days manually gathering drug safety alerts, clinical trial results, and FDA approval notices across disparate public medical databases.',
    beforeState: 'Manual literature searching across multiple government portals, prone to missing recent safety advisories.',
    transformationPromise: 'A CrewAI multi-agent research squad retrieving FDA open API records and compiling verified, template-based research briefs.',
    personalRole: 'AI Solution Architect. Architected the CrewAI agent topology, FDA open API connectors, and PubMed citation verifier.',
    decisiveChoices: [
      {
        title: 'Multi-Agent Role Specialization vs. Single Prompt Search',
        options: 'Single LLM web search vs. CrewAI specialized agents (Collector, Cross-Referencer, Brief Author)',
        tradeoff: 'Requires multi-agent orchestration setup vs. absolute traceability and zero missing safety notices.',
        decision: 'Implemented CrewAI agent squad with dedicated role responsibilities and verification gates.'
      }
    ],
    architectureAndModel: [
      'FDA & PubMed API Collectors: Queries open government regulatory databases and medical literature endpoints via Azure Logic Apps',
      'Multi-Agent Research Crew: Agent squad divides research tasks into literature review, safety data cross-referencing, and brief synthesis',
      'Citation Traceability Engine: Embeds exact PubMed IDs and FDA submission links for every scientific claim'
    ],
    trustAndControl: [
      {
        title: 'Mandatory Regulatory Specialist Signoff',
        detail: 'Generated briefs are marked as research drafts requiring review by credentialed regulatory leads.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Efficiency', label: 'Rapid Literature Assembly', note: 'Compresses scientific literature gathering from days to hours' },
      { metric: 'Traceability', label: 'Verifiable Scientific Lineage', note: 'Ensures every statement links directly to peer-reviewed literature or official FDA records' }
    ],
    reusableAdvantage: 'CrewAI multi-agent search pattern extended to patent landscape analysis.',
    lessonsAndLimits: 'API rate limits on public government endpoints require caching and backoff queue handling.'
  },
  {
    id: 'fmcg-vision-anomaly-detection',
    title: 'Supply Chain & FMCG Vision Anomaly Detection',
    category: 'DOMAIN SOLUTIONS',
    categoryLabel: 'MANUFACTURING & VISION',
    summary: 'Edge-deployed computer vision anomaly detection system inspecting high-speed packaging lines, identifying visual defects, and triggering automated ejection.',
    description: 'High-speed industrial computer vision platform parsing conveyer video streams to catch packaging defects and label anomalies.',
    technologies: 'Azure AI Vision, Azure IoT Edge, PyTorch, OpenCV, Vision Transformers, Azure Storage',
    artifactImage: getAnimalSvgUri('Shark'),
    artifactAlt: 'Red 3D Low-Poly Shark - Vision Anomaly Detection',
    animalType: 'Shark',
    featured: false,
    page: 3,
    executiveContext: 'FMCG packaging lines faced occasional packaging defect escapes and seal anomalies that compromised product quality and incurred expensive retail returns.',
    beforeState: 'Manual spot-checks on fast-moving conveyer lines missed subtle packaging defects.',
    transformationPromise: 'An edge vision system classifying micro-defects in real-time and providing plant managers with quality analytics dashboards.',
    personalRole: 'AI Solution Architect. Conceived the edge vision processing architecture, model deployment pipeline, and defect classification taxonomy.',
    decisiveChoices: [
      {
        title: 'Edge TensorRT Inference vs. Cloud API Call',
        options: 'Cloud vision API downsampling vs. Local Azure IoT Edge TensorRT inference',
        tradeoff: 'Requires edge hardware provisioning vs. sub-50ms latency required for high-speed conveyer ejection.',
        decision: 'Deployed vision transformer models locally on Azure IoT Edge nodes.'
      }
    ],
    architectureAndModel: [
      'Edge Camera Ingestion: Captures high-FPS product images on production conveyers via Azure IoT Edge',
      'Vision Transformer Anomaly Classifier: Detects micro-cracks, label misalignments, and seal defects via Azure AI Vision',
      'Human Investigation Feedback Loop: Flagged anomalies store images for quality engineer review and model retraining'
    ],
    trustAndControl: [
      {
        title: 'Quality Engineer Retraining Review',
        detail: 'False positives are flagged by plant operators to continually refine edge model thresholds.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Quality', label: 'Defect Escape Prevention', note: 'Catches packaging anomalies on the line before shipment' },
      { metric: 'Analytics', label: 'Continuous Quality Insights', note: 'Provides plant managers with heatmaps of recurring defect types' }
    ],
    reusableAdvantage: 'Edge computer vision pipeline adapted for warehouse barcode label verification.',
    lessonsAndLimits: 'Varying ambient lighting on factory floors requires dynamic gain control preprocessing.'
  },
  {
    id: 'ai-learning-adoption-system',
    title: 'AI Learning & Enterprise Adoption Engine',
    category: 'ADOPTION & ADVISORY',
    categoryLabel: 'CAPABILITY BUILDING',
    summary: 'Interactive workforce upskilling system combining Microsoft ESI learning pathways, adaptive challenges, gamified badges, and a learner-retention assistant.',
    description: 'Enterprise AI capability building platform guiding employees through curated learning paths and measuring skill adoption across business units.',
    technologies: 'Microsoft ESI API, Azure OpenAI, Python, React, Gamification Engine',
    artifactImage: getAnimalSvgUri('Rabbit'),
    artifactAlt: 'Red 3D Low-Poly Rabbit - AI Learning System',
    animalType: 'Rabbit',
    featured: false,
    page: 3,
    executiveContext: 'Enterprise workforce AI upskilling programs struggled with low completion rates when using generic video playlists, leading to uneven AI tool adoption.',
    beforeState: 'Unmonitored video playlists with low engagement and no feedback mechanism for struggling learners.',
    transformationPromise: 'A gamified learning engine pairing structured ESI pathways with a 24/7 AI learning assistant and departmental leaderboards.',
    personalRole: 'AI Transformation CoE Leader. Directed workforce adoption strategies, upskilling pathways, and gamified progress tracking.',
    decisiveChoices: [
      {
        title: 'Role-Specific Skill Pathways vs. Generic AI Overview',
        options: 'One-size-fits-all AI introduction vs. Role-tailored learning paths (Finance, Legal, Audit, Sales)',
        tradeoff: 'Requires multi-curriculum curation vs. significantly higher course completion and tool application.',
        decision: 'Built domain-specific learning pathways with practical hands-on exercises.'
      }
    ],
    architectureAndModel: [
      'Curated Learning Pathways: Maps role-specific AI skills into structured learning modules',
      'Learner Retention Assistant: Answers technical questions, clarifies concepts, and suggests targeted practice exercises',
      'Gamified Progress Tracker: Tracks departmental completion rates, leaderboard ranks, and skill badges'
    ],
    trustAndControl: [
      {
        title: 'Privacy-Preserving Learner Metrics',
        detail: 'Individual quiz scores remain private; management views aggregate department capability growth.'
      }
    ],
    outcomesAndEvidence: [
      { metric: 'Engagement', label: 'Higher Course Completion', note: 'Drives active employee participation through interactive learning paths' },
      { metric: 'Capability', label: 'Measurable Skill Growth', note: 'Enables CoE leadership to track certified AI skills across business units' }
    ],
    reusableAdvantage: 'Gamified learning framework adopted for corporate cybersecurity awareness training.',
    lessonsAndLimits: 'Learning content must be updated quarterly to match rapid releases in LLM tooling.'
  }
];


export const JOURNEY_ERAS: JourneyEra[] = [
  {
    period: '2010 — 2018',
    eraTag: 'FOUNDATIONS',
    title: 'Engineering & Implementation',
    badges: [
      { label: 'Aon Hewitt', variant: 'default' },
      { label: 'Capgemini', variant: 'default' },
      { label: 'SumTotal', variant: 'default' }
    ],
    description: 'Led large-scale engineering delivery and enterprise system implementations across global financial and HCM systems. Built high-throughput data pipelines, microservice architectures, and mastered complex transactional integrity in mission-critical environments.',
    carryForward: 'Core engineering discipline: strict data validation, deterministic state management, performance profiling, and production resilience that now grounds every AI platform architecture.',
    evidenceCard: {
      icon: 'layers',
      title: 'Global Delivery & Architecture Leadership',
      detail: 'Architected distributed financial reconciliation and workforce platforms processing millions of daily transactions with 99.99% uptime.'
    },
    imageSrc: './journey-foundations.jpg',
    imageAlt: 'Watercolor artwork representing early engineering foundations — expansive open fields and sunrise horizon'
  },
  {
    period: '2018 — 2024',
    eraTag: 'CAPABILITY BUILDING',
    title: 'Solution Architecture & CoE Leadership',
    badges: [
      { label: 'Zenoti', variant: 'default' },
      { label: 'SensAI Foundation', variant: 'highlight' }
    ],
    description: 'Directed cloud-scale solution architecture and established early AI Centers of Excellence. Built specialized semantic search, machine learning prediction models, and enterprise knowledge indexing frameworks for enterprise SaaS and business systems.',
    carryForward: 'The transition from standalone software to intelligent data platforms, establishing repeatable architecture patterns, modular service boundaries, and cross-functional team enablement.',
    evidenceCard: {
      icon: 'cpu',
      title: 'Center of Excellence & AI Platform Inception',
      detail: 'Pioneered early semantic retrieval architectures, created cross-functional architecture review boards, and trained 100+ engineers in AI development best practices.'
    },
    imageSrc: './journey-capability.jpg',
    imageAlt: 'Watercolor artwork representing capability building — spanning bridges across deep canyons and architectural structures'
  },
  {
    period: '2024 — 2026',
    eraTag: 'AUTOMATION TO PLATFORMS',
    title: 'Agentic Platforms & Reusability',
    badges: [
      { label: 'Ensono', variant: 'default' },
      { label: 'Capgemini', variant: 'default' },
      { label: 'Agentic Studio', variant: 'accent' }
    ],
    description: 'Architected enterprise generative AI platforms, multi-agent orchestration frameworks (Agentic Studio), and governed knowledge retrieval engines across audit, insurance, finance, and engineering drawing domains. Moved organizations from fragile point-scripts to resilient, composable platforms.',
    carryForward: 'Architectural blueprints for governed agent swarms, deterministic verification layers, model-agnostic routing, and enterprise-grade telemetry.',
    evidenceCard: {
      icon: 'sparkles',
      title: 'Agentic Studio & Multi-Domain Adoption',
      detail: 'Standardized agent lifecycle governance across 40+ project teams, cutting time-to-production by 70% with 100% auditability.'
    },
    imageSrc: './journey-platforms.jpg',
    imageAlt: 'Watercolor artwork representing automation to platforms — majestic mountain summits and interconnected waterways'
  },
  {
    period: '2026 — PRESENT',
    eraTag: 'TRANSFORMATION LEADERSHIP',
    title: 'Enterprise AI Transformation Program Leader',
    badges: [
      { label: 'Executive Advisory', variant: 'highlight' },
      { label: 'AI Strategy & CoE', variant: 'accent' },
      { label: 'Architecture Governance', variant: 'sage' }
    ],
    description: 'Partnering with C-suite leadership to define AI transformation roadmaps, design sustainable operating models, establish risk-tiered governance frameworks, and bridge the divide between strategic business objectives and high-velocity engineering execution.',
    carryForward: 'Holistic leadership integrating organizational change, financial ROI measurement, architectural rigor, and enterprise risk mitigation.',
    evidenceCard: {
      icon: 'shield-check',
      title: 'Strategic Portfolio Ownership & CoE Operating Model',
      detail: 'Leading end-to-end AI portfolio strategy, intake prioritization, executive decision-rights frameworks, and cross-enterprise adoption programs.'
    },
    imageSrc: './journey-leadership.jpg',
    imageAlt: 'Watercolor artwork representing transformation leadership — dawn over vast landscape with ascending light rays'
  },
  {
    period: 'FUTURE HORIZON',
    eraTag: 'THE HORIZON',
    title: 'Value Realization & Strategic Autonomous Systems',
    badges: [
      { label: 'Autonomous Enterprise Systems', variant: 'default' },
      { label: 'Strategic AI Capital Allocation', variant: 'accent' }
    ],
    description: 'Advancing enterprise architectures toward self-optimizing business operations, real-time agentic collaboration across enterprise boundaries, and strategic AI portfolio governance that measures value in tangible margin expansion and competitive differentiation.',
    carryForward: 'Unwavering commitment to architectural integrity, human accountability, and scalable engineering craftsmanship.',
    imageSrc: './journey-horizon.jpg',
    imageAlt: 'Watercolor artwork representing future horizons of intelligence',
    isFuture: true
  }
];

export const ADR_ITEMS: ADRItem[] = [
  {
    id: 'adr-001',
    number: 'ADR-001',
    title: 'Bounded RAG Workflow vs. Autonomous Agents for Governed Policy Answers',
    status: 'ACCEPTED',
    date: '2025-04-12',
    context: 'When designing enterprise query interfaces for regulatory policy, compliance manuals, and internal legal guidelines, stakeholders initially requested fully autonomous reasoning agents. However, compliance standards require 100% deterministic reproducibility and traceable provenance.',
    decision: 'Enforce a Bounded RAG workflow with deterministic Retrieval-Augmented Generation, mandatory chunk attribution scoring, and strict refusal on ambiguity, rather than unconstrained iterative agentic reflection loops.',
    consequences: [
      'Eliminated hallucinations on statutory clauses to 0% in audit testing',
      'Lowered p95 query latency from 8.2s to 1.1s',
      'Saved ~65% in token consumption by avoiding recursive reflection loops'
    ],
    optionsConsidered: [
      {
        name: 'Autonomous Multi-Agent Debate Loop',
        pros: 'Can handle open-ended synthetic questions',
        cons: 'Non-deterministic, high token cost, unprovable audit trail',
        selected: false
      },
      {
        name: 'Bounded RAG with Hybrid BM25/Dense Vector & Citation Verification',
        pros: 'Deterministic, instant source attribution, strict ACL enforcement',
        cons: 'Requires higher-quality document chunking and indexing hygiene',
        selected: true
      }
    ]
  },
  {
    id: 'adr-002',
    number: 'ADR-002',
    title: 'Shared Platform Capabilities vs. Point-Solution Agent Silos',
    status: 'ACCEPTED',
    date: '2025-07-28',
    context: 'Multiple business units (Audit, Finance, Legal, Customer Support) started independently purchasing proprietary vertical AI tools and writing ad-hoc Python scripts, risking fragmented data governance, massive vendor sprawl, and duplicate infrastructure spend.',
    decision: 'Establish the "Agentic Studio" as a centralized foundational platform delivering shared capabilities (Ingestion, Guardrails, Memory Checkpoints, Telemetry) while federating domain-specific prompt and workflow logic to business unit teams.',
    consequences: [
      'Accelerated new use-case time-to-market by 70%',
      'Consolidated foundation model vendor contracts, achieving 38% volume discount',
      'Unified enterprise telemetry into a single OpenTelemetry & SOC2 compliant pane'
    ],
    optionsConsidered: [
      {
        name: 'Decentralized Point-Solution Procurement',
        pros: 'Fastest initial kickoff for individual teams',
        cons: 'Vendor lock-in, zero cross-pollination, extreme security risk',
        selected: false
      },
      {
        name: 'Centralized Platform Engine with Federated Domain Extensions',
        pros: 'High reusability, enterprise security, rapid composite scaling',
        cons: 'Requires dedicated CoE platform engineering team',
        selected: true
      }
    ]
  },
  {
    id: 'adr-003',
    number: 'ADR-003',
    title: 'Placement of Human Accountability Gates in Regulated LLM Workflows',
    status: 'ACCEPTED',
    date: '2025-11-04',
    context: 'Transactional systems generating accounting entries, customer insurance claim payouts, or legal contract approvals need clear human accountability. Full automation without oversight poses unacceptable compliance risks.',
    decision: 'Implement mandatory Human-in-the-Loop (HITL) Checkpoints utilizing Temporal durable workflows whenever confidence falls below 98%, transaction values exceed $10,000, or legal commitments are dispatched externally.',
    consequences: [
      'Zero unauthorized financial disbursements or compliance failures',
      'High auditor trust score (4.8/5) across regulatory evaluations',
      'Operators focus 100% of attention on high-risk edge cases rather than routine approvals'
    ],
    optionsConsidered: [
      {
        name: 'Full Straight-Through Automation with Post-Hoc Sampling Audit',
        pros: 'Maximum automated velocity',
        cons: 'Unacceptable legal exposure if errant disbursement occurs',
        selected: false
      },
      {
        name: 'Pre-Execution Confidence-Based Durable Checkpoints',
        pros: 'Safe, auditable, seamless human review UI integration',
        cons: 'Requires asynchronous message queues and state persistence',
        selected: true
      }
    ]
  },
  {
    id: 'adr-004',
    number: 'ADR-004',
    title: 'Multi-Model Broker & Semantic Cache for Enterprise LLM Ingestion',
    status: 'ACCEPTED',
    date: '2026-01-15',
    context: 'Direct dependency on a single proprietary LLM provider led to rate-limit throttling during month-end finance cycles and exposed the enterprise to regional API outages and price volatility.',
    decision: 'Deploy an enterprise API broker layer that routes requests across multi-cloud model endpoints with automatic semantic embedding caching for frequent queries.',
    consequences: [
      'Eliminated provider outage downtime to 0% via automatic dynamic failover',
      'Reduced duplicate question inference spend by 32% via exact and semantic caching',
      'Standardized PII redaction and audit logging at the gateway before packets leave company perimeter'
    ],
    optionsConsidered: [
      {
        name: 'Direct SDK Vendor Binding',
        pros: 'Simpler initial code setup in application repos',
        cons: 'Vendor lock-in, hardcoded keys, zero centralized cost visibility',
        selected: false
      },
      {
        name: 'Zero-Trust Enterprise Broker with Dynamic Multi-Cloud Routing',
        pros: 'High resilience, vendor leverage, centralized governance & caching',
        cons: 'Requires managing lightweight reverse proxy infrastructure',
        selected: true
      }
    ]
  }
];


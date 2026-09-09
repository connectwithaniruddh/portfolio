# AGENTS.md — Portfolio Architecture, Technical Learnings & Branding Guidelines

This document serves as the authoritative knowledge base and workspace guidelines for Antigravity AI agents working on the **Aniruddh Paralikar — Enterprise AI Transformation Leader Portfolio**.

---

## Executive Summary & System Overview

- **Owner & Persona**: Aniruddh Paralikar — Enterprise AI Transformation Program Leader, Chief AI Architect & Center of Excellence (CoE) Leader.
- **Core Value Proposition**: Demonstrating 16+ years of software engineering discipline combined with 2027-ready multi-agent platform orchestration, deterministic RAG retrieval, Microsoft Foundry infrastructure, and C-suite portfolio governance.
- **Live URL**: `https://connectwithaniruddh.github.io/portfolio/`
- **GitHub Repository**: `https://github.com/connectwithaniruddh/portfolio.git`

---

## Technical Architecture & Core Stack

1. **Frontend Framework**: React 18 + TypeScript + Vite.
2. **Styling & Aesthetics**: Tailwind CSS with a bespoke archival editorial theme (warm paper backgrounds, vermilion accents, serif typography).
3. **Motion & 3D Interactive Lighting**: Framer Motion (`motion/react`) driving physics-based spring rotation, directional specular glints, dynamic rim highlights, and ambient occlusion ground shadows (`src/components/DynamicLightingArtifact.tsx`).
4. **Vector Asset System**:
   - 18 Tier-Categorized Flagship Case Studies with custom 3D Low-Poly Animal SVG artwork (`src/data/animalData.ts`).
   - 5 Career Era Watercolor Artworks stored locally in `public/` (`public/journey-foundations.jpg`, `public/journey-capability.jpg`, `public/journey-platforms.jpg`, `public/journey-leadership.jpg`, `public/journey-horizon.jpg`).
5. **Core Data Store**: `src/data/portfolioData.ts` (18 Flagship Case Studies, 5 Journey Eras, 4 Architectural Decision Records).

---

## Crucial Technical Lessons Learned & Engineering Insights

### 1. High-Definition Mobile SVG & Vector Rendering
- **The Problem**: On mobile devices with Retina / High-DPI screens (iOS Safari & Android Chrome), embedding SVG Data URIs (`data:image/svg+xml;utf8,...` or `base64`) inside HTML `<img>` tags wrapped in containers with CSS `filter: drop-shadow(...)` caused mobile WebKit to rasterize the vector graphic into a low-resolution 300px 1x composition bitmap before rendering, resulting in noticeably blurry/fuzzy images on mobile phones.
- **The Solution**:
  - Render 3D animal SVGs **INLINE directly into the DOM tree** (`dangerouslySetInnerHTML={{ __html: svgContent }}`) rather than as `<img>` tags.
  - Injected `width="100%" height="100%" preserveAspectRatio="xMidYMid meet" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality"` onto the inline `<svg>` root element.
  - When rendered inline, the phone’s GPU draws every `<polygon>`, `<path>`, and `<g>` element as live vector primitives directly at the **native hardware resolution of the Retina display** (e.g. 1170×2532 on iPhone, 1440×3088 on Galaxy Ultra), achieving 100% crystal-clear definition.
  - Removed parent CSS `filter: drop-shadow()` wrappers that triggered WebKit raster composition buffers.

### 2. Static Asset Hosting & GitHub Pages Compatibility
- **The Problem**: Temporal external URLs (such as Google AIDA `lh3.googleusercontent.com/aida/...` URLs) return HTTP 403 Forbidden or expire over time. Absolute paths (`/image.jpg`) break when deployed to GitHub Pages subpath URLs (`https://user.github.io/portfolio/`).
- **The Solution**:
  - Move ALL images, CV documents, and artwork into the local project `public/` directory (`public/aniruddh-profile.jpg`, `public/journey-*.jpg`, `public/Aniruddh Paralikar - AI Transformation CoE.docx`).
  - Reference all public assets using relative paths (`./journey-foundations.jpg`, `./aniruddh-profile.jpg`) across components and data files.
  - Include `.nojekyll` in `public/` so GitHub Pages build engines do not ignore files or directories.
  - Set `base: './'` in `vite.config.ts` for relative asset bundle resolution.

### 3. Touch Gesture Interaction on Mobile Displays
- **The Problem**: Desktop mouse events (`onMouseMove`, `onMouseEnter`) do not trigger on touch-first mobile devices, leaving interactive 3D sculptures static on mobile screens.
- **The Solution**:
  - Implemented touch gesture event handlers (`onTouchStart`, `onTouchMove`, `onTouchEnd`) alongside mouse listeners in `DynamicLightingArtifact.tsx`.
  - Calculate normalized touch coordinates `(-1 to 1)` across container bounds, feeding motion springs for smooth physics-based tilting on touch drag.

---

## Portfolio Branding Guidelines: Do's & Don'ts

### Color Palette (Archival Editorial System)
| Role | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Archival Paper (Background)** | `#F9F7F2` | Main page background |
| **Surface Card** | `#F2F0EA` | Card backgrounds, comparison tables |
| **Primary Accent (Vermilion)** | `#B3402E` | Key metric callouts, timeline markers, primary highlights |
| **Deep Charcoal (Text & Headers)** | `#1A1D1B` | Serif headings, executive context |
| **Secondary Neutral (Body)** | `#57615a` | Body copy, narrative descriptions |
| **Archival Rule / Border** | `#D1D1CB` / `#DCD9D1` | Subtle divider lines, card borders |
| **Sage / Slate Highlight** | `#d3dbd5` | Enterprise governance and platform badges |

### Typography Hierarchy
- **Headings & Titles**: `font-serif` (Playfair / Georgia / Editorial Serif) for authoritative executive presence.
- **Body & Explanations**: `font-sans` (Inter / System Sans) for high readability across mobile and desktop.
- **Metadata, Badges & Metrics**: `font-mono` (JetBrains Mono / Fira Code) for technical precision, dates, and technology tags.

### Branding Do's:
1. **DO** render vector graphics inline with `shape-rendering="geometricPrecision"` to guarantee crispness on high-DPI mobile screens.
2. **DO** feature concrete, empirical performance metrics (e.g. *"70% cycle time reduction"*, *"0% statutory clause hallucination"*, *"120+ reusable AI agents"*).
3. **DO** anchor all case studies in real-world 2026 tech stack components (Microsoft Foundry, Model Context Protocol (MCP), AutoGen, LangGraph, Deep Agents, Azure OpenAI GPT-5.6 Sol & o3-mini, Arize Phoenix, Microsoft Fabric, Azure AI Search).
4. **DO** include Architectural Decision Records (ADRs) detailing trade-offs, options considered, and regulatory compliance consequences.
5. **DO** ensure all download links point to `public/Aniruddh Paralikar - AI Transformation CoE.docx` with relative paths.

### Branding Don'ts:
1. **DON'T** use temporary remote image links (e.g., `lh3.googleusercontent.com` or external CDNs). All media assets must be stored locally in `public/`.
2. **DON'T** apply CSS `filter: drop-shadow(...)` to parent divs wrapping `<img>` tags on mobile WebKit browsers.
3. **DON'T** use generic stock photography, unstyled placeholders, or default browser fonts.
4. **DON'T** state ungrounded claims without explaining the underlying control architecture (e.g., Human-in-the-Loop approval gates, PII redaction, token budgets).

---

## Case Study Animal Branding Ontology (18 Animals)

Each of the 18 flagship case studies is paired with a distinct, symmetrical 3D low-poly animal vector sculpture:

1. **Lion** — Agentic Studio (Enterprise Platform Flagship)
2. **Owl** — Unified Enterprise Knowledge Platform (Semantic RAG & Fabric)
3. **Wolf** — EBP Audit Automation (Dual-Model Cross-Examination)
4. **Bear** — Trusted AI & Adoption Control Tower (Governance & Telemetry)
5. **Stag (Reindeer)** — Engineering Drawing Review & BOM Validation (Computer Vision)
6. **Bull** — Finance Operations Automation (SAP P2P / 3-Way Match)
7. **Fox** — Strategic AI Intake & Value Realization Framework (ROI Scoring)
8. **Tiger** — Commercial Underwriting & Claims Intelligence (Insurance)
9. **Rhino** — Regulatory & Compliance Intelligence Hub (Policy RAG)
10. **Gorilla** — Cyber Threat & SOC Incident Automation (Security & Incident Response)
11. **Hippo** — Clinical Trial Data Extraction & Protocol Review (Life Sciences)
12. **Panther** — Customer Support & Field Operations Copilot (Omnichannel)
13. **Elephant** — Supply Chain & Supplier Intelligence Engine (Logistics)
14. **Koala** — Executive Speech-to-Visual Infographic Engine (Azure Speech & SVG Layout)
15. **Penguin** — Enterprise Prompt Engineering & Evaluation Bench (CI/CD Safety)
16. **Ram** — Cloud Infrastructure & FinOps Optimization Agent (Multi-Cloud Routing)
17. **Shark** — Legal Contract & Deal Lifecycle Intelligence (LegalTech)
18. **Rabbit** — Interactive Enterprise AI Learning System (Workforce Upskilling)

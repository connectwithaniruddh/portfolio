import React from 'react';
import { TabType, CaseStudy } from '../types';
import { CASE_STUDIES, JOURNEY_ERAS } from '../data/portfolioData';
import { DynamicLightingArtifact } from './DynamicLightingArtifact';
import { WatercolorSplashImage } from './WatercolorSplashImage';
import { ArrowRight, Compass, ShieldCheck, Layers, Sparkles, FileText, Download } from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: TabType) => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
  onOpenConnect: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  onSelectCaseStudy,
}) => {
  const featuredStudy = CASE_STUDIES[0]; // Agentic Studio (Lion)
  const secondaryStudy = CASE_STUDIES[1]; // Unified Knowledge (Owl)
  const latestJourney = JOURNEY_ERAS[3]; // Transformation Leadership

  return (
    <div className="space-y-20">
      
      {/* Hero Section */}
      <section className="border-b border-[#D1D1CB] pb-12 sm:pb-16 pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Hero Narrative */}
          <div className="lg:col-span-8 space-y-6">

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-3xl font-medium tracking-tight text-[#1A1D1B] leading-[1.18]">
              I Build the AI Center of Excellence Enterprises Trust with Production Systems
            </h1>

            <p className="text-base sm:text-lg text-[#57615a] leading-relaxed max-w-2xl">
              From citizen-prototype to governed Microsoft Foundry deployment: I've architected 120+ reusable agents, $500K in supported MRR, and the deterministic guardrails that make multi-agent AI auditable, not experimental.
            </p>

            {/* Strategic Pillars Summary */}
            <div className="pt-2 text-xs font-mono text-[#707A73] space-y-1.5 border-t border-[#DCD9D1]">
              <div className="flex flex-wrap items-center gap-2 text-[#1A1D1B]">
                <span className="text-[#B3402E] font-bold">CORE FOCUS:</span>
                <span>AI & Data CoE Leadership · Governed Multi-Agent Systems · Trusted Enterprise Knowledge Retrieval · Enterprise Architecture</span>
              </div>
            </div>

            {/* Primary Action Pathways */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-explore-work-btn"
                onClick={() => setActiveTab('work')}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider text-[#F9F7F2] bg-[#1A1D1B] hover:bg-[#B3402E] rounded transition-colors shadow-xs"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-view-journey-btn"
                onClick={() => setActiveTab('journey')}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider text-[#1A1D1B] bg-[#EFECE6] hover:bg-[#E2DFD8] border border-[#DCD9D1] rounded transition-colors"
              >
                <span>MY JOURNEY & ERAS</span>
                <Compass className="w-4 h-4 text-[#B3402E]" />
              </button>
            </div>
          </div>

          {/* Hero Profile Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-sm bg-[#EFECE6] rounded-xl border border-[#D1D1CB] p-5 space-y-4 shadow-xs">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-[#DCD9D1] bg-[#E2DFD8]">
                <img
                  src="./aniruddh-profile.jpg"
                  alt="Aniruddh Paralikar - AI Transformation Program Leader"
                  className="w-full h-full object-cover opacity-95"
                  loading="eager"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#1A1D1B]/90 backdrop-blur-xs p-3 rounded text-white border border-white/10">
                  <div className="font-serif text-lg font-medium">Aniruddh Paralikar</div>
                  <div className="text-[10px] font-mono text-[#C2C9C4] tracking-wider uppercase">
                    Enterprise AI Leader & CoE Architect
                  </div>
                </div>
              </div>

              {/* Executive Cover Letter & CV Download */}
              <div className="space-y-3 text-xs font-mono text-[#57615a] pt-1">
                <p className="text-[11px] leading-relaxed text-[#1A1D1B] font-serif italic border-b border-[#DCD9D1] pb-3">
                  "AI transformation leader with 16+ years translating business strategy into governed multi-agent systems, Microsoft Foundry solutions, and scalable CoE operating models."
                </p>
                <a
                  href="./Aniruddh Paralikar - AI Transformation CoE.pdf"
                  download="Aniruddh Paralikar - AI Transformation CoE.pdf"
                  className="w-full py-2.5 px-3 rounded text-xs font-mono bg-[#B3402E] hover:bg-[#963323] text-[#F9F7F2] transition-colors flex items-center justify-center gap-2 shadow-xs font-medium uppercase tracking-wider"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download My CV (PDF)</span>
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Architecture Platforms */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D1D1CB] pb-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#B3402E] uppercase font-semibold">
              Platform Foundations
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1A1D1B]">
              Signature Architecture Platforms
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('work')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#F9F7F2] bg-[#1A1D1B] hover:bg-[#B3402E] rounded transition-colors shadow-xs"
          >
            <span>View all case studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Agentic Studio */}
          <div 
            onClick={() => onSelectCaseStudy(featuredStudy)}
            className="bg-[#F2F0EA] rounded-xl border border-[#DCD9D1] p-6 sm:p-8 space-y-6 hover:border-[#707A73] transition-all cursor-pointer group shadow-2xs"
          >
            <div className="relative py-2">
              <DynamicLightingArtifact
                imageSrc={featuredStudy.artifactImage}
                altText={featuredStudy.artifactAlt}
                animalType={featuredStudy.animalType}
                aspectRatio="aspect-[16/10]"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#B3402E] font-semibold uppercase">{featuredStudy.categoryLabel}</span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1A1D1B] group-hover:text-[#B3402E] transition-colors">
                {featuredStudy.title}
              </h3>
              <p className="text-xs text-[#57615a] leading-relaxed">
                {featuredStudy.summary}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-mono font-semibold text-[#1A1D1B] group-hover:text-[#B3402E]">
              <span>EXPLORE ARCHITECTURE DEEP DIVE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 2: Unified Knowledge Platform */}
          <div 
            onClick={() => onSelectCaseStudy(secondaryStudy)}
            className="bg-[#F2F0EA] rounded-xl border border-[#DCD9D1] p-6 sm:p-8 space-y-6 hover:border-[#707A73] transition-all cursor-pointer group shadow-2xs"
          >
            <div className="relative py-2">
              <DynamicLightingArtifact
                imageSrc={secondaryStudy.artifactImage}
                altText={secondaryStudy.artifactAlt}
                animalType={secondaryStudy.animalType}
                aspectRatio="aspect-[16/10]"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#B3402E] font-semibold uppercase">{secondaryStudy.categoryLabel}</span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1A1D1B] group-hover:text-[#B3402E] transition-colors">
                {secondaryStudy.title}
              </h3>
              <p className="text-xs text-[#57615a] leading-relaxed">
                {secondaryStudy.summary}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-mono font-semibold text-[#1A1D1B] group-hover:text-[#B3402E]">
              <span>EXPLORE ARCHITECTURE DEEP DIVE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

        </div>
      </section>

      {/* Career Arc Spotlight */}
      <section className="bg-[#EFECE6] rounded-xl border border-[#D1D1CB] p-6 sm:p-8 lg:p-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono tracking-widest text-[#B3402E] uppercase font-semibold">
              Leadership Arc
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1A1D1B]">
              From Engineering Foundations to Transformation Leadership
            </h2>
            <p className="text-sm text-[#57615a] leading-relaxed">
              Explore the five distinct eras of my journey: starting in high-scale transactional systems at Aon Hewitt and Capgemini, through CoE capability building, to architecting reusable multi-agent platforms and strategic executive leadership.
            </p>
            
            <div className="pt-2">
              <button
                onClick={() => setActiveTab('journey')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#F9F7F2] bg-[#1A1D1B] hover:bg-[#B3402E] rounded transition-colors shadow-xs"
              >
                <span>EXPLORE FULL JOURNEY TIMELINE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:pr-3">
            <div 
              className="w-[70%] max-w-xs sm:max-w-sm cursor-pointer"
              onClick={() => setActiveTab('journey')}
            >
              <WatercolorSplashImage
                src={latestJourney.imageSrc}
                alt={latestJourney.imageAlt}
                period="2026 - PRESENT"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Architectural Principles / Operating Model Preview */}
      <section className="space-y-6">
        <div className="border-b border-[#D1D1CB] pb-4">
          <div className="text-xs font-mono tracking-widest text-[#B3402E] uppercase font-semibold">
            Operating Principles
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1A1D1B]">
            How I Lead AI Transformation
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-[#F2F0EA] rounded-xl border border-[#DCD9D1] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#1A1D1B] text-[#F9F7F2] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#f5dcd8]" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#1A1D1B]">
              Deterministic Governance
            </h3>
            <p className="text-xs text-[#57615a] leading-relaxed">
              No black-box autonomy in regulated domains. We institute bounded workflows, checkpointed state machines, and mandatory human signoffs for high-consequence operations.
            </p>
          </div>

          <div className="p-6 bg-[#F2F0EA] rounded-xl border border-[#DCD9D1] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#1A1D1B] text-[#F9F7F2] flex items-center justify-center">
              <Layers className="w-5 h-5 text-[#f5dcd8]" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#1A1D1B]">
              Reusable Platform Foundations
            </h3>
            <p className="text-xs text-[#57615a] leading-relaxed">
              Consolidate ingestion, guardrails, and telemetry into shared enterprise engines, enabling business units to deploy specialized copilots with minimal engineering overhead.
            </p>
          </div>

          <div className="p-6 bg-[#F2F0EA] rounded-xl border border-[#DCD9D1] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#1A1D1B] text-[#F9F7F2] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#f5dcd8]" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#1A1D1B]">
              Tangible Value Realization
            </h3>
            <p className="text-xs text-[#57615a] leading-relaxed">
              Measure AI programs not by pilot headcount, but by actual cycle time reduction, straight-through processing rates, and audited operational margin expansion.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => setActiveTab('notes')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider text-[#F9F7F2] bg-[#1A1D1B] hover:bg-[#B3402E] rounded transition-colors shadow-xs"
          >
            <span>Explore Articles & Architecture Decision Records</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};

import React from 'react';
import { JOURNEY_ERAS } from '../data/portfolioData';
import { WatercolorSplashImage } from './WatercolorSplashImage';
import { Compass, Sparkles, Layers, Cpu, ShieldCheck } from 'lucide-react';

export const JourneyView: React.FC = () => {
  const matrixThemes = [
    {
      dimension: 'Technical Architecture & Rigor',
      past: 'High-throughput transactional systems & microservices',
      present: 'Governed multi-agent orchestration, state persistence, RAG',
      future: 'Self-optimizing autonomous agent topologies with verified bounds'
    },
    {
      dimension: 'Trust, Risk & Governance',
      past: 'Data integrity, compliance audits, SOX/SOC2 controls',
      present: '4-Tier risk matrix, deterministic HITL gates, prompt guardrails',
      future: 'Continuous cryptographic provenance & ISO 42001 autonomous audits'
    },
    {
      dimension: 'Operating Model & Teams',
      past: 'Engineering delivery teams and distributed agile pods',
      present: 'AI Center of Excellence (CoE) & cross-functional federated pods',
      future: 'Strategic AI portfolio governance & executive capital allocation'
    },
    {
      dimension: 'Business Value Realization',
      past: 'Cost reduction through transactional automation',
      present: 'Operational throughput acceleration (70% cycle time reduction)',
      future: 'Net-new business capability creation and direct margin expansion'
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* Header Section */}
      <div className="border-b border-[#D1D1CB] pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#B3402E] uppercase font-semibold">
          <Compass className="w-3.5 h-3.5" />
          <span>Career Arc & Evolution</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1D1B]">
          My Journey - Past, Present & Future
        </h1>
        <p className="text-base sm:text-lg text-[#57615a] max-w-3xl leading-relaxed">
          From foundational software engineering and transactional systems to AI Center of Excellence leadership, agentic platform architecture, and enterprise transformation strategy.
        </p>
      </div>

      {/* Timeline Section: 25% (Photo) - 75% (Timeline & Narrative) Split */}
      <div className="relative space-y-16 lg:space-y-20">
        {JOURNEY_ERAS.map((era, index) => {
          const isLast = index === JOURNEY_ERAS.length - 1;
          return (
            <div 
              key={era.eraTag}
              id={`journey-era-${era.eraTag.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
            >
              
              {/* 1. Left Column: Artwork Image (3 Cols = 25%) */}
              <div className="lg:col-span-3 flex justify-center lg:justify-start">
                <div className="w-full max-w-[230px] sm:max-w-[250px]">
                  <WatercolorSplashImage
                    src={era.imageSrc}
                    alt={era.imageAlt}
                    period={era.period}
                  />
                </div>
              </div>

              {/* 2. Middle Timeline Track & Node Marker (1 Col) */}
              <div className="hidden lg:flex lg:col-span-1 justify-center relative self-stretch">
                {!isLast && (
                  <div className="absolute top-6 bottom-[-4.5rem] lg:bottom-[-5.5rem] w-[1.5px] bg-[#D1D1CB]" />
                )}
                <div className="w-8 h-8 rounded-full bg-[#F9F7F2] border-2 border-[#1A1D1B] flex items-center justify-center text-[11px] font-mono font-bold text-[#B3402E] shadow-xs z-10 mt-2">
                  {index + 1}
                </div>
              </div>

              {/* 3. Right Column: Executive Narrative & Milestones (8 Cols -> 1 + 8 = 9 Cols = 75%) */}
              <div className="lg:col-span-8 space-y-4 pt-1">
                  
                  {/* Period & Era Tag */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-sm font-bold text-[#B3402E] tracking-wider">
                      {era.period}
                    </span>
                    <span className="text-[#D1D1CB]">•</span>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#707A73]">
                      {era.eraTag}
                    </span>
                  </div>

                  {/* Era Title */}
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#1A1D1B]">
                    {era.title}
                  </h2>

                  {/* Organization & Platform Badges */}
                  <div className="flex flex-wrap gap-2">
                    {era.badges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className={`px-2.5 py-1 rounded text-xs font-mono tracking-wide ${
                          badge.variant === 'accent'
                            ? 'bg-[#B3402E] text-[#F9F7F2] font-semibold'
                            : badge.variant === 'highlight'
                            ? 'bg-[#1A1D1B] text-[#F9F7F2] font-medium'
                            : badge.variant === 'sage'
                            ? 'bg-[#d3dbd5] text-[#1A1D1B] font-medium'
                            : 'bg-[#EFECE6] text-[#57615a] border border-[#DCD9D1]'
                        }`}
                      >
                        {badge.label}
                      </span>
                    ))}
                  </div>

                  {/* Description Narrative */}
                  <p className="text-sm sm:text-base text-[#57615a] leading-relaxed">
                    {era.description}
                  </p>

                  {/* What I Carry Forward Box */}
                  <div className="p-4 bg-[#EFECE6] rounded-lg border border-[#DCD9D1] space-y-1">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#B3402E] font-bold">
                      WHAT I CARRY FORWARD:
                    </div>
                    <p className="text-xs text-[#57615a] leading-relaxed">
                      {era.carryForward}
                    </p>
                  </div>

                  {/* Evidence Card if present */}
                  {era.evidenceCard && (
                    <div className="p-3.5 bg-[#F2F0EA] rounded-lg border-l-2 border-[#1A1D1B] text-xs space-y-1">
                      <div className="font-mono font-semibold text-[#1A1D1B]">
                        {era.evidenceCard.title}
                      </div>
                      <div className="text-[#57615a]">
                        {era.evidenceCard.detail}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

    </div>
  );
};

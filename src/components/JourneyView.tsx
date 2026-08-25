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

      {/* Timeline Section: Image Left, Timeline Line Center, Text Right */}
      <div className="relative">
        
        {/* Continuous Central Architectural Vertical Rule (Desktop) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-[45.8%] w-[1.5px] bg-[#D1D1CB]" />

        <div className="space-y-16 lg:space-y-20">
          {JOURNEY_ERAS.map((era, index) => {
            return (
              <div 
                key={era.eraTag}
                id={`journey-era-${era.eraTag.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                
                {/* 1. Left Column: Artwork Image (5 Cols) */}
                <div className="lg:col-span-5">
                  <div className="w-full max-w-md mx-auto lg:max-w-none">
                    <WatercolorSplashImage
                      src={era.imageSrc}
                      alt={era.imageAlt}
                      period={era.period}
                    />
                  </div>
                </div>

                {/* 2. Middle Timeline Track & Node Marker (1 Col desktop) */}
                <div className="hidden lg:flex lg:col-span-1 justify-center relative pt-4">
                  <div className="w-8 h-8 rounded-full bg-[#F9F7F2] border-2 border-[#1A1D1B] flex items-center justify-center text-[11px] font-mono font-bold text-[#B3402E] shadow-xs z-10">
                    {index + 1}
                  </div>
                </div>

                {/* 3. Right Column: Executive Narrative & Career Milestones (6 Cols) */}
                <div className="lg:col-span-6 space-y-4 pt-1">
                  
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

      {/* Synthesis Matrix: What Connects Past, Present, and Future */}
      <div className="pt-12 border-t border-[#D1D1CB] space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono tracking-widest text-[#B3402E] uppercase font-semibold">
            Synthesis & Continuum
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1A1D1B]">
            What Connects Past, Present, and Future
          </h2>
          <p className="text-sm text-[#57615a] max-w-2xl">
            A cohesive architectural thread linking decade-long delivery discipline with cutting-edge agentic transformation.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto rounded-xl border border-[#DCD9D1] bg-[#F2F0EA] shadow-2xs">
          <table className="w-full text-left border-collapse text-xs font-sans">
            <thead>
              <tr className="border-b border-[#DCD9D1] bg-[#EFECE6] font-mono uppercase text-[#707A73]">
                <th className="p-4 font-semibold w-1/4">Strategic Dimension</th>
                <th className="p-4 font-semibold w-1/4">The Past (2010 - 2024)</th>
                <th className="p-4 font-semibold w-1/4 text-[#B3402E]">The Present (2024 - 2026)</th>
                <th className="p-4 font-semibold w-1/4 text-[#1A1D1B]">The Future Horizon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DCD9D1]">
              {matrixThemes.map((theme, idx) => (
                <tr key={idx} className="hover:bg-[#EAE7DF]/70 transition-colors">
                  <td className="p-4 font-mono font-semibold text-[#1A1D1B] bg-[#EAE7DF]/40">
                    {theme.dimension}
                  </td>
                  <td className="p-4 text-[#57615a] leading-relaxed">
                    {theme.past}
                  </td>
                  <td className="p-4 text-[#1A1D1B] font-medium leading-relaxed bg-[#f8edea]/40">
                    {theme.present}
                  </td>
                  <td className="p-4 text-[#57615a] leading-relaxed">
                    {theme.future}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

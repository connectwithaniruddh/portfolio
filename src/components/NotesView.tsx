import React, { useState } from 'react';
import { ADR_ITEMS } from '../data/portfolioData';
import { ADRItem } from '../types';
import { FileText, CheckCircle2, ChevronDown, ChevronUp, Layers, AlertCircle, ArrowRight } from 'lucide-react';

export const NotesView: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('adr-001');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <div className="space-y-16">
      
      {/* Header */}
      <div className="border-b border-[#D1D1CB] pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#B3402E] uppercase font-semibold">
          <FileText className="w-3.5 h-3.5" />
          <span>Articles & Architecture Decision Records (ADRs)</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1D1B]">
          Articles & Decision Records
        </h1>
        <p className="text-base sm:text-lg text-[#57615a] max-w-3xl leading-relaxed">
          Permanent architectural records capturing the high-consequence technical trade-offs, options evaluated, and foundational decisions made across enterprise AI deployments.
        </p>
      </div>

      {/* ADR List */}
      <div className="space-y-6">
        {ADR_ITEMS.map((adr) => {
          const isExpanded = expandedId === adr.id;
          return (
            <div
              key={adr.id}
              id={`adr-card-${adr.id}`}
              className="bg-[#F2F0EA] rounded-xl border border-[#DCD9D1] overflow-hidden transition-all shadow-2xs"
            >
              
              {/* Summary Bar (Clickable) */}
              <div
                onClick={() => toggleExpand(adr.id)}
                className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#EAE7DF] transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#B3402E]">
                      {adr.number}
                    </span>
                    <span className="text-[#D1D1CB]">•</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#1A1D1B] text-[#F9F7F2]">
                      {adr.status}
                    </span>
                    <span className="text-xs font-mono text-[#707A73]">
                      {adr.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1A1D1B]">
                    {adr.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="text-xs font-mono text-[#707A73] hidden sm:inline">
                    {isExpanded ? 'Collapse ADR' : 'Expand Record'}
                  </span>
                  <div className="p-1 rounded-full bg-[#E5E2DC] text-[#1A1D1B]">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Expanded Detail Panel */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-[#DCD9D1] bg-[#FAF8F5] space-y-6">
                  
                  {/* Context */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#707A73] font-bold">
                      1. Context & Business Drivers
                    </h4>
                    <p className="text-xs sm:text-sm text-[#57615a] leading-relaxed">
                      {adr.context}
                    </p>
                  </div>

                  {/* Options Evaluated */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#707A73] font-bold">
                      2. Architectural Options Evaluated
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {adr.optionsConsidered.map((opt, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-lg border text-xs space-y-2 ${
                            opt.selected
                              ? 'bg-[#f4efe8] border-[#B3402E]'
                              : 'bg-[#EFECE6] border-[#DCD9D1]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono font-semibold text-[#1A1D1B]">
                              {opt.name}
                            </span>
                            {opt.selected ? (
                              <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase bg-[#B3402E] text-[#F9F7F2] rounded">
                                SELECTED
                              </span>
                            ) : (
                              <span className="text-[9px] font-mono text-[#707A73] uppercase">
                                REJECTED
                              </span>
                            )}
                          </div>
                          <div className="text-[#355e3b]">
                            <span className="font-mono font-bold">Pros:</span> {opt.pros}
                          </div>
                          <div className="text-[#8c2d19]">
                            <span className="font-mono font-bold">Cons:</span> {opt.cons}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decision */}
                  <div className="p-4 bg-[#EFECE6] rounded-lg border-l-4 border-[#B3402E] space-y-1">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#B3402E] font-bold">
                      3. Adopted Decision
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1A1D1B] font-medium leading-relaxed">
                      {adr.decision}
                    </p>
                  </div>

                  {/* Consequences */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#707A73] font-bold">
                      4. Quantified Consequences & Long-term Impacts
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#57615a]">
                      {adr.consequences.map((cons, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#B3402E] shrink-0 mt-0.5" />
                          <span>{cons}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};

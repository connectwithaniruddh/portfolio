import React, { useEffect } from 'react';
import { CaseStudy } from '../types';
import { DynamicLightingArtifact } from './DynamicLightingArtifact';
import { X, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Cpu, Layers, Sparkles } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#1A1D1B]/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-[#F9F7F2] text-[#1A1D1B] rounded-xl border border-[#D1D1CB] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="sticky top-0 z-30 bg-[#F9F7F2]/95 backdrop-blur-md px-6 py-4 border-b border-[#D1D1CB] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#B3402E] font-semibold">
              {caseStudy.categoryLabel}
            </span>
            {caseStudy.badgeStatus && (
              <>
                <span className="text-[#D1D1CB]">•</span>
                <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase bg-[#1A1D1B] text-[#F9F7F2] rounded">
                  {caseStudy.badgeStatus}
                </span>
              </>
            )}
          </div>
          
          <button
            id="close-case-study-modal"
            onClick={onClose}
            className="p-1.5 rounded-md text-[#707A73] hover:text-[#1A1D1B] hover:bg-[#EFECE6] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Title & Top Overview with 3D Artifact */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1A1D1B]">
                {caseStudy.title}
              </h2>
              <p className="text-base text-[#57615a] leading-relaxed">
                {caseStudy.summary}
              </p>
              
              {caseStudy.scale && (
                <div className="p-3 bg-[#EFECE6] rounded-lg border border-[#DCD9D1] text-xs font-mono text-[#1A1D1B] flex items-center gap-2">
                  <span className="text-[#B3402E] font-bold">SCALE:</span>
                  <span>{caseStudy.scale}</span>
                </div>
              )}

              {caseStudy.technologies && (
                <div className="text-xs font-mono text-[#707A73]">
                  <span className="text-[#1A1D1B] font-semibold">STACK:</span> {caseStudy.technologies}
                </div>
              )}
            </div>

            {/* Dynamic Lighting Sculpture in Modal */}
            <div className="md:col-span-5">
              <div className="w-full max-w-[280px] mx-auto py-2">
                <DynamicLightingArtifact
                  imageSrc={caseStudy.artifactImage}
                  altText={caseStudy.artifactAlt}
                  animalType={caseStudy.animalType}
                  aspectRatio="aspect-square"
                />
              </div>
            </div>
          </div>

          {/* Quantitative Outcomes & Evidence */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#707A73] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B3402E]" />
              <span>Key Quantitative Outcomes</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.outcomesAndEvidence.map((outcome, idx) => (
                <div key={idx} className="p-4 bg-[#EFECE6] rounded-lg border border-[#DCD9D1] space-y-1">
                  <div className="font-serif text-3xl font-bold text-[#B3402E]">
                    {outcome.metric}
                  </div>
                  <div className="text-xs font-mono font-semibold text-[#1A1D1B]">
                    {outcome.label}
                  </div>
                  <div className="text-[11px] text-[#707A73] leading-tight">
                    {outcome.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Before vs After Transformation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#f8e9e7] rounded-lg border border-[#f0c2bc] space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#B3402E] font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Before State (The Problem)</span>
              </div>
              <p className="text-xs text-[#57615a] leading-relaxed">
                {caseStudy.beforeState}
              </p>
            </div>

            <div className="p-4 bg-[#e8efe9] rounded-lg border border-[#c4d6c7] space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#355e3b] font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Transformation Promise (Delivered)</span>
              </div>
              <p className="text-xs text-[#2a4a2f] leading-relaxed">
                {caseStudy.transformationPromise}
              </p>
            </div>
          </div>

          {/* Decisive Choices & Architectural Trade-offs */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#707A73] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#B3402E]" />
              <span>Decisive Architectural Choices & Trade-offs</span>
            </h3>
            <div className="space-y-3">
              {caseStudy.decisiveChoices.map((choice, idx) => (
                <div key={idx} className="p-4 bg-[#F2F0EA] rounded-lg border border-[#DCD9D1] space-y-2">
                  <div className="text-sm font-semibold text-[#1A1D1B] flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1A1D1B] text-[#F9F7F2] text-[10px] font-mono flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span>{choice.title}</span>
                  </div>
                  <div className="text-xs font-mono text-[#707A73]">
                    <span className="text-[#1A1D1B]">OPTIONS:</span> {choice.options}
                  </div>
                  <div className="text-xs text-[#57615a] bg-[#EAE7DF] p-2.5 rounded">
                    <span className="font-mono font-semibold text-[#1A1D1B]">TRADE-OFF:</span> {choice.tradeoff}
                  </div>
                  <div className="text-xs text-[#1A1D1B] font-medium pl-2 border-l-2 border-[#B3402E]">
                    <span className="font-mono text-[#B3402E] font-bold">DECISION:</span> {choice.decision}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust & Control Model */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#707A73] flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B3402E]" />
              <span>Trust, Governance & Control Model</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.trustAndControl.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-[#EFECE6] rounded-lg border border-[#DCD9D1] space-y-1">
                  <div className="text-xs font-mono font-semibold text-[#1A1D1B]">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#57615a] leading-relaxed">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reusable Advantage & Lessons */}
          <div className="p-4 bg-[#EFECE6] rounded-lg border border-[#DCD9D1] space-y-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#B3402E] font-bold">
                REUSABLE PLATFORM ADVANTAGE:
              </span>
              <p className="text-xs text-[#57615a] mt-1 leading-relaxed">
                {caseStudy.reusableAdvantage}
              </p>
            </div>
            <div className="pt-2 border-t border-[#DCD9D1]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#707A73] font-bold">
                LESSONS & BOUNDARIES:
              </span>
              <p className="text-xs text-[#57615a] mt-1 leading-relaxed">
                {caseStudy.lessonsAndLimits}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#F9F7F2]/95 backdrop-blur-md px-6 py-4 border-t border-[#D1D1CB] flex items-center justify-between">
          <div className="text-xs font-mono text-[#707A73]">
            Personal Role: <span className="text-[#1A1D1B] font-semibold">{caseStudy.personalRole}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider bg-[#1A1D1B] text-[#F9F7F2] hover:bg-[#B3402E] rounded transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};

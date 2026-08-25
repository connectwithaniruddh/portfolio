import React, { useState, useMemo } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy, CategoryFilter } from '../types';
import { DynamicLightingArtifact } from './DynamicLightingArtifact';
import { ArrowRight, ChevronRight, Layers } from 'lucide-react';

interface SelectedWorkViewProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const SelectedWorkView: React.FC<SelectedWorkViewProps> = ({ onSelectCaseStudy }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('ALL');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: 'ALL', label: 'ALL' },
    { id: 'ENTERPRISE FOUNDATIONS', label: 'ENTERPRISE FOUNDATIONS' },
    { id: 'GOVERNED BUSINESS SYSTEMS', label: 'GOVERNED BUSINESS SYSTEMS' },
    { id: 'DOMAIN SOLUTIONS', label: 'DOMAIN SOLUTIONS' },
    { id: 'ADOPTION & ADVISORY', label: 'ADOPTION & ADVISORY' }
  ];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: CASE_STUDIES.length };
    CASE_STUDIES.forEach((cs) => {
      counts[cs.category] = (counts[cs.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered case studies
  const filteredStudies = useMemo(() => {
    if (activeCategory === 'ALL') {
      return CASE_STUDIES;
    }
    return CASE_STUDIES.filter((cs) => cs.category === activeCategory);
  }, [activeCategory]);

  // Featured case study (Agentic Studio)
  const featuredStudy = useMemo(() => {
    return CASE_STUDIES.find((cs) => cs.id === 'agentic-studio') || CASE_STUDIES[0];
  }, []);

  // Paginated studies (excluding featured if in 'ALL' view on page 1)
  const displayStudies = useMemo(() => {
    if (activeCategory === 'ALL' && currentPage === 1) {
      return filteredStudies.filter((cs) => cs.id !== 'agentic-studio').slice(0, itemsPerPage);
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredStudies.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredStudies, activeCategory, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(
    (activeCategory === 'ALL' && currentPage === 1
      ? filteredStudies.length - 1
      : filteredStudies.length) / itemsPerPage
  ) || 1;

  return (
    <div className="space-y-12">
      
      {/* Header Section */}
      <div className="border-b border-[#D1D1CB] pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#B3402E] uppercase font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>Architecture Archive & Delivered Systems</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1D1B]">
          My Work
        </h1>
        <p className="text-base sm:text-lg text-[#57615a] max-w-3xl leading-relaxed">
          Case studies in enterprise AI platforms, multi-agent orchestration, governed business automation, predictive analytics, and computer vision.
        </p>
      </div>

      {/* Filter Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E5E2DC] no-scrollbar">
        {categories.map((cat) => {
          const count = categoryCounts[cat.id] || 0;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`filter-tab-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setCurrentPage(1);
              }}
              className={`whitespace-nowrap px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-md transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-[#1A1D1B] text-[#F9F7F2] font-semibold shadow-xs'
                  : 'bg-transparent text-[#707A73] hover:text-[#1A1D1B] hover:bg-[#EFECE6]'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-[#313633] text-[#F9F7F2]' : 'bg-[#E5E2DC] text-[#707A73]'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Featured Case Study Hero Banner (Shown when 'ALL' is selected on page 1) */}
      {activeCategory === 'ALL' && currentPage === 1 && (
        <div className="relative bg-[#EFECE6] rounded-xl border border-[#D1D1CB] p-6 sm:p-8 lg:p-10 shadow-xs overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase bg-[#B3402E] text-[#F9F7F2] rounded">
                  FEATURED FOUNDATION
                </span>
                <span className="text-xs font-mono tracking-widest text-[#707A73]">
                  {featuredStudy.categoryLabel}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1D1B]">
                {featuredStudy.title}
              </h2>

              <p className="text-sm sm:text-base text-[#57615a] leading-relaxed">
                {featuredStudy.summary}
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-[#DCD9D1]">
                {featuredStudy.outcomesAndEvidence.map((outcome, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#B3402E]">
                      {outcome.metric}
                    </div>
                    <div className="text-[11px] font-mono text-[#1A1D1B] font-semibold leading-tight">
                      {outcome.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  id="featured-read-case-study"
                  onClick={() => onSelectCaseStudy(featuredStudy)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#F9F7F2] bg-[#1A1D1B] hover:bg-[#B3402E] rounded transition-colors shadow-xs"
                >
                  <span>READ FULL CASE STUDY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Dynamic 3D Lighting Origami Lion Sculpture */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                className="w-full max-w-sm"
                onClick={() => onSelectCaseStudy(featuredStudy)}
              >
                <DynamicLightingArtifact
                  imageSrc={featuredStudy.artifactImage}
                  altText={featuredStudy.artifactAlt}
                  animalType={featuredStudy.animalType}
                  aspectRatio="aspect-square"
                  isFeatured={true}
                />
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Grid of Case Studies */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#707A73]">
            {activeCategory === 'ALL' ? 'Delivered Systems & Patterns' : `${activeCategory} (${filteredStudies.length})`}
          </h3>
          <span className="text-xs font-mono text-[#707A73]">
            Showing {displayStudies.length} of {filteredStudies.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayStudies.map((study) => (
            <div
              key={study.id}
              id={`case-study-card-${study.id}`}
              onClick={() => onSelectCaseStudy(study)}
              className="bg-[#F2F0EA] rounded-xl border border-[#DCD9D1] p-6 flex flex-col justify-between hover:border-[#707A73] transition-all duration-200 cursor-pointer group shadow-2xs hover:shadow-md"
            >
              <div className="space-y-4">
                
                {/* Dynamic 3D Lighting Origami Sculpture */}
                <div className="relative py-2">
                  <DynamicLightingArtifact
                    imageSrc={study.artifactImage}
                    altText={study.artifactAlt}
                    animalType={study.animalType}
                    aspectRatio="aspect-[4/3]"
                  />
                </div>

                {/* Tags & Status */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#B3402E] font-semibold">
                    {study.categoryLabel}
                  </span>
                  {study.badgeStatus && (
                    <span className="px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase bg-[#1A1D1B] text-[#F9F7F2] rounded">
                      {study.badgeStatus}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h4 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#1A1D1B] group-hover:text-[#B3402E] transition-colors">
                  {study.title}
                </h4>

                {/* Summary */}
                <p className="text-xs text-[#57615a] leading-relaxed line-clamp-3">
                  {study.summary}
                </p>

                {/* Tech / Scale Pills */}
                {study.scale && (
                  <div className="text-[11px] font-mono text-[#707A73] bg-[#EAE7DF] px-2.5 py-1.5 rounded truncate">
                    {study.scale}
                  </div>
                )}
              </div>

              {/* Card Footer Button */}
              <div className="pt-5 mt-4 border-t border-[#DCD9D1] flex items-center justify-between text-xs font-mono text-[#1A1D1B] group-hover:text-[#B3402E] transition-colors">
                <span className="font-semibold uppercase tracking-wider">Explore Architecture</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-8 border-t border-[#D1D1CB]">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded border border-[#DCD9D1] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#EFECE6] text-[#1A1D1B]"
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-8 h-8 text-xs font-mono rounded flex items-center justify-center transition-colors ${
                currentPage === pageNum
                  ? 'bg-[#1A1D1B] text-[#F9F7F2] font-semibold'
                  : 'border border-[#DCD9D1] text-[#707A73] hover:bg-[#EFECE6] hover:text-[#1A1D1B]'
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded border border-[#DCD9D1] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#EFECE6] text-[#1A1D1B]"
          >
            Next
          </button>
        </div>
      )}

    </div>
  );
};

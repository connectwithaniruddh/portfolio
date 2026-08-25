import React from 'react';
import { ShieldCheck, Cpu, Layers, GitBranch, CheckCircle2, Sliders, Users, Award } from 'lucide-react';

export const LeadershipView: React.FC = () => {
  const tiers = [
    {
      tier: 'Tier 1',
      title: 'Autonomous & High Blast-Radius',
      scope: 'Direct customer commitments, automated money disbursements, statutory compliance filings',
      governance: 'Mandatory cross-functional AI Steering Committee review, dual-model verification, non-bypassable Human-in-the-Loop gate.',
      badgeColor: 'bg-[#B3402E] text-[#F9F7F2]'
    },
    {
      tier: 'Tier 2',
      title: 'Governed Transactional Systems',
      scope: 'ERP invoice matching, engineering drawing defect flagging, claim estimation triage',
      governance: 'Dynamic confidence routing (>98% straight-through, <98% operator queue), weekly drift auditing, immutable logging.',
      badgeColor: 'bg-[#1A1D1B] text-[#F9F7F2]'
    },
    {
      tier: 'Tier 3',
      title: 'Internal Knowledge Copilots',
      scope: 'Enterprise policy search, HR/benefits advisory, engineering code assistance',
      governance: 'Bounded RAG, strict document ACL filtering, mandatory source attribution scoring, zero data retention agreements.',
      badgeColor: 'bg-[#57615a] text-[#F9F7F2]'
    },
    {
      tier: 'Tier 4',
      title: 'Personal Productivity Utilities',
      scope: 'Meeting summarization, email drafting, brainstorming, scratchpad analysis',
      governance: 'Standard enterprise LLM proxy, automated PII masking, token usage budgets, brand safety guardrails.',
      badgeColor: 'bg-[#E5E2DC] text-[#1A1D1B]'
    }
  ];

  const architectureContinuum = [
    {
      archetype: 'Deterministic Rules Engine',
      bestFor: 'Statutory compliance, arithmetic totals, hard business constraints',
      risk: 'Zero hallucination risk; low adaptability to unstructured variations',
      example: 'Tax calculation, ERISA arithmetic checks'
    },
    {
      archetype: 'Bounded RAG Workflow',
      bestFor: 'Policy lookup, contract clause extraction, technical documentation search',
      risk: 'Controlled hallucination via citation verification & groundness scoring',
      example: 'Unified Knowledge Platform, SensAI'
    },
    {
      archetype: 'Human-in-the-Loop Copilot',
      bestFor: 'Complex professional workpaper drafting, engineering drawing inspection',
      risk: 'Auditor maintains 100% legal responsibility; model acts as high-speed accelerator',
      example: 'EBP Audit Automation, CAD Review'
    },
    {
      archetype: 'Governed Multi-Agent Graph',
      bestFor: 'Multi-step research, cross-system reconciliation, dynamic routing',
      risk: 'Requires Temporal state checkpointing and deterministic graph transitions',
      example: 'Agentic Studio, Finance Operations Automation'
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* Header */}
      <div className="border-b border-[#D1D1CB] pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#B3402E] uppercase font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>Strategic Frameworks & Operating Model</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1D1B]">
          How I Lead AI Transformation
        </h1>
        <p className="text-base sm:text-lg text-[#57615a] max-w-3xl leading-relaxed">
          The principles, organizational operating models, and governance blueprints I deploy to scale enterprise AI safely from fragmented pilots into enterprise-grade production platforms.
        </p>
      </div>

      {/* 1. The Hub & Spoke CoE Operating Model */}
      <section className="space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-mono uppercase tracking-widest text-[#707A73]">
            Organizational Structure
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1D1B]">
            Federated Hub & Spoke Operating Model
          </h2>
          <p className="text-sm text-[#57615a] max-w-2xl">
            Balancing centralized architectural standards with decentralized business unit velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Central Hub */}
          <div className="lg:col-span-6 bg-[#EFECE6] p-6 rounded-xl border border-[#D1D1CB] space-y-4">
            <div className="flex items-center justify-between border-b border-[#DCD9D1] pb-3">
              <div className="font-serif text-xl font-medium text-[#1A1D1B]">
                The Central CoE Hub
              </div>
              <span className="px-2 py-0.5 text-[10px] font-mono bg-[#1A1D1B] text-[#F9F7F2] rounded uppercase">
                Enterprise Core
              </span>
            </div>
            <p className="text-xs text-[#57615a] leading-relaxed">
              Provides the enterprise foundation: shared infrastructure, security guardrails, foundation model broker agreements, and evaluation harnesses.
            </p>
            <ul className="space-y-2 text-xs font-mono text-[#1A1D1B]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B3402E] shrink-0 mt-0.5" />
                <span>Agentic Studio: Shared orchestration, state schemas & memory layers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B3402E] shrink-0 mt-0.5" />
                <span>Enterprise Guardrail Proxy: PII redaction, token budgets & rate-limiting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B3402E] shrink-0 mt-0.5" />
                <span>SOC2 / ISO 42001 Auditing: Universal telemetry & observability pane</span>
              </li>
            </ul>
          </div>

          {/* Federated Spokes */}
          <div className="lg:col-span-6 bg-[#F2F0EA] p-6 rounded-xl border border-[#DCD9D1] space-y-4">
            <div className="flex items-center justify-between border-b border-[#DCD9D1] pb-3">
              <div className="font-serif text-xl font-medium text-[#1A1D1B]">
                Federated Domain Spokes
              </div>
              <span className="px-2 py-0.5 text-[10px] font-mono bg-[#707A73] text-[#F9F7F2] rounded uppercase">
                Business Units
              </span>
            </div>
            <p className="text-xs text-[#57615a] leading-relaxed">
              Domain pods embedded directly within business units, owning specialized workflows, prompt refinement, and business outcome metrics.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-[#EAE7DF] rounded text-xs space-y-1">
                <div className="font-mono font-semibold text-[#1A1D1B]">Audit Pod</div>
                <div className="text-[11px] text-[#707A73]">ERISA checks, sampling workpapers</div>
              </div>
              <div className="p-3 bg-[#EAE7DF] rounded text-xs space-y-1">
                <div className="font-mono font-semibold text-[#1A1D1B]">Finance Pod</div>
                <div className="text-[11px] text-[#707A73]">3-way matching, SAP integrations</div>
              </div>
              <div className="p-3 bg-[#EAE7DF] rounded text-xs space-y-1">
                <div className="font-mono font-semibold text-[#1A1D1B]">Engineering Pod</div>
                <div className="text-[11px] text-[#707A73]">CAD blueprint review, ISO code rules</div>
              </div>
              <div className="p-3 bg-[#EAE7DF] rounded text-xs space-y-1">
                <div className="font-mono font-semibold text-[#1A1D1B]">Operations Pod</div>
                <div className="text-[11px] text-[#707A73]">Logistics routing, customer care</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. 4-Tier Risk & Intake Governance Framework */}
      <section className="space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B3402E] font-semibold">
            Intake & Risk Management
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1D1B]">
            The 4-Tier AI Risk Classification Matrix
          </h2>
          <p className="text-sm text-[#57615a] max-w-2xl">
            A standardized risk taxonomy ensuring low-risk productivity apps deploy in days while high-consequence transactional systems undergo rigorous verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((t) => (
            <div key={t.tier} className="p-6 bg-[#F2F0EA] rounded-xl border border-[#DCD9D1] space-y-3">
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 text-xs font-mono rounded font-semibold ${t.badgeColor}`}>
                  {t.tier}
                </span>
                <span className="text-xs font-mono text-[#707A73]">Risk Level</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1A1D1B]">
                {t.title}
              </h3>
              <div className="text-xs font-sans text-[#57615a]">
                <span className="font-mono font-semibold text-[#1A1D1B]">Scope:</span> {t.scope}
              </div>
              <div className="p-3 bg-[#EAE7DF] rounded text-xs text-[#1A1D1B] leading-relaxed border-l-2 border-[#B3402E]">
                <span className="font-mono font-bold text-[#B3402E]">Governance Gate:</span> {t.governance}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Architecture Selection Continuum */}
      <section className="space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-mono uppercase tracking-widest text-[#707A73]">
            Architectural Decision Making
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1D1B]">
            The Pattern Selection Continuum
          </h2>
          <p className="text-sm text-[#57615a] max-w-2xl">
            Matching the simplest sufficient architecture to the problem domain - avoiding over-engineering autonomous agents when deterministic workflows or rules suffice.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#DCD9D1] bg-[#F2F0EA]">
          <table className="w-full text-left border-collapse text-xs font-sans">
            <thead>
              <tr className="border-b border-[#DCD9D1] bg-[#EFECE6] font-mono uppercase text-[#707A73]">
                <th className="p-4 font-semibold">Architectural Pattern</th>
                <th className="p-4 font-semibold">Best Applied For</th>
                <th className="p-4 font-semibold">Risk & Control Profile</th>
                <th className="p-4 font-semibold">Representative Implementation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DCD9D1]">
              {architectureContinuum.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#EAE7DF]/70 transition-colors">
                  <td className="p-4 font-mono font-semibold text-[#1A1D1B]">
                    {item.archetype}
                  </td>
                  <td className="p-4 text-[#57615a]">
                    {item.bestFor}
                  </td>
                  <td className="p-4 text-[#1A1D1B]">
                    {item.risk}
                  </td>
                  <td className="p-4 font-mono text-[#B3402E]">
                    {item.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

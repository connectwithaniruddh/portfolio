import React, { useState, useEffect } from 'react';
import { X, Mail, Linkedin, Copy, Check, FileText, ArrowUpRight, MapPin, Download } from 'lucide-react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'connectwithaniruddh@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/aniruddhparalikar/';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#1A1D1B]/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div
        className="relative w-full max-w-xl bg-[#F9F7F2] text-[#1A1D1B] rounded-xl border border-[#D1D1CB] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-[#F9F7F2]/95 px-6 py-4 border-b border-[#D1D1CB] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B3402E]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#1A1D1B] font-semibold">
              Executive Engagement & Connect
            </span>
          </div>
          <button
            id="close-connect-modal"
            onClick={onClose}
            className="p-1.5 rounded text-[#707A73] hover:text-[#1A1D1B] hover:bg-[#EFECE6] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          <div className="space-y-2">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1A1D1B]">
              Let's Connect & Transform
            </h2>
            <p className="text-sm text-[#57615a] leading-relaxed">
              Available for enterprise AI program leadership, executive CoE advisory, architecture review boards, and transformative agentic platform consulting.
            </p>
          </div>

          {/* Direct Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* LinkedIn Card */}
            <div className="p-4 bg-[#EFECE6] rounded-lg border border-[#DCD9D1] space-y-3 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-[#707A73] font-bold">LinkedIn Network</span>
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
              </div>
              <div className="font-serif text-base font-medium text-[#1A1D1B]">
                Aniruddh Paralikar
              </div>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-3 rounded text-xs font-mono bg-[#1A1D1B] hover:bg-[#B3402E] text-[#F9F7F2] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Email Card */}
            <div className="p-4 bg-[#EFECE6] rounded-lg border border-[#DCD9D1] space-y-3 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-[#707A73] font-bold">Direct Email</span>
                <Mail className="w-4 h-4 text-[#B3402E]" />
              </div>
              <div className="font-mono text-xs font-semibold text-[#1A1D1B] truncate">
                {emailAddress}
              </div>
              <button
                id="copy-email-btn"
                onClick={handleCopyEmail}
                className="w-full py-2 px-3 rounded text-xs font-mono bg-[#EAE7DF] hover:bg-[#DCD9D1] text-[#1A1D1B] border border-[#D1D1CB] transition-colors flex items-center justify-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#355e3b]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
              </button>
            </div>

            {/* Advisory Scope Card */}
            <div className="p-4 bg-[#EFECE6] rounded-lg border border-[#DCD9D1] space-y-3 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-[#707A73] font-bold">Advisory Scope</span>
                <MapPin className="w-4 h-4 text-[#B3402E]" />
              </div>
              <div className="text-xs font-mono font-semibold text-[#1A1D1B]">
                Global AI & Data CoE
              </div>
              <div className="text-[11px] font-mono text-[#57615a]">
                Enterprise Architecture & Strategy
              </div>
            </div>

            {/* Resume / CV Card */}
            <div className="p-4 bg-[#EFECE6] rounded-lg border border-[#DCD9D1] space-y-3 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-[#707A73] font-bold">Executive Resume</span>
                <FileText className="w-4 h-4 text-[#B3402E]" />
              </div>
              <div className="text-xs font-mono text-[#57615a]">
                AI Transformation CoE Resume
              </div>
              <a
                href="./Aniruddh Paralikar - AI Transformation CoE.pdf"
                download="Aniruddh Paralikar - AI Transformation CoE.pdf"
                className="w-full py-2 px-3 rounded text-xs font-mono bg-[#B3402E] hover:bg-[#963323] text-[#F9F7F2] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download My CV (PDF)</span>
              </a>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#F9F7F2]/95 px-6 py-3 border-t border-[#D1D1CB] text-[11px] font-mono text-[#707A73] flex items-center justify-between">
          <span>LinkedIn: linkedin.com/in/aniruddhparalikar</span>
          <button
            onClick={onClose}
            className="text-[#1A1D1B] font-semibold hover:underline"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { TabType } from '../types';
import { ArrowUpRight, Mail, Linkedin, Heart } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
  onOpenConnect: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenConnect }) => {
  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1D1B] text-[#F9F7F2] border-t border-[#313633] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand & Direct Contact */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-2xl font-medium tracking-tight text-[#F9F7F2]">
                Aniruddh Paralikar
              </h3>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B3402E] mt-1" />
            </div>
            <p className="text-xs font-mono tracking-widest uppercase text-[#A0AAA3]">
              Enterprise AI Transformation Leader & Architect
            </p>
            <p className="text-xs font-sans text-[#C2C9C4] leading-relaxed max-w-xl">
              16+ years translating business strategy into governed multi-agent systems, Microsoft Foundry solutions, and scalable AI Centers of Excellence.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
              <button
                onClick={onOpenConnect}
                className="inline-flex items-center gap-1.5 text-[#B3402E] hover:text-[#f5dcd8] transition-colors font-semibold"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[#57615a]">•</span>
              <a
                href="mailto:connectwithaniruddh@gmail.com"
                className="inline-flex items-center gap-1.5 text-[#C2C9C4] hover:text-[#F9F7F2] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#B3402E]" />
                <span>connectwithaniruddh@gmail.com</span>
              </a>
              <span className="text-[#57615a]">•</span>
              <a
                href="https://www.linkedin.com/in/aniruddhparalikar/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#A0AAA3] hover:text-[#F9F7F2] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Minimal Navigation Links */}
          <div className="md:col-span-5 flex flex-col sm:flex-row sm:items-start justify-end gap-8 pt-2 md:pt-0 border-t md:border-t-0 border-[#2E3330]">
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#707A73] font-semibold">
                Navigation
              </div>
              <ul className="space-y-1.5 text-xs font-mono uppercase tracking-wider">
                <li>
                  <button
                    onClick={() => handleNavClick('home')}
                    className="text-[#C2C9C4] hover:text-[#F9F7F2] transition-colors"
                  >
                    HOME
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('work')}
                    className="text-[#C2C9C4] hover:text-[#F9F7F2] transition-colors"
                  >
                    MY WORK
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('journey')}
                    className="text-[#C2C9C4] hover:text-[#F9F7F2] transition-colors"
                  >
                    JOURNEY
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('notes')}
                    className="text-[#C2C9C4] hover:text-[#F9F7F2] transition-colors"
                  >
                    ARTICLES
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#707A73] font-semibold">
                Actions
              </div>
              <ul className="space-y-1.5 text-xs font-mono uppercase tracking-wider">
                <li>
                  <a
                    href="./Aniruddh Paralikar - AI Transformation CoE.docx"
                    download="Aniruddh Paralikar - AI Transformation CoE.docx"
                    className="text-[#B3402E] hover:text-[#f5dcd8] transition-colors font-semibold"
                  >
                    DOWNLOAD CV
                  </a>
                </li>
                <li>
                  <button
                    onClick={onOpenConnect}
                    className="text-[#C2C9C4] hover:text-[#F9F7F2] transition-colors"
                  >
                    CONNECT
                  </button>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Minimal Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#2B302D] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#707A73]">
          <div>
            © {new Date().getFullYear()} Aniruddh Paralikar. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-[#A0AAA3]">
              <span>Built with</span>
              <Heart className="w-3.5 h-3.5 text-[#B3402E] fill-[#B3402E]" />
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#A0AAA3] hover:text-[#F9F7F2] transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

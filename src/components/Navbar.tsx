import React, { useState } from 'react';
import { TabType } from '../types';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenConnect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenConnect
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabType; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'work', label: 'WORK' },
    { id: 'journey', label: 'JOURNEY' },
    { id: 'notes', label: 'ARTICLES' }
  ];

  const handleNavClick = (id: TabType) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F9F7F2]/90 backdrop-blur-md border-b border-[#D1D1CB] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group flex flex-col justify-center"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#1A1D1B] group-hover:text-[#B3402E] transition-colors">
                Aniruddh Paralikar
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B3402E] mt-1 hidden sm:inline-block" />
            </div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#707A73]">
              AI Transformation Leader & Architect
            </p>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-xs font-mono tracking-widest uppercase transition-all relative ${
                    isActive
                      ? 'text-[#1A1D1B] font-semibold'
                      : 'text-[#707A73] hover:text-[#1A1D1B]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#B3402E]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Connect Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="header-connect-btn"
              onClick={onOpenConnect}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#F9F7F2] bg-[#1A1D1B] hover:bg-[#B3402E] rounded transition-colors duration-200 shadow-sm"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenConnect}
              className="px-2.5 py-1.5 text-[11px] font-mono uppercase tracking-wider text-[#F9F7F2] bg-[#1A1D1B] rounded"
            >
              CONNECT
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-[#1A1D1B] hover:bg-[#EFECE6] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F9F7F2] border-b border-[#D1D1CB] px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 text-sm font-mono tracking-wider uppercase rounded ${
                activeTab === item.id
                  ? 'bg-[#EFECE6] text-[#B3402E] font-semibold'
                  : 'text-[#707A73] hover:text-[#1A1D1B]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

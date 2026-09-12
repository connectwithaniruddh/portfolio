/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabType, CaseStudy } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { SelectedWorkView } from './components/SelectedWorkView';
import { JourneyView } from './components/JourneyView';
import { NotesView } from './components/NotesView';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ConnectModal } from './components/ConnectModal';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  // Synchronize hash with tab for shareability
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'work', 'journey', 'notes', 'articles'].includes(hash)) {
        if (hash === 'articles') {
          setActiveTab('notes');
        } else {
          setActiveTab(hash as TabType);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.location.hash = tab === 'notes' ? 'articles' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F2] text-[#1A1D1B]">
      
      {/* Top Editorial Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenConnect={() => setIsConnectOpen(true)}
      />

      {/* Main Content View with Smooth Transition */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3 pb-12 sm:pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: 'easeInOut' }}
          >
            {activeTab === 'home' && (
              <HomeView
                setActiveTab={handleTabChange}
                onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
                onOpenConnect={() => setIsConnectOpen(true)}
              />
            )}

            {activeTab === 'work' && (
              <SelectedWorkView
                onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
              />
            )}

            {activeTab === 'journey' && (
              <JourneyView />
            )}

            {activeTab === 'notes' && (
              <NotesView />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Case Study Detail Modal / Slide-over */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Connect & Advisory Modal */}
      <ConnectModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
      />

      {/* Editorial Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenConnect={() => setIsConnectOpen(true)}
      />

    </div>
  );
}

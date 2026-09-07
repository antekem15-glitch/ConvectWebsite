import React, { useState } from 'react';
import HeroAuthority from './components/HeroAuthority';
import NicheMatrix from './components/NicheMatrix';
import ProblemSpeedLeak from './components/ProblemSpeedLeak';
import SolutionPillars from './components/SolutionPillars';
import PricingMatrix from './components/PricingMatrix';
import LeadQualifierFunnel from './components/LeadQualifierFunnel';
import LegalFooter from './components/LegalFooter';
import CookieBanner from './components/CookieBanner';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToFunnel = (plan = null) => {
    if (plan) setSelectedPlan(plan);
    const funnelEl = document.getElementById('funnel');
    if (funnelEl) {
      funnelEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0B0F17]/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Klickbarer Firmenname -> Scroll nach oben */}
          <button
            onClick={scrollToTop}
            className="text-lg font-black tracking-wider text-white hover:text-blue-400 transition-colors focus:outline-none cursor-pointer"
            aria-label="Nach oben scrollen"
          >
            CONVECT
          </button>

          <button
            onClick={() => scrollToFunnel()}
            className="text-xs font-bold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer"
          >
            Pipeline-Audit anfordern
          </button>
        </div>
      </header>

      {/* Sections */}
      <main>
        <HeroAuthority onCtaClick={() => scrollToFunnel()} />
        <NicheMatrix />
        <ProblemSpeedLeak />
        <SolutionPillars />
        <PricingMatrix onSelectTier={(tier) => scrollToFunnel(tier)} />
        <LeadQualifierFunnel
          selectedPlan={selectedPlan}
          onResetPlan={() => setSelectedPlan(null)}
        />
      </main>

      <LegalFooter />
      <CookieBanner />
    </div>
  );
}
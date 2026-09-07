import React, { useState, useEffect, Suspense, lazy } from 'react';
import HeroAuthority from './components/HeroAuthority';
import NicheMatrix from './components/NicheMatrix';
import CookieBanner from './components/CookieBanner';

// Untere Abschnitte erst laden, wenn der Hero fertig gerendert ist
const ProblemSpeedLeak = lazy(() => import('./components/ProblemSpeedLeak'));
const SolutionPillars = lazy(() => import('./components/SolutionPillars'));
const PricingMatrix = lazy(() => import('./components/PricingMatrix'));
const LeadQualifierFunnel = lazy(() => import('./components/LeadQualifierFunnel'));
const LegalFooter = lazy(() => import('./components/LegalFooter'));

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loadRest, setLoadRest] = useState(false);

  // Lädt die restlichen Abschnitte verzögert nach, damit Hero & LCP ungestört sofort rendern
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(() => setLoadRest(true));
      return () => window.cancelIdleCallback(idleId);
    } else {
      const timer = setTimeout(() => setLoadRest(true), 200);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToFunnel = (plan = null) => {
    if (plan) setSelectedPlan(plan);
    setLoadRest(true);
    setTimeout(() => {
      const funnelEl = document.getElementById('funnel');
      if (funnelEl) {
        funnelEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0B0F17]/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
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

      <main>
        {/* Sofort sichtbarer Bereich (Above-The-Fold) -> LCP Priorität */}
        <HeroAuthority onCtaClick={() => scrollToFunnel()} />
        <NicheMatrix />

        {/* Deferred Sections: blockieren weder LCP noch First Paint */}
        {loadRest ? (
          <Suspense fallback={<div className="h-64 bg-[#0B0F17]" />}>
            <ProblemSpeedLeak />
            <SolutionPillars />
            <PricingMatrix onSelectTier={(tier) => scrollToFunnel(tier)} />
            <LeadQualifierFunnel
              selectedPlan={selectedPlan}
              onResetPlan={() => setSelectedPlan(null)}
            />
            <LegalFooter />
          </Suspense>
        ) : (
          <div className="h-64 bg-[#0B0F17]" />
        )}
      </main>

      <CookieBanner />
    </div>
  );
}
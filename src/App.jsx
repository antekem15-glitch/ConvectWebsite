import React, { useState, useEffect, Suspense, lazy } from 'react';
import HeroAuthority from './components/HeroAuthority';
import CookieBanner from './components/CookieBanner';

// Alle nicht direkt sichtbaren Bereiche streng lazy laden
const NicheMatrix = lazy(() => import('./components/NicheMatrix'));
const ProblemSpeedLeak = lazy(() => import('./components/ProblemSpeedLeak'));
const SolutionPillars = lazy(() => import('./components/SolutionPillars'));
const PricingMatrix = lazy(() => import('./components/PricingMatrix'));
const LeadQualifierFunnel = lazy(() => import('./components/LeadQualifierFunnel'));
const LegalFooter = lazy(() => import('./components/LegalFooter'));

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loadBelowFold, setLoadBelowFold] = useState(false);

  useEffect(() => {
    // Lädt die restlichen Chunks erst nach der ersten Nutzerinteraktion (Scroll, Touch)
    // oder nach 2,5 Sekunden Leerlauf, damit der Speed Index für den First Fold unter 1s bleibt.
    const triggerLoad = () => {
      setLoadBelowFold(true);
      window.removeEventListener('scroll', triggerLoad);
      window.removeEventListener('touchstart', triggerLoad);
      window.removeEventListener('mousemove', triggerLoad);
    };

    window.addEventListener('scroll', triggerLoad, { passive: true });
    window.addEventListener('touchstart', triggerLoad, { passive: true });
    window.addEventListener('mousemove', triggerLoad, { passive: true });

    const timer = setTimeout(triggerLoad, 2500);

    return () => {
      window.removeEventListener('scroll', triggerLoad);
      window.removeEventListener('touchstart', triggerLoad);
      window.removeEventListener('mousemove', triggerLoad);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToFunnel = (plan = null) => {
    if (plan) setSelectedPlan(plan);
    setLoadBelowFold(true);
    setTimeout(() => {
      const funnelEl = document.getElementById('funnel');
      if (funnelEl) {
        funnelEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
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
        {/* Der einzige Bereich, der für den First-Fold-Speed gerendert werden muss */}
        <HeroAuthority onCtaClick={() => scrollToFunnel()} />

        {/* Alles unterhalb des Hero-Folds lädt entkoppelt */}
        {loadBelowFold ? (
          <Suspense fallback={<div className="h-64 bg-[#0B0F17]" />}>
            <NicheMatrix />
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
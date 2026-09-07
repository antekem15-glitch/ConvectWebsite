import React from 'react';

export default function HeroAuthority({ onCtaClick }) {
  return (
    <section className="relative overflow-hidden bg-[#0B0F17] pt-24 pb-20 md:pt-32 md:pb-28 text-[#F8FAFC]">
      {/* Background Subtle Glow Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Live Performance & Authority Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-slate-800 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-8 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Google PageSpeed: 99/100 | LCP &lt; 0.9s | Zero-Bloat Code</span>
          </div>

          {/* Hard-Hitting Direct-Response Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15]">
            Schluss mit lahmen Baukästen und versickerten Leads.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">
              High-Ticket-Infrastruktur
            </span>{' '}
            für Ihren Betrieb.
          </h1>

          {/* Subheadline (Hormozi / Sales-Engineering Framing) */}
          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Convect entwickelt maßgeschneiderte High-Speed-Websysteme gekoppelt mit autonomen Make.com-Pipelines. 
            Für Fachärzte, Handwerksbetriebe, Bauträger und B2B-Dienstleister, die Anfragen ab 3.000 € bis 30.000 €+ in Sekunden erfassen, vorqualifizieren und abschließen wollen.
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-3 group"
            >
              <span>Vertriebs-Audit &amp; Pipeline-Check buchen</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <a
              href="#problem"
              className="px-8 py-4 bg-[#1E293B] hover:bg-slate-800 text-slate-300 font-semibold rounded-lg border border-slate-700 transition-colors flex items-center justify-center"
            >
              Umsatz-Verlust kalkulieren
            </a>
          </div>

          {/* Proof / Trust Metrics */}
          <div className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            <div>
              <div className="text-3xl font-bold text-white">&lt; 1.0 Sek.</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Garantierte Ladezeit</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">3 Sek.</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Lead-to-SMS/Mail Reaktionszeit</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">0 %</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">WordPress / Plugin-Ballast</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">100 %</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">DACH DSGVO-Konformität</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
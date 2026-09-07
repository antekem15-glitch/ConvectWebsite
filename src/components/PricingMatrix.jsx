import React from 'react';

export default function PricingMatrix({ onSelectTier }) {
  return (
    <section id="pricing" className="py-24 bg-[#0B0F17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Investition &amp; ROI
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Systeme, die sich ab dem ersten Abschluss vollständig amortisieren.
          </p>
          <p className="mt-4 text-slate-400">
            Transparente Festpreise ohne versteckte Agentur-Aufschläge. Wählen Sie das Setup, das Ihren Wachstumszielen entspricht.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Tier 1: 5.000 € */}
          <div className="p-8 rounded-2xl bg-[#1E293B] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Einstieg</div>
              <h3 className="text-2xl font-bold text-white mt-1">Speed &amp; Pipeline Core</h3>
              <p className="text-sm text-slate-400 mt-2">
                Das Fundament für Betriebe, die maximale Geschwindigkeit und professionelles Auftreten suchen.
              </p>
              <div className="mt-6 mb-8">
                <span className="text-4xl font-extrabold text-white">5.000 €</span>
                <span className="text-slate-400 text-sm ml-2">einmalig zzgl. USt.</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2">✓ High-Speed Brand Website (React/Tailwind)</li>
                <li className="flex items-center gap-2">✓ Google PageSpeed Score 95+ garantiert</li>
                <li className="flex items-center gap-2">✓ 1x Direct-Response Landingpage</li>
                <li className="flex items-center gap-2">✓ Basis Make.com Lead-Weiterleitung (E-Mail)</li>
                <li className="flex items-center gap-2 text-slate-500">✕ Keine KI-Vorqualifizierung</li>
                <li className="flex items-center gap-2 text-slate-500">✕ Keine SMS-Eil-Alerts / No-Show-Sequenz</li>
              </ul>
            </div>
            <button
              onClick={() => onSelectTier('Speed & Pipeline Core (5k)')}
              className="mt-8 w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors border border-slate-700"
            >
              Core-Setup wählen
            </button>
          </div>

          {/* Tier 2: 7.000 € — THE HERO */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-b from-[#1E293B] to-[#111827] border-2 border-blue-500 shadow-2xl shadow-blue-500/10 flex flex-col justify-between">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow">
              Bestseller &amp; Empfehlung
            </div>
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-blue-400">Komplettsystem</div>
              <h3 className="text-2xl font-bold text-white mt-1">Full Sales &amp; Automation Engine</h3>
              <p className="text-sm text-slate-400 mt-2">
                Das autonome Vertriebs- &amp; Patienten-Backoffice. Spart Ihrem Team 10–15 Stunden Handarbeit pro Woche.
              </p>
              <div className="mt-6 mb-8">
                <span className="text-4xl font-extrabold text-white">7.000 €</span>
                <span className="text-slate-400 text-sm ml-2">einmalig zzgl. USt.</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-center gap-2 font-medium text-emerald-400">✓ Alles aus dem 5.000 € Core-Paket</li>
                <li className="flex items-center gap-2">✓ <strong>Interaktiver 3-Stufen Lead-Qualifier</strong></li>
                <li className="flex items-center gap-2">✓ <strong>Make.com Echtzeit-Routing:</strong> E-Mail-Dossier + Sofort-SMS</li>
                <li className="flex items-center gap-2">✓ <strong>The Show-Up Killer:</strong> Automatisierte Bestätigungen &amp; Erinnerungen</li>
                <li className="flex items-center gap-2">✓ <strong>Automated Onboarding:</strong> Datenübernahme bei Abschluss</li>
                <li className="flex items-center gap-2">✓ 30 Tage Hypercare &amp; Live-Monitoring</li>
              </ul>
              <div className="mt-6 p-3 rounded bg-blue-950/40 border border-blue-800/50 text-xs text-blue-300">
                <strong>ROI-Hebel:</strong> Ein einziger gewonnener Sanierungsauftrag, 2 Augenlaser-Behandlungen oder 1 B2B-Deal amortisieren dieses System sofort.
              </div>
            </div>
            <button
              onClick={() => onSelectTier('Full Sales & Automation Engine (7k)')}
              className="mt-8 w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-600/30"
            >
              Bestseller anfordern
            </button>
          </div>

          {/* Tier 3: 10.000 € — THE ANCHOR */}
          <div className="p-8 rounded-2xl bg-[#1E293B] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Enterprise</div>
              <h3 className="text-2xl font-bold text-white mt-1">Enterprise Sales Infrastructure</h3>
              <p className="text-sm text-slate-400 mt-2">
                Für Mehrbetrieb-Strukturen, Filialen oder Großpraxen mit komplexen Schnittstellen.
              </p>
              <div className="mt-6 mb-8">
                <span className="text-4xl font-extrabold text-white">10.000 €</span>
                <span className="text-slate-400 text-sm ml-2">einmalig zzgl. USt.</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2 font-medium text-emerald-400">✓ Alles aus dem 7.000 € Paket</li>
                <li className="flex items-center gap-2">✓ Multi-Funnel: Hauptseite + 2 Nischen-Landingpages</li>
                <li className="flex items-center gap-2">✓ Custom API-Anbindung (Praxissoftware / ERP / CRM)</li>
                <li className="flex items-center gap-2">✓ WhatsApp Business API Integration</li>
                <li className="flex items-center gap-2">✓ 90 Tage Intensivbegleitung &amp; A/B Split-Testing</li>
              </ul>
            </div>
            <button
              onClick={() => onSelectTier('Enterprise Sales Infrastructure (10k)')}
              className="mt-8 w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors border border-slate-700"
            >
              Enterprise prüfen
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
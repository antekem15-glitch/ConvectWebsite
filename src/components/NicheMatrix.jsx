import React from 'react';

export default function NicheMatrix() {
  const niches = [
    {
      title: 'Handwerk & Energetik',
      subtitle: 'PV, Wärmepumpen, Dach- & Sanierungsbau',
      ticket: 'Deals ab 10.000 € – 50.000 €+',
      pain: 'Unqualifizierte Kleinreparatur-Anfragen verstopfen das Büro, während Interessenten für 25k€-Sanierungen nach 2 Tagen Wartezeit abspringen.',
      solution: 'Gezielte Vorqualifizierung filtert Sanierungsvolumen, Budget und Eigentumsstatus vorab. Alert via SMS direkt an den Projektleiter.',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Privat- & Fachärzte',
      subtitle: 'KFO, Plastische Chirurgie, Augenlaser & Implantate',
      ticket: 'Behandlungen ab 3.000 € – 8.000 €',
      pain: 'Empfangspersonal erstickt in Kassen-Telefonaten; Selbstzahler-Patienten finden keine adäquate digitale Buchung und springen ab.',
      solution: 'Diskrete, digitale Indikations-Vorprüfung online. Bestätigte Termine synchronisiert via Make.com mit SMS-Vorab-Infomaterial.',
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Immobilienwirtschaft',
      subtitle: 'Bauträger, Makler & Projektentwickler',
      ticket: 'Objektvolumen 5- bis 7-stellig',
      pain: 'Exposé-Jäger binden wertvolle Vertriebskapazitäten. Echte Kapitalanleger und solvente Verkäufer werden nicht sofort priorisiert.',
      solution: 'Automatisierte Bonitäts- und Absichtsqualifizierung. Sofortige Exposé-Freigabe und Lead-Eskalation per SMS an den Makler.',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'B2B & Industriezulieferer',
      subtitle: 'Spezialberater, Agenturen & Lösungsanbieter',
      ticket: 'Retainer / Projekte ab 5.000 € – 30.000 €+',
      pain: 'Kontaktformulare landen in Sammelpostfächern. C-Level-Entscheider warten 48 Stunden und haben bereits beim Wettbewerber angefragt.',
      solution: 'Strukturierte Bedarfsabfrage mit sofortigem Routing in Ihren Kalender. Make.com bereitet Lead-Dossier für die Geschäftsführung vor.',
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Fokussierte Marktsegmente
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Wir bauen nicht für jeden. Wir bauen für Branchen mit hohem Kundenwert.
          </p>
          <p className="mt-4 text-slate-400">
            Wenn ein einziger Kunde bei Ihnen 3.000 € bis 30.000 € wert ist, können Sie es sich betriebswirtschaftlich nicht leisten, auch nur 10 % Ihrer Leads durch technische Trägheit zu verlieren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {niches.map((niche, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-[#1E293B] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    {niche.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-blue-950 text-blue-300 border border-blue-800 rounded-full">
                    {niche.ticket}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{niche.title}</h3>
                <p className="text-xs text-slate-400 mb-6 font-medium">{niche.subtitle}</p>
                
                <div className="space-y-4 text-sm">
                  <div className="p-4 rounded-lg bg-red-950/20 border border-red-900/30 text-slate-300">
                    <span className="text-red-400 font-semibold block mb-1">Das Problem heute:</span>
                    {niche.pain}
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-slate-300">
                    <span className="text-emerald-400 font-semibold block mb-1">Die Convect-Lösung:</span>
                    {niche.solution}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
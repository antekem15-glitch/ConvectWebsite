import React from 'react';

export default function SolutionPillars() {
  const pillars = [
    {
      step: '01',
      name: 'Ultra-Fast Frontend',
      tech: 'React / Vite / Tailwind CSS',
      benefit: 'Sub-Sekunden Ladezeit. Keine Plugins. Kein WordPress.',
      desc: 'Wir schreiben sauberen, schlanken Quellcode. Ihre Seite lädt mobil in unter einer Sekunde. Google belohnt das mit Top-Rankings, und bezahlte Werbekampagnen konvertieren ohne Absprungverluste.',
    },
    {
      step: '02',
      name: 'Direct-Response Funnels',
      tech: 'Qualifizierungs-Architektur',
      benefit: 'Interaktive Vorfilterung statt passiver Kontaktformulare.',
      desc: 'Interessenten klicken sich durch einen 3-Schritt-Funnel. Budget, Zeitrahmen und Machbarkeit werden sofort erfasst. Unpassende Anfragen werden diskret aussortiert; lukrative Deals erhalten Priorität.',
    },
    {
      step: '03',
      name: 'Make.com Sales Backend',
      tech: 'Workflow- & API-Automation',
      benefit: 'Lead-Eskalation in 3 Sekunden via SMS & E-Mail.',
      desc: 'Sobald ein hochkarätiger Lead eintrifft, sendet Make.com eine strukturierte E-Mail-Zusammenfassung an Ihr Team und eine SMS-Eilnachricht direkt auf das Smartphone der Geschäftsleitung.',
    },
  ];

  return (
    <section className="py-24 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Die Convect-Methode
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Die 3-Säulen-Infrastruktur für maximale Abschlussquoten.
          </p>
          <p className="mt-4 text-slate-300">
            Verkaufserfolg im High-Ticket-Segment ist keine Frage von „schönen Bildern“, sondern von Geschwindigkeit, Psychologie und prozessualer Disziplin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="relative p-8 rounded-xl bg-[#1E293B] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Kontrast korrigiert von text-slate-700 zu text-slate-400 */}
                  <span className="text-3xl font-black text-slate-400">{pillar.step}</span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40">
                    {pillar.tech}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{pillar.name}</h3>
                <p className="text-sm font-semibold text-blue-400 mb-4">{pillar.benefit}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
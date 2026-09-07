import React, { useState } from 'react';

export default function ProblemSpeedLeak() {
  const niches = [
    {
      id: 'handwerk',
      label: 'Handwerk & Sanierung',
      defaultTicket: 12000,
      min: 4000,
      max: 40000,
      step: 1000,
      lostDealsMonth: 1, // 1 Auftrag pro Monat verpasst
      scenario: 'Interessent wartet 6 Stunden auf Rückruf und unterschreibt beim Mitbewerber.',
    },
    {
      id: 'arzt',
      label: 'Privatarzt / Selbstzahler',
      defaultTicket: 4000,
      min: 1500,
      max: 12000,
      step: 500,
      lostDealsMonth: 2, // 2 OPs / Behandlungen pro Monat
      scenario: 'Selbstzahler erreichen nur die Warteschleife oder platzen lassen Termine ohne SMS-Erinnerung platzen.',
    },
    {
      id: 'immo',
      label: 'Immobilien & Bauträger',
      defaultTicket: 18000,
      min: 5000,
      max: 50000,
      step: 1000,
      lostDealsMonth: 1, // 1 Deal pro Monat
      scenario: 'Solventer Käufer wartet zu lange auf das Exposé und kauft ein anderes Objekt.',
    },
    {
      id: 'b2b',
      label: 'B2B & Dienstleister',
      defaultTicket: 7500,
      min: 2500,
      max: 30000,
      step: 500,
      lostDealsMonth: 1, // 1 Mandant / Vertrag pro Monat
      scenario: 'Anfrage liegt 2 Tage im E-Mail-Postfach. Der Entscheider hat längst woanders beauftragt.',
    },
  ];

  const [selectedNiche, setSelectedNiche] = useState(niches[0]);
  const [ticketValue, setTicketValue] = useState(niches[0].defaultTicket);
  const [lostPerMonth, setLostPerMonth] = useState(niches[0].lostDealsMonth);

  const handleNicheChange = (niche) => {
    setSelectedNiche(niche);
    setTicketValue(niche.defaultTicket);
    setLostPerMonth(niche.lostDealsMonth);
  };

  // Berechnungen auf Monats- und Jahresbasis
  const monthlyLoss = ticketValue * lostPerMonth;
  const annualLoss = monthlyLoss * 12;

  const formatEuro = (val) =>
    new Intl.NumberFormat('de-AT', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <section id="problem" className="py-24 bg-[#0B0F17] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Linke Seite: Problem & Psychologie */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">
              Der monatliche Umsatz-Leak
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Jeden Monat verliert Ihr Betrieb 1 bis 2 lukrative Aufträge an schnellere Mitbewerber.
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Niemand ruft an und beschwert sich, dass Ihre Seite zu langsam lädt oder die Anfrage zu spät bearbeitet wurde. 
              <strong> Die Interessenten kaufen einfach stillschweigend woanders.</strong>
            </p>

            <div className="space-y-4 pt-1">
              <div className="p-4 rounded-xl bg-[#1E293B] border border-slate-800">
                <div className="text-white font-bold text-sm mb-1">Fakt 1: 5 Minuten entscheiden über den Deal</div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Wer eine High-Ticket-Anfrage innerhalb von <strong>5 Minuten</strong> vorqualifiziert kontaktiert, hat eine <strong>21-mal höhere Abschlussquote</strong> als nach 30 Minuten. Bei Standard-Websites vergehen oft 4 bis 24 Stunden.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1E293B] border border-slate-800">
                <div className="text-white font-bold text-sm mb-1">Fakt 2: No-Shows &amp; unqualifizierte Termine</div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Ohne automatisierte Vorab-Nachrichten und SMS-Erinnerungen platzen im Schnitt <strong>20 % bis 30 % aller gebuchten Termine</strong>. Das ist bares Geld, das jeden Monat verpufft.
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Seite: Rechner */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#1E293B] border border-slate-800 shadow-2xl text-left">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <h3 className="text-lg font-bold text-white">
                Rechnen Sie den Ausfall vor:
              </h3>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                Live-Kalkulation
              </span>
            </div>

            <div className="space-y-6">
              
              {/* SCHRITT 1: Branche */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  1. Ihre Branche wählen:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {niches.map((niche) => (
                    <button
                      key={niche.id}
                      type="button"
                      onClick={() => handleNicheChange(niche)}
                      className={`p-3 rounded-lg text-xs font-bold transition-all text-left border cursor-pointer ${
                        selectedNiche.id === niche.id
                          ? 'border-blue-500 bg-blue-950/60 text-white shadow-sm'
                          : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {niche.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* SCHRITT 2: Auftragswert */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-slate-300">2. Ihr Deckungsbeitrag / Auftragswert:</span>
                  <span className="text-emerald-400 font-bold text-base">{formatEuro(ticketValue)}</span>
                </div>
                <input
                  type="range"
                  min={selectedNiche.min}
                  max={selectedNiche.max}
                  step={selectedNiche.step}
                  value={ticketValue}
                  onChange={(e) => setTicketValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>{formatEuro(selectedNiche.min)}</span>
                  <span className="text-slate-400">Regler anpassen</span>
                  <span>{formatEuro(selectedNiche.max)}</span>
                </div>
              </div>

              {/* SCHRITT 3: Verlorene Deals pro Monat (1 bis 4) */}
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-slate-300">3. Verpasste Anfragen / No-Shows im Monat:</span>
                  <span className="text-red-400 font-bold text-base">{lostPerMonth} {lostPerMonth === 1 ? 'Auftrag' : 'Aufträge'}</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setLostPerMonth(num)}
                      className={`py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        lostPerMonth === num
                          ? 'border-red-500 bg-red-950/60 text-white'
                          : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                      }`}
                    >
                      {num} {num === 1 ? 'Deal' : 'Deals'} / Mo.
                    </button>
                  ))}
                </div>
              </div>

              {/* SCHRITT 4: Das Ergebnis */}
              <div className="p-5 rounded-xl bg-red-950/25 border border-red-900/40 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-red-300 font-semibold">
                      Ihr jährlicher Gewinnausfall:
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-red-400 mt-0.5 tracking-tight">
                      - {formatEuro(annualLoss)}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Jeden Monat:</span>
                    <span className="text-sm font-bold text-red-300">- {formatEuro(monthlyLoss)}</span>
                  </div>
                </div>

                <div className="text-[12px] text-slate-200 pt-3 border-t border-red-900/40 leading-relaxed">
                  💡 <strong>Die Convect-Gegenrechnung:</strong> Mit unserem <strong>7.000 € Komplettsystem</strong> reicht es, im ganzen Jahr <strong>einen einzigen Auftrag</strong> zu retten, den Sie sonst verloren hätten. Ab Monat 2 ist das System reiner Zusatzgewinn für Ihren Betrieb.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
import React, { useState } from 'react';

export default function LeadQualifierFunnel({ selectedPlan, onResetPlan }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    ticketSize: '',
    leadTimeWaste: '',
    fullName: '',
    company: '',
    workEmail: '',
    phone: '',
    preferredPackage: selectedPlan || 'Noch unentschieden',
    privacyAccepted: false,
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleNextStep = () => setStep((prev) => prev + 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      setStatus({ loading: false, success: false, error: 'Bitte stimmen Sie den Datenschutzbestimmungen zu.' });
      return;
    }

    setStatus({ loading: true, error: null, success: false });

    // Vorbereitung der Make.com Webhook Payload
    const payload = {
      source: 'Convect High-Ticket Qualifier',
      submittedAt: new Date().toISOString(),
      industry: formData.industry,
      averageDealSize: formData.ticketSize,
      internalFriction: formData.leadTimeWaste,
      preferredTier: formData.preferredPackage,
      contact: {
        fullName: formData.fullName,
        company: formData.company,
        workEmail: formData.workEmail,
        phone: formData.phone,
      },
      routingTargets: {
        alertChannels: ['Email', 'SMS'],
      },
    };

    try {
      const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL;

      if (!webhookUrl) {
        console.warn('VITE_MAKE_WEBHOOK_URL ist nicht gesetzt. Demo-Payload im Dev-Modus:', payload);
        // Simulation bei fehlendem Webhook
        await new Promise((resolve) => setTimeout(resolve, 800));
      } else {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Fehler bei der Übertragung zu Make.com.');
        }
      }

      setStatus({ loading: false, success: true, error: null });
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: false,
        error: 'Verbindungsfehler beim Absenden. Bitte prüfen Sie Ihre Verbindung oder kontaktieren Sie uns direkt.',
      });
    }
  };

  if (status.success) {
    return (
      <section id="funnel" className="py-24 bg-[#111827] text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/40">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-white">Vielen Dank für Ihre Anfrage.</h2>
          <p className="mt-4 text-slate-300">
            Ihre Angaben wurden via Make.com in Sekundenschnelle an unsere Geschäftsleitung übermittelt. 
            Wir prüfen die Machbarkeit und melden uns innerhalb der nächsten 4 Stunden telefonisch oder per E-Mail bei Ihnen.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="funnel" className="py-24 bg-[#111827] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            3-Minuten Potenzial-Check
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Lassen Sie uns Ihre Vertriebs-Infrastruktur berechnen.
          </h2>
          {selectedPlan && (
            <div className="mt-3 inline-flex items-center gap-2 text-xs bg-blue-950/70 border border-blue-800 text-blue-300 px-3 py-1 rounded-full">
              <span>Ausgewähltes Paket: <strong>{selectedPlan}</strong></span>
              <button onClick={onResetPlan} className="hover:text-white underline">ändern</button>
            </div>
          )}
        </div>

        <div className="bg-[#1E293B] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          
          {/* Step Indicators */}
          <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
            <span className={`text-xs font-bold ${step >= 1 ? 'text-blue-400' : 'text-slate-600'}`}>1. Branche</span>
            <span className={`text-xs font-bold ${step >= 2 ? 'text-blue-400' : 'text-slate-600'}`}>2. Deal-Größe</span>
            <span className={`text-xs font-bold ${step >= 3 ? 'text-blue-400' : 'text-slate-600'}`}>3. Kontakt</span>
          </div>

          {/* STEP 1: BRANCHE */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold mb-4">In welchem Bereich ist Ihr Betrieb tätig?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Handwerk / Sanierung / Energetik',
                  'Privat- oder Facharzt / Chirurgie',
                  'Immobilien / Bauträger / Makler',
                  'B2B-Dienstleistung / Beratung / Industrie',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, industry: item });
                      handleNextStep();
                    }}
                    className="p-5 rounded-xl border border-slate-700 bg-slate-900/60 hover:border-blue-500 hover:bg-slate-900 transition-all text-left font-semibold text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: DEAL SIZE & REAKTIONSZEIT */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Wie hoch ist der durchschnittliche Deckungsbeitrag/Wert pro Neukunde?</h3>
              <div className="space-y-3 mb-6">
                {['Unter 3.000 €', '3.000 € – 8.000 €', '8.000 € – 25.000 €', 'Über 25.000 €'].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setFormData({ ...formData, ticketSize: val })}
                    className={`w-full p-4 rounded-xl border text-left text-sm font-semibold transition-all ${
                      formData.ticketSize === val
                        ? 'border-blue-500 bg-blue-950/40 text-white'
                        : 'border-slate-700 bg-slate-900/40 text-slate-300'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 rounded-lg border border-slate-700 text-slate-400 hover:text-white"
                >
                  Zurück
                </button>
                <button
                  type="button"
                  disabled={!formData.ticketSize}
                  onClick={handleNextStep}
                  className="w-2/3 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-bold"
                >
                  Weiter zu Schritt 3
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: KONTAKTDATEN */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Wohin dürfen wir den Prüfbericht senden?</h3>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Ihr vollständiger Name *</label>
                <input
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="z. B. Dr. Michael Weber"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Firma / Praxis *</label>
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Firma / Kanzlei / Praxis"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Geschäftliche Telefonnummer (für SMS-Alert) *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+43 660 0000000"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Geschäftliche E-Mail-Adresse *</label>
                <input
                  required
                  type="email"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="name@unternehmen.at"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    required
                    type="checkbox"
                    checked={formData.privacyAccepted}
                    onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    className="mt-1 rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-xs text-slate-400">
                    Ich stimme zu, dass meine Daten zur Kontaktaufnahme und Evaluierung unseres Vertriebssystems verarbeitet werden. Details siehe{' '}
                    <a href="/datenschutz" target="_blank" rel="noreferrer" className="text-blue-400 underline">
                      Datenschutzerklärung
                    </a>. Keine Werbeanrufe, kein Spam.
                  </span>
                </label>
              </div>

              {status.error && (
                <div className="p-3 bg-red-950/40 border border-red-800 text-red-300 text-xs rounded-lg">
                  {status.error}
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/3 py-3 rounded-lg border border-slate-700 text-slate-400 hover:text-white"
                >
                  Zurück
                </button>
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-2/3 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold transition-all shadow-lg shadow-emerald-600/20"
                >
                  {status.loading ? 'Übermittle an Make.com...' : 'Kostenfreie Analyse anfordern'}
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
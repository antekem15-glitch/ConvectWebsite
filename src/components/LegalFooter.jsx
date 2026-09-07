import React, { useState, useEffect } from 'react';

export default function LegalFooter() {
  const [modal, setModal] = useState(null); // 'impressum' | 'datenschutz' | null

  // ESC-Taste abfangen & Scrollen im Hintergrund sperren
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModal(null);
      }
    };

    if (modal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [modal]);

  return (
    <footer className="bg-[#0B0F17] border-t border-slate-800 text-slate-400 text-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14 text-left">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="text-xl font-black tracking-wider text-white">CONVECT</div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              High-Speed Web-Systeme &amp; autonome Make.com Vertriebs-Infrastrukturen für Betriebe mit hohem Kundenwert in der DACH-Region.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] border border-slate-800 text-xs text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>DSGVO-konform &amp; serverlos optimiert</span>
            </div>
          </div>

          {/* Rechtliches Menü */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-semibold text-white text-xs uppercase tracking-widest mb-4 text-slate-300">
              Rechtliches (DACH)
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => setModal('impressum')}
                  className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <span className="text-slate-600 group-hover:text-blue-400 transition-colors">›</span>
                  <span>Impressum &amp; Offenlegung</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModal('datenschutz')}
                  className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  <span className="text-slate-600 group-hover:text-blue-400 transition-colors">›</span>
                  <span>Datenschutzerklärung</span>
                </button>
              </li>
              <li>
  <button
    type="button"
    onClick={() => {
      localStorage.removeItem('convect_cookie_consent');
      window.dispatchEvent(new Event('show-cookie-banner'));
    }}
    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
  >
    <span className="text-slate-600 group-hover:text-blue-400 transition-colors">›</span>
    <span>Cookie-Einstellungen widerrufen</span>
  </button>
</li>
            </ul>
          </div>

          {/* Standort / Kontakt */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-semibold text-white text-xs uppercase tracking-widest mb-4 text-slate-300">
              Standort Wien
            </h4>
            <address className="not-italic text-slate-400 text-sm leading-relaxed space-y-1">
              <div className="font-medium text-slate-300">Convect</div>
              <div>Neulerchenfelderstraße 68 Top 1</div>
              <div>1160 Wien, Österreich</div>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Convect. Alle Rechte vorbehalten.
          </div>
          <div>
            Entwickelt für maximale Performance &amp; messbaren ROI.
          </div>
        </div>

      </div>

      {/* MODAL: IMPRESSUM & DATENSCHUTZ */}
      {modal && (
        <div
          onClick={() => setModal(null)} // Schließt bei Klick auf den Hintergrund
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
        >
          <div
            onClick={(e) => e.stopPropagation()} // Verhindert Schließen beim Klick INS Fenster
            className="bg-[#1E293B] text-slate-200 border border-slate-700 max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-xl p-6 sm:p-8 shadow-2xl text-left"
          >
            
            <div className="flex justify-between items-center pb-4 border-b border-slate-700 mb-6">
              <h3 className="text-lg font-bold text-white">
                {modal === 'impressum' ? 'Impressum (§ 5 ECG / § 25 MedienG)' : 'Datenschutzerklärung (DSGVO)'}
              </h3>
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-[10px] uppercase font-mono text-slate-500 border border-slate-700 px-1.5 py-0.5 rounded">
                  ESC
                </span>
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Schließen"
                >
                  ✕
                </button>
              </div>
            </div>

            {modal === 'impressum' ? (
              <div className="space-y-4 text-xs leading-relaxed">
                <div>
                  <strong className="text-white block mb-1">Medieninhaber &amp; Betreiber:</strong>
                  Convect<br />
                  Inhaber: Ante Katic<br />
                  Neulerchenfelderstraße 68 Top 1<br />
                  1160 Wien, Österreich
                </div>

                <div>
                  <strong className="text-white block mb-1">Kontakt:</strong>
                  E-Mail: kontakt@convect.at (oder direkt über das Vorqualifizierungs-Formular)
                </div>

                <div>
                  <strong className="text-white block mb-1">Gewerberechtliche Zuordnung:</strong>
                  Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik (IT-Dienstleistung)<br />
                  Kammer: Wirtschaftskammer Wien (WKO), Fachgruppe UBIT<br />
                  Gewerbebehörde: Magistratisches Bezirksamt des 16. Bezirkes, Wien<br />
                  Status: Gewerbeanmeldung in Vorbereitung / Abwicklung
                </div>

                <div>
                  <strong className="text-white block mb-1">Umsatzsteuer-Identifikationsnummer (UID):</strong>
                  In Beantragung (Kleinunternehmerregelung gem. § 6 Abs. 1 Z 27 UStG bzw. UID in Zuteilung)
                </div>

                <div>
                  <strong className="text-white block mb-1">Unternehmensgegenstand &amp; Blattlinie:</strong>
                  Konzeption, Entwicklung und Implementierung technischer Web-Infrastrukturen, Landingpages und Make.com-Schnittstellen für Unternehmen.
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-xs leading-relaxed">
                <p>
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO):
                  <br /><strong className="text-white">Ante Katic</strong>, Neulerchenfelderstraße 68 Top 1, 1160 Wien, Österreich.
                </p>

                <div>
                  <strong className="text-white block mb-1">1. Erhebung und Verarbeitung bei Funnel-Nutzung:</strong>
                  Wenn Sie unser Vorqualifizierungsformular nutzen, verarbeiten wir Ihre eingegebenen Daten (Name, Unternehmen, E-Mail, Telefonnummer sowie Projektdaten) ausschließlich zur Bearbeitung Ihrer Anfrage und zur Vorbereitung unseres Erstgesprächs (Art. 6 Abs. 1 lit. b DSGVO).
                </div>

                <div>
                  <strong className="text-white block mb-1">2. Weiterleitung via Make.com:</strong>
                  Zur unverzüglichen Bearbeitung leiten wir diese Daten über eine gesicherte HTTPS-Schnittstelle (Webhook) an Make.com weiter. Von dort aus wird eine interne Benachrichtigung via E-Mail und SMS an uns generiert. Es erfolgt keine Weitergabe an unberechtigte Dritte.
                </div>

                <div>
                  <strong className="text-white block mb-1">3. Ihre Betroffenenrechte:</strong>
                  Sie haben nach der DSGVO jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung und ein Recht auf Berichtigung oder Löschung.
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-slate-700 flex justify-end">
              <button
                type="button"
                onClick={() => setModal(null)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Schließen
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
}
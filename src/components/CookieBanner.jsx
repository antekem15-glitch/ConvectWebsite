import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('convect_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('convect_cookie_consent', 'all');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('convect_cookie_consent', 'essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 p-6 rounded-xl bg-[#1E293B] border border-slate-700 shadow-2xl text-white"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-blue-500" />
        <h4 className="text-sm font-bold">Privatsphäre &amp; Datensparsamkeit</h4>
      </div>
      <p className="text-xs text-slate-300 leading-relaxed">
        Wir setzen standardmäßig keine Marketing-Cookies vor Ihrer Zustimmung ein. Wir verwenden ausschließlich technisch notwendige Session-Mechanismen zur Ausführung von Vorqualifizierungs-Anfragen. Weitere Details finden Sie in unserer{' '}
        <a href="/datenschutz" className="text-blue-400 underline">
          Datenschutzerklärung
        </a>.
      </p>

      {/* Vollständige Gleichwertigkeit der Buttons nach DACH / DSGVO */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          onClick={handleDecline}
          className="py-2 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs font-bold transition-colors"
        >
          Nur Notwendige
        </button>
        <button
          onClick={handleAccept}
          className="py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
        >
          Alle Akzeptieren
        </button>
      </div>
    </div>
  );
}
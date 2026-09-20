import React, { useState, useEffect } from 'react';
import { Shield, Check } from 'lucide-react';
import { Button } from '../ui/Button';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sorriso_lgpd_consent');
    if (!consent) {
      // Short delay so it doesn't immediately jar the user
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sorriso_lgpd_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('sorriso_lgpd_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-slate-900/95 backdrop-blur-md text-white border-t border-slate-700 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-teal-500/20 text-[#0EA5A4] shrink-0 mt-0.5">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-slate-200 leading-relaxed">
              Utilizamos cookies e tecnologias semelhantes para aprimorar sua experiência de navegação, analisar o tráfego e personalizar conteúdos, de acordo com a{' '}
              <strong className="text-white font-semibold">LGPD (Lei Geral de Proteção de Dados)</strong>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={handleDecline}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            Apenas Essenciais
          </button>
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={handleAccept}
            className="gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            Aceitar Todos
          </Button>
        </div>
      </div>
    </div>
  );
};

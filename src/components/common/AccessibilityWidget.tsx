import React, { useState } from 'react';
import { Eye, Plus, Minus, RotateCcw, X, Sliders } from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';

export const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    fontSizeLevel,
    highContrast,
    increaseFontSize,
    decreaseFontSize,
    toggleHighContrast,
    resetAccessibility,
  } = useAccessibility();

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 w-72 mb-3 text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#0EA5A4]" />
              <span className="font-bold text-sm text-slate-900">Acessibilidade</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              aria-label="Fechar painel de acessibilidade"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-3">
            {/* Font Size Controls */}
            <div>
              <span className="text-xs font-semibold text-slate-600 block mb-1.5">Tamanho da Fonte</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseFontSize}
                  disabled={fontSizeLevel === 0}
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl border border-slate-200 text-xs font-semibold hover:bg-slate-50 disabled:opacity-40"
                  aria-label="Diminuir tamanho da fonte"
                >
                  <Minus className="w-3.5 h-3.5" /> A-
                </button>
                <span className="text-xs font-bold text-[#0EA5A4] px-2">
                  {fontSizeLevel === 0 ? '100%' : fontSizeLevel === 1 ? '110%' : '120%'}
                </span>
                <button
                  onClick={increaseFontSize}
                  disabled={fontSizeLevel === 2}
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl border border-slate-200 text-xs font-semibold hover:bg-slate-50 disabled:opacity-40"
                  aria-label="Aumentar tamanho da fonte"
                >
                  <Plus className="w-3.5 h-3.5" /> A+
                </button>
              </div>
            </div>

            {/* High Contrast */}
            <div>
              <button
                onClick={toggleHighContrast}
                className={`w-full flex items-center justify-between py-2 px-3 rounded-xl border text-xs font-semibold transition-colors ${
                  highContrast
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Alto Contraste</span>
                <span className="text-xs">{highContrast ? 'Ativado' : 'Desativado'}</span>
              </button>
            </div>

            {/* Reset */}
            <div className="pt-1">
              <button
                onClick={resetAccessibility}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Restaurar Padrão
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Opções de Acessibilidade (Fonte e Contraste)"
        title="Acessibilidade"
        className="w-12 h-12 rounded-full bg-white text-[#0EA5A4] hover:bg-teal-50 border-2 border-teal-200 shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:ring-4 focus:ring-teal-200"
      >
        <Sliders className="w-5 h-5" />
      </button>
    </div>
  );
};

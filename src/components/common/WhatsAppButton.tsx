import React, { useState } from 'react';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '5511999999999';
  const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta na Sorriso Perfeito.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {isHovered && (
        <div className="hidden sm:block bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-xl shadow-lg border border-slate-700 animate-in fade-in slide-in-from-right-2 duration-200">
          Agende via WhatsApp 💬
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com a clínica Sorriso Perfeito"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300/60"
      >
        <img
          src="/images/whatsapp-icon.svg"
          alt="WhatsApp"
          className="w-8 h-8 object-contain"
        />
      </a>
    </div>
  );
};

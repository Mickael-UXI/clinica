import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-r from-[#0EA5A4] via-[#0D9488] to-[#1E3A8A] text-white overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-400/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-300/20 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 backdrop-blur-md border border-white/20 text-[#FBBF24] mb-4">
          Agendamento Online Rápido
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
          Pronto para transformar seu sorriso?
        </h2>

        <p className="text-lg sm:text-xl text-teal-50 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Dê o primeiro passo para uma saúde bucal completa e um sorriso que você terá orgulho de mostrar. Agende sua avaliação personalizada em menos de 2 minutos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/agendar" className="w-full sm:w-auto">
            <Button
              variant="accent"
              size="lg"
              className="w-full sm:w-auto text-base px-8 py-4 shadow-xl shadow-amber-500/20 text-slate-950 font-bold hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar minha consulta
            </Button>
          </Link>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20na%20Sorriso%20Perfeito"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="white"
              size="lg"
              className="w-full sm:w-auto text-base px-8 py-4 text-slate-900 hover:bg-slate-100"
            >
              <Phone className="w-5 h-5 mr-2 text-[#0EA5A4]" />
              Falar pelo WhatsApp
            </Button>
          </a>
        </div>

        <p className="mt-8 text-xs text-teal-100/80">
          📍 Av. Paulista, 1000 — Bela Vista, São Paulo/SP · Fácil acesso e estacionamento no local
        </p>
      </div>
    </section>
  );
};

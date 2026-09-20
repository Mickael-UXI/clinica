import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark & Gradient Overlays for High Legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-clinic.jpg"
          alt="Atendimento odontológico humanizado e moderno na Sorriso Perfeito"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-950/40" />
        <div className="absolute inset-0 bg-teal-950/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl text-white">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium mb-6 text-teal-200"
          >
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9/5</span>
            <span className="text-white/60">·</span>
            <span>+2.000 pacientes satisfeitos em SP</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6"
          >
            Seu sorriso merece o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EEAD4] via-[#0EA5A4] to-[#FBBF24]">
              melhor cuidado
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed font-normal"
          >
            Odontologia moderna, humanizada e com tecnologia de ponta em São Paulo. Diagnósticos precisos com scanner 3D e conforto sem dor para você e sua família.
          </motion.p>

          {/* 2 CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <Link to="/agendar">
              <Button variant="primary" size="lg" className="w-full sm:w-auto text-base shadow-xl shadow-teal-500/30">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Button>
            </Link>
            <Link to="/sobre">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base border-white/60 text-white hover:bg-white/10 hover:text-white"
              >
                Conheça a Clínica
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Key Selling Points Pill Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15 text-xs text-slate-300"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0EA5A4]" />
              <span>CRO-SP 12345 Certificado</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FBBF24]" />
              <span>Atendimento Pontual</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Scanner Intraoral 3D</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

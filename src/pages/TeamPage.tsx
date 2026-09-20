import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Clock, Award } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { dentistsData } from '../data/dentists';
import { Button } from '../components/ui/Button';

export const TeamPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Nossa Equipe de Dentistas Especialistas | Sorriso Perfeito"
        description="Conheça nosso corpo clínico: especialistas, mestres e doutores pela USP, UNICAMP e UNESP dedicados a transformar seu sorriso em São Paulo."
        canonicalUrl="https://sorrisoperfeito.com.br/equipe"
      />

      <main className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0EA5A4] bg-teal-100/70 mb-3">
              Corpo Clínico Multidisciplinar
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Especialistas dedicados ao seu sorriso
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Dentistas graduados e pós-graduados pelas melhores universidades do país, com formação continuada e foco inegociável na sua segurança e conforto.
            </p>
          </div>

          {/* 6 Dentists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dentistsData.map((dentist, index) => (
              <motion.article
                key={dentist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo with badges */}
                  <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                    <img
                      src={dentist.image}
                      alt={dentist.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-[#0EA5A4] text-white mb-1 shadow-sm">
                        {dentist.cro}
                      </span>
                      <h2 className="text-xl font-bold leading-tight drop-shadow-sm">
                        {dentist.name}
                      </h2>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <span className="text-xs font-bold text-[#0EA5A4] uppercase tracking-wider block mb-3">
                      {dentist.specialty}
                    </span>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {dentist.bio}
                    </p>

                    {/* Education */}
                    <div className="mb-6 pt-5 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                        <GraduationCap className="w-4 h-4 text-[#0EA5A4]" />
                        <span>Formação & Titulações</span>
                      </div>
                      <ul className="space-y-1.5">
                        {dentist.education.map((edu, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Schedule */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <Clock className="w-3.5 h-3.5 text-[#FBBF24]" />
                      <span>Atendimento: {dentist.daysAvailable}</span>
                    </div>
                  </div>
                </div>

                {/* Booking button */}
                <div className="p-6 pt-0">
                  <Link
                    to={`/agendar?dentista=${encodeURIComponent(dentist.name)}`}
                    className="block w-full"
                  >
                    <Button variant="outline" size="md" className="w-full font-semibold hover:bg-[#0EA5A4] hover:text-white hover:border-[#0EA5A4]">
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar com este especialista
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Academic excellence notice */}
          <div className="mt-16 bg-white p-8 rounded-3xl border border-slate-200 text-center max-w-4xl mx-auto shadow-sm">
            <Award className="w-10 h-10 text-[#0EA5A4] mx-auto mb-3" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Educação Médica Continuada e Discussão Clínica Integrada
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Semanalmente, nossos dentistas se reúnem para discutir diagnósticos complexos e alinhar condutas clínicas de ortodontia, periodontia e implantodontia, assegurando que o seu plano de tratamento tenha a chancela de múltiplos especialistas.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

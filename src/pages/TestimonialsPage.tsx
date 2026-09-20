import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle2, Quote, Calendar, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { testimonialsData, beforeAfterCases } from '../data/testimonials';
import { Button } from '../components/ui/Button';

export const TestimonialsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Depoimentos e Casos Antes e Depois | Sorriso Perfeito"
        description="Confira avaliações reais de pacientes e fotos antes e depois de procedimentos ortodônticos, clareamentos e facetas cerâmicas em São Paulo."
        canonicalUrl="https://sorrisoperfeito.com.br/depoimentos"
      />

      <main className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0EA5A4] bg-teal-100/70 mb-3">
              Histórias de Sucesso
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              O que dizem os nossos pacientes
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              A satisfação de quem confiou seu sorriso à nossa equipe é a nossa maior recompensa diária.
            </p>

            {/* Google Rating Banner */}
            <div className="mt-6 inline-flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-slate-900 font-extrabold text-lg">4.9 de 5</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-600 text-xs sm:text-sm font-medium">
                Mais de 2.000 avaliações no Google Reviews
              </span>
            </div>
          </div>

          {/* Testimonials 6 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {testimonialsData.map((patient) => (
              <div
                key={patient.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-teal-100 -scale-x-100 pointer-events-none" />

                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(patient.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                    "{patient.quote}"
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center gap-4">
                  <img
                    src={patient.image}
                    alt={patient.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-teal-300 shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-900 text-sm truncate">{patient.name}</span>
                      {patient.verified && (
                        <span title="Verificado">
                          <CheckCircle2 className="w-4 h-4 text-[#0EA5A4] shrink-0" />
                        </span>
                      )}
                    </div>
                    <span className="block text-xs font-semibold text-[#0EA5A4] truncate">
                      {patient.treatment}
                    </span>
                    <span className="block text-xs text-slate-400 truncate">
                      {patient.roleOrAge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Before and After Cases Section */}
          <div className="mt-20 pt-16 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0EA5A4] bg-teal-100/70 mb-3">
                Resultados Reais
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Galeria Antes e Depois
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Veja comparações visuais de transformações realizadas com tecnologia e planejamento digital individualizado.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {beforeAfterCases.map((caseItem) => (
                <div
                  key={caseItem.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all"
                >
                  <div className="relative overflow-hidden bg-slate-900">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">
                      Split-Screen Comparativo
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-bold text-[#0EA5A4] uppercase tracking-wider block mb-1">
                      {caseItem.treatment}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {caseItem.description}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Duração: <strong>{caseItem.duration}</strong></span>
                      <span>Dentista: <strong>{caseItem.dentist}</strong></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center text-xs text-slate-400 max-w-xl mx-auto">
              * Nota: Os resultados podem variar de acordo com as particularidades biológicas de cada organismo. Casos clínicos divulgados em conformidade com o Código de Ética Odontológica (CFO).
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-20 bg-gradient-to-r from-[#0EA5A4] to-[#1E3A8A] text-white p-8 sm:p-12 rounded-3xl text-center shadow-xl">
            <Sparkles className="w-10 h-10 text-[#FBBF24] mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold mb-3">
              Quer ser o próximo a contar sua história de sucesso?
            </h2>
            <p className="text-teal-50 max-w-xl mx-auto mb-8 text-sm sm:text-base">
              Marque sua consulta e descubra como a nossa tecnologia pode renovar a saúde e o brilho do seu sorriso.
            </p>
            <Link to="/agendar">
              <Button variant="accent" size="lg" className="font-bold text-slate-950">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Minha Consulta Agora
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

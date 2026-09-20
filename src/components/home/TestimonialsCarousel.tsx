import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonialsData.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Compute 3 items starting from currentIndex for desktop view
  const visibleItems = [
    testimonialsData[currentIndex],
    testimonialsData[(currentIndex + 1) % total],
    testimonialsData[(currentIndex + 2) % total],
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F0FDFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0EA5A4] bg-teal-100/70 mb-3">
              Depoimentos de Pacientes Reais
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Mais de 2.000 histórias de confiança e sorrisos recuperados
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={prevSlide}
              aria-label="Depoimento anterior"
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#0EA5A4] hover:border-teal-300 shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próximo depoimento"
              className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#0EA5A4] hover:border-teal-300 shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop: 3 cards. Mobile: 1 card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-teal-100 -scale-x-100 pointer-events-none" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Patient info */}
              <div className="pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-200 shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 text-sm truncate">{item.name}</span>
                    {item.verified && (
                      <span title="Paciente Verificado">
                        <CheckCircle2 className="w-4 h-4 text-[#0EA5A4] shrink-0" />
                      </span>
                    )}
                  </div>
                  <span className="block text-xs font-semibold text-[#0EA5A4] truncate">
                    {item.treatment}
                  </span>
                  <span className="block text-xs text-slate-400 truncate">
                    {item.roleOrAge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicators dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === currentIndex ? 'w-8 bg-[#0EA5A4]' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Link to all cases */}
        <div className="text-center mt-10">
          <Link
            to="/depoimentos"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0EA5A4] hover:text-[#0D9488]"
          >
            Ver galeria completa de depoimentos e casos clínicos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

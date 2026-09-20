import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Sun, ShieldCheck, Smile, Gem, HeartHandshake } from 'lucide-react';
import { servicesData } from '../../data/services';

const iconsMap: Record<string, React.FC<{ className?: string }>> = {
  'limpeza-e-profilaxia': Sparkles,
  'clareamento-dental': Sun,
  'implantes-dentarios': ShieldCheck,
  'ortodontia-tradicional': Smile,
  'facetas-de-porcelana': Gem,
  'odontopediatria': HeartHandshake,
};

export const FeaturedServices: React.FC = () => {
  // Select the 6 featured services as specified in section 5.2
  const featuredSlugs = [
    'limpeza-e-profilaxia',
    'clareamento-dental',
    'implantes-dentarios',
    'ortodontia-tradicional',
    'facetas-de-porcelana',
    'odontopediatria',
  ];

  const featuredList = featuredSlugs
    .map((slug) => servicesData.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <section className="py-20 lg:py-28 bg-[#F0FDFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0EA5A4] bg-teal-100/70 mb-3">
            Especialidades Clínicas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tratamentos completos para transformar sua saúde e estética bucal
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Soluções integradas com a mais alta tecnologia digital, biossegurança rigorosa e corpo clínico altamente especializado em cada área.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((service, index) => {
            if (!service) return null;
            const Icon = iconsMap[service.slug] || Sparkles;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#0EA5A4] transition-all duration-300 flex flex-col"
              >
                {/* Service Image with overlay */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-slate-800 shadow-sm backdrop-blur-xs">
                    {service.category}
                  </span>

                  {/* Icon badge */}
                  <div className="absolute bottom-4 right-4 w-11 h-11 rounded-xl bg-[#0EA5A4] text-white flex items-center justify-center shadow-lg group-hover:bg-[#0D9488] group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0EA5A4] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/servicos/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0EA5A4] hover:text-[#0D9488] group/link"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <span className="text-xs font-medium text-slate-600">
                      {service.duration.split(' ')[0]} {service.duration.split(' ')[1]}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Link */}
        <div className="mt-14 text-center">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0EA5A4] font-bold border-2 border-[#0EA5A4] hover:bg-[#0EA5A4] hover:text-white transition-all shadow-sm"
          >
            Ver todos os 14 tratamentos disponíveis
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Clock, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { servicesData } from '../data/services';
import { Button } from '../components/ui/Button';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['Todos', 'Estética', 'Ortodontia', 'Reabilitação', 'Prevenção & Geral'];

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory =
        selectedCategory === 'Todos' || service.category === selectedCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.fullDescription.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <>
      <SEOHead
        title="Tratamentos e Serviços Odontológicos | Sorriso Perfeito"
        description="Conheça nossos 14 tratamentos odontológicos: implantes guiados, Invisalign, clareamento, lentes de contato dental, odontopediatria e muito mais em São Paulo."
        canonicalUrl="https://sorrisoperfeito.com.br/servicos"
      />

      <main className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0EA5A4] bg-teal-100/70 mb-3">
              Catálogo de Especialidades
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Tratamentos odontológicos de alta precisão
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Descubra a tecnologia, os benefícios e o passo a passo de cada uma de nossas 14 especialidades clínicas.
            </p>
          </div>

          {/* Search and Filters Bar */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search input */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar tratamento ou sintoma..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5A4] focus:border-transparent"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                  >
                    Limpar
                  </button>
                )}
              </div>

              {/* Category buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block mr-1" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#0EA5A4] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Services Grid (14 Services) */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <article
                  key={service.slug}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#0EA5A4] transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-slate-800 shadow-sm">
                      {service.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#0EA5A4] transition-colors mb-2">
                        {service.title}
                      </h2>
                      <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>

                      <div className="space-y-1.5 mb-5 text-xs text-slate-500">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#0EA5A4]" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{service.anesthesia}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={`/servicos/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0EA5A4] hover:text-[#0D9488] group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>Ver detalhes do procedimento</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <Sparkles className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-700">Nenhum serviço encontrado</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
                Tente ajustar os termos de busca ou selecionar outra categoria.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSearchTerm('');
                }}
                className="mt-4"
              >
                Limpar Filtros
              </Button>
            </div>
          )}

          {/* Help Banner */}
          <div className="mt-16 bg-gradient-to-r from-teal-500 to-[#1E3A8A] text-white p-8 sm:p-12 rounded-3xl text-center shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Não tem certeza de qual tratamento é o ideal para você?
            </h3>
            <p className="text-teal-50 max-w-2xl mx-auto mb-6 text-sm sm:text-base">
              Nossa consulta de avaliação inicial inclui escaneamento intraoral 3D e diagnóstico multidisciplinar completo com plano de tratamento sob medida.
            </p>
            <Link to="/agendar">
              <Button variant="accent" size="lg" className="font-bold text-slate-900 shadow-lg">
                Agendar Avaliação Odontológica
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

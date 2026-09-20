import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Activity
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { servicesData } from '../data/services';
import { Accordion } from '../components/ui/Accordion';
import { Button } from '../components/ui/Button';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  // Related services (other 3 services from same category or random)
  const relatedServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${service.title} em São Paulo | Sorriso Perfeito`}
        description={service.shortDescription}
        ogImage={service.image}
        canonicalUrl={`https://sorrisoperfeito.com.br/servicos/${service.slug}`}
      />

      <main className="bg-slate-50 min-h-screen pb-20">
        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 overflow-x-auto">
              <Link to="/" className="hover:text-[#0EA5A4] transition-colors">
                Início
              </Link>
              <span>/</span>
              <Link to="/servicos" className="hover:text-[#0EA5A4] transition-colors">
                Serviços
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold truncate">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section of Service */}
        <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Info & Action */}
              <div className="lg:col-span-7">
                <Link
                  to="/servicos"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#0EA5A4] mb-4 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Voltar para catálogo de serviços
                </Link>

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#0EA5A4]">
                    {service.category}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                  {service.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Spec badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-8 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-[#0EA5A4] shrink-0" />
                    <div>
                      <span className="block text-slate-400 font-medium">Duração</span>
                      <strong className="font-semibold">{service.duration}</strong>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="block text-slate-400 font-medium">Anestesia</span>
                      <strong className="font-semibold">{service.anesthesia}</strong>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Activity className="w-4 h-4 text-amber-500 shrink-0" />
                    <div>
                      <span className="block text-slate-400 font-medium">Recuperação</span>
                      <strong className="font-semibold">{service.recovery}</strong>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    to={`/agendar?servico=${encodeURIComponent(service.title)}`}
                    className="w-full sm:w-auto"
                  >
                    <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-lg shadow-teal-500/20">
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar Consulta para este Tratamento
                    </Button>
                  </Link>
                  <a
                    href={`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá! Gostaria de tirar dúvidas sobre o tratamento de ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Dúvidas no WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover max-h-[460px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Explanation & Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-12">
                {/* Full description */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Como funciona o tratamento
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Benefits */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Principais Benefícios
                  </h2>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3.5">
                        <CheckCircle2 className="w-5 h-5 text-[#0EA5A4] shrink-0 mt-0.5" />
                        <span className="text-base text-slate-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step-by-Step Procedure */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Passo a Passo do Procedimento
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.steps.map((st) => (
                      <div
                        key={st.step}
                        className="p-5 rounded-2xl bg-[#F0FDFA] border border-teal-100 relative flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-8 h-8 rounded-xl bg-[#0EA5A4] text-white font-bold text-sm flex items-center justify-center mb-3">
                            {st.step}
                          </div>
                          <h3 className="font-bold text-slate-900 text-base mb-2">
                            {st.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {st.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ with Accordion */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <HelpCircle className="w-6 h-6 text-[#0EA5A4]" />
                    <h2 className="text-2xl font-bold text-slate-900">
                      Perguntas Frequentes sobre {service.title}
                    </h2>
                  </div>
                  <Accordion items={service.faqs} />
                </div>
              </div>

              {/* Sidebar Action Card */}
              <div className="lg:col-span-4 space-y-6">
                <div className="sticky top-28 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Agende sua Avaliação
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Escolha o melhor dia e horário para conversar com nossos especialistas sobre o tratamento de <strong className="text-slate-800">{service.title}</strong>.
                  </p>

                  <div className="space-y-3 mb-6">
                    <Link
                      to={`/agendar?servico=${encodeURIComponent(service.title)}`}
                      className="block w-full"
                    >
                      <Button variant="primary" size="lg" className="w-full">
                        <Calendar className="w-4 h-4 mr-2" />
                        Agendar Horário Online
                      </Button>
                    </Link>

                    <a
                      href={`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá, gostaria de saber valores e datas para ${service.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button variant="outline" size="md" className="w-full">
                        Falar com Consultor
                      </Button>
                    </a>
                  </div>

                  <div className="pt-5 border-t border-slate-100 text-xs text-slate-500 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Condições facilitadas de pagamento</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Escaneamento 3D incluído na consulta</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Estacionamento conveniado no local</span>
                    </div>
                  </div>
                </div>

                {/* Related Services */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-4">
                    Outros Tratamentos Relacionados
                  </h3>
                  <div className="space-y-3">
                    {relatedServices.map((rel) => (
                      <Link
                        key={rel.slug}
                        to={`/servicos/${rel.slug}`}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <img
                          src={rel.image}
                          alt={rel.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <span className="block text-sm font-bold text-slate-800 group-hover:text-[#0EA5A4] truncate">
                            {rel.title}
                          </span>
                          <span className="block text-xs text-slate-400">
                            {rel.category}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0EA5A4] group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

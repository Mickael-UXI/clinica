import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Target,
  Award,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/ui/Button';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Humanização & Empatia',
      description: 'Ouvimos cada paciente com calma e respeito. Entendemos seus anseios e medos para construir tratamentos confortáveis e verdadeiramente acolhedores.'
    },
    {
      icon: Sparkles,
      title: 'Tecnologia de Ponta',
      description: 'Investimos continuamente nos scanners 3D, tomógrafos de feixe cônico e ferramentas CAD/CAM mais avançados da odontologia internacional.'
    },
    {
      icon: ShieldCheck,
      title: 'Ética e Transparência',
      description: 'Diagnósticos honestos e orçamentos claros. Só indicamos o que é clinicamente necessário para a sua saúde e bem-estar a longo prazo.'
    },
    {
      icon: Target,
      title: 'Precisão Milimétrica',
      description: 'Microscopia cirúrgica e planejamento digital garantem resultados com previsibilidade máxima e longevidade comprovada.'
    }
  ];

  const milestones = [
    { year: '2010', title: 'Fundação da Sorriso Perfeito', text: 'Início das atividades em São Paulo com foco em reabilitação oral e odontologia humanizada.' },
    { year: '2015', title: 'Expansão para a Av. Paulista', text: 'Mudança para o endereço atual com estrutura hospitalar e 6 consultórios completos.' },
    { year: '2020', title: 'Pioneirismo no Fluxo 100% Digital', text: 'Aquisição de scanners iTero e impressoras 3D biomédicas, eliminando moldagens convencionais.' },
    { year: '2024', title: 'Mais de 2.000 Sorrisos e Nota Máxima', text: 'Reconhecimento como clínica padrão ouro com índice de 98% de satisfação dos pacientes.' }
  ];

  return (
    <>
      <SEOHead
        title="Sobre Nós | Sorriso Perfeito - Clínica Odontológica em São Paulo"
        description="Conheça a história da Sorriso Perfeito, nossa missão, valores e infraestrutura de alta precisão na Av. Paulista em São Paulo."
        canonicalUrl="https://sorrisoperfeito.com.br/sobre"
      />

      <main className="bg-white">
        {/* Hero Banner */}
        <section className="relative py-20 lg:py-24 bg-gradient-to-b from-[#F0FDFA] to-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0EA5A4] bg-teal-100/70 mb-4">
              Nossa Trajetória
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
              Mais de uma década transformando vidas através do sorriso
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Conheça o compromisso, a filosofia e a equipe por trás de cada paciente atendido com dedicação e excelência na Sorriso Perfeito.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0EA5A4]">Nossa História</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-6 leading-tight">
                  Da vocação acadêmica à referência em odontologia digital
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                  <p>
                    A <strong className="text-slate-900 font-semibold">Sorriso Perfeito</strong> nasceu da união de dentistas apaixonados pela docência e pela clínica de excelência que sonhavam com um espaço onde a ciência de ponta caminhasse de mãos dadas com a empatia humana.
                  </p>
                  <p>
                    Compreendemos que uma clínica odontológica deve ser um ambiente de acolhimento e escuta atenta. Por isso, eliminamos os cheiros clássicos de consultório com aromaterapia suave, criamos salas de espera relaxantes e investimos fortemente na tecnologia sem dor.
                  </p>
                  <p>
                    Hoje, somos referência em São Paulo no atendimento de famílias inteiras, desde o bebê em sua primeira consulta até idosos em busca de reabilitação total com implantes de titânio suíço.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 flex items-center gap-3">
                    <Award className="w-8 h-8 text-[#0EA5A4]" />
                    <div>
                      <span className="block font-bold text-slate-900 text-sm">CRO-SP 12345</span>
                      <span className="block text-xs text-slate-500">Clínica Certificada e Regulamentada</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-[#1E3A8A]" />
                    <div>
                      <span className="block font-bold text-slate-900 text-sm">Biossegurança Nível 1</span>
                      <span className="block text-xs text-slate-500">Autoclaves de vácuo fracionado</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/clinic-exterior.jpg"
                  alt="Fachada moderna da Clínica Odontológica Sorriso Perfeito na Av. Paulista"
                  className="rounded-3xl shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-20 bg-[#F0FDFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0EA5A4]">Nossos Pilares</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Missão, Visão e Valores Fundamentais
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-[#0EA5A4] mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team photo & invitation */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-3xl overflow-hidden text-white shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">Corpo Clínico Integrado</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 mb-6 leading-tight">
                    Profissionais que unem paixão e autoridade científica
                  </h2>
                  <p className="text-slate-300 text-base leading-relaxed mb-8">
                    Nossa equipe é composta por dentistas mestres e doutores graduados pelas principais universidades públicas de São Paulo (USP, UNICAMP, UNESP). Discutimos casos complexos em junta clínica multidisciplinar para encontrar a solução mais segura e duradoura.
                  </p>
                  <div>
                    <Link to="/equipe">
                      <Button variant="primary" size="lg" className="shadow-lg">
                        Conheça os Dentistas
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative min-h-[320px] lg:min-h-full">
                  <img
                    src="/images/about-team.jpg"
                    alt="Equipe de dentistas especialistas da Sorriso Perfeito"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 lg:bg-gradient-to-r lg:from-slate-900/80 lg:to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline / Milestones */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0EA5A4]">Linha do Tempo</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Nossa Evolução Contínua
              </h2>
            </div>

            <div className="relative border-l-2 border-teal-200 ml-4 sm:ml-32 space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className="relative pl-6 sm:pl-10">
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0EA5A4] border-4 border-white shadow-sm" />
                  
                  {/* Year badge */}
                  <span className="sm:absolute sm:-left-28 sm:top-0 inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-[#0EA5A4] mb-2 sm:mb-0">
                    {m.year}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900">{m.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0EA5A4] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold mb-4">Venha tomar um café conosco e conhecer a clínica</h2>
            <p className="text-teal-50 text-base mb-8 max-w-xl mx-auto">
              Estamos localizados na Avenida Paulista, com fácil acesso pelo metrô e estacionamento próprio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/agendar">
                <Button variant="accent" size="lg" className="w-full sm:w-auto font-bold text-slate-950">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Consulta
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="white" size="lg" className="w-full sm:w-auto text-[#0EA5A4]">
                  Ver Endereço e Como Chegar
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

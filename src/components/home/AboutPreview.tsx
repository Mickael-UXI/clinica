import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Button } from '../ui/Button';

export const AboutPreview: React.FC = () => {
  const differentials = [
    'Tecnologia 3D CAD/CAM e escaneamento intraoral sem moldes desconfortáveis',
    'Equipe de especialistas com pós-graduação e mestrado pela USP e UNICAMP',
    'Ambiente acolhedor com aromaterapia, música relaxante e café gourmet',
    'Sedação consciente com óxido nitroso para pacientes com ansiedade odontológica',
    'Rigoroso controle de biossegurança hospitalar e esterilização monitorada',
    'Localização privilegiada na Av. Paulista com estacionamento conveniado'
  ];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0EA5A4] bg-teal-50 mb-3">
              Sobre a Sorriso Perfeito
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Uma clínica pensada para o seu bem-estar
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
              <p>
                Fundada há mais de 15 anos no coração de São Paulo, a <strong className="text-slate-800 font-semibold">Sorriso Perfeito</strong> nasceu com o propósito de desmistificar o medo de dentista e transformar cada consulta em uma experiência segura, acolhedora e gratificante.
              </p>
              <p>
                Aliamos a precisão científica dos melhores centros acadêmicos do país ao carinho de um atendimento verdadeiramente humanizado. Aqui, você não é apenas um número de prontuário: é ouvido com atenção e participa ativamente de cada etapa do seu plano de tratamento.
              </p>
              <p>
                Nossos consultórios são equipados com tecnologia robótica, câmeras intraorais de alta resolução e sistemas anestésicos indolores para que seu sorriso receba sempre o que há de mais avançado no mundo.
              </p>
            </div>

            {/* Differentials with checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {differentials.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#0EA5A4] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Link to="/sobre">
                <Button variant="primary" size="lg" className="shadow-lg shadow-teal-500/20">
                  Conheça nossa história
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="/images/clinic-interior.jpg"
                alt="Recepção moderna e acolhedora da Clínica Odontológica Sorriso Perfeito"
                className="w-full h-auto object-cover max-h-[550px] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 max-w-xs animate-bounce-subtle">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-[#0EA5A4] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-sm font-bold text-slate-900">100% Digital &amp; Seguro</span>
                <span className="block text-xs text-slate-500">Prontuário criptografado e precisão 3D</span>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 animate-bounce-subtle">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-[#FBBF24] shrink-0">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div>
                <span className="block text-sm font-bold text-slate-900">Atendimento Humanizado</span>
                <span className="block text-xs text-slate-500">Zero dor e foco no seu conforto</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

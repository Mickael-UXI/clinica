import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../components/common/SocialIcons';
import { SEOHead } from '../components/common/SEOHead';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Button } from '../components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Insira um e-mail válido'),
  phone: z.string().min(10, 'Insira um telefone válido com DDD (mínimo 10 dígitos)'),
  subject: z.string().min(3, 'Assunto é obrigatório'),
  message: z.string().min(10, 'Mensagem deve ter no mínimo 10 caracteres'),
  lgpdConsent: z.boolean().refine((val) => val === true, {
    message: 'É necessário concordar com a política de privacidade',
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Simulate network request or API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Mensagem de contato enviada:', data);
      setIsSubmitted(true);
      reset();
    } catch {
      setErrorMessage('Ocorreu um erro ao enviar. Por favor, tente pelo WhatsApp ou e-mail.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Fale Conosco e Localização | Sorriso Perfeito"
        description="Entre em contato com a clínica Sorriso Perfeito na Av. Paulista, 1000, São Paulo. Telefones, WhatsApp, horários e formulário de mensagem."
        canonicalUrl="https://sorrisoperfeito.com.br/contato"
      />

      <main className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0EA5A4] bg-teal-100/70 mb-3">
              Canais de Atendimento
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Fale com a nossa equipe
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Estamos prontos para esclarecer todas as suas dúvidas sobre tratamentos, planos de pagamento e agendamentos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Envie uma mensagem
              </h2>
              <p className="text-sm text-slate-600 mb-8">
                Preencha os campos abaixo e entraremos em contato rapidamente.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#0EA5A4] text-white flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Mensagem enviada com sucesso!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Agradecemos seu contato. Nossa equipe de recepção retornará via WhatsApp ou telefone em até 2 horas úteis.
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Enviar outra mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Nome Completo"
                      placeholder="Ex: Mariana Silva"
                      {...register('name')}
                      error={errors.name?.message}
                      required
                    />
                    <Input
                      label="E-mail"
                      type="email"
                      placeholder="mariana@exemplo.com"
                      {...register('email')}
                      error={errors.email?.message}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Telefone / WhatsApp"
                      placeholder="(11) 99999-9999"
                      {...register('phone')}
                      error={errors.phone?.message}
                      required
                    />
                    <Input
                      label="Assunto"
                      placeholder="Ex: Dúvida sobre clareamento"
                      {...register('subject')}
                      error={errors.subject?.message}
                      required
                    />
                  </div>

                  <Textarea
                    label="Sua Mensagem"
                    placeholder="Conte-nos como podemos ajudar você..."
                    rows={4}
                    {...register('message')}
                    error={errors.message?.message}
                    required
                  />

                  {/* LGPD Consent */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register('lgpdConsent')}
                        className="mt-1 w-4 h-4 rounded text-[#0EA5A4] focus:ring-[#0EA5A4] border-slate-300"
                      />
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Concordo com o tratamento dos meus dados pessoais para fins de contato e agendamento pela Clínica Sorriso Perfeito, em conformidade com a <strong>LGPD</strong>.
                      </span>
                    </label>
                    {errors.lgpdConsent && (
                      <p className="mt-1 text-xs text-red-500 font-medium">
                        {errors.lgpdConsent.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full sm:w-auto mt-4"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </div>

            {/* Information Block */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Informações da Clínica
                </h3>

                <ul className="space-y-5 text-sm">
                  <li className="flex items-start gap-3.5 text-slate-600">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#0EA5A4] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold">Endereço</strong>
                      <span>Av. Paulista, 1000 — Bela Vista, São Paulo/SP</span>
                      <span className="block text-xs text-slate-400 mt-0.5">Em frente à estação Trianon-MASP</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5 text-slate-600">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#0EA5A4] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold">Telefone Central</strong>
                      <a href="tel:1130000000" className="hover:text-[#0EA5A4] transition-colors">
                        (11) 3000-0000
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5 text-slate-600">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#25D366] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold">WhatsApp Comercial</strong>
                      <a
                        href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#25D366] transition-colors font-medium"
                      >
                        (11) 99999-9999
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5 text-slate-600">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#0EA5A4] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold">E-mail</strong>
                      <a href="mailto:contato@sorrisoperfeito.com.br" className="hover:text-[#0EA5A4] transition-colors">
                        contato@sorrisoperfeito.com.br
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5 text-slate-600">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-[#FBBF24] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold">Horário de Funcionamento</strong>
                      <span className="block">Segunda a Sexta: 08:00 às 20:00</span>
                      <span className="block">Sábados: 08:00 às 14:00</span>
                    </div>
                  </li>
                </ul>

                {/* Social media icons large */}
                <div className="pt-6 border-t border-slate-100">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Redes Sociais
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-slate-100 hover:bg-pink-600 hover:text-white text-slate-700 transition-all hover:scale-105"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-all hover:scale-105"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-5 h-5" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 transition-all hover:scale-105"
                      aria-label="YouTube"
                    >
                      <YoutubeIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Maps */}
          <div className="mt-16 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <h3 className="text-lg font-bold text-slate-900 mb-4 px-2">
              Como Chegar — Av. Paulista, 1000, São Paulo
            </h3>
            <div className="w-full h-80 rounded-2xl overflow-hidden bg-slate-100">
              <iframe
                title="Localização da Clínica Sorriso Perfeito na Av Paulista"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197478051649!2d-46.6542614238515!3d-23.564936378796593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

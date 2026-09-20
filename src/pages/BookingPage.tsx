import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Calendar,
  Clock,
  ShieldCheck,
  User,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { servicesData } from '../data/services';
import { dentistsData } from '../data/dentists';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Button } from '../components/ui/Button';

const bookingSchema = z.object({
  fullName: z.string().min(3, 'Nome completo deve ter no mínimo 3 caracteres'),
  phone: z
    .string()
    .min(10, 'Insira um telefone válido com DDD (Ex: 11999999999)')
    .regex(/^[0-9()\s-+]+$/, 'Formato de telefone inválido'),
  email: z.string().email('Insira um e-mail válido'),
  service: z.string().min(1, 'Selecione um tratamento desejado'),
  dentist: z.string().optional(),
  preferredDate: z.string().min(1, 'Selecione uma data preferida'),
  period: z.enum(['manha', 'tarde', 'noite'], {
    errorMap: () => ({ message: 'Selecione o período de preferência' }),
  }),
  message: z.string().optional(),
  lgpdConsent: z.boolean().refine((val) => val === true, {
    message: 'Você precisa autorizar o contato de acordo com a LGPD',
  }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export const BookingPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const preselectedService = searchParams.get('servico') || '';
  const preselectedDentist = searchParams.get('dentista') || '';

  // Calculate today's date in YYYY-MM-DD for min date
  const today = new Date().toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      period: 'manha',
      service: preselectedService,
      dentist: preselectedDentist,
      lgpdConsent: false,
    },
  });

  useEffect(() => {
    if (preselectedService) {
      setValue('service', preselectedService);
    }
    if (preselectedDentist) {
      setValue('dentist', preselectedDentist);
    }
  }, [preselectedService, preselectedDentist, setValue]);

  // Phone mask helper
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setValue('phone', value, { shouldValidate: true });
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Save booking details to sessionStorage for confirmation page display
      sessionStorage.setItem('sorriso_last_booking', JSON.stringify(data));

      // Redirect to confirmation page
      navigate('/agendar/confirmacao');
    } catch {
      setErrorMessage('Houve um erro ao processar seu agendamento. Tente pelo WhatsApp ou por telefone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Agendamento de Consulta Online | Sorriso Perfeito"
        description="Agende sua consulta odontológica online em São Paulo na Sorriso Perfeito. Escolha o serviço, dentista, data e horário em poucos cliques."
        canonicalUrl="https://sorrisoperfeito.com.br/agendar"
      />

      <main className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0EA5A4] bg-teal-100/70 mb-3">
              Agendamento Inteligente
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Agende sua Consulta Online
            </h1>
            <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
              Preencha os dados e entraremos em contato em até <strong className="text-slate-800">2 horas úteis</strong> para confirmar seu horário preferido.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="pb-6 border-b border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#0EA5A4]" />
                  <span>1. Seus Dados Pessoais</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Nome Completo"
                    placeholder="Ex: Carlos Eduardo Silveira"
                    {...register('fullName')}
                    error={errors.fullName?.message}
                    required
                  />

                  <Input
                    label="Telefone / WhatsApp"
                    placeholder="(11) 98765-4321"
                    onChange={handlePhoneChange}
                    error={errors.phone?.message}
                    required
                  />

                  <div className="sm:col-span-2">
                    <Input
                      label="E-mail"
                      type="email"
                      placeholder="carlos@exemplo.com.br"
                      {...register('email')}
                      error={errors.email?.message}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Treatment and Specialist Choice */}
              <div className="pb-6 border-b border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#0EA5A4]" />
                  <span>2. Escolha do Tratamento e Profissional</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Serviço Desejado <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('service')}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5A4] focus:border-transparent transition-all"
                    >
                      <option value="">Selecione um tratamento...</option>
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.category})
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-red-500 font-medium">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Dentista de Preferência (Opcional)
                    </label>
                    <select
                      {...register('dentist')}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5A4] focus:border-transparent transition-all"
                    >
                      <option value="">Primeiro especialista disponível</option>
                      {dentistsData.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} — {d.specialty.split('&')[0]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Date & Period Selection */}
              <div className="pb-6 border-b border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#0EA5A4]" />
                  <span>3. Data e Horário Preferido</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      label="Data Desejada"
                      type="date"
                      min={today}
                      {...register('preferredDate')}
                      error={errors.preferredDate?.message}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Período do Dia <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <label className="flex items-center justify-center p-2.5 border rounded-xl text-xs font-semibold cursor-pointer has-checked:bg-teal-50 has-checked:border-[#0EA5A4] has-checked:text-[#0EA5A4]">
                        <input
                          type="radio"
                          value="manha"
                          {...register('period')}
                          className="sr-only"
                        />
                        <span>Manhã (8h-12h)</span>
                      </label>
                      <label className="flex items-center justify-center p-2.5 border rounded-xl text-xs font-semibold cursor-pointer has-checked:bg-teal-50 has-checked:border-[#0EA5A4] has-checked:text-[#0EA5A4]">
                        <input
                          type="radio"
                          value="tarde"
                          {...register('period')}
                          className="sr-only"
                        />
                        <span>Tarde (12h-17h)</span>
                      </label>
                      <label className="flex items-center justify-center p-2.5 border rounded-xl text-xs font-semibold cursor-pointer has-checked:bg-teal-50 has-checked:border-[#0EA5A4] has-checked:text-[#0EA5A4]">
                        <input
                          type="radio"
                          value="noite"
                          {...register('period')}
                          className="sr-only"
                        />
                        <span>Noite (17h-20h)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <Textarea
                  label="Mensagem Adicional / Observações (Opcional)"
                  placeholder="Conte-nos se você sente dor, tem algum histórico médico especial ou prefere atendimento por WhatsApp..."
                  rows={3}
                  {...register('message')}
                />
              </div>

              {/* LGPD Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('lgpdConsent')}
                    className="mt-1 w-4 h-4 rounded text-[#0EA5A4] focus:ring-[#0EA5A4] border-slate-300"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    Autorizo a Clínica Sorriso Perfeito a entrar em contato comigo por telefone, WhatsApp e e-mail para confirmação e acompanhamento do agendamento, conforme a <strong>LGPD</strong>.
                  </span>
                </label>
                {errors.lgpdConsent && (
                  <p className="mt-1 text-xs text-red-500 font-medium">
                    {errors.lgpdConsent.message}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full text-base font-bold shadow-xl shadow-teal-500/25 py-4"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Confirmar Solicitação de Agendamento
                </Button>
                <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#0EA5A4]" />
                    Resposta em até 2 horas úteis
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Sem compromisso financeiro antecipado
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

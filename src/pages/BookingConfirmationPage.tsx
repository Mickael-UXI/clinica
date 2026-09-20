import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Phone,
  FileText
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/ui/Button';

interface SavedBooking {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  dentist?: string;
  preferredDate: string;
  period: string;
  message?: string;
}

export const BookingConfirmationPage: React.FC = () => {
  const [booking, setBooking] = useState<SavedBooking | null>(null);

  useEffect(() => {
    const data = sessionStorage.getItem('sorriso_last_booking');
    if (data) {
      try {
        setBooking(JSON.parse(data));
      } catch {
        // ignore
      }
    }
  }, []);

  const formatPeriod = (p?: string) => {
    if (p === 'manha') return 'Manhã (08h às 12h)';
    if (p === 'tarde') return 'Tarde (12h às 17h)';
    if (p === 'noite') return 'Noite (17h às 20h)';
    return 'Horário Comercial';
  };

  const formatDate = (d?: string) => {
    if (!d) return 'A combinar';
    const parts = d.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return d;
  };

  return (
    <>
      <SEOHead
        title="Agendamento Confirmado com Sucesso | Sorriso Perfeito"
        description="Sua solicitação de agendamento na Clínica Sorriso Perfeito foi enviada com sucesso. Entraremos em contato em até 2 horas úteis."
      />

      <main className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Card */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-teal-50 text-[#0EA5A4] flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0EA5A4] bg-teal-100/70 mb-3">
              Solicitação Recebida
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Agendamento Pré-Confirmado!
            </h1>

            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 max-w-lg mx-auto mb-8">
              <p className="text-sm font-semibold text-teal-900">
                ⚡ Entraremos em contato em até <span className="underline">2 horas úteis</span> via WhatsApp ou ligação para confirmar seu horário exato e tirar quaisquer dúvidas.
              </p>
            </div>

            {/* Details Box */}
            {booking && (
              <div className="text-left bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 space-y-3 text-sm">
                <h3 className="font-bold text-slate-900 text-base border-b border-slate-200 pb-2 mb-3">
                  Resumo da sua Solicitação:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block">Paciente:</span>
                    <strong className="text-slate-800">{booking.fullName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">WhatsApp:</span>
                    <strong className="text-slate-800">{booking.phone}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Tratamento:</span>
                    <strong className="text-[#0EA5A4]">{booking.service}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Especialista:</span>
                    <strong className="text-slate-800">{booking.dentist || 'Primeiro disponível'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Data Preferida:</span>
                    <strong className="text-slate-800">{formatDate(booking.preferredDate)}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Período:</span>
                    <strong className="text-slate-800">{formatPeriod(booking.period)}</strong>
                  </div>
                </div>
              </div>
            )}

            {/* Useful Instructions */}
            <div className="text-left bg-white p-6 rounded-2xl border border-slate-200 mb-8 space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#0EA5A4]" />
                <span>Orientações para o dia da consulta:</span>
              </h4>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li>Chegue com 10 minutos de antecedência para desfrutar do nosso café e preencher a anamnese digital.</li>
                <li>Traga um documento oficial com foto (RG ou CNH).</li>
                <li>Se possuir radiografias ou exames tomográficos recentes (menos de 6 meses), traga para análise.</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Voltar à Página Inicial
                </Button>
              </Link>
              <a
                href={`https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Acabei de enviar uma solicitação de agendamento pelo site e gostaria de agilizar a confirmação.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Agilizar pelo WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block">
              <img
                src="/images/logo.svg"
                alt="Sorriso Perfeito"
                className="h-9 w-auto"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Cuidando do seu sorriso com tecnologia de ponta e humanização. Mais de 15 anos de excelência odontológica no coração de São Paulo.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Sorriso Perfeito"
                className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-600 transition-all hover:scale-110"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Sorriso Perfeito"
                className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all hover:scale-110"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube da Sorriso Perfeito"
                className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 transition-all hover:scale-110"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok da Sorriso Perfeito"
                className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0EA5A4] transition-all hover:scale-110 font-bold text-xs"
              >
                TT
              </a>
            </div>

            {/* Certifications Badges */}
            <div className="pt-3 flex items-center gap-4">
              <img
                src="/images/certification-01.png"
                alt="Clínica Certificada CRO-SP 12345"
                className="w-14 h-14 object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/certification-02.png"
                alt="LGPD Compliant"
                className="w-14 h-14 object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase text-xs">
              Links Rápidos
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-[#0EA5A4] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-slate-400 hover:text-[#0EA5A4] transition-colors">
                  Sobre Nós & Estrutura
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="text-slate-400 hover:text-[#0EA5A4] transition-colors">
                  Corpo Clínico Especializado
                </Link>
              </li>
              <li>
                <Link to="/depoimentos" className="text-slate-400 hover:text-[#0EA5A4] transition-colors">
                  Depoimentos & Antes e Depois
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-[#0EA5A4] transition-colors">
                  Blog de Saúde Bucal
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-slate-400 hover:text-[#0EA5A4] transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link to="/agendar" className="inline-flex items-center gap-1.5 text-[#0EA5A4] font-semibold hover:underline">
                  <Calendar className="w-3.5 h-3.5" />
                  Agendar Consulta Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase text-xs">
              Tratamentos em Destaque
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/servicos/clareamento-dental" className="text-slate-400 hover:text-[#0EA5A4] transition-colors">
                  Clareamento Dental a Laser
                </Link>
              </li>
              <li>
                <Link to="/servicos/alinhadores-invisiveis" className="text-slate-400 hover:text-[#0EA5A4] transition-colors">
                  Alinhadores Invisíveis
                </Link>
              </li>
              <li>
                <Link to="/servicos/implantes-dentarios" className="text-slate-400 hover:text-[#0EA5A4] transition-colors">
                  Implantes Dentários Guiados
                </Link>
              </li>
              <li>
                <Link to="/servicos/facetas-de-porcelana" className="text-slate-400 hover:text-[#0EA5A4] transition-colors">
                  Facetas e Lentes de Contato
                </Link>
              </li>
              <li>
                <Link to="/servicos/odontopediatria" className="text-slate-400 hover:text-[#0EA5A4] transition-colors">
                  Odontopediatria Lúdica
                </Link>
              </li>
              <li>
                <Link to="/servicos/harmonizacao-orofacial" className="text-slate-400 hover:text-[#0EA5A4] transition-colors">
                  Harmonização Orofacial
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-[#0EA5A4] font-semibold hover:underline">
                  Ver Todos os 14 Tratamentos →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase text-xs">
              Atendimento & Localização
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-[#0EA5A4] shrink-0 mt-0.5" />
                <span>Av. Paulista, 1000 — Bela Vista, São Paulo/SP (Metrô Trianon-Masp)</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-[#0EA5A4] shrink-0" />
                <a href="tel:1130000000" className="hover:text-white transition-colors">
                  (11) 3000-0000
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20na%20Sorriso%20Perfeito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-[#0EA5A4] shrink-0" />
                <a href="mailto:contato@sorrisoperfeito.com.br" className="hover:text-white transition-colors">
                  contato@sorrisoperfeito.com.br
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" />
                <span className="text-xs">
                  Seg–Sex: 8h às 20h<br />
                  Sábados: 8h às 14h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2025 Sorriso Perfeito Odontologia. Todos os direitos reservados. CRO-SP 12345.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Termos de Uso</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Diretrizes LGPD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

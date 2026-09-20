import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Página Não Encontrada (404) | Sorriso Perfeito"
        description="A página que você procura não foi encontrada. Conheça nossos tratamentos odontológicos na Sorriso Perfeito."
      />

      <main className="bg-slate-50 min-h-[80vh] flex items-center justify-center py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          {/* Sad Tooth Illustration */}
          <div className="w-56 h-56 mx-auto mb-6">
            <img
              src="/images/404-illustration.png"
              alt="Dente triste segurando placa 404"
              className="w-full h-full object-contain"
            />
          </div>

          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100 mb-3">
            Erro 404
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Ops! Esse dente se perdeu pelo caminho
          </h1>

          <p className="text-base text-slate-600 leading-relaxed mb-8">
            A página que você tentou acessar não existe, foi alterada ou mudou de endereço. Mas não se preocupe: aqui na Sorriso Perfeito a gente sempre cuida de tudo!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                Voltar para o Início
              </Button>
            </Link>

            <Link to="/servicos" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Search className="w-4 h-4 mr-2" />
                Ver Nossos Tratamentos
              </Button>
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 text-xs text-slate-500">
            Precisa de ajuda urgente? Ligue para <a href="tel:1130000000" className="text-[#0EA5A4] font-semibold">(11) 3000-0000</a> ou chame no WhatsApp.
          </div>
        </div>
      </main>
    </>
  );
};

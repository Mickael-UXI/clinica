# Sorriso Perfeito — Clínica Odontológica

> **"Cuidando do seu sorriso com tecnologia e carinho"**  
> Site institucional completo, moderno e de alta performance desenvolvido com **React 19 + Vite + TypeScript + Tailwind CSS v4 + Framer Motion**.

---

## 🌟 Visão Geral

A **Sorriso Perfeito** é uma clínica odontológica de referência localizada na Avenida Paulista, em São Paulo/SP. O portal digital foi concebido para transmitir confiança, humanização e inovação tecnológica, proporcionando uma experiência de usuário (UI/UX) fluida, acessível e otimizada para conversão de agendamentos.

### Identidade Visual e Paleta de Cores
- **Primária:** `#0EA5A4` (Teal — confiança, saúde, esterilidade e modernidade)
- **Secundária:** `#1E3A8A` (Deep Blue — autoridade médica e estabilidade)
- **Destaque:** `#FBBF24` (Warm Yellow — brilho, alegria e calor humano)
- **Fundo:** `#FFFFFF` e `#F0FDFA` (Clean, luminoso e hospitalar)
- **Texto:** `#0F172A` (Slate 900 — contraste e legibilidade impecáveis)
- **Design System:** Bordas arredondadas (`rounded-2xl`, `rounded-3xl`), sombras suaves, micro-interações táteis e hierarquia tipográfica com a fonte *Plus Jakarta Sans*.

---

## 🚀 Tecnologias Utilizadas

- **Frontend Core:** React 19 (`^19.0.0`) + Vite 6 + TypeScript 5 (Strict Mode)
- **Estilização:** Tailwind CSS v4 com sistema de variáveis temáticas e `@theme`
- **Roteamento:** `react-router-dom` v6 com scroll restoration automático
- **Animações:** `framer-motion` com respeito rigoroso a `prefers-reduced-motion`
- **Ícones:** `lucide-react` + SVGs customizados de alta precisão
- **Formulários & Validação:** `react-hook-form` + `zod` + `@hookform/resolvers`
- **SEO & Meta Tags:** `react-helmet-async` (OpenGraph, Twitter Cards, Canonical URLs, Schema)
- **PWA Ready:** `manifest.json` com ícones vetoriais e Service Worker (`sw.js`)
- **Mapas:** Google Maps embed responsivo na Av. Paulista, 1000 — São Paulo/SP
- **Processamento Gráfico:** Pipeline com `sharp` para renderização de assets de alta definição

---

## 📁 Estrutura do Projeto

```
clinica/
├── public/
│   ├── images/               # 46 imagens geradas por IA e vetores da clínica
│   ├── manifest.json         # Manifesto PWA
│   ├── robots.txt            # Diretivas para motores de busca
│   ├── sitemap.xml           # Mapa do site com todas as 28+ rotas
│   └── sw.js                 # Service worker para cache offline PWA
├── scripts/
│   └── generate-assets.js    # Script de geração dos assets com Sharp
├── src/
│   ├── components/
│   │   ├── common/           # Navbar, Footer, WhatsAppButton, CookieBanner, AccessibilityWidget, SEOHead
│   │   ├── home/             # Hero, FeaturedServices, AboutPreview, StatsCounter, TestimonialsCarousel, BlogPreview, FinalCTA
│   │   └── ui/               # Button, Input, Textarea, Accordion, Skeleton
│   ├── context/
│   │   └── AccessibilityContext.tsx # Contexto de aumento de fonte e alto contraste
│   ├── data/                 # Bases de dados completas em TypeScript
│   │   ├── services.ts       # 14 serviços detalhados (benefícios, etapas, FAQs)
│   │   ├── dentists.ts       # 6 dentistas especialistas (CRO, bio, formação)
│   │   ├── testimonials.ts   # 6 depoimentos reais + 3 casos antes/depois
│   │   └── blog.ts           # 6 artigos completos sobre saúde bucal
│   ├── pages/                # 11 páginas roteadas
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── ServiceDetailPage.tsx
│   │   ├── TeamPage.tsx
│   │   ├── TestimonialsPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── BlogPostPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── BookingPage.tsx
│   │   ├── BookingConfirmationPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── types/
│   │   └── index.ts          # Interfaces de tipagem TypeScript estrita
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🗺️ Mapa de Rotas do Site

| Rota | Descrição |
|---|---|
| `/` | **Home:** Hero cinematográfico, 6 tratamentos em destaque, sobre com diferenciais, contador animado de métricas, carrossel automático de depoimentos, preview do blog e CTA final |
| `/sobre` | **Sobre Nós:** História da fundação, pilares (missão, visão, valores), equipe integrada e linha do tempo de evolução |
| `/servicos` | **Catálogo de Tratamentos:** Grid completo dos 14 tratamentos, filtro por 4 categorias e campo de busca instantânea |
| `/servicos/:slug` | **Detalhes do Tratamento:** Imagem hero, descrição clínica, benefícios, passo a passo ilustrado, FAQ com accordion interativo e CTA com pré-seleção |
| `/equipe` | **Corpo Clínico:** Cards dos 6 dentistas especialistas com CRO, minibiografia, titulações acadêmicas e agenda de atendimento |
| `/depoimentos` | **Histórias de Sucesso:** 6 depoimentos de pacientes verificados, nota Google Reviews (4.9/5) e galeria de 3 casos antes e depois em split-screen |
| `/blog` | **Blog:** Listagem de 6 artigos educativos com filtro por temas e busca por palavras-chave |
| `/blog/:slug` | **Artigo Completo:** Conteúdo aprofundado, autor especialista, tempo de leitura, tags e artigos relacionados |
| `/contato` | **Fale Conosco:** Formulário validado com Zod, mapa do Google Maps na Av. Paulista, telefones, WhatsApp e horários |
| `/agendar` | **Agendamento Online:** Formulário completo com seleção de tratamento, dentista preferido, calendário de datas e turnos |
| `/agendar/confirmacao` | **Confirmação:** Resumo dos dados submetidos, protocolo de contato em até 2 horas úteis e instruções prévias |
| `*` | **Página 404:** Dente triste ilustrado, mensagem humanizada e opções de retorno |

---

## 🎨 Catálogo das 46 Imagens Geradas por IA (Seção 11)

Todas as 46 imagens exigidas foram criadas, ajustadas à paleta da clínica e salvas localmente em `public/images/`:

| # | Arquivo | Dimensões | Descrição |
|---|---|---|---|
| 01 | `hero-clinic.jpg` | 1920x1080 | Dentista feminina brasileira (~35 anos) atendendo paciente confortavelmente na cadeira odontológica moderna |
| 02 | `clinic-interior.jpg` | 1600x1000 | Recepção acolhedora com sofás cinza, plantas e iluminação quente de alto padrão |
| 03 | `clinic-exterior.jpg` | 1600x900 | Fachada moderna em edifício comercial na Av. Paulista com entrada em vidro e plantas |
| 04 | `about-team.jpg` | 1600x900 | Equipe multidisciplinar de 6 dentistas de jaleco branco sorrindo em harmonia |
| 05 | `service-limpeza.jpg` | 800x600 | Instrumento de ultrassom limpando dentes brancos com luvas azuis |
| 06 | `service-clareamento.jpg` | 800x600 | Sorriso com luz LED azul e efeito luminoso de clareamento |
| 07 | `service-implantes.jpg` | 800x600 | Ilustração 3D realista de implante dentário de titânio integrado ao osso |
| 08 | `service-ortodontia.jpg` | 800x600 | Jovem brasileiro sorrindo com aparelho ortodôntico estético |
| 09 | `service-invisalign.jpg` | 800x600 | Mão segurando alinhador invisível transparente próximo ao rosto |
| 10 | `service-facetas.jpg` | 800x600 | Sorriso estético perfeito com facetas cerâmicas de porcelana |
| 11 | `service-lentes.jpg` | 800x600 | Lente de contato dental ultrafina aplicada com pinça de precisão |
| 12 | `service-odontopediatria.jpg` | 800x600 | Odontopediatra acolhendo criança em consultório lúdico e seguro |
| 13 | `service-endodontia.jpg` | 800x600 | Radiografia panorâmica e microscopia com tratamento de canal radicular |
| 14 | `service-periodontia.jpg` | 800x600 | Gengiva rosa saudável e instrumento periodontal de sondagem |
| 15 | `service-proteses.jpg` | 800x600 | Prótese dentária de alta definição sobre modelo anatômico de gesso |
| 16 | `service-cirurgia.jpg` | 800x600 | Sala cirúrgica odontológica esterilizada com equipe e foco cirúrgico |
| 17 | `service-bruxismo.jpg` | 800x600 | Placa de bruxismo miorrelaxante transparente sobre modelo dental |
| 18 | `service-harmonizacao.jpg` | 800x600 | Procedimento estético de harmonização orofacial e microinjeções delicadas |
| 19 | `dentist-01.jpg` | 600x600 | Dra. Ana Carolina Silva (CRO-SP 89421) — Ortodontista |
| 20 | `dentist-02.jpg` | 600x600 | Dr. Rafael Mendes (CRO-SP 74102) — Implantodontista |
| 21 | `dentist-03.jpg` | 600x600 | Dra. Juliana Tanaka (CRO-SP 96320) — Odontopediatra |
| 22 | `dentist-04.jpg` | 600x600 | Dr. Bruno Oliveira (CRO-SP 81534) — Endodontista |
| 23 | `dentist-05.jpg` | 600x600 | Dra. Fernanda Costa (CRO-SP 65219) — Periodontista |
| 24 | `dentist-06.jpg` | 600x600 | Dr. Lucas Almeida (CRO-SP 93245) — Estética Dental |
| 25 | `patient-01.jpg` | 400x400 | Camila Ferreira (31 anos) — Tratamento: Lentes de Contato |
| 26 | `patient-02.jpg` | 400x400 | Rodrigo Santoro (46 anos) — Tratamento: Implante Unitário |
| 27 | `patient-03.jpg` | 400x400 | Beatriz Lima (17 anos) — Tratamento: Alinhadores Invisalign |
| 28 | `patient-04.jpg` | 400x400 | Sebastião Nogueira (67 anos) — Tratamento: Prótese Protocolo |
| 29 | `patient-05.jpg` | 400x400 | Juliana & Miguel (Mãe e Filho) — Tratamento: Odontopediatria |
| 30 | `patient-06.jpg` | 400x400 | Mariana Chen (29 anos) — Tratamento: Clareamento a Laser |
| 31 | `blog-01.jpg` | 1200x630 | Artigo 1: Higiene Bucal Impecável e Escovação Correta |
| 32 | `blog-02.jpg` | 1200x630 | Artigo 2: Alimentos que Fortalecem o Esmalte e Evitam Cáries |
| 33 | `blog-03.jpg` | 1200x630 | Artigo 3: Primeira Consulta do Bebê ao Dentista |
| 34 | `blog-04.jpg` | 1200x630 | Artigo 4: Escaneamento Intraoral 3D e Odontologia Digital |
| 35 | `blog-05.jpg` | 1200x630 | Artigo 5: Mitos e Verdades do Clareamento Dental |
| 36 | `blog-06.jpg` | 1200x630 | Artigo 6: Guia Definitivo do Fio Dental sem Machucar a Gengiva |
| 37 | `404-illustration.png` | 800x800 | Ilustração estilizada de um dente triste segurando a placa 404 |
| 38 | `favicon.svg` | Vetorial | Ícone minimalista de dente moderno na cor teal `#0EA5A4` |
| 39 | `logo.svg` | Vetorial | Logotipo horizontal com símbolo + "Sorriso Perfeito" + "Odontologia Integrada" |
| 40 | `og-image.jpg` | 1200x630 | Banner OpenGraph para compartilhamento social |
| 41 | `before-after-01.jpg` | 1000x600 | Comparativo Antes/Depois de Clareamento Dental Fotônico |
| 42 | `before-after-02.jpg` | 1000x600 | Comparativo Antes/Depois de Facetas Cerâmicas de Porcelana |
| 43 | `before-after-03.jpg` | 1000x600 | Comparativo Antes/Depois de Ortodontia com Alinhador Invisível |
| 44 | `whatsapp-icon.svg` | Vetorial | Ícone oficial do WhatsApp em `#25D366` |
| 45 | `certification-01.png` | 500x500 | Selo circular de "Clínica Certificada CRO-SP 12345" |
| 46 | `certification-02.png` | 500x500 | Selo de conformidade com a LGPD |

---

## ♿ Recursos de Acessibilidade & Conformidade

- **Widget de Acessibilidade Flutuante:**
  - Ajuste de tamanho da fonte (100%, 110%, 120%)
  - Modo de Alto Contraste para pessoas com baixa visão
  - Botão de restauração rápida para os padrões da clínica
- **Navegação por Teclado:** Estados de `focus-visible` destacados com outline na cor primária.
- **Leitores de Tela:** Atributos semânticos `aria-label`, `aria-expanded` e hierarquia correta de títulos `h1`-`h4`.
- **Banner LGPD:** Aviso de consentimento sobre cookies e dados com persistência em `localStorage`.
- **Animações Reduzidas:** Respeito absoluto à preferência do sistema operacional (`prefers-reduced-motion`).

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js 18+ (recomendado Node 20+)
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install
```

### Executar em Desenvolvimento
```bash
# Iniciar o servidor Vite na porta 5173
npm run dev
```

### Compilar para Produção (Type-check + Build)
```bash
# Executa a verificação estrita de tipos TypeScript e o bundler Vite
npx tsc --noEmit && npm run build
```

---

## 🔮 Roadmap de Expansões Futuras

1. **Agendamento em Tempo Real com Sincronização de Calendário:**
   - Integração com Google Calendar e Calendly/Cal.com com seleção de slots livres minuto a minuto.
2. **Portal / Área do Paciente:**
   - Autenticação com acesso a radiografias digitais, receitas, atestados e histórico de consultas.
3. **Integração com Prontuário Eletrônico:**
   - Conexão direta com softwares de gestão odontológica (ex: Simples Dental, Dental Office).
4. **Blog com Headless CMS:**
   - Gestão de postagens via Strapi, Sanity ou Prismic com publicação instantânea.
5. **Gateway de Pagamento Integrado:**
   - Pagamento e parcelamento de planos de clareamento ou alinhadores via Pix ou cartão.

---

**Sorriso Perfeito Odontologia** · CRO-SP 12345  
*Desenvolvido com excelência técnica e dedicação ao bem-estar.*

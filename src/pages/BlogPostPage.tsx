import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Calendar as CalendarIcon,
  Tag
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { blogPostsData } from '../data/blog';
import { Button } from '../components/ui/Button';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPostsData
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link do artigo copiado para a área de transferência!');
    }
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | Blog Sorriso Perfeito`}
        description={post.excerpt}
        ogImage={post.image}
        canonicalUrl={`https://sorrisoperfeito.com.br/blog/${post.slug}`}
        ogType="article"
      />

      <main className="bg-slate-50 min-h-screen pb-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 overflow-x-auto">
              <Link to="/" className="hover:text-[#0EA5A4] transition-colors">
                Início
              </Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-[#0EA5A4] transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold truncate">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Post Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Article */}
            <article className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#0EA5A4] mb-6 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Voltar para todos os artigos
              </Link>

              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#0EA5A4] mb-4">
                {post.category}
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                {post.title}
              </h1>

              {/* Author & Meta */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100 mb-8 text-xs sm:text-sm text-slate-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-[#0EA5A4] font-bold">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">{post.author}</span>
                    <span className="block text-xs text-slate-400">{post.authorRole}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {post.readTime}
                  </span>
                  <button
                    onClick={handleShare}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-[#0EA5A4] hover:bg-slate-100 transition-colors"
                    title="Compartilhar artigo"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative rounded-2xl overflow-hidden mb-8 bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover max-h-[450px]"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-slate max-w-none space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
                {post.content.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-8 mt-10 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-slate-400 mr-1" />
                <span className="text-xs font-bold text-slate-500 mr-2">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Agende sua Consulta Card */}
              <div className="bg-gradient-to-br from-[#0EA5A4] to-[#1E3A8A] text-white p-6 sm:p-8 rounded-3xl shadow-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24] block mb-2">
                  Atendimento Especializado
                </span>
                <h3 className="text-2xl font-black mb-3">
                  Agende sua consulta com nossos dentistas
                </h3>
                <p className="text-sm text-teal-50 mb-6 leading-relaxed">
                  Avaliação completa com câmeras intraorais em São Paulo. Descubra o tratamento ideal para você.
                </p>
                <Link to="/agendar" className="block">
                  <Button variant="accent" size="lg" className="w-full font-bold text-slate-950">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    Agendar Consulta Online
                  </Button>
                </Link>
              </div>

              {/* Related Posts */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-4">
                  Artigos Recomendados
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((rel) => (
                    <Link
                      key={rel.slug}
                      to={`/blog/${rel.slug}`}
                      className="flex items-center gap-3 group"
                    >
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="block text-xs font-bold text-[#0EA5A4] mb-0.5">
                          {rel.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#0EA5A4] transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

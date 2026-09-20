import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { blogPostsData } from '../data/blog';

export const BlogPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Prevenção', 'Nutrição', 'Odontopediatria', 'Tecnologia', 'Estética', 'Dicas Práticas'];

  const filteredPosts = useMemo(() => {
    return blogPostsData.filter((post) => {
      const matchesCategory =
        selectedCategory === 'Todos' || post.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <>
      <SEOHead
        title="Blog de Saúde Bucal e Odontologia | Sorriso Perfeito"
        description="Artigos educativos, dicas de prevenção, avanços tecnológicos e cuidados odontológicos para toda a família escritos por nossos especialistas."
        canonicalUrl="https://sorrisoperfeito.com.br/blog"
      />

      <main className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0EA5A4] bg-teal-100/70 mb-3">
              Conhecimento e Prevenção
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Blog Sorriso Perfeito
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Conteúdos práticos e com embasamento científico para você cuidar do seu sorriso e de quem você ama todos os dias.
            </p>
          </div>

          {/* Search & Categories Bar */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Pesquisar artigos ou temas..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5A4] focus:border-transparent"
                />
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#0EA5A4] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#0EA5A4] text-white shadow-sm">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#0EA5A4] transition-colors leading-snug mb-3">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
                        <User className="w-3.5 h-3.5 text-[#0EA5A4]" />
                        <span>Por {post.author}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0EA5A4] group-hover:text-[#0D9488]"
                    >
                      <span>Ler artigo completo</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-700">Nenhum artigo encontrado</h3>
              <p className="text-sm text-slate-500 mt-1">
                Tente buscar por outros termos ou selecionar a categoria "Todos".
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

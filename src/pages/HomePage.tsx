import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Hero } from '../components/home/Hero';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { AboutPreview } from '../components/home/AboutPreview';
import { StatsCounter } from '../components/home/StatsCounter';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { BlogPreview } from '../components/home/BlogPreview';
import { FinalCTA } from '../components/home/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Sorriso Perfeito | Clínica Odontológica em São Paulo"
        description="Cuidando do seu sorriso com tecnologia e carinho. Implantes, Invisalign, clareamento, lentes de contato e odontopediatria na Av. Paulista, São Paulo."
        canonicalUrl="https://sorrisoperfeito.com.br"
      />
      <main>
        <Hero />
        <FeaturedServices />
        <AboutPreview />
        <StatsCounter />
        <TestimonialsCarousel />
        <BlogPreview />
        <FinalCTA />
      </main>
    </>
  );
};

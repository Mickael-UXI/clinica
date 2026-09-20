import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Sorriso Perfeito | Clínica Odontológica em São Paulo',
  description = 'Cuidando do seu sorriso com tecnologia e carinho. Implantes, alinhadores invisíveis, clareamento, facetas e odontopediatria na Av. Paulista, São Paulo.',
  canonicalUrl = 'https://sorrisoperfeito.com.br',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
}) => {
  const fullTitle = title.includes('Sorriso Perfeito')
    ? title
    : `${title} | Sorriso Perfeito - Clínica Odontológica`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Sorriso Perfeito" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { personalInfo, siteConfig } from '../data/mock';
import { getCurrentUrl } from '../lib/browser';

const SEO = ({ title, description, image, url }) => {
  const siteTitle = title ? `${title} | ${personalInfo.name}` : `${personalInfo.name} - ${personalInfo.title}`;
  const metaDescription = description || personalInfo.bio;
  const metaImage = image || '/og-image.png'; // Assuming an OG image exists or will exist
  const metaUrl = url || getCurrentUrl();

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />

      {/* Theme Color (matches the new dark mode) */}
      <meta name="theme-color" content="#2563eb" /> {/* blue-600 */}
      <meta name="msapplication-TileColor" content="#0f172a" />
    </Helmet>
  );
};

export default SEO;

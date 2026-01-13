'use client';

import React from 'react';

interface SEOLayoutProps {
  title: string;
  description: string;
  h1: string; // Enforced single H1
  canonicalUrl?: string;
  ogImage?: string;
  schema?: object; // Schema.org JSON-LD
  children: React.ReactNode;
  className?: string;
}

export function SEOLayout({
  title,
  description,
  h1,
  canonicalUrl,
  ogImage,
  schema,
  children,
  className = '',
}: SEOLayoutProps) {
  // Validate exactly one H1
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const h1Elements = document.querySelectorAll('h1');
      if (h1Elements.length !== 1) {
        console.error(`SEO Error: Expected exactly 1 H1, found ${h1Elements.length}`);
      }
    }
  }, []);

  // Update document head
  React.useEffect(() => {
    const fullTitle = title.includes('Calterio') ? title : `${title} | Calterio Logic`;
    
    // Update title
    document.title = fullTitle;
    
    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
    
    // Update or create Open Graph tags
    const updateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    updateMeta('og:title', fullTitle);
    updateMeta('og:description', description);
    updateMeta('og:type', 'website');
    if (ogImage) updateMeta('og:image', ogImage);
    
    // Update or create canonical link
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }
    
    // Add Schema.org JSON-LD
    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }
  }, [title, description, canonicalUrl, ogImage, schema]);

  return (
    <div className={className}>
      {/* Enforced single H1 - visible, not sr-only for SEO */}
      <h1 className="text-4xl md:text-5xl font-semibold text-text-primary mb-4">{h1}</h1>
      {children}
    </div>
  );
}


import React from 'react';
import { Icon } from '@iconify/react';

interface HeroProps {
  headline: string;
  subtext: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
  architectureVisual?: React.ReactNode;
  className?: string;
}

export function Hero({
  headline,
  subtext,
  primaryCTA,
  secondaryCTA,
  architectureVisual,
  className = '',
}: HeroProps) {
  return (
    <section className={`relative min-h-screen flex items-center bg-background ${className}`}>
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-text-primary leading-tight">
              {headline}
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl">
              {subtext}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={primaryCTA.link}
                className="inline-flex items-center justify-center px-8 py-4 bg-calterio-orange text-background font-semibold rounded-md hover:bg-calterio-orange/90 transition-colors duration-200"
              >
                {primaryCTA.text}
                <Icon icon="bi:arrow-right" className="ml-2" />
              </a>
              {secondaryCTA && (
                <a
                  href={secondaryCTA.link}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-calterio-orange text-calterio-orange font-semibold rounded-md hover:bg-calterio-orange hover:text-background transition-all duration-200"
                >
                  {secondaryCTA.text}
                </a>
              )}
            </div>
          </div>

          {/* Architecture Visual */}
          <div className="relative">
            {architectureVisual || (
              <div className="w-full h-96 bg-surface border border-border-default rounded-md flex items-center justify-center">
                <span className="text-text-muted">Architecture Diagram</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


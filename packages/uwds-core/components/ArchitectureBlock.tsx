'use client';

import React, { useState } from 'react';

interface ArchitectureBlockProps {
  title: string;
  description?: string;
  diagram: React.ReactNode;
  highlight?: string[];
  zoomable?: boolean;
  className?: string;
}

export function ArchitectureBlock({
  title,
  description,
  diagram,
  highlight = [],
  zoomable = true,
  className = '',
}: ArchitectureBlockProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className={`space-y-6 ${className}`}>
      <div>
        <h2 className="text-3xl font-semibold text-text-primary mb-2">{title}</h2>
        {description && (
          <p className="text-text-secondary leading-relaxed">{description}</p>
        )}
      </div>

      <div 
        className={`relative bg-surface border border-border-default rounded-md overflow-hidden ${
          zoomable ? 'cursor-zoom-in' : ''
        }`}
        onClick={() => zoomable && setIsZoomed(!isZoomed)}
      >
        <div className={`transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}>
          {diagram}
        </div>
        
        {zoomable && (
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs text-text-secondary">
            {isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
          </div>
        )}
      </div>

      {highlight.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4">
          {highlight.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-calterio-orange/10 text-calterio-orange rounded-md text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}


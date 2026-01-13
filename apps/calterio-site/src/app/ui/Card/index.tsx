import React from 'react';
import Link from 'next/link';
import Div from '../Div';
import { Icon } from '@iconify/react';

interface SystemCardProps {
  title: string;
  description?: string;
  link?: string;
  icon?: React.ReactNode;
  iconName?: string;
  variant?: 'default' | 'feature' | 'use-case';
}

// SystemCard component - adapted from Card for Calterio use cases
export default function SystemCard({ 
  title, 
  description, 
  link, 
  icon, 
  iconName,
  variant = 'default' 
}: SystemCardProps) {
  const cardClasses = 'group relative overflow-hidden rounded-md card-hover h-full flex flex-col';
  
  const content = (
    <Div className="flex flex-col h-full">
      {iconName && (
        <Div className="mb-4">
          <Icon 
            icon={iconName} 
            className="text-4xl text-calterio-orange group-hover:scale-110 transition-transform duration-200"
          />
        </Div>
      )}
      {icon && (
        <Div className="mb-4">
          {icon}
        </Div>
      )}
      <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-calterio-orange transition-colors">
        {title}
      </h3>
      {description && (
        <p className="text-text-secondary text-sm leading-relaxed flex-grow">
          {description}
        </p>
      )}
      <Div className="mt-4 flex items-center text-calterio-orange text-sm font-medium">
        <span>Learn more</span>
        <Icon icon="bi:arrow-right" className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Div>
    </Div>
  );

  if (link) {
    return (
      <Link href={link} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}

// Keep original ImageCard for backward compatibility
interface ImageCardProps {
  title: string;
  link: string;
  src: string;
  alt: string;
}

export function ImageCard({ title, link, src, alt }: ImageCardProps) {
  return (
    <Link href={link} className="cs-card cs-style1">
      <>
        <img src={src} alt={alt} />
        <Div className="cs-card_overlay" />
        <Div className="cs-card_info">
          <span className="cs-hover_layer3 cs-accent_bg" />
          <h2 className="cs-card_title">{title}</h2>
        </Div>
      </>
    </Link>
  );
}

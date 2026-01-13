import React from 'react';
import { Icon } from '@iconify/react';

interface SystemCardProps {
  title: string;
  description: string;
  icon?: string;
  iconComponent?: React.ReactNode;
  link?: string;
  accent?: 'orange' | 'red' | 'blue';
  className?: string;
}

export function SystemCard({
  title,
  description,
  icon,
  iconComponent,
  link,
  accent = 'orange',
  className = '',
}: SystemCardProps) {
  const accentColors = {
    orange: 'text-calterio-orange',
    red: 'text-calterio-red',
    blue: 'text-calterio-darkBlue',
  };

  const accentColor = accentColors[accent];
  const hoverBorderColor = accent === 'orange' ? 'hover:border-calterio-orange' : 
                           accent === 'red' ? 'hover:border-calterio-red' : 
                           'hover:border-calterio-darkBlue';

  const content = (
    <div className={`group relative overflow-hidden rounded-md bg-surface border border-border-default ${hoverBorderColor} transition-all duration-200 p-6 h-full flex flex-col ${className}`}>
      {/* Icon */}
      {(icon || iconComponent) && (
        <div className="mb-4">
          {iconComponent || (
            <Icon 
              icon={icon!} 
              className={`text-4xl ${accentColor} group-hover:scale-110 transition-transform duration-200`}
            />
          )}
        </div>
      )}

      {/* Title */}
      <h3 className={`text-xl font-semibold text-text-primary mb-2 group-hover:${accentColor} transition-colors`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed flex-grow">
        {description}
      </p>

      {/* Learn More Link */}
      <div className={`mt-4 flex items-center ${accentColor} text-sm font-medium`}>
        <span>Learn more</span>
        <Icon icon="bi:arrow-right" className="ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block h-full">
        {content}
      </a>
    );
  }

  return content;
}


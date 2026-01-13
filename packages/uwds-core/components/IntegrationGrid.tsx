import React from 'react';
import { Icon } from '@iconify/react';

interface Integration {
  name: string;
  category: 'PLC' | 'Robot' | 'Protocol' | 'Enterprise';
  icon?: string;
  logo?: string;
}

interface IntegrationGridProps {
  integrations: Integration[];
  title?: string;
  className?: string;
}

export function IntegrationGrid({
  integrations,
  title,
  className = '',
}: IntegrationGridProps) {
  const categoryColors = {
    PLC: 'bg-calterio-orange/10 text-calterio-orange',
    Robot: 'bg-calterio-red/10 text-calterio-red',
    Protocol: 'bg-calterio-darkBlue/10 text-calterio-darkBlue',
    Enterprise: 'bg-surface border border-border-default text-text-primary',
  };

  return (
    <div className={className}>
      {title && (
        <h2 className="text-3xl font-semibold text-text-primary mb-8">{title}</h2>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {integrations.map((integration, index) => (
          <div
            key={index}
            className="group relative bg-surface border border-border-default rounded-md p-4 hover:border-calterio-orange transition-all duration-200 flex flex-col items-center justify-center text-center"
          >
            {integration.logo ? (
              <img
                src={integration.logo}
                alt={integration.name}
                className="h-12 w-auto mb-2 opacity-80 group-hover:opacity-100 transition-opacity"
              />
            ) : integration.icon ? (
              <Icon
                icon={integration.icon}
                className="text-4xl text-calterio-orange mb-2 group-hover:scale-110 transition-transform"
              />
            ) : null}
            
            <div className="text-sm font-medium text-text-primary mb-1">
              {integration.name}
            </div>
            
            <span className={`text-xs px-2 py-1 rounded-md ${categoryColors[integration.category]}`}>
              {integration.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


import React from 'react';
import { Icon } from '@iconify/react';

interface ProblemBlockProps {
  title?: string;
  problems: string[];
  solutions: string[];
  className?: string;
}

export function ProblemBlock({
  title,
  problems,
  solutions,
  className = '',
}: ProblemBlockProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      {/* Problems */}
      <div className="space-y-4">
        {title && (
          <h3 className="text-2xl font-semibold text-text-primary mb-4">
            {title}
          </h3>
        )}
        <div className="space-y-3">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start gap-3">
              <Icon
                icon="bi:x-circle"
                className="text-calterio-red text-xl flex-shrink-0 mt-0.5"
              />
              <p className="text-text-secondary leading-relaxed">{problem}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-text-primary mb-4">
          Calterio Solution
        </h3>
        <div className="space-y-3">
          {solutions.map((solution, index) => (
            <div key={index} className="flex items-start gap-3">
              <Icon
                icon="bi:check-circle"
                className="text-calterio-orange text-xl flex-shrink-0 mt-0.5"
              />
              <p className="text-text-secondary leading-relaxed">{solution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


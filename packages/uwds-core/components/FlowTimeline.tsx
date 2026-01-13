import React from 'react';
import { Icon } from '@iconify/react';

interface FlowStep {
  title: string;
  description: string;
  icon?: string;
}

interface FlowTimelineProps {
  steps: FlowStep[];
  flowType?: 'signal-decision-execution' | 'linear' | 'custom';
  className?: string;
}

export function FlowTimeline({
  steps,
  flowType = 'linear',
  className = '',
}: FlowTimelineProps) {
  const getFlowLabel = (index: number) => {
    if (flowType === 'signal-decision-execution') {
      const labels = ['Signal', 'Decision', 'Execution', 'Learning'];
      return labels[index] || '';
    }
    return '';
  };

  return (
    <div className={`relative ${className}`}>
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border-default hidden md:block" />

      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start gap-6">
            {/* Icon/Number */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-surface border-2 border-calterio-orange flex items-center justify-center">
                {step.icon ? (
                  <Icon icon={step.icon} className="text-2xl text-calterio-orange" />
                ) : (
                  <span className="text-calterio-orange font-mono font-bold text-lg">
                    {index + 1}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow pt-2">
              {flowType === 'signal-decision-execution' && getFlowLabel(index) && (
                <div className="text-calterio-orange text-xs font-semibold uppercase tracking-wide mb-1">
                  {getFlowLabel(index)}
                </div>
              )}
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Arrow (except last) */}
            {index < steps.length - 1 && (
              <div className="absolute left-8 top-16 hidden md:block">
                <Icon 
                  icon="bi:arrow-down" 
                  className="text-calterio-orange text-2xl"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


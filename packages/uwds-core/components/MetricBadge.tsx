import React from 'react';

interface MetricBadgeProps {
  value: string;
  label: string;
  accent?: 'orange' | 'red' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function MetricBadge({
  value,
  label,
  accent = 'orange',
  size = 'md',
  className = '',
}: MetricBadgeProps) {
  const accentColors = {
    orange: 'text-calterio-orange',
    red: 'text-calterio-red',
    blue: 'text-calterio-darkBlue',
  };

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
  };

  return (
    <div className={`text-center ${className}`}>
      <div className={`font-mono font-bold ${sizeClasses[size]} ${accentColors[accent]} mb-2`}>
        {value}
      </div>
      <div className="text-text-secondary text-sm font-medium uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}


import React from 'react';
import { Icon } from '@iconify/react';
import Link from "next/link";

interface ButtonProps {
  btnLink?: string;
  btnText: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'default';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  btnLink, 
  btnText, 
  variant, 
  icon, 
  onClick,
  className = '',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center gap-2 transition-colors duration-200';
  
  // Variant styles using Tailwind classes
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    default: 'text-text-primary hover:text-calterio-orange',
  };

  const buttonClassName = variant 
    ? `${baseClasses} ${variantClasses[variant] || variantClasses.default} ${className}`
    : `${baseClasses} ${variantClasses.default} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={buttonClassName}>
        <span>{btnText}</span>
        {icon ? icon : <Icon icon="bi:arrow-right" />}
      </button>
    );
  }

  return (
    <Link href={btnLink || '#'} className={buttonClassName}>
      <span>{btnText}</span>
      {icon ? icon : <Icon icon="bi:arrow-right" />}
    </Link>
  );
}

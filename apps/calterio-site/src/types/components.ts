/**
 * Common component prop types
 */

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LinkProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}


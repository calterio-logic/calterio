import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-semibold text-text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text-primary mb-4">Page Not Found</h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary inline-flex items-center justify-center"
          >
            Go Home
            <Icon icon="bi:arrow-right" className="ml-2" />
          </Link>
          <Link
            href="/architecture"
            className="btn-secondary inline-flex items-center justify-center"
          >
            View Architecture
          </Link>
        </div>
      </div>
    </div>
  );
}


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '', // Empty for organization/user page (https://username.github.io/)
  // If project page, set to '/repository-name' (e.g., '/calterio' for https://username.github.io/calterio/)
  assetPrefix: '', // Empty for GitHub Pages
  // Disable server-side features for static export
  reactStrictMode: true,
  // Transpile workspace packages
  transpilePackages: ['@calterio/uwds-core'],
  // Disable ESLint during build to avoid configuration issues
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

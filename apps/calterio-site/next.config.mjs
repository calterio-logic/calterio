/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '', // Empty for root domain (calterio.com)
  assetPrefix: '', // Empty for root domain
  // Disable server-side features for static export
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;

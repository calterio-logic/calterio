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
  // Exclude template routes that aren't being used
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Custom webpack config to exclude template routes
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude template routes from client bundle
      config.resolve.alias = {
        ...config.resolve.alias,
      };
    }
    return config;
  },
};

export default nextConfig;

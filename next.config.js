/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/viswanathanr',
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
    ],
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

module.exports = nextConfig;

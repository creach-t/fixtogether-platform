/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: "../../",
  },
  // Configure environment variables
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3001/api',
  },
  images: {
    domains: ['localhost', 'fixtogether.com'], // Add domains for hosted images
  },
};

module.exports = nextConfig;

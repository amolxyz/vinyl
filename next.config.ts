import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mssadlt8nkffobic.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    ppr: true,
    inlineCss: true,
  },
};

export default nextConfig;

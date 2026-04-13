/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/(.*)\\.(jpg|jpeg|png|webp|avif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)\\.(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect non-www to www (permanent 301)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sreetravel.com',
          },
        ],
        destination: 'https://www.sreetravel.com/:path*',
        permanent: true,
      },
      // Redirect HTTP non-www root to HTTPS www
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'sreetravel.com',
          },
        ],
        destination: 'https://www.sreetravel.com/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


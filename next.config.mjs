/** @type {import('next').NextConfig} */
const nextConfig = {
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

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            // pathname: '/account123/**',
          },
          {
            hostname:'assetscdn1.paytm.com'
          },
          {
            protocol: 'https',
            hostname: 'static.toiimg.com'
          },
          {
            protocol: 'https',
            hostname: 'assets-in.bmscdn.com'
          }
        ],
      },
};

export default nextConfig;

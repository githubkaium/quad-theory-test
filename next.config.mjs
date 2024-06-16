/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.api.technicaltest.quadtheoryltd.com',
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth/login",
        permanent: true,
      },
    ];
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;

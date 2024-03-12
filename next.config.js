/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flipdish.imgix.net",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

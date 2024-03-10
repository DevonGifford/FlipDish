/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  optimizeFonts: true,
  images: {
    domains: ["flipdish.imgix.net"],
  },
};

module.exports = nextConfig;


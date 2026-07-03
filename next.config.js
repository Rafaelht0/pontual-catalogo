/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // troque por otimização normal quando as fotos de produto forem hospedadas em /public
    unoptimized: true,
  },
};

module.exports = nextConfig;

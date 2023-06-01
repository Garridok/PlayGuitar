/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    //A las imagenes hay que poner de que dominio proceden, por seguridad de next.
    domains: ['res.cloudinary.com'],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  }
}

module.exports = nextConfig

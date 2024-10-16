/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['3cs-energetic-fermi.circumeo-apps.net'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8080",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "3cs-energetic-fermi.circumeo-apps.net",
        port: "",
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

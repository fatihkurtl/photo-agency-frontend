/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    domains: ["sea-lion-app-75389.ondigitalocean.app"],
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
        hostname: "sea-lion-app-75389.ondigitalocean.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://sea-lion-app-75389.ondigitalocean.app/:path*",
      },
    ];
  },
};

export default nextConfig;

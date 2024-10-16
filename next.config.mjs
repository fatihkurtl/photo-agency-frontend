/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
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
        source: "/api/:path*",
        destination: "https://sea-lion-app-75389.ondigitalocean.app/:path*",
      },
      {
        source: "/home/:path*",
        destination:
          "https://sea-lion-app-75389.ondigitalocean.app/home/:path*",
      },
      {
        source: "/references/:path*",
        destination:
          "https://sea-lion-app-75389.ondigitalocean.app/references/:path*",
      },
      {
        source: "/contact/:path*",
        destination:
          "https://sea-lion-app-75389.ondigitalocean.app/contact/:path*",
      },
      {
        source: "/services/:path*",
        destination:
          "https://sea-lion-app-75389.ondigitalocean.app/services/:path*",
      },
      {
        source: "/about/:path*",
        destination:
          "https://sea-lion-app-75389.ondigitalocean.app/about/:path*",
      },
      {
        source: "/portfolio/:path*",
        destination:
          "https://sea-lion-app-75389.ondigitalocean.app/portfolio/:path*",
      },
    ];
  },
};

export default nextConfig;

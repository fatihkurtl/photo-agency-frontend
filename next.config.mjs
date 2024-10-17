/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  images: {
    domains: ["musical-kellyann-fatihkurt-dee41f98.koyeb.app"],
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
        hostname: "monkfish-app-2-l9a2v.ondigitalocean.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "musical-kellyann-fatihkurt-dee41f98.koyeb.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://musical-kellyann-fatihkurt-dee41f98.koyeb.app/:path*",
      },
      {
        source: "/home/:path*",
        destination:
          "https://musical-kellyann-fatihkurt-dee41f98.koyeb.app/home/:path*",
      },
      {
        source: "/references/:path*",
        destination:
          "https://musical-kellyann-fatihkurt-dee41f98.koyeb.app/references/:path*",
      },
      {
        source: "/contact/:path*",
        destination:
          "https://musical-kellyann-fatihkurt-dee41f98.koyeb.app/contact/:path*",
      },
      {
        source: "/services/:path*",
        destination:
          "https://musical-kellyann-fatihkurt-dee41f98.koyeb.app/services/:path*",
      },
      {
        source: "/about/:path*",
        destination:
          "https://musical-kellyann-fatihkurt-dee41f98.koyeb.app/about/:path*",
      },
      {
        source: "/portfolio/:path*",
        destination:
          "https://musical-kellyann-fatihkurt-dee41f98.koyeb.app/portfolio/:path*",
      },
    ];
  },
};

export default nextConfig;

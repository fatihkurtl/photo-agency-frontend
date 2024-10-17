/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  images: {
    domains: ["monkfish-app-2-l9a2v.ondigitalocean.app"],
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
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://monkfish-app-2-l9a2v.ondigitalocean.app/:path*",
      },
      {
        source: "/home/:path*",
        destination:
          "https://monkfish-app-2-l9a2v.ondigitalocean.app/home/:path*",
      },
      {
        source: "/references/:path*",
        destination:
          "https://monkfish-app-2-l9a2v.ondigitalocean.app/references/:path*",
      },
      {
        source: "/contact/:path*",
        destination:
          "https://monkfish-app-2-l9a2v.ondigitalocean.app/contact/:path*",
      },
      {
        source: "/services/:path*",
        destination:
          "https://monkfish-app-2-l9a2v.ondigitalocean.app/services/:path*",
      },
      {
        source: "/about/:path*",
        destination:
          "https://monkfish-app-2-l9a2v.ondigitalocean.app/about/:path*",
      },
      {
        source: "/portfolio/:path*",
        destination:
          "https://monkfish-app-2-l9a2v.ondigitalocean.app/portfolio/:path*",
      },
    ];
  },
};

export default nextConfig;

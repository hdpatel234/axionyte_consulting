import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Direct alias /services and /solutions to /service
      {
        source: "/services",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/solutions",
        destination: "/service",
        permanent: true,
      },
      // Individual single service pages redirect to /contact per client feedback
      {
        source: "/service/:slug+",
        destination: "/contact",
        permanent: false,
      },
      {
        source: "/services/:slug+",
        destination: "/contact",
        permanent: false,
      },
      {
        source: "/solutions/:slug*",
        destination: "/contact",
        permanent: false,
      },
      {
        source: "/service-single",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;


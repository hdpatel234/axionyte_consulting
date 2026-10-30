import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/solutions",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/solutions/:slug*",
        destination: "/service/:slug*",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/services/:slug*",
        destination: "/service/:slug*",
        permanent: true,
      },
      {
        source: "/service-single",
        destination: "/service",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


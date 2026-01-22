import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/shaping-outcomes",
        destination: "/outcomes",
        permanent: true,
      },
      {
        source: "/shaping-outcomes/:slug",
        destination: "/outcomes/:slug",
        permanent: true,
      },
      {
        source: "/lines-of-inquiry",
        destination: "/decisions",
        permanent: true,
      },
      {
        source: "/lines-of-inquiry/:slug",
        destination: "/decisions/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   typedRoutes: true
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }
    ]
  }
};

export default nextConfig;

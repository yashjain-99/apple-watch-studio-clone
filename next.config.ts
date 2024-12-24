import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "store.storeimages.cdn-apple.com",
      },
    ],
  },
};

export default nextConfig;

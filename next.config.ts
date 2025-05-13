import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://placehold.co/**'),
      new URL('https://res.cloudinary.com/**'),
    ],
    dangerouslyAllowSVG: true
  },
};

export default nextConfig;

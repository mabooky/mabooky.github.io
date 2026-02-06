import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: ['tailored-m3'],
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true, // enable MDX with the new Rust parser (recommended)
  },
};

const withMDX = require('@next/mdx')();
export default nextConfig;

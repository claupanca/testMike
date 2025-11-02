/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: "/testMike",
  assetPrefix: "/testMike/",
  output: "export",
};

export default nextConfig;

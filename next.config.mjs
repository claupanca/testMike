/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: "/testMike", // Add this line
  assetPrefix: "/testMike", // Add this line
  output: "export",
};

export default nextConfig;

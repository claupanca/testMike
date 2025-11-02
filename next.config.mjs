/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: "/testMike",
  // assetPrefix: "/testMike",
  assetPrefix: "https://claupanca.github.io/testMike",
  output: "export",
};

export default nextConfig;

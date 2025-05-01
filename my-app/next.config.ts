/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lightningcss"],
  experimental: {
    optimizeCss: false, // Disable the feature causing issues with lightningcss
  },
};

export default nextConfig;

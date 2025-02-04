/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables lint checks during the build process
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    domains: [
      "firebasestorage.googleapis.com",
      "img.icons8.com",
      "icpc.global",
      "img.freepik.com",
      "media.licdn.com",
      "res.cloudinary.com"
    ],
  },
};

export default nextConfig;

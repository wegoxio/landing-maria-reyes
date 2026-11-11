import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    unoptimized: true, // 👈 Desactiva la optimización de imágenes globalmente en desarrollo/producción
  },
};

export default nextConfig;

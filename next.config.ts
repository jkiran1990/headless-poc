/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  serverExternalPackages: ["msw", "@mswjs/interceptors"],
};

export default nextConfig;

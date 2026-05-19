/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Convenience: root → DNAMatch overview (first sidebar entry).
      { source: '/', destination: '/dnamatch', permanent: false },
    ];
  },
};

export default nextConfig;

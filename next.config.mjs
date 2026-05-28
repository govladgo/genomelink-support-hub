/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Convenience: root → Clusters (first sidebar entry under the
      // 4-product IA introduced May 2026).
      { source: '/', destination: '/clusters', permanent: false },

      // SEO continuity from the old structure: Network Graph now lives
      // inside the Clusters article. /dnamatch is a live route again
      // (DNAMatch basics overview), so its 308 redirect is removed.
      { source: '/network-graph', destination: '/clusters', permanent: true },
    ];
  },
};

export default nextConfig;

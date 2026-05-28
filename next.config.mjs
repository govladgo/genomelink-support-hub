/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Convenience: root → Clusters (first sidebar entry under the
      // 4-product IA introduced May 2026).
      { source: '/', destination: '/clusters', permanent: false },

      // SEO continuity from the old structure: Network Graph and the
      // DNAMatch umbrella both collapse into the Clusters product.
      { source: '/network-graph', destination: '/clusters', permanent: true },
      { source: '/dnamatch', destination: '/clusters', permanent: true },
    ];
  },
};

export default nextConfig;

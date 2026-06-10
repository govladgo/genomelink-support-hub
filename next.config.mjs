/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Convenience: root → DNAMatch (the product overview + match list,
      // first sidebar entry).
      { source: '/', destination: '/dnamatch', permanent: false },

      // Match Hub is no longer a standalone tool — its cross-vendor
      // deduplication folded into the DNAMatch match list ("Match list
      // cleanup"). Redirect the old slug for continuity.
      { source: '/match-hub', destination: '/dnamatch', permanent: true },

      // DNA Painter renamed to Chromosome Canvas (dnapainter.com trademark).
      { source: '/dna-painter', destination: '/chromosome-canvas', permanent: true },
    ];
  },
};

export default nextConfig;

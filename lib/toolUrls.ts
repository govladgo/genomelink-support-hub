/**
 * Live URLs for each deployed Genomelink DNA Match tool. Each is overridable via
 * a NEXT_PUBLIC_* env var so local dev can point at localhost ports.
 *
 * Used to construct "Open <tool>" CTA links from this hub.
 */
export const ONE_ON_ONE_URL =
  process.env.NEXT_PUBLIC_ONE_ON_ONE_URL ?? 'https://genomelink-one-on-one.vercel.app';
export const MATCH_HUB_URL =
  process.env.NEXT_PUBLIC_MATCH_HUB_URL ?? 'https://genomelink-match-hub.vercel.app';
export const CM_PREDICTOR_URL =
  process.env.NEXT_PUBLIC_CM_PREDICTOR_URL ?? 'https://genomelink-cm-predictor.vercel.app';
// Chromosome Canvas (formerly "DNA Painter"). The prototype is still
// deployed under the dna-painter-v2 Vercel project; the production app path
// is /canvas (was /painter). Devs will rehost when they pick up the prototype.
export const CHROMOSOME_CANVAS_URL =
  process.env.NEXT_PUBLIC_CHROMOSOME_CANVAS_URL ?? 'https://dna-painter-v2.vercel.app';
export const NETWORK_GRAPH_URL =
  process.env.NEXT_PUBLIC_NETWORK_GRAPH_URL ??
  'https://network-graph-prototype-2-0.vercel.app';
export const CLUSTERS_URL =
  process.env.NEXT_PUBLIC_CLUSTERS_URL ?? 'https://genomelink-custom-cluster.vercel.app';

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
export const DNA_PAINTER_URL =
  process.env.NEXT_PUBLIC_DNA_PAINTER_URL ?? 'https://dna-painter-v2.vercel.app';
export const NETWORK_GRAPH_URL =
  process.env.NEXT_PUBLIC_NETWORK_GRAPH_URL ??
  'https://network-graph-prototype-2-0.vercel.app';
export const CLUSTERS_URL =
  process.env.NEXT_PUBLIC_CLUSTERS_URL ?? 'https://genomelink-custom-cluster.vercel.app';

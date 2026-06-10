export interface NavItem {
  slug: string;
  label: string;
  toolLabel: string; // eyebrow text (e.g. "Clusters tool")
  comingSoon?: boolean; // renders a "Soon" badge in the nav
}

export interface NavGroup {
  id: string;
  label?: string; // group heading (e.g. "One-to-One"); omitted = top-level flat items
  items: NavItem[];
}

/**
 * Support Hub IA (revised 2026-05).
 *
 * - DNAMatch     — the match list + lineage groups + match profile +
 *                  Match list cleanup (the cross-vendor dedup formerly
 *                  surfaced as "Match Hub", now a filter inside the list).
 * - Network Graph     — standalone tool: the genetic network visualisation.
 * - Clusters          — standalone tool: group matches by genetic similarity.
 * - Chromosome Canvas — chromosome painting (ingests cluster data). Renamed
 *                       from "DNA Painter" 2026-05 to avoid the dnapainter.com
 *                       trademark.
 * - One-to-One        — per-match analyses; cM Clarity live, the rest "coming soon".
 *
 * Redirects (next.config.mjs): /match-hub → /dnamatch, /dna-painter →
 * /chromosome-canvas, / → /dnamatch.
 */
export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'top',
    items: [
      { slug: 'dnamatch', label: 'DNAMatch', toolLabel: 'DNAMatch overview' },
      { slug: 'network-graph', label: 'Network Graph', toolLabel: 'Network Graph tool' },
      { slug: 'clusters', label: 'Clusters', toolLabel: 'Clusters tool' },
      { slug: 'chromosome-canvas', label: 'Chromosome Canvas', toolLabel: 'Chromosome Canvas tool' },
    ],
  },
  {
    id: 'one-on-one',
    label: 'One-to-One',
    items: [
      { slug: 'cm-clarity', label: 'cM Clarity', toolLabel: 'One-to-One: cM Clarity' },
      // ── Hidden 2026-05-20 per dev validation; re-enable here when work resumes.
      //    Route folders renamed app/_<slug>/ to opt them out of Next.js routing.
      // { slug: 'case-file', label: 'Match Case File', toolLabel: 'One-to-One: Match Case File' },
      // { slug: 'mrca-finder', label: 'MRCA Finder', toolLabel: 'One-to-One: MRCA Finder' },
      // { slug: 'triangulation-lens', label: 'Triangulation Lens', toolLabel: 'One-to-One: Triangulation Lens' },
      { slug: 'side-assignment', label: 'Side Assignment Inspector', toolLabel: 'One-to-One: Side Assignment Inspector', comingSoon: true },
      { slug: 'wato-workspace', label: 'WATO Workspace', toolLabel: 'One-to-One: WATO Workspace', comingSoon: true },
      // { slug: 'y-mt-compare', label: 'Y / mtDNA Compare', toolLabel: 'One-to-One: Y / mtDNA Compare' },
      { slug: 'inferred-segments', label: 'Inferred Segments', toolLabel: 'One-to-One: Inferred Segments', comingSoon: true },
    ],
  },
];

export const ALL_NAV_ITEMS: NavItem[] = NAV_GROUPS.flatMap((g) => g.items);

export function findNavItem(slug: string): NavItem | undefined {
  return ALL_NAV_ITEMS.find((i) => i.slug === slug);
}

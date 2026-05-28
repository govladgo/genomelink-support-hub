export interface NavItem {
  slug: string;
  label: string;
  toolLabel: string; // eyebrow text (e.g. "Clusters tool")
}

export interface NavGroup {
  id: string;
  label?: string; // group heading (e.g. "One-to-One"); omitted = top-level flat items
  items: NavItem[];
}

/**
 * Support Hub IA — 4-product model (SEO restructure 2026-05).
 *
 * 1. Clusters     — merged Network Graph + Custom Cluster + per-cluster reports
 * 2. DNA Painter  — chromosome painting (separate product, ingests cluster data)
 * 3. Match Hub    — cross-vendor deduplication
 * 4. One-to-One   — per-match analyses (4 surviving tools; grows over time)
 *
 * DNAMatch umbrella removed from sidebar (already absent from latest Figma).
 * /network-graph + /dnamatch 308-redirect to /clusters via next.config.mjs.
 */
export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'top',
    items: [
      { slug: 'dnamatch', label: 'DNAMatch basics', toolLabel: 'DNAMatch overview' },
      { slug: 'clusters', label: 'Clusters', toolLabel: 'Clusters tool' },
      { slug: 'dna-painter', label: 'DNA Painter', toolLabel: 'DNA Painter tool' },
      { slug: 'match-hub', label: 'Match Hub', toolLabel: 'Match Hub tool' },
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
      { slug: 'side-assignment', label: 'Side Assignment Inspector', toolLabel: 'One-to-One: Side Assignment Inspector' },
      { slug: 'wato-workspace', label: 'WATO Workspace', toolLabel: 'One-to-One: WATO Workspace' },
      // { slug: 'y-mt-compare', label: 'Y / mtDNA Compare', toolLabel: 'One-to-One: Y / mtDNA Compare' },
      { slug: 'inferred-segments', label: 'Inferred Segments', toolLabel: 'One-to-One: Inferred Segments' },
    ],
  },
];

export const ALL_NAV_ITEMS: NavItem[] = NAV_GROUPS.flatMap((g) => g.items);

export function findNavItem(slug: string): NavItem | undefined {
  return ALL_NAV_ITEMS.find((i) => i.slug === slug);
}

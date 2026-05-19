export interface NavItem {
  slug: string;
  label: string;
  toolLabel: string; // eyebrow text (e.g. "DNA Painter tool")
}

export interface NavGroup {
  id: string;
  label?: string; // group heading (e.g. "1-on-1 tools"); omitted = top-level flat items
  items: NavItem[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'top',
    items: [
      { slug: 'dnamatch', label: 'DNAMatch', toolLabel: 'DNAMatch' },
      { slug: 'network-graph', label: 'Network Graph', toolLabel: 'Network Graph tool' },
      { slug: 'clusters', label: 'Clusters', toolLabel: 'Clusters tool' },
      { slug: 'dna-painter', label: 'DNA Painter', toolLabel: 'DNA Painter tool' },
      { slug: 'match-hub', label: 'Match Hub', toolLabel: 'Match Hub tool' },
    ],
  },
  {
    id: 'one-on-one',
    label: '1-on-1 tools',
    items: [
      { slug: 'cm-clarity', label: 'cM Clarity', toolLabel: '1-on-1: cM Clarity' },
      { slug: 'case-file', label: 'Match Case File', toolLabel: '1-on-1: Match Case File' },
      { slug: 'mrca-finder', label: 'MRCA Finder', toolLabel: '1-on-1: MRCA Finder' },
      { slug: 'triangulation-lens', label: 'Triangulation Lens', toolLabel: '1-on-1: Triangulation Lens' },
      { slug: 'side-assignment', label: 'Side Assignment Inspector', toolLabel: '1-on-1: Side Assignment Inspector' },
      { slug: 'wato-workspace', label: 'WATO Workspace', toolLabel: '1-on-1: WATO Workspace' },
      { slug: 'y-mt-compare', label: 'Y / mtDNA Compare', toolLabel: '1-on-1: Y / mtDNA Compare' },
      { slug: 'inferred-segments', label: 'Inferred Segments', toolLabel: '1-on-1: Inferred Segments' },
    ],
  },
];

export const ALL_NAV_ITEMS: NavItem[] = NAV_GROUPS.flatMap((g) => g.items);

export function findNavItem(slug: string): NavItem | undefined {
  return ALL_NAV_ITEMS.find((i) => i.slug === slug);
}

import React from 'react';

/**
 * Lifted from genomelink-one-on-one's components/y-mt-compare/VerdictBadge.tsx —
 * inlined here so the Y/mtDNA Compare help page can render verdict badges
 * without the hub depending on the 1-on-1 app.
 */
export type Verdict = 'exact-match' | 'same-branch' | 'shared-upstream' | 'divergent' | 'unknown';

const VERDICT_META: Record<Verdict, { label: string; bg: string; fg: string; border?: string }> = {
  'exact-match': {
    label: 'Exact match',
    bg: 'rgba(122, 191, 67, 0.16)',
    fg: 'var(--gl-color-positive-dark)',
  },
  'same-branch': {
    label: 'Same branch',
    bg: 'rgba(69, 130, 201, 0.16)',
    fg: 'var(--gl-color-secondary-dark)',
  },
  'shared-upstream': {
    label: 'Shared upstream',
    bg: 'rgba(255, 179, 0, 0.18)',
    fg: 'var(--gl-color-warning-dark)',
  },
  divergent: {
    label: 'Divergent',
    bg: 'rgba(213, 44, 67, 0.14)',
    fg: 'var(--gl-color-negative-dark)',
  },
  unknown: {
    label: 'Unknown',
    bg: 'rgba(38, 56, 86, 0.10)',
    fg: 'var(--gl-color-text-muted)',
  },
};

export function VerdictBadge({ verdict }: { verdict: Verdict }) {
  const meta = VERDICT_META[verdict];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 12px',
        borderRadius: 999,
        background: meta.bg,
        color: meta.fg,
        fontFamily: 'var(--gl-font)',
        fontSize: 11,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        whiteSpace: 'nowrap',
      }}
    >
      {meta.label}
    </span>
  );
}

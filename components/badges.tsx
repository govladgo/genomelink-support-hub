import React from 'react';

/**
 * Shared badge components lifted from genomelink-one-on-one. Each Help page
 * imports what it needs without depending on the 1-on-1 app's full data layer.
 */

type BaseProps = { size?: 'sm' | 'md' };

function basePill(
  meta: { label: string; symbol: string; bg: string; fg: string },
  size: 'sm' | 'md',
  rightExtra?: string,
) {
  const fontSize = size === 'sm' ? 11 : 12;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: size === 'sm' ? '2px 8px' : '4px 12px',
        borderRadius: 999,
        background: meta.bg,
        color: meta.fg,
        fontSize,
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        fontFamily: 'var(--gl-font)',
        whiteSpace: 'nowrap',
      }}
    >
      <span aria-hidden style={{ fontSize: fontSize + 2, lineHeight: 1 }}>
        {meta.symbol}
      </span>
      {meta.label}
      {rightExtra ? <span style={{ marginLeft: 2 }}>· {rightExtra}</span> : null}
    </span>
  );
}

// ---------- ConfidenceBadge (MRCA Finder) ----------
export type MrcaConfidenceTier = 'high' | 'moderate' | 'low' | 'speculative';
const MRCA_META: Record<MrcaConfidenceTier, { label: string; symbol: string; bg: string; fg: string }> = {
  high: { label: 'High', symbol: '★', bg: 'rgba(122, 191, 67, 0.18)', fg: 'var(--gl-color-positive-dark)' },
  moderate: { label: 'Moderate', symbol: '◐', bg: 'rgba(255, 179, 0, 0.18)', fg: 'var(--gl-color-warning-dark)' },
  low: { label: 'Low', symbol: '○', bg: 'rgba(143, 171, 207, 0.18)', fg: 'var(--gl-color-text-muted)' },
  speculative: { label: 'Speculative', symbol: '·', bg: 'rgba(143, 171, 207, 0.10)', fg: 'var(--gl-color-text-subtle)' },
};
export function ConfidenceBadge({ tier, combined, size = 'md' }: BaseProps & { tier: MrcaConfidenceTier; combined: number }) {
  const pct = `${(combined * 100).toFixed(0)}%`;
  return basePill(MRCA_META[tier], size, pct);
}

// ---------- ConfidenceChip (Triangulation Lens) ----------
export type TGConfidence = 'strong' | 'moderate' | 'weak';
const TG_META: Record<TGConfidence, { label: string; symbol: string; bg: string; fg: string }> = {
  strong: { label: 'Strong', symbol: '★', bg: 'rgba(122, 191, 67, 0.18)', fg: 'var(--gl-color-positive-dark)' },
  moderate: { label: 'Moderate', symbol: '◐', bg: 'rgba(255, 179, 0, 0.18)', fg: 'var(--gl-color-warning-dark)' },
  weak: { label: 'Weak', symbol: '○', bg: 'rgba(143, 171, 207, 0.18)', fg: 'var(--gl-color-text-muted)' },
};
export function ConfidenceChip({ tier, size = 'md' }: BaseProps & { tier: TGConfidence }) {
  return basePill(TG_META[tier], size);
}

// ---------- LineagePill (Side Assignment) ----------
export type Lineage = 'maternal' | 'paternal' | 'unassigned';
const LINEAGE_META: Record<Lineage, { label: string; symbol: string; bg: string; fg: string }> = {
  maternal: { label: 'Maternal', symbol: '♀', bg: 'rgba(213, 44, 67, 0.14)', fg: 'var(--gl-color-negative-dark)' },
  paternal: { label: 'Paternal', symbol: '♂', bg: 'rgba(69, 130, 201, 0.16)', fg: 'var(--gl-color-secondary-dark)' },
  unassigned: { label: 'Unassigned', symbol: '○', bg: 'rgba(143, 171, 207, 0.18)', fg: 'var(--gl-color-text-muted)' },
};
export function LineagePill({ lineage, size = 'md' }: BaseProps & { lineage: Lineage }) {
  return basePill(LINEAGE_META[lineage], size);
}

// ---------- StatusPill (Match Case File) ----------
export type CaseStatus = 'none' | 'investigating' | 'contacted' | 'confirmed' | 'ruled_out';
export interface StatusMeta {
  id: CaseStatus;
  label: string;
  symbol: string;
  bg: string;
  fg: string;
  description: string;
}
export const STATUS_META: StatusMeta[] = [
  {
    id: 'none',
    label: 'No status',
    symbol: '○',
    bg: 'rgba(143, 171, 207, 0.18)',
    fg: 'var(--gl-color-text-muted)',
    description: 'No verdict yet. Pick a status to start your research.',
  },
  {
    id: 'investigating',
    label: 'Investigating',
    symbol: '★',
    bg: 'rgba(255, 179, 0, 0.18)',
    fg: 'var(--gl-color-warning-dark)',
    description: 'Active research. You’re still figuring out the connection.',
  },
  {
    id: 'contacted',
    label: 'Contacted',
    symbol: '✉',
    bg: 'rgba(69, 130, 201, 0.16)',
    fg: 'var(--gl-color-secondary-dark)',
    description: 'You’ve sent outreach. Waiting on or following up on a reply.',
  },
  {
    id: 'confirmed',
    label: 'Confirmed',
    symbol: '✓',
    bg: 'rgba(122, 191, 67, 0.18)',
    fg: 'var(--gl-color-positive-dark)',
    description: 'Relationship confirmed. Common ancestor or path identified.',
  },
  {
    id: 'ruled_out',
    label: 'Ruled out',
    symbol: '✗',
    bg: 'rgba(213, 44, 67, 0.14)',
    fg: 'var(--gl-color-negative-dark)',
    description: 'Not a real connection or wrong line. Requires a reason.',
  },
];
export function StatusPill({ status, size = 'md' }: BaseProps & { status: CaseStatus }) {
  const meta = STATUS_META.find((s) => s.id === status) ?? STATUS_META[0];
  return basePill(meta, size);
}

// ---------- CoverageBucketBadge (Inferred Segments) ----------
export type SegmentBucket = 'unique' | 'weak' | 'corroborated';
const BUCKET_META: Record<SegmentBucket, { label: string; symbol: string; bg: string; fg: string }> = {
  unique: { label: 'Unique', symbol: '★', bg: 'rgba(255, 124, 17, 0.16)', fg: 'var(--gl-color-primary-attention-dark)' },
  weak: { label: 'Weak', symbol: '◐', bg: 'rgba(255, 179, 0, 0.18)', fg: 'var(--gl-color-warning-dark)' },
  corroborated: { label: 'Corroborated', symbol: '✓', bg: 'rgba(122, 191, 67, 0.18)', fg: 'var(--gl-color-positive-dark)' },
};
export function CoverageBucketBadge({ bucket, size = 'md' }: BaseProps & { bucket: SegmentBucket }) {
  return basePill(BUCKET_META[bucket], size);
}

import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { findNavItem } from '@/lib/nav';
import { ONE_ON_ONE_URL } from '@/lib/toolUrls';
import { VerdictBadge } from '@/components/VerdictBadge';

const NAV = findNavItem('y-mt-compare')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support Hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="Y / mtDNA Compare — how it works"
      lede="Y-DNA tracks the strict paternal line (father to son to grandson) and mtDNA tracks the strict maternal line (mother to all children). Sharing the same haplogroup with a match is the strongest evidence of a direct-line common ancestor — much more decisive than autosomal cM, which dilutes across generations and lines."
    >
      <section>
        <h2 style={sectionTitle}>Reading a verdict</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Row
            badge={<VerdictBadge verdict="exact-match" />}
            text="Identical haplogroups. A single direct-line ancestor carried this haplogroup; you both descend from them."
          />
          <Row
            badge={<VerdictBadge verdict="same-branch" />}
            text="Different sub-branches under a shared parent node. Common direct-line ancestor predates the branch split — moderate timescale."
          />
          <Row
            badge={<VerdictBadge verdict="shared-upstream" />}
            text="Shared only at a deeper haplotree level. Common ancestry on a prehistoric timescale, not a recent direct-line connection."
          />
          <Row
            badge={<VerdictBadge verdict="divergent" />}
            text="No shared upstream in the haplotree we cover. No direct-line connection on this line — autosomal evidence elsewhere may still link you."
          />
          <Row
            badge={<VerdictBadge verdict="unknown" />}
            text="One or both haplogroups are missing. About 75% of matches haven't shared their haplogroup data — enter it manually if you've obtained it externally."
          />
        </div>
      </section>

      <section>
        <h2 style={sectionTitle}>About TMRCA estimates</h2>
        <p style={paraStyle}>
          TMRCA — &ldquo;time to most recent common ancestor&rdquo; — is bucketed coarsely in this
          v1: ≤15 generations / 15–50 / 50–200 / 200+. Real TMRCA depends on STR mutation counts and
          marker panel size (FTDNA&apos;s Y67/Y111/Big Y kits give tighter estimates). The buckets
          here are derived from the depth of the shared upstream node in our reference haplotree —
          useful as direction, not as a precise generation count.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>How haplogroups get into the tool</h2>
        <p style={paraStyle}>
          The active demo user always has a haplogroup synthesised from their primary population.
          About 25% of matches also have a synthesised haplogroup, mirroring real-world reality: most
          matches haven&apos;t volunteered haplogroup data. For everyone else, the empty-state
          prompts you to <strong>Enter the match&apos;s haplogroup</strong> — typically from an
          FTDNA project page, a 23andMe report, or a direct ask. Manual entries persist in the
          match&apos;s <Link href="/case-file">Case File</Link> across reloads.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Lineage tags matter here</h2>
        <p style={paraStyle}>
          If you&apos;ve tagged this match as paternal or maternal in{' '}
          <Link href="/side-assignment">Side Assignment Inspector</Link>, the tool defaults to the
          relevant tab. If you open the Y-DNA tab on a maternal-tagged match (or mtDNA on a
          paternal-tagged match), a non-blocking banner appears: the comparison still runs but the
          line doesn&apos;t actually descend that way, so the verdict is informational rather than
          direct-line evidence.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Reference haplotree</h2>
        <p style={paraStyle}>
          v1 ships a minimal reference covering ~30 Y and ~30 mtDNA haplogroups across the
          populations represented in the demo dataset (British/Irish, Germanic, Eastern European,
          Ashkenazi, East Asian). Production data ingestion (FTDNA / 23andMe upload) would expand the
          tree as needed.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>What this tool doesn&apos;t do (yet)</h2>
        <ul style={listStyle}>
          <li>It doesn&apos;t do STR-by-STR comparison at 12/25/37/67/111 markers. Phase 2.</li>
          <li>It doesn&apos;t compute real TMRCA from STR mutation counts. Phase 2.</li>
          <li>It doesn&apos;t auto-ingest haplogroups from 23andMe / FTDNA / GEDmatch uploads. Phase 3.</li>
          <li>It doesn&apos;t do X-DNA comparison. Phase 2.</li>
          <li>It doesn&apos;t do Big Y / Y-700 surname prediction. Phase 3.</li>
        </ul>
      </section>

      <div style={{ marginTop: 12 }}>
        <Link href={`${ONE_ON_ONE_URL}/y-mt-compare`} className="gl-btn gl-btn--primary">
          Open Y / mtDNA Compare
        </Link>
      </div>
    </ContentLayout>
  );
}

function Row({ badge, text }: { badge: React.ReactNode; text: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 14,
        padding: '12px 16px',
        background: 'var(--gl-color-gray-light)',
        borderRadius: 10,
      }}
    >
      <span style={{ flexShrink: 0, marginTop: 2 }}>{badge}</span>
      <span style={{ fontSize: 16, lineHeight: '24px', color: 'var(--gl-color-text-muted)' }}>{text}</span>
    </div>
  );
}

const sectionTitle: React.CSSProperties = {
  margin: 0,
  fontSize: 24,
  fontWeight: 600,
  lineHeight: '32px',
  color: 'var(--gl-color-primary-dark)',


  marginBottom: 8,
};
const paraStyle: React.CSSProperties = { margin: 0, fontSize: 16, lineHeight: '24px', color: 'var(--gl-color-text-muted)' };
const listStyle: React.CSSProperties = {
  margin: 0,
  paddingLeft: 20,
  fontSize: 16,
  lineHeight: '24px',
  color: 'var(--gl-color-text-muted)',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
};

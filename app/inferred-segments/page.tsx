import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { findNavItem } from '@/lib/nav';
import { ONE_ON_ONE_URL } from '@/lib/toolUrls';
import { CoverageBucketBadge } from '@/components/badges';

const NAV = findNavItem('inferred-segments')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="Inferred Segments — how it works"
      lede="Inferred Segments tells you, for each segment you share with this match, whether you have other tagged matches who corroborate the same chromosomal region from the same side of your family. The unique segments are the ones where this match is your only data point — the irreplaceable ones."
    >
      <section>
        <h2 style={sectionTitle}>How we adapted classical ISG</h2>
        <p style={paraStyle}>
          DNA Painter&apos;s classical Inferred Segments Generator needs a triplet: you, a tested
          close relative, and the target match. It computes what the relative shares with the match
          that you don&apos;t — segments the common ancestor passed to them but not to you. That
          assumes the relative is also tested AND that you have the relative&apos;s match list to
          compare against.
        </p>
        <p style={paraStyle}>
          In Genomelink, we have just your match list. So we answer a related, equally useful
          question: <strong>among the matches you&apos;ve tagged as the same side as this match,
          who else covers the same chromosomal region?</strong> When nobody does, this match is your
          only data point — and that&apos;s the actionable insight.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>The three coverage buckets</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Row
            badge={<CoverageBucketBadge bucket="unique" />}
            text="No other same-side-tagged matches overlap this region. This match is the only data point on this part of your inferred common ancestor — high priority to nurture."
          />
          <Row
            badge={<CoverageBucketBadge bucket="weak" />}
            text="1 or 2 same-side supporters corroborate the region. Investigate the supporters; if any are close relatives, they could strengthen the verdict."
          />
          <Row
            badge={<CoverageBucketBadge bucket="corroborated" />}
            text="3+ same-side supporters cover this region. Well-attested; this part of your inferred ancestor has independent confirmation."
          />
        </div>
      </section>

      <section>
        <h2 style={sectionTitle}>The bootstrap dependency</h2>
        <p style={paraStyle}>
          The algorithm relies on lineage tags from{' '}
          <Link href="/side-assignment">Side Assignment Inspector</Link>. Until you tag a few
          matches, there&apos;s no same-side pool to compare against — every segment looks unique,
          but trivially so. Tag 2–5 matches whose side you already know first, then revisit any
          match here to get a meaningful coverage analysis.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>What the coverage ratio means</h2>
        <p style={paraStyle}>
          The header shows a single coverage-ratio percentage = (cM of corroborated segments) /
          (total cM you share with this match). A high ratio means most of what you share with this
          match is also reflected in your other same-side matches — they&apos;re corroborating each
          other. A low ratio means this match is delivering unique signal that your other matches
          don&apos;t replicate, making them more genealogically valuable.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Opposite-side overlaps</h2>
        <p style={paraStyle}>
          When the algorithm finds segments where a supporter is tagged as the opposite side of
          this match, it surfaces them in a collapsible diagnostic section. Most of the time these
          are mistags worth checking. Occasionally — especially under endogamy — a real segment can
          appear on both sides via population-level shared ancestry.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>What this tool doesn&apos;t do (yet)</h2>
        <ul style={listStyle}>
          <li>It doesn&apos;t implement classical ISG with a real tested co-tester. Phase 2.</li>
          <li>It doesn&apos;t draw a genome-wide coverage heatmap across all your tagged matches.</li>
          <li>It doesn&apos;t recommend specific untested close relatives to recruit. Phase 2.</li>
          <li>It doesn&apos;t treat X-DNA specially. Phase 2.</li>
        </ul>
      </section>

      <div style={{ marginTop: 12 }}>
        <Link href={`${ONE_ON_ONE_URL}/inferred-segments`} className="gl-btn gl-btn--primary">
          Open Inferred Segments
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
      <span style={{ fontSize: 14, lineHeight: '22px', color: 'var(--gl-color-text-muted)' }}>{text}</span>
    </div>
  );
}

const sectionTitle: React.CSSProperties = {
  margin: 0,
  fontSize: 22,
  fontWeight: 700,
  lineHeight: '30px',
  color: 'var(--gl-color-primary-dark)',


  marginBottom: 8,
};
const paraStyle: React.CSSProperties = { margin: '0 0 12px', fontSize: 14, lineHeight: '22px', color: 'var(--gl-color-text-muted)' };
const listStyle: React.CSSProperties = {
  margin: 0,
  paddingLeft: 20,
  fontSize: 14,
  lineHeight: '22px',
  color: 'var(--gl-color-text-muted)',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
};

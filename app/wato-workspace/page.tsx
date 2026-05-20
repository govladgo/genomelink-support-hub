import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { findNavItem } from '@/lib/nav';
import { ONE_ON_ONE_URL } from '@/lib/toolUrls';

const NAV = findNavItem('wato-workspace')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support Hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="WATO Workspace — how it works"
      lede={`Any single cM value fits many possible relationships — that's the genealogical reality the Shared cM Project quantifies. WATO Workspace ranks the candidates you think this match could be, conditioning on the observed cM, segment data, and the active population context. It's the "What Are The Odds" method, tightened with segment evidence.`}
    >
      <section>
        <h2 style={sectionTitle}>The signals</h2>
        <ul style={listStyle}>
          <li>
            <strong>cM fit (60% weight)</strong> — for each candidate relationship, computes a normal
            PDF likelihood based on the V4 Shared cM Project range. After endogamy-adjusting the
            observed cM.
          </li>
          <li>
            <strong>Segment count fit (25% weight)</strong> — closer relationships share more
            segments on average. Compared against a curated expected-count table per relationship.
          </li>
          <li>
            <strong>Longest segment fit (15% weight)</strong> — closer relationships also have longer
            top segments. Same Gaussian treatment.
          </li>
          <li>
            <strong>Triangulation flag</strong> — when the active match has ≥2 triangulated groups
            (per <Link href="/triangulation-lens">Triangulation Lens</Link>), every candidate row
            shows a <code style={code}>✓ TG</code> badge.
          </li>
        </ul>
        <p style={paraStyle}>
          When a match has no segment data, the segment and longest weights collapse and WATO scores
          from cM only. The header surfaces a <code style={code}>cM-only mode</code> chip.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Reading the cards</h2>
        <p style={paraStyle}>
          Each candidate card shows a relationship name, its V4 reference range, a score bar, and
          chip indicators for which signals contributed. Click <strong>Show breakdown</strong> to see
          the individual signal contributions. The combined score is normalised so every enabled
          candidate&apos;s percentage sums to 100 — toggle a candidate off and the rest re-normalise
          immediately.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Population context</h2>
        <p style={paraStyle}>
          The dropdown defaults to a population suggested by the match&apos;s primary ancestry.
          Picking an endogamous population (Ashkenazi, Acadian / Quebec, Mennonite, etc.) subtracts
          that population&apos;s baseline-shared cM from the observed value and divides by the
          endogamy equivalent before scoring. The net effect: the same observed cM gets pushed toward
          more distant relationships under endogamy.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Reference data caveats</h2>
        <p style={paraStyle}>
          The V4 cM ranges are the community-validated Shared cM Project v4 (Bettinger / Larkin /
          Perl 2020). The expected segment counts + longest cM values are approximations drawn from
          Bhargava 2014, Speed &amp; Balding 2015, and aggregated DNA Painter community observations
          — they represent the rough central tendency, not a precise prediction.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>What this tool doesn&apos;t do (yet)</h2>
        <ul style={listStyle}>
          <li>It doesn&apos;t place candidates into a tree topology. Phase 2.</li>
          <li>It doesn&apos;t apply parental-age priors (WATO+&apos;s differentiator). Phase 2.</li>
          <li>It doesn&apos;t fold TG membership into the combined score yet. v2.</li>
          <li>It doesn&apos;t let you override the observed cM with a custom value. v1.1.</li>
        </ul>
      </section>

      <div style={{ marginTop: 12 }}>
        <Link href={`${ONE_ON_ONE_URL}/wato-workspace`} className="gl-btn gl-btn--primary">
          Open WATO Workspace
        </Link>
      </div>
    </ContentLayout>
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
const paraStyle: React.CSSProperties = { margin: '0 0 12px', fontSize: 16, lineHeight: '24px', color: 'var(--gl-color-text-muted)' };
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
const code: React.CSSProperties = {
  background: 'var(--gl-color-gray-light)',
  padding: '1px 5px',
  borderRadius: 4,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  fontSize: '0.92em',
};

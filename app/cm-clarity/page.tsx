import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { InfoCallout } from '@/components/InfoCallout';
import { findNavItem } from '@/lib/nav';
import { ONE_ON_ONE_URL } from '@/lib/toolUrls';

const NAV = findNavItem('cm-clarity')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support Hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="How to use cM Clarity"
      lede="Predict the relationship behind a shared centiMorgan value, with segment-level analysis and population-aware adjustments."
    >
      <InfoCallout variant="warning" title="Coming soon">
        cM Clarity is in active development and not yet available in the live Genomelink product.
        The article below describes the planned tool — features may change before launch. The live{' '}
        <Link href="/dnamatch">match profile</Link> already shows a basic relationship label (e.g.
        &ldquo;6th Cousin or Beyond&rdquo;) based on shared cM; cM Clarity is the deeper analysis
        layer that will come later.
      </InfoCallout>

      <section style={sectionGroup}>
        <p style={bodyText}>
          When DNA testing companies tell you a match is your &ldquo;3rd cousin&rdquo; or &ldquo;6th cousin or
          beyond,&rdquo; that label is based purely on shared cM. The same cM value can fit several
          relationships — and for people from historically intermixed populations, much of the cM may
          come from population-level shared ancestry rather than a single recent common ancestor.
        </p>
        <p style={bodyText}>
          This tool shows the full distribution of possible relationships and lets you exclude segments
          likely inherited from population-level ancestry to reveal the true relationship signal.
        </p>
        <p style={bodyText}>
          For example, two M&#257;ori individuals may show as 2nd cousins based on raw shared cM, but
          much of that sharing comes from population-level ancestry rather than a recent common
          ancestor. After excluding those population-inherited segments, the true relationship might be
          4th cousins or more distant.
        </p>
      </section>

      <section style={sectionGroup}>
        <h2 style={sectionTitle}>Quick start</h2>
        <ol style={orderedList}>
          <li>Select a match from the left panel — your DNA matches are listed by shared cM.</li>
          <li>Predictions appear immediately on the right, showing every relationship class compatible with the shared cM.</li>
          <li>For matches with 2+ segments, the <strong>Segment Analysis</strong> panel lets you exclude segments likely inherited from population-level ancestry.</li>
          <li>Use the <strong>population context</strong> dropdown to select the relevant ancestral population — it auto-selects based on the match&apos;s ancestry composition.</li>
          <li>Review the relationship list below — each entry is a possible relationship ranked by probability.</li>
        </ol>

        <div style={tipCallout}>
          <div style={calloutTitle}>Tip</div>
          <div>
            The Segment Analysis panel only appears for matches with multiple segments. For close
            relatives (parents, siblings, grandparents) the relationship is unambiguous from cM
            alone — no segment exclusion needed.
          </div>
        </div>
      </section>

      <section id="what-is-cm" style={sectionGroup}>
        <h2 style={sectionTitle}>What is a centiMorgan?</h2>
        <p style={bodyText}>
          A centiMorgan (cM) is a unit of genetic distance. Two people share more cM the more
          recently they share a common ancestor. Identical twins share ~3,500 cM; 4th cousins share
          an average of 35 cM (range 0–139); 8th cousins share an average of 4 cM, often 0.
        </p>
        <p style={bodyText}>
          Every DNA testing company computes shared cM the same way under the hood, but small
          differences in chip versions and matching thresholds mean two vendors may report slightly
          different values for the same biological match.
        </p>
      </section>

      <section id="histogram" style={sectionGroup}>
        <h2 style={sectionTitle}>Reading the relationship list</h2>
        <p style={bodyText}>
          When you click a match, the relationship list shows every relationship class compatible
          with the shared cM, ranked by probability. If you&apos;ve excluded segments, the predictions
          use the reduced &ldquo;effective cM&rdquo; instead of the raw total.
        </p>
        <p style={bodyText}>
          The top relationship is the <em>statistical best fit</em>, but several others may be
          similarly likely. Use tree research, segment data, and known relatives to narrow down further.
        </p>
      </section>

      <section id="one-cm-many-relationships" style={sectionGroup}>
        <h2 style={sectionTitle}>Why one cM value fits several relationships</h2>
        <p style={bodyText}>
          DNA inheritance is random. The same cM bracket fits multiple relationships because the cM
          range for one relationship class overlaps the next. For example, 100 cM matches all of:
          half 1st cousin, 2nd cousin, 1st cousin twice removed, and several other distant variants.
        </p>
      </section>

      <section id="segment-analysis" style={sectionGroup}>
        <h2 style={sectionTitle}>How segment exclusion works</h2>
        <p style={bodyText}>
          For matches with two or more segments, the Segment Analysis panel lets you exclude
          individual segments from the cM total. This is useful when some segments are likely
          inherited from population-level shared ancestry (endogamy) rather than a recent common ancestor.
        </p>
        <p style={bodyText}>
          Each segment is scored by two factors: whether it overlaps a known IBD hotspot region for
          the selected population, and its size (smaller segments are more likely to be
          population-inherited, since they&apos;ve had more generations of recombination). Segments
          scoring highest are auto-excluded up to the population&apos;s baseline cM floor.
        </p>
        <div style={tipCallout}>
          <div style={calloutTitle}>Example</div>
          <div>
            Two Ashkenazi-descended people share <strong>170 cM</strong> across 9 segments. With the
            Ashkenazi population context selected, the tool auto-excludes ~80 cM worth of small
            segments in known hotspot regions. The remaining ~90 cM points to a 3rd cousin — not the
            2nd cousin that the raw 170 cM would suggest.
          </div>
        </div>
      </section>

      <section id="populations-table" style={sectionGroup}>
        <h2 style={sectionTitle}>The 8 supported populations</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Population</th>
                <th style={th}>Era / context</th>
                <th style={{ ...th, textAlign: 'right' }}>Baseline cM</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={td}>None / Outbred</td><td style={td}>Use for outbred populations</td><td style={tdNum}>0</td></tr>
              <tr><td style={td}>Baltic / Slavic</td><td style={td}>Polish-Lithuanian Commonwealth (1569–1795)</td><td style={tdNum}>~25</td></tr>
              <tr><td style={td}>Ashkenazi Jewish</td><td style={td}>Pale of Settlement (1791–1917) and earlier bottleneck</td><td style={tdNum}>~80</td></tr>
              <tr><td style={td}>Iberian / Latin American Colonial</td><td style={td}>Spanish &amp; Portuguese colonization (1500s–1800s)</td><td style={tdNum}>~40</td></tr>
              <tr><td style={td}>Acadian / Quebec French</td><td style={td}>New France (1604–1763) and Acadian diaspora</td><td style={tdNum}>~90</td></tr>
              <tr><td style={td}>British &amp; Irish Colonial American</td><td style={td}>British colonization of North America (1607–1776)</td><td style={tdNum}>~35</td></tr>
              <tr><td style={td}>Mennonite / Amish</td><td style={td}>Anabaptist diaspora (1525–present)</td><td style={tdNum}>~150</td></tr>
              <tr><td style={td}>Icelandic</td><td style={td}>Norse settlement (~874 CE) and continued isolation</td><td style={tdNum}>~50</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div style={{ marginTop: 8 }}>
        <Link
          href={`${ONE_ON_ONE_URL}/cm-clarity`}
          className="gl-btn gl-btn--primary"
        >
          Open cM Clarity
        </Link>
      </div>
    </ContentLayout>
  );
}

const sectionGroup: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 12, scrollMarginTop: 24 };
const sectionTitle: React.CSSProperties = { margin: 0, fontSize: 24, fontWeight: 600, lineHeight: '28px', color: 'var(--gl-color-primary-dark)', paddingBottom: 12, borderBottom: '1px solid var(--gl-color-border-light)', marginBottom: 12 };
const bodyText: React.CSSProperties = { margin: 0, fontSize: 16, lineHeight: '24px', color: 'var(--gl-color-text-muted)' };
const orderedList: React.CSSProperties = { margin: 0, paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 16, lineHeight: '24px', color: 'var(--gl-color-text-muted)' };
const tipCallout: React.CSSProperties = { background: 'var(--gl-color-info-bg)', border: '1px solid var(--gl-color-info-border)', borderRadius: 16, padding: 16, fontSize: 16, color: 'var(--gl-color-primary-dark)', lineHeight: '24px', display: 'flex', flexDirection: 'column', gap: 4 };
const calloutTitle: React.CSSProperties = { fontSize: 11, fontWeight: 700, color: 'var(--gl-color-secondary-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' };
const table: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: 14 };
const th: React.CSSProperties = { textAlign: 'left', background: 'var(--gl-color-info-bg)', color: 'var(--gl-color-primary-dark)', fontWeight: 700, padding: '10px 12px', borderBottom: '1px solid var(--gl-color-border-light)' };
const td: React.CSSProperties = { padding: '10px 12px', color: 'var(--gl-color-primary-dark)', lineHeight: '20px', borderBottom: '1px solid var(--gl-color-border-light)' };
const tdNum: React.CSSProperties = { ...td, textAlign: 'right', fontWeight: 600 };

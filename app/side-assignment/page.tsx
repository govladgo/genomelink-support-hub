import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { InfoCallout } from '@/components/InfoCallout';
import { findNavItem } from '@/lib/nav';
import { ONE_ON_ONE_URL } from '@/lib/toolUrls';
import { LineagePill } from '@/components/badges';

const NAV = findNavItem('side-assignment')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support Hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="Side Assignment Inspector — how it works"
      lede={`"Maternal or paternal?" is the most common first-cut filter a genealogist applies to a new match. This tool answers it without requiring a parent kit, by clustering shared-segment overlap against sides you've already tagged elsewhere in your match list.`}
    >
      <InfoCallout variant="warning" title="Coming soon">
        Side Assignment Inspector is in active development and not yet available in the live
        Genomelink product. The article below describes the planned tool — features may change
        before launch.
      </InfoCallout>
      <section>
        <h2 style={sectionTitle}>The bootstrap workflow</h2>
        <ol style={listStyle}>
          <li>
            Open a match whose side you already know — maybe a confirmed maternal cousin or a
            paternal aunt — and tag it via the picker at the top of the inspector.
          </li>
          <li>Tag 2–5 such matches across your list. They become the algorithm&apos;s reference set.</li>
          <li>
            Open any other match and the inspector clusters its segment-sharing supporters, checks
            which sides those supporters are tagged on, and offers a recommendation with a confidence
            score.
          </li>
          <li>
            When the verdict is solid, click <strong>Save to Case File</strong> to snapshot it as
            evidence on this match&apos;s file.
          </li>
        </ol>
      </section>

      <section>
        <h2 style={sectionTitle}>The three lineage tags</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Row pill={<LineagePill lineage="maternal" />} text="On your mother's side." />
          <Row pill={<LineagePill lineage="paternal" />} text="On your father's side." />
          <Row
            pill={<LineagePill lineage="unassigned" />}
            text="Side unknown. The default; matches stay here until you tag them or the algorithm has enough evidence to suggest a side."
          />
        </div>
      </section>

      <section>
        <h2 style={sectionTitle}>How the verdict is computed</h2>
        <ol style={listStyle}>
          <li>
            <strong>Cluster scan.</strong> Reuses{' '}
            Triangulation Lens&apos;s algorithm to find every
            other match in your dataset that shares a segment with the active match (≥7 cM overlap).
          </li>
          <li>
            <strong>Cluster evidence.</strong> For each supporting match, look up its effective
            lineage. Sum the overlap cM into maternal and paternal pools.
          </li>
          <li>
            <strong>Ancestry overlap (secondary).</strong> Compare the active match&apos;s ancestry
            composition to the maternal- and paternal-side aggregated ancestry profiles. Cosine
            similarity → small bonus cM, capped at 25% of the cluster signal.
          </li>
          <li>
            <strong>Confidence.</strong> winner / (winner + loser). Capped at 50% when total evidence
            is below 20 cM or fewer than 3 supporters are tagged.
          </li>
        </ol>
      </section>

      <section>
        <h2 style={sectionTitle}>Why the cap matters</h2>
        <p style={paraStyle}>
          Side assignment by clustering looks deceptively confident with very little data — one
          tagged supporter who happens to overlap can drive a 100% verdict that&apos;s really only
          one data point. The 20 cM / 3-supporter threshold forces honesty: anything thinner gets
          the &ldquo;Low-data warning&rdquo; banner and a confidence cap of 50%.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Manual override always wins</h2>
        <p style={paraStyle}>
          If you tag the active match yourself, that tag becomes the ground truth — the
          algorithm&apos;s recommendation drops into a small &ldquo;the algorithm would have said X
          at Y%&rdquo; footnote below your tag. Tags persist to the match&apos;s{' '}
          Case File and survive page reloads.
        </p>
      </section>

      <div style={{ marginTop: 12 }}>
        <Link href={`${ONE_ON_ONE_URL}/side-assignment`} className="gl-btn gl-btn--primary">
          Open Side Assignment Inspector
        </Link>
      </div>
    </ContentLayout>
  );
}

function Row({ pill, text }: { pill: React.ReactNode; text: string }) {
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
      <span style={{ flexShrink: 0, marginTop: 2 }}>{pill}</span>
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

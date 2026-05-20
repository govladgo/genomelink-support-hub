import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { InfoCallout } from '@/components/InfoCallout';
import { findNavItem } from '@/lib/nav';
import { NETWORK_GRAPH_URL } from '@/lib/toolUrls';

const NAV = findNavItem('network-graph')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="How to use Network Graph"
      lede="Network Graph turns your DNA match list into an interactive visualisation — every match is a node, every shared-segment connection is an edge. See the shape of your match network at a glance."
    >
      <section>
        <h2 style={sectionTitle}>What you see</h2>
        <p style={paraStyle}>
          The graph plots every match in your dataset as a circular node, sized and coloured by
          shared cM. Edges connect any two matches that themselves share DNA — these are the
          relationships <em>between</em> your matches that you wouldn&apos;t see in a flat list.
          Densely connected clumps usually represent a single branch of your family tree;
          near-isolated nodes are matches who don&apos;t cluster with anyone.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Reading the layout</h2>
        <ul style={listStyle}>
          <li>
            <strong>Node size</strong> scales with shared cM — your closest cousins are the biggest
            dots.
          </li>
          <li>
            <strong>Node colour</strong> indicates side: paternal (blue family), maternal (orange
            family), unassigned (grey).
          </li>
          <li>
            <strong>Edge thickness</strong> reflects how much DNA two matches share with each other.
          </li>
          <li>
            <strong>Hovering</strong> a node lifts it forward and highlights all of its connections.
          </li>
          <li>
            <strong>Clicking</strong> a node opens a side panel with the match&apos;s name, vendor,
            cM, ancestry, and an &ldquo;Open in cM Clarity / Case File&rdquo; jump link.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={sectionTitle}>Filters &amp; controls</h2>
        <p style={paraStyle}>
          The control panel exposes a minimum-cM slider (default 20 cM), vendor toggles, side
          filters, and a cluster-only mode that hides matches outside the currently selected
          cluster. Everything updates live — no fetch round-trip.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>How it ties into the other tools</h2>
        <p style={paraStyle}>
          Network Graph is the macro view; the per-match deep dives live in the{' '}
          <Link href="/cm-clarity">1-on-1 tools</Link> and{' '}
          <Link href="/match-hub">Match Hub</Link>. Click any node to jump to its case file or
          cM-Clarity prediction. Clusters identified here drive both{' '}
          <Link href="/dna-painter">DNA Painter</Link>&apos;s segment grouping and{' '}
          <Link href="/clusters">Clusters</Link>&apos; tile view.
        </p>
      </section>

      <InfoCallout title="Detailed how-to is in progress">
        We&apos;re actively porting the full Network Graph help guide into this hub. In the meantime,
        the live tool ships with an in-app help panel that covers every feature.
      </InfoCallout>

      <div style={{ marginTop: 12 }}>
        <Link
          href={`${NETWORK_GRAPH_URL}/dna-match/network/graph`}
          className="gl-btn gl-btn--primary"
        >
          Open Network Graph
        </Link>
      </div>
    </ContentLayout>
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
const paraStyle: React.CSSProperties = { margin: 0, fontSize: 14, lineHeight: '22px', color: 'var(--gl-color-text-muted)' };
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

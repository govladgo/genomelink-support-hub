import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { InfoCallout } from '@/components/InfoCallout';
import { findNavItem } from '@/lib/nav';
import { NETWORK_GRAPH_URL } from '@/lib/toolUrls';

const NAV = findNavItem('network-graph')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support Hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="How to use Network Graph"
      lede="Explore how your DNA matches connect to each other. Reveal hidden relationships and see your genetic network as a whole."
    >
      <section>
        <h2 style={sectionTitle}>What you&apos;re looking at</h2>
        <p style={paraStyle}>
          A flat match list tells you how each person relates to <em>you</em>. Network Graph tells
          you how your matches relate to <em>each other</em> — the connections a list can&apos;t
          show. Every match is a node; every shared-DNA connection between two matches is an edge.
          Tightly-connected clumps usually represent a single branch of your family tree.
        </p>
        <p style={paraStyle}>
          Network Graph reads the same clustering result as the <Link href="/clusters">Clusters</Link>{' '}
          tool, so node colours and cluster numbers line up across both. Where Clusters gives you a
          report per group, Network Graph gives you the macro-structure of the whole network at once.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Reading the graph</h2>
        <ul style={listStyle}>
          <li>
            <strong>Node size</strong> scales with shared cM — your closest cousins are the biggest
            dots.
          </li>
          <li>
            <strong>Node colour</strong> indicates the cluster a match belongs to (matching the
            Clusters tool palette).
          </li>
          <li>
            <strong>Edges</strong> connect two matches who share DNA with each other; thickness
            reflects how much.
          </li>
          <li>
            <strong>Isolated nodes</strong> off to the side are matches who don&apos;t cluster with
            anyone yet — often too distant, or the only representative of a branch.
          </li>
          <li>
            <strong>Hover</strong> any node to lift it forward and highlight its direct connections.
          </li>
        </ul>
        <p style={paraStyle}>
          A layout toggle in the top right switches between <strong>Force</strong> (organic,
          physics-driven) and <strong>Radial</strong> (clusters arrayed in a wheel). Force is the
          default; radial is handy for screenshots and side-by-side cluster comparison. Zoom
          controls and a recenter button sit at the bottom right.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Filters &amp; controls</h2>
        <ul style={listStyle}>
          <li>
            <strong>Cluster filter</strong> — a chip strip with one chip per cluster. Toggle
            clusters on / off to focus on just the branches you care about.
          </li>
          <li>
            <strong>Min shared cM slider</strong> — only show matches above the threshold (default
            7 cM); a &ldquo;Showing matches ≥ N cM&rdquo; readout sits beneath it. Useful for
            pruning the long tail of distant matches.
          </li>
          <li>
            <strong>Stats</strong> — a collapsible panel of network statistics for the current view.
          </li>
          <li>
            <strong>Edge Thickness (cM)</strong> — control the cM range that maps to edge weight.
            Triangulated connections (a segment confirmed across three or more people) are drawn as
            dashed edges, called out in the legend below the slider.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={sectionTitle}>The Analysis panel</h2>
        <p style={paraStyle}>
          Below the graph, a set of cards turn the visual network into concrete metrics and
          insights:
        </p>
        <ul style={listStyle}>
          <li>
            <strong>Network Overview</strong> — Total Nodes, Total Edges, Avg Degree, Density,
            Diameter, Connected Components, the most-connected individual, and the cluster count.
          </li>
          <li>
            <strong>Key Individuals</strong> — the people who matter most structurally.{' '}
            <em>Top bridges</em> (by betweenness centrality) connect otherwise-separate branches;{' '}
            <em>Top hubs</em> (by degree centrality) are the densely-connected anchors of a branch.
            Each is listed with its cluster and a percentage score.
          </li>
          <li>
            <strong>Clustering Coefficient</strong> — how tightly connected each cluster is
            internally and how cleanly separated the clusters are. An average gauge plus a
            per-cluster density bar list.
          </li>
          <li>
            <strong>Endogamy Risk</strong> — detects signs of endogamy (intermarriage within a
            community) by analysing network density and cross-cluster connections. A 0–100 risk
            score backed by three metrics: Clustering Coefficient (how densely interconnected close
            matches are), Cross-Cluster Ratio (how many close-match edges connect different
            clusters), and the combined score. High scores mean the usual cM-to-relationship math
            will overstate closeness.
          </li>
          <li>
            <strong>Triangulation Groups</strong> — a long list of groups where three or more
            members all share DNA with each other (suggesting a common ancestor). Each group shows
            its members (with the cluster each belongs to) and the average cM shared across the
            group.
          </li>
        </ul>
      </section>

      <InfoCallout title="Bridges are your best leads">
        A match flagged as a <strong>bridge</strong> connects two branches of your tree that
        otherwise look separate — they likely descend from a couple who links those branches.
        That makes bridge people unusually high-value to contact or research first.
      </InfoCallout>

      <section>
        <h2 style={sectionTitle}>How it fits the other tools</h2>
        <p style={paraStyle}>
          Network Graph is the macro view. To go deeper: open the{' '}
          <Link href="/clusters">Clusters</Link> tool for a per-cluster report (members, surnames,
          locations, research action plan), or send a cluster to{' '}
          <Link href="/dna-painter">DNA Painter</Link> to see its segments on a chromosome map.
          Side and lineage tags you set anywhere flow through to the node colours here.
        </p>
      </section>

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

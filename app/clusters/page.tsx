import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { InfoCallout } from '@/components/InfoCallout';
import { findNavItem } from '@/lib/nav';
import { CLUSTERS_URL, DNA_PAINTER_URL } from '@/lib/toolUrls';

const NAV = findNavItem('clusters')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support Hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="How to use Clusters"
      lede="Group your matches by genetic similarity. Identify which matches belong together across family lines — uncovering branches of your tree without needing a tree at all."
    >
      <section>
        <h2 style={sectionTitle}>What is a cluster?</h2>
        <p style={paraStyle}>
          A cluster is a group of DNA matches who also share DNA with each other. Because matches
          who share DNA among themselves usually descend from the same ancestor, the cluster as a
          whole likely traces back to one branch of your family tree — even when you don&apos;t
          know whose branch it is yet.
        </p>
        <p style={paraStyle}>
          Clusters is the run-and-report tool: you configure a clustering run, save it, and explore
          the resulting groups plus a deep per-cluster report. For the same clustering rendered as
          an interactive visualisation, see the{' '}
          <Link href="/network-graph">Network Graph</Link> tool.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>The Clusters tool</h2>
        <p style={paraStyle}>
          Clusters is the run-and-report tool. You configure a clustering run with your chosen
          method and parameters, save it, then explore the resulting groups and download a full
          report.
        </p>

        <h3 style={subSectionTitle}>My Clusters — your runs list</h3>
        <p style={paraStyle}>
          The Clusters home page is &ldquo;My Clusters&rdquo; — every clustering run you&apos;ve
          saved, as a card with the preset, cM range, date, and three counters: Matches / Clusters /
          Unclustered. The free tier caps runs at five total; delete an old one to free a slot.
          Sort by Newest / Oldest / Largest, filter by Method (Shared Match vs Shared Segment) or
          Preset (Close Family / Extended Family / Deep Ancestry).
        </p>

        <h3 style={subSectionTitle}>Creating a new cluster — three steps</h3>

        <h4 style={subSubSectionTitle}>Step 1 · Choose a clustering method</h4>
        <ul style={listStyle}>
          <li>
            <strong>Shared Match Clusters</strong> — group your matches based on who they also
            match in common. Best for quickly identifying which branches of your family tree your
            matches belong to. Works on every match regardless of whether segment data is available.
          </li>
          <li>
            <strong>Shared Segment Clusters</strong> — group based on specific DNA segments
            (uses triangulation). Higher precision but requires segment data on both sides. Best for
            experienced genealogists who want chromosome-level evidence of the grouping.
          </li>
        </ul>

        <h4 style={subSubSectionTitle}>Step 2 · Set parameters</h4>
        <p style={paraStyle}>
          Two modes: <strong>Simple</strong> picks one of three presets, or{' '}
          <strong>Advanced</strong> exposes every knob.
        </p>
        <ul style={listStyle}>
          <li>
            <strong>Close Family</strong> — identifying major family branches (closer matches only).
          </li>
          <li>
            <strong>Extended Family</strong> — the balanced default, includes 3rd–4th cousins.
          </li>
          <li>
            <strong>Deep Ancestry</strong> — maximum reach including distant matches (noisier but
            covers more of the tree).
          </li>
        </ul>
        <p style={paraStyle}>Advanced parameters give you direct control over:</p>
        <ul style={listStyle}>
          <li>
            <strong>Max Shared cM</strong> — exclude very close relatives whose presence would
            crowd every cluster (default 400 cM range cap).
          </li>
          <li>
            <strong>Min Shared cM</strong> — drop matches below the floor (default ~7 cM for
            Extended Family).
          </li>
          <li>
            <strong>Min Overlapped Shared cM</strong> — minimum cM that two matches must share with
            each other (not just with you) to count as a cluster edge.
          </li>
          <li>
            <strong>Min Members per Cluster</strong> — smaller clusters are dropped (default 2; set
            higher to suppress noise).
          </li>
          <li>
            <strong>Max Members in Cluster</strong> — caps run-away super-clusters common under
            endogamy (default 250–3000 depending on preset).
          </li>
          <li>
            <strong>Cluster Granularity</strong> — 0.1 to 5.0 dial. Higher = more, smaller clusters.
            Lower = fewer, larger clusters.
          </li>
        </ul>

        <h4 style={subSubSectionTitle}>Step 3 · Save the run</h4>
        <p style={paraStyle}>
          Review the configuration, give the run a name, and save. Compute time scales with match
          count + parameter ranges — most runs complete in seconds; very large match lists with
          tight thresholds can take longer.
        </p>

        <h3 style={subSectionTitle}>Reading the results</h3>
        <p style={paraStyle}>
          Inside a saved run, the header shows the preset + parameters used, plus Matches /
          Clusters / Unclustered counters. A <strong>CLUSTER REPORT</strong> button (orange CTA)
          jumps to the full report (covered next).
        </p>
        <p style={paraStyle}>The result body has two views, toggleable in the top right:</p>
        <ul style={listStyle}>
          <li>
            <strong>Grid view</strong> — heatmap matrix of every match × every match, coloured by
            cluster assignment. The diagonal shows which matches form dense groups. Useful for
            seeing whole-network structure and unclustered noise.
          </li>
          <li>
            <strong>List view</strong> — each cluster as an expandable row showing members (name,
            relationship label, cM, Lineage tag with quick-assign link). Useful for working through
            clusters one at a time.
          </li>
        </ul>
        <p style={paraStyle}>
          Below the grouped results, an <strong>Unclustered Matches</strong> row collapses every
          match that didn&apos;t fit any cluster — usually because they share too little with the
          rest of your list to form connections. Download the full results as HTML from the top
          right.
        </p>

        <h3 style={subSectionTitle}>The Cluster Report — the deep dive</h3>
        <p style={paraStyle}>
          The Cluster Report is the heart of the Clusters tool. It&apos;s a multi-section per-run
          document with auto-generated research guidance. Download as PDF or HTML for offline
          analysis.
        </p>
        <p style={paraStyle}>Sections you&apos;ll find inside any report:</p>
        <ul style={listStyle}>
          <li>
            <strong>What we found</strong> — one-paragraph summary of how many matches grouped into
            how many clusters, plus the dominant signal (e.g. &ldquo;your strongest cluster carries
            Eastern European ancestry&rdquo;).
          </li>
          <li>
            <strong>Cluster Summary</strong> — a Cluster Strength gauge (0–100), largest /
            smallest cluster stats, and a &ldquo;How much DNA you share&rdquo; histogram bucketed by
            cM range.
          </li>
          <li>
            <strong>Cluster Details</strong> — per-cluster card showing members, locations (when
            shared by enough members), dominant surnames, and a Family Line slot you can tag with
            which branch the cluster represents.
          </li>
          <li>
            <strong>Research Action Plan</strong> — auto-generated next steps: start with your
            closest matches in the cluster, investigate surname pairs, validate with a similar
            analysis, search for unassigned matches, follow the geographic signal, compare against
            previous runs, connect to your ancestry breakdown.
          </li>
          <li>
            <strong>Relationship Distribution</strong> — table of cluster × kinship class (4th–5th
            cousins, 5th–8th cousins, 8th+ cousins) with counts per cell.
          </li>
          <li>
            <strong>Notable Patterns &amp; Alerts</strong> — system-detected insights like
            &ldquo;Cluster 1 has unusual validation: a tight surname overlap of 50% suggests a
            strong shared lineage&rdquo;.
          </li>
          <li>
            <strong>Unclustered Matches</strong> — diagnostic page on why some matches didn&apos;t
            join a cluster: too few connections, possible unique lineage, geographic diversity,
            shared-cM distribution. Suggests options to recover them in a follow-up run.
          </li>
          <li>
            <strong>Cross-Run Comparison</strong> — if you have multiple runs, side-by-side
            comparison and a stability matrix showing which clusters held up across configurations.
          </li>
          <li>
            <strong>Glossary</strong> — definitions for cM, IBD, Triangulation, SNP, and other
            terms used in the report.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={sectionTitle}>How Clusters fits the other tools</h2>
        <p style={paraStyle}>
          Clusters share their result with the rest of the DNA Match tools. The same clustering you
          configure here drives:
        </p>
        <ul style={listStyle}>
          <li>
            <strong><Link href="/network-graph">Network Graph</Link></strong> — the same clusters
            rendered as an interactive force-directed network, with structural analysis (bridges,
            hubs, endogamy risk). Use it for macro-structure; use Clusters for the per-group report.
          </li>
          <li>
            <strong><Link href="/dna-painter">DNA Painter</Link></strong> — its &ldquo;Select a
            cluster&rdquo; import paints a whole cluster onto a chromosome map in one step, so you
            can move from &ldquo;these matches group together&rdquo; to &ldquo;here&apos;s the
            segment evidence&rdquo; without re-selecting matches by hand.
          </li>
          <li>
            <strong><Link href="/dnamatch">DNAMatch</Link></strong> — lineage tags and side
            assignments you make on the match list flow into clustering, and cluster membership
            shows back on each match&apos;s row.
          </li>
        </ul>
      </section>

      <InfoCallout title="Cleaner input, sharper clusters">
        Before a big clustering run, use <strong>Match list cleanup</strong> on the{' '}
        <Link href="/dnamatch">DNAMatch</Link> list to merge cross-vendor duplicates. Collapsing the
        same person&apos;s 23andMe + MyHeritage records into one keeps duplicate nodes from
        distorting the cluster math.
      </InfoCallout>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
        <Link href={CLUSTERS_URL} className="gl-btn gl-btn--primary">
          Open Clusters
        </Link>
        <Link href={`${DNA_PAINTER_URL}/painter`} className="gl-btn gl-btn--secondary">
          Paint a cluster
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
const subSectionTitle: React.CSSProperties = {
  margin: '12px 0 4px',
  fontSize: 18,
  fontWeight: 600,
  lineHeight: '26px',
  color: 'var(--gl-color-primary-dark)',
};
const subSubSectionTitle: React.CSSProperties = {
  margin: '8px 0 4px',
  fontSize: 16,
  fontWeight: 700,
  lineHeight: '24px',
  color: 'var(--gl-color-primary-dark)',
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

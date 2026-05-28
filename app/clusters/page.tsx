import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { InfoCallout } from '@/components/InfoCallout';
import { findNavItem } from '@/lib/nav';
import { CLUSTERS_URL, NETWORK_GRAPH_URL, DNA_PAINTER_URL } from '@/lib/toolUrls';

const NAV = findNavItem('clusters')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support Hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="How to use Clusters"
      lede="Clusters group your DNA matches by who they share DNA with — uncovering branches of your family tree without needing a tree at all. The same cluster set can be viewed as a network graph (relationships at a glance) or as a grid of cluster cards (drill into one cluster at a time)."
    >
      <section>
        <h2 style={sectionTitle}>What is a cluster?</h2>
        <p style={paraStyle}>
          A cluster is a group of DNA matches who also share DNA with each other. Because matches who
          share DNA among themselves usually descend from the same ancestor, the cluster as a whole
          likely traces back to one branch of your family tree — even when you don&apos;t know whose
          branch it is yet.
        </p>
        <p style={paraStyle}>
          Genomelink runs hierarchical clustering across your full match list and surfaces the
          resulting groups, complete with size, average cM, dominant surnames, and the ancestry
          composition shared across cluster members.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Two ways to view the same clusters</h2>
        <p style={paraStyle}>
          Network graph and grid view are two visualisations of the same clustering result — same
          data, different shape. Pick whichever fits the question you&apos;re asking.
        </p>

        <h3 style={subSectionTitle}>Network graph view</h3>
        <p style={paraStyle}>
          Plots every match as a circular node, sized and coloured by shared cM. Edges connect any
          two matches who themselves share DNA — these are the relationships <em>between</em> your
          matches that you wouldn&apos;t see in a flat list. Densely-connected clumps usually
          represent a single branch of your family tree; near-isolated nodes are matches who
          don&apos;t cluster with anyone yet.
        </p>
        <ul style={listStyle}>
          <li>
            <strong>Node size</strong> scales with shared cM — your closest cousins are the biggest
            dots.
          </li>
          <li>
            <strong>Node colour</strong> indicates side (paternal, maternal, or unassigned).
          </li>
          <li>
            <strong>Edge thickness</strong> reflects how much DNA two matches share with each other.
          </li>
          <li>
            <strong>Hover</strong> any node to lift it forward and highlight its connections.
          </li>
        </ul>

        <h3 style={subSectionTitle}>Grid view</h3>
        <p style={paraStyle}>
          Shows each cluster as a card on a tiled grid — at-a-glance summary of cluster size, top
          surnames, dominant ancestry, and a quick action to drill into the cluster report. Use the
          grid when you want to scan clusters as a list and pick which one to investigate next; use
          the network graph when you want to see how clusters relate to each other across your match
          network.
        </p>

        <InfoCallout title="Same underlying data">
          Tagging side on a match, painting a segment, or adjusting cluster parameters in one view
          reflects in the other instantly — both views read from the same clustering result.
        </InfoCallout>
      </section>

      <section>
        <h2 style={sectionTitle}>Per-cluster report</h2>
        <p style={paraStyle}>
          Clicking a cluster (from either view) opens its report — a focused deep-dive into one
          branch of your tree as your match list sees it. The report covers:
        </p>
        <ul style={listStyle}>
          <li>
            <strong>Members</strong> — every match in the cluster, sorted by cM, with vendor + side
            tags and quick links to their case file.
          </li>
          <li>
            <strong>Dominant surnames</strong> — surnames that appear across multiple cluster
            members, ranked by frequency and weighted by rarity.
          </li>
          <li>
            <strong>Ancestry signature</strong> — the common ancestry composition shared by cluster
            members, used to suggest a geographic origin for the branch.
          </li>
          <li>
            <strong>Suggested MRCA generation</strong> — based on the cluster&apos;s cM range and
            ancestry signature, an approximate generation depth where the common ancestor likely
            sits.
          </li>
          <li>
            <strong>Triangulation hints</strong> — chromosomal regions where many cluster members
            overlap, ready to paint into DNA Painter for chromosome-level evidence.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={sectionTitle}>How clusters feed the other tools</h2>
        <p style={paraStyle}>
          Clusters are the connective tissue across the Genomelink DNA Match family. Once your
          clusters are identified, they show up in three other places:
        </p>
        <ul style={listStyle}>
          <li>
            <strong><Link href="/dna-painter">DNA Painter</Link></strong> — import a cluster into a
            canvas in one click. Every segment is tagged with its cluster source so you always know
            which branch a painted region traces to.
          </li>
          <li>
            <strong><Link href="/match-hub">Match Hub</Link></strong> — merging cross-vendor
            duplicates inside Match Hub cleans up the input data clusters are built from, so a
            duplicate-collapsed inbox makes for sharper clusters next time the algorithm runs.
          </li>
          <li>
            <strong>One-to-One tools</strong> (<Link href="/cm-clarity">cM Clarity</Link>,{' '}
            <Link href="/side-assignment">Side Assignment Inspector</Link>,{' '}
            <Link href="/wato-workspace">WATO Workspace</Link>,{' '}
            <Link href="/inferred-segments">Inferred Segments</Link>) — each per-match analysis
            consumes cluster membership as a signal. Knowing a match sits in cluster #6 sharpens its
            relationship prediction, lineage inference, and segment corroboration.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={sectionTitle}>Tips for working with clusters</h2>
        <ul style={listStyle}>
          <li>
            <strong>Start with the largest clusters</strong> — they usually represent your strongest
            branches and have the densest signal across multiple matches.
          </li>
          <li>
            <strong>Tag a side as soon as you can</strong> — once you confirm one cluster is
            maternal or paternal, every match in it inherits that side, which sharpens every other
            tool downstream.
          </li>
          <li>
            <strong>Endogamy warning</strong> — populations like Ashkenazi, Acadian/Quebec, or
            Mennonite often produce one giant super-cluster instead of separate branches. The
            cluster report flags this when the ancestry signature points to a known endogamous
            population.
          </li>
          <li>
            <strong>Re-run after merging duplicates</strong> — if you&apos;ve just merged
            cross-vendor duplicates in <Link href="/match-hub">Match Hub</Link>, regenerate clusters
            to pick up the cleaner input.
          </li>
        </ul>
      </section>

      <InfoCallout title="Two prototype apps for now">
        While the IA treats Clusters as one product, today the two views live in separate prototype
        apps. Both read the same clustering result; the link buttons below open whichever view fits
        your task.
      </InfoCallout>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
        <Link href={`${CLUSTERS_URL}`} className="gl-btn gl-btn--primary">
          Open grid view
        </Link>
        <Link href={`${NETWORK_GRAPH_URL}/dna-match/network/graph`} className="gl-btn gl-btn--secondary">
          Open network graph view
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

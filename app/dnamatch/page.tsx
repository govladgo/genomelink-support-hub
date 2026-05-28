import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { InfoCallout } from '@/components/InfoCallout';
import { findNavItem } from '@/lib/nav';

const NAV = findNavItem('dnamatch')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support Hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="DNAMatch basics"
      lede="DNA Matches is your inbox of genetic relatives — people who share enough DNA with you that you and they likely descend from a common ancestor. This article walks through the three live surfaces that sit under the DNAMatch umbrella: the matches list, lineage groups, and each match's profile."
    >
      <section>
        <h2 style={sectionTitle}>The DNA Matches list</h2>
        <p style={paraStyle}>
          The main DNA Matches screen is your match inbox. Every person on the list shares enough DNA
          with you to be a likely relative, ranked by shared centiMorgans (cM) — the closest cousins
          appear first.
        </p>
        <p style={paraStyle}>
          Each row shows the match&apos;s name, total shared cM, how many additional matches they
          share with you, the vendor (23andMe / Ancestry / MyHeritage / FTDNA / GEDmatch), any
          lineage tag you&apos;ve added, and any pending actions (a colored badge on matches
          who&apos;ve recently joined or marked themselves as open to collaboration).
        </p>
        <h3 style={subSectionTitle}>Sidebar filters</h3>
        <ul style={listStyle}>
          <li>
            <strong>Lineage</strong> — narrow the list to a specific lineage group you&apos;ve
            created (see below).
          </li>
          <li>
            <strong>Member status</strong> — focus on matches who are still on the platform vs.
            former members.
          </li>
          <li>
            <strong>Profile types</strong> — filter by who&apos;s opened up their profile, who has
            shared ancestry data, etc.
          </li>
        </ul>
        <h3 style={subSectionTitle}>List vs. Tools toggle</h3>
        <p style={paraStyle}>
          A toggle at the top of the page switches between the flat <strong>List</strong> of matches
          and the <strong>Tools</strong> grid — three large cards (Network Graph, Clusters, DNA
          Painter) that operate across your whole match list rather than a single match.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Lineage groups</h2>
        <p style={paraStyle}>
          A lineage is a user-created grouping of matches who share a specific branch of your
          family — your mother&apos;s mother&apos;s line, your suspected Nowak surname cluster,
          everyone you&apos;ve confirmed as paternal-side, etc. Lineages live above clusters: where
          a cluster is auto-generated from DNA-sharing math, a lineage is your own annotation about
          which branch of the tree a group belongs to.
        </p>
        <h3 style={subSectionTitle}>Anatomy of a lineage card</h3>
        <ul style={listStyle}>
          <li>
            <strong>Name</strong> — e.g. &ldquo;Lineage 1&rdquo;, or rename it to something
            meaningful like &ldquo;Mom&apos;s side&rdquo; or &ldquo;Nowak branch&rdquo;.
          </li>
          <li>
            <strong>Member chips</strong> — small coloured circles with each member&apos;s initials
            (the first 5–6 are shown inline, the rest collapsed into a &ldquo;+N&rdquo; chip).
          </li>
          <li>
            <strong>Match count</strong> — total number of matches assigned to this lineage.
          </li>
          <li>
            <strong>Specify Lineage</strong> — opens the editor to add or remove members and label
            the lineage&apos;s underlying ancestor (e.g. &ldquo;Maternal grandfather&apos;s
            line&rdquo;).
          </li>
          <li>
            <strong>Show Matches</strong> — jumps to the DNA Matches list filtered to this lineage.
          </li>
        </ul>
        <InfoCallout title="Lineages flow into every other tool">
          Once you tag a match into a lineage, that tag travels with it everywhere — list filters,
          cluster results, the Network Graph node colour, and the DNA Painter source filters all
          read your lineage assignments. The more lineages you maintain, the sharper every other
          surface gets.
        </InfoCallout>
      </section>

      <section>
        <h2 style={sectionTitle}>The match profile</h2>
        <p style={paraStyle}>
          Clicking any match opens their profile — a deep one-page view of everything Genomelink
          knows about how you two are related. It&apos;s the closest live equivalent to the
          forthcoming One-to-One tool set.
        </p>
        <h3 style={subSectionTitle}>The header</h3>
        <p style={paraStyle}>
          Match name, predicted relationship (e.g. &ldquo;6th Cousin or Beyond&rdquo;), Lineage
          tag, total shared cM, birthplace + age (when shared), vendor badge, an &ldquo;Open to
          Collaboration&rdquo; pill if the match has opted in, and a &ldquo;Connect&rdquo; button
          that sends a Genomelink-mediated message to request contact.
        </p>
        <h3 style={subSectionTitle}>Details</h3>
        <p style={paraStyle}>
          The relationship guess is restated with a one-paragraph explanation of how Genomelink
          arrived at it (most-likely class based on cM, plus &ldquo;could also be&rdquo; alternatives).
          Below that: shared-cM total, markers compared (typically ~474,000 SNPs), and a count of
          shared DNA matches — other people in your list who also match this person, with a{' '}
          <strong>Review</strong> button to step through them.
        </p>
        <h3 style={subSectionTitle}>Ancestry summary comparison</h3>
        <p style={paraStyle}>
          A table of your top ethnicity buckets next to the match&apos;s — useful for spotting which
          part of the ancestry composition is shared. The ethnicities come from Genomelink&apos;s
          free weekly ancestry summary; pro-level breakdowns appear when both kits have unlocked
          the deep-ancestry layer.
        </p>
        <h3 style={subSectionTitle}>Genetic traits comparison</h3>
        <p style={paraStyle}>
          A categorised list of traits you both have results for, split into <em>Shared</em>{' '}
          (you both score the same direction) and <em>Dissimilar</em>. Categories include Food &amp;
          Nutrition, Physical, Working Memory / Hearing, Sports, Personality. Each trait row shows
          two small gauges side-by-side so the comparison is visual rather than just numeric.
        </p>
        <h3 style={subSectionTitle}>Chromosome Browser</h3>
        <p style={paraStyle}>
          A 22-chromosome stack showing exactly where on the genome you two share segments. The
          overview tells you how many chromosomes have any shared DNA and how many segments in
          total. Click any chromosome to see the precise position and size of each shared segment.
          Some segments are marked <strong>Matched</strong> (vendor-confirmed) vs.{' '}
          <strong>Unmatched</strong> (one or both kits lack the SNP coverage in that region).
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Where to go from here</h2>
        <p style={paraStyle}>
          DNAMatch basics is the inbox + per-match view. To turn that inbox into a research workflow,
          switch to the Tools tab and pick one of the three live tools:
        </p>
        <ul style={listStyle}>
          <li>
            <strong><Link href="/clusters">Clusters</Link></strong> — group your matches by who they
            also share DNA with, then drill into a cluster report for surname / location / family-line
            signal across the whole group.
          </li>
          <li>
            <strong><Link href="/clusters">Network Graph</Link></strong> — same clustering math, but
            visualised as a force-directed network. Best for spotting bridges between branches and
            measuring endogamy risk.
          </li>
          <li>
            <strong><Link href="/dna-painter">DNA Painter</Link></strong> — paint a cluster onto a
            chromosome map to see which segments came from which branch. Best once you know what a
            cluster represents and want chromosome-level evidence.
          </li>
        </ul>
      </section>
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

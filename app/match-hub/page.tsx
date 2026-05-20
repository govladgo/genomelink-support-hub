import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { InfoCallout } from '@/components/InfoCallout';
import { findNavItem } from '@/lib/nav';
import { MATCH_HUB_URL } from '@/lib/toolUrls';

const NAV = findNavItem('match-hub')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support Hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="How to use Match Hub"
      lede="One unified inbox for all your DNA matches across 23andMe, Ancestry, FTDNA, MyHeritage, and GEDmatch — automatically deduplicated."
    >
      <section>
        <p style={bodyText}>
          The same biological match often appears on multiple vendors with slightly different cM and
          segment data. Match Hub detects those duplicates so your inbox shows each person only once,
          with a record of which vendors they appear on.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Quick start</h2>
        <ol style={orderedList}>
          <li>Open Match Hub. Your matches across every connected vendor load automatically.</li>
          <li>
            The <strong>Duplicates</strong> tab shows every duplicate group the engine detected —
            sorted with pending work at the top.
          </li>
          <li>
            Inside each group, decide each sibling record one by one with its own{' '}
            <strong>Merge</strong> or <strong>Dismiss</strong> button.
          </li>
          <li>
            Switch to the <strong>Assessed</strong> tab to review groups where every sibling has
            already been resolved. Each row shows an <strong>Undo</strong> button if you change your
            mind.
          </li>
          <li>
            The header stats update live: <em>Total entries</em>, <em>Vendors</em>,{' '}
            <em>Duplicates</em>, and <em>Merged</em>.
          </li>
        </ol>

        <InfoCallout title="Tip">
          Decisions you make here flow through to the rest of the DNA Matches PRO tools. Once you
          merge duplicates, Common Ancestor cM, Network Graph, and Clusters all render the
          consolidated view automatically.
        </InfoCallout>
      </section>

      <section id="cross-vendor">
        <h2 style={sectionTitle}>What is cross-vendor matching?</h2>
        <p style={bodyText}>
          Many DNA testers upload to multiple services to maximize their chance of finding
          relatives. That means the same biological person can appear in your match list on 2, 3, or
          even all 5 major vendors — usually under slightly different names, with slightly different
          cM, and with segment data that may or may not be triangulated.
        </p>
        <p style={bodyText}>
          Match Hub identifies these duplicates automatically using a confidence-scored algorithm so
          your effective inbox is the count of <em>distinct people</em>, not the count of{' '}
          <em>match records across all vendors</em>.
        </p>
      </section>

      <section id="vendors-supported">
        <h2 style={sectionTitle}>The 5 supported vendors</h2>
        <ul style={orderedList}>
          <li><strong>23andMe</strong> — DNA Relatives, with optional segment data</li>
          <li><strong>Ancestry</strong> — DNA Matches, no segment data unless paired with the matching tool</li>
          <li><strong>FTDNA</strong> — Family Finder, full segment data including chromosome browser</li>
          <li><strong>MyHeritage</strong> — DNA Matches, with segment data on most matches</li>
          <li><strong>GEDmatch</strong> — Third-party hub; segment data via One-to-One and Triangulation</li>
        </ul>
      </section>

      <section id="why-vendors-differ">
        <h2 style={sectionTitle}>Why vendors report different cM</h2>
        <p style={bodyText}>
          The same two people can be reported as 285 cM by Ancestry and 297 cM by FTDNA. Reasons:
        </p>
        <ul style={orderedList}>
          <li><strong>Chip versions</strong> — different SNP arrays test slightly different genomic positions.</li>
          <li><strong>Matching algorithms</strong> — minimum segment length thresholds, gap-fill rules, IBD inference all vary.</li>
          <li><strong>Population reference panels</strong> — vendors normalize against different populations.</li>
        </ul>
        <p style={bodyText}>
          Differences of ±5–15% are normal for the same biological match. Match Hub allows up to ±5%
          cM variation when bucketing duplicate candidates, then confirms with segment overlap.
        </p>
      </section>

      <section id="how-grouped">
        <h2 style={sectionTitle}>How matches are grouped</h2>
        <p style={bodyText}>
          The engine groups potential duplicates by <strong>shared cM</strong> first and confirms
          with <strong>segment overlap</strong>. Names are not used for grouping — they&apos;re
          shown for context but a different name spelling never blocks a match.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Step</th>
                <th style={th}>Computation</th>
                <th style={{ ...th, textAlign: 'right' }}>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={td}>cM bracket</td><td style={td}>Both records&apos; shared cM within ±5% of each other; both ≥ 30 cM</td><td style={tdRight}>Bucket key (binary)</td></tr>
              <tr><td style={td}>Segment overlap</td><td style={td}>Total overlapping bp / min total bp of both</td><td style={tdRight}>Confidence</td></tr>
              <tr><td style={td}>Name similarity</td><td style={td}>Token-aware Levenshtein (display only)</td><td style={tdRight}>Hint, not gate</td></tr>
            </tbody>
          </table>
        </div>
        <p style={bodyText}>
          Group confidence equals the average segment overlap across pairs in the group. Pairs
          without segment data on either side cannot be auto-grouped — they&apos;re treated as
          singletons and ignored by the dedup engine.
        </p>
      </section>

      <section id="confidence">
        <h2 style={sectionTitle}>Confidence levels</h2>
        <ul style={orderedList}>
          <li><strong>≥0.90</strong> — High confidence. Real cross-vendor duplicates routinely score here.</li>
          <li><strong>0.70–0.89</strong> — Suggested. Review individually before merging.</li>
          <li><strong>&lt;0.70</strong> — Filtered out. Pair is treated as different people; not surfaced.</li>
        </ul>
      </section>

      <section id="review-actions">
        <h2 style={sectionTitle}>Reviewing groups: per-record decisions</h2>
        <p style={bodyText}>
          Each duplicate group has one <strong>primary</strong> record (marked with an orange{' '}
          <em>Primary</em> tag) and one or more <strong>sibling</strong> records. You decide each
          sibling individually — useful when a group has 3+ records.
        </p>
        <ul style={orderedList}>
          <li><strong>Merge</strong> — confirm this sibling is the same person as the primary. The row turns green and the record is counted toward the <em>Merged</em> stat.</li>
          <li><strong>Dismiss</strong> — confirm this sibling is a different person. The row dims, the name strikes through, and a <em>Not a duplicate</em> pill appears.</li>
          <li><strong>Undo</strong> — replaces the action buttons after a decision; reverts that one record to pending.</li>
        </ul>
        <InfoCallout title="Group lifecycle">
          A group leaves the <strong>Duplicates</strong> tab and moves to <strong>Assessed</strong>{' '}
          once every sibling has a decision. Resetting any single decision (via Undo) moves the
          group back to Duplicates if at least one sibling becomes pending again.
        </InfoCallout>
      </section>

      <section id="demo-data">
        <h2 style={sectionTitle}>About the demo data</h2>
        <p style={bodyText}>
          The 10 demo users are derived from a real DNA-pair dataset (~254,000 pairs with
          segment-level data and computed kinship labels). Each demo user has ~1,737 matches
          stratified across kinship classes — a few close, more mid-range, mostly distant cousins.
        </p>
        <p style={bodyText}>
          <strong>Synthesized:</strong> names, ancestry profiles, vendor assignments, and ~12%
          intentional cross-vendor duplicates per user (with ±5% cM and ±200kb segment perturbations).{' '}
          <strong>Real:</strong> shared cM, segment positions, kinship labels.
        </p>
      </section>

      <div style={{ marginTop: 12 }}>
        <Link href={MATCH_HUB_URL} className="gl-btn gl-btn--primary">
          Open the inbox
        </Link>
      </div>
    </ContentLayout>
  );
}

const sectionTitle: React.CSSProperties = {
  margin: 0,
  fontSize: 20,
  fontWeight: 600,
  lineHeight: '28px',
  color: 'var(--gl-color-primary-dark)',


  marginBottom: 8,
};
const bodyText: React.CSSProperties = { margin: 0, fontSize: 16, lineHeight: '24px', color: 'var(--gl-color-text-muted)' };
const orderedList: React.CSSProperties = {
  margin: 0,
  paddingLeft: 24,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  fontSize: 16,
  lineHeight: '24px',
  color: 'var(--gl-color-text-muted)',
};
const table: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: 14 };
const th: React.CSSProperties = {
  textAlign: 'left',
  background: 'var(--gl-color-info-bg)',
  color: 'var(--gl-color-primary-dark)',
  fontWeight: 600,
  padding: '10px 12px',

};
const td: React.CSSProperties = {
  padding: '10px 12px',
  color: 'var(--gl-color-primary-dark)',
  lineHeight: '20px',

};
const tdRight: React.CSSProperties = { ...td, textAlign: 'right', fontWeight: 600 };

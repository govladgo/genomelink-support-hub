import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { findNavItem } from '@/lib/nav';
import { ONE_ON_ONE_URL } from '@/lib/toolUrls';
import { ConfidenceBadge } from '@/components/badges';

const NAV = findNavItem('mrca-finder')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support Hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="MRCA Finder — how it works"
      lede="For a given match, MRCA Finder generates ranked candidate Most-Recent Common Ancestors by combining DNA evidence with whatever tree information you've documented. Unlike ThruLines (Ancestry) and ToFR (MyHeritage), every signal driving the verdict is transparent — click Show evidence on any hypothesis to see exactly why it ranked where it did."
    >
      <section>
        <h2 style={sectionTitle}>The eight signals</h2>
        <ol style={listStyle}>
          <li>
            <strong>cM-relationship.</strong> Maps the observed shared cM to a generation depth
            (e.g. 226 cM → 4 generations back, 2nd-cousin range) via the V4 Shared cM Project table.
          </li>
          <li>
            <strong>Shared surnames.</strong> Surnames the match has listed on their profile that
            overlap with surnames you&apos;ve documented or that appear across your match list. Rare
            surnames score higher than common ones.
          </li>
          <li>
            <strong>Cluster co-membership.</strong> Other matches who share segments with this match
            (computed via <Link href="/triangulation-lens">Triangulation Lens</Link>) — more
            supporters = stronger evidence.
          </li>
          <li>
            <strong>Triangulation lineage bonus.</strong> When ≥2 cluster supporters share the
            candidate&apos;s side (per{' '}
            <Link href="/side-assignment">Side Assignment Inspector</Link>), the candidate gets a
            confidence boost.
          </li>
          <li>
            <strong>Lineage agreement.</strong> If you&apos;ve tagged the match as paternal or
            maternal and the candidate&apos;s inferred lineage matches, confidence × 1.2. Mismatch →
            × 0.5.
          </li>
          <li>
            <strong>Ancestry overlap.</strong> Regions that appear in both your ancestry and the
            match&apos;s — weighted by percentage. A small smoothing multiplier (0.85x–1.15x).
          </li>
          <li>
            <strong>Endogamy adjustment.</strong> When your primary ancestry maps to an endogamous
            population (Ashkenazi, Acadian, Mennonite, etc.), the candidate&apos;s plausible
            generation range widens.
          </li>
          <li>
            <strong>Tree confidence.</strong> Matches the candidate against your{' '}
            <strong>known-ancestors</strong> list. Surname + generation alignment (±1) → 85% tree
            confidence. Surname-only → 40%. No match → none.
          </li>
        </ol>
      </section>

      <section>
        <h2 style={sectionTitle}>Reading a hypothesis</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Row
            badge={<ConfidenceBadge tier="high" combined={0.78} />}
            text="High confidence (≥70% combined). Multiple signals point to the same MRCA; this is worth investigating first."
          />
          <Row
            badge={<ConfidenceBadge tier="moderate" combined={0.52} />}
            text="Moderate (40–70%). Reasonable hypothesis; surname or cluster evidence still gappy."
          />
          <Row
            badge={<ConfidenceBadge tier="low" combined={0.28} />}
            text="Low (20–40%). Weak signal; usually a single-source guess like surname-only or cluster-only."
          />
          <Row
            badge={<ConfidenceBadge tier="speculative" combined={0.12} />}
            text="Speculative (under 20%). Below the bar to spend time on; surfaced for completeness."
          />
        </div>
      </section>

      <section>
        <h2 style={sectionTitle}>Why not just synthesize a tree?</h2>
        <p style={paraStyle}>
          Spec 02 originally proposed generating mock trees per demo user — but the team chose to
          avoid fake tree data that wouldn&apos;t match production behavior. Real production MRCA
          Finder will eventually consume the YourRoots tree shape; until then, the
          <strong> known-ancestors list</strong> is the user-driven stand-in: 5–20 documented
          ancestors you&apos;ve already verified, persisted to your browser.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Investigate vs. Dismiss</h2>
        <p style={paraStyle}>
          When a hypothesis looks worth chasing, click <strong>Investigate</strong>: it snapshots
          the full breakdown into the match&apos;s <Link href="/case-file">Case File</Link> as
          evidence. <strong>Dismiss</strong> captures an optional reason and hides the hypothesis
          from the default view; a &ldquo;Show dismissed&rdquo; toggle restores it later.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>What this tool doesn&apos;t do (yet)</h2>
        <ul style={listStyle}>
          <li>It doesn&apos;t import or render a full family tree. Phase 2 (depends on YourRoots).</li>
          <li>It doesn&apos;t auto-detect surname relationships in historical records. Phase 3.</li>
          <li>It doesn&apos;t apply parental-age priors (WATO+&apos;s feature). Phase 2.</li>
          <li>It doesn&apos;t walk multi-generation paths between known ancestors and the candidate.</li>
        </ul>
      </section>

      <div style={{ marginTop: 12 }}>
        <Link href={`${ONE_ON_ONE_URL}/mrca-finder`} className="gl-btn gl-btn--primary">
          Open MRCA Finder
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

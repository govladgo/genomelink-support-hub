import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { findNavItem } from '@/lib/nav';
import { ONE_ON_ONE_URL } from '@/lib/toolUrls';
import { ConfidenceChip } from '@/components/badges';

const NAV = findNavItem('triangulation-lens')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="Triangulation Lens — how it works"
      lede="Triangulation is the standard genealogical technique for proving that a shared DNA segment comes from a real common ancestor — not from chance overlap or population-level identity-by-descent. The Lens does it automatically: for every segment you share with the active match, it scans your entire match list and surfaces the other matches who overlap the same chromosomal region."
    >
      <section>
        <h2 style={sectionTitle}>The principle</h2>
        <p style={paraStyle}>
          A triangulated group (TG) is three or more people who all share an overlapping segment of
          DNA. The ISOGG convention is that overlaps must be at least <strong>7 cM</strong>{' '}
          (autosomes) or <strong>15 cM</strong> (X chromosome) to be meaningful. Below those
          thresholds you&apos;re likely seeing random match noise.
        </p>
        <p style={paraStyle}>
          Triangulation Lens computes overlaps directly from segment coordinates the source vendor
          provides. It works for matches from 23andMe, MyHeritage, FTDNA, GEDmatch, and
          Ancestry-via-GEDmatch.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Reading the cards</h2>
        <p style={paraStyle}>
          You get one card per segment your active match shares with you. Inside each card:
        </p>
        <ul style={listStyle}>
          <li>
            The <strong>chromosome bar</strong> shows the segment&apos;s position; supporting matches
            are layered as green overlap markers on the same bar.
          </li>
          <li>
            The <strong>supporting-matches list</strong> ranks every other match in your dataset who
            overlaps this segment region, by overlap cM descending.
          </li>
          <li>
            The <strong>confidence chip</strong> summarises strength based on supporter count, median
            overlap, and whether the segment sits inside a known endogamous IBD hotspot.
          </li>
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
          <Row
            badge={<ConfidenceChip tier="strong" />}
            text="3+ supporting matches, median overlap ≥ 10 cM, no hotspot collision. Strong evidence of a real common ancestor."
          />
          <Row
            badge={<ConfidenceChip tier="moderate" />}
            text="2+ supporting matches and median overlap 7–10 cM, or stronger evidence that collides with a known hotspot. Worth investigating."
          />
          <Row
            badge={<ConfidenceChip tier="weak" />}
            text="Solo overlap, sub-7 cM median, or a hotspot collision dragging down stronger evidence. Treat with skepticism."
          />
        </div>
      </section>

      <section>
        <h2 style={sectionTitle}>Population context</h2>
        <p style={paraStyle}>
          Endogamous populations (Ashkenazi Jewish, Acadian / Quebec French, Mennonite / Amish,
          Polynesian, etc.) carry chromosomal regions where members commonly share DNA from{' '}
          <em>ancient</em> shared ancestry rather than recent relationships. Triangulation Lens
          checks the active match&apos;s primary ancestry and downgrades the confidence chip when a
          segment overlaps a known IBD hotspot for that population.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Close relatives are excluded</h2>
        <p style={paraStyle}>
          Matches above <strong>900 cM</strong> (roughly 1st cousin or closer) are silently filtered
          out of the supporting-matches pool. A parent, sibling, or aunt shares roughly half their
          DNA with you, so they overlap virtually every segment you share with anyone — they
          aren&apos;t evidence of a common ancestor with the active match, just evidence that
          they&apos;re your close relative.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>The 7 cM convention</h2>
        <p style={paraStyle}>
          The default minimum overlap is 7 cM. This matches the ISOGG community standard for
          autosomal triangulation and balances sensitivity against false positives. You can slide
          down to 4 cM to see weaker overlaps or up to 15 cM for high-confidence-only investigations.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Saving evidence to a Case File</h2>
        <p style={paraStyle}>
          When a triangulated group looks compelling, click <strong>Save to Case File</strong> on the
          card. A snapshot of the TG — chromosome, position, supporters, timestamp — gets attached to
          the active match&apos;s <Link href="/case-file">case file</Link> under the Evidence tab.
        </p>
      </section>

      <div style={{ marginTop: 12 }}>
        <Link href={`${ONE_ON_ONE_URL}/triangulation-lens`} className="gl-btn gl-btn--primary">
          Open Triangulation Lens
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
      <span style={{ fontSize: 13, lineHeight: '20px', color: 'var(--gl-color-text-muted)' }}>{text}</span>
    </div>
  );
}

const sectionTitle: React.CSSProperties = {
  margin: 0,
  fontSize: 18,
  fontWeight: 700,
  lineHeight: '24px',
  color: 'var(--gl-color-primary-dark)',
  paddingBottom: 12,
  borderBottom: '1px solid var(--gl-color-border-light)',
  marginBottom: 16,
};
const paraStyle: React.CSSProperties = { margin: '0 0 12px', fontSize: 14, lineHeight: '22px', color: 'var(--gl-color-text-muted)' };
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

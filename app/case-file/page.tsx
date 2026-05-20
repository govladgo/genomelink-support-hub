import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { findNavItem } from '@/lib/nav';
import { ONE_ON_ONE_URL } from '@/lib/toolUrls';
import { STATUS_META, StatusPill } from '@/components/badges';

const NAV = findNavItem('case-file')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="Match Case File — how it works"
      lede="Every DNA match deserves a research home. The Case File is a per-match document that captures your status verdict, free-form notes, evidence pulled from other 1-on-1 tools, outreach attempts, and a full edit history. Everything is saved to your browser's local storage; nothing leaves your device in this prototype."
    >
      <section>
        <h2 style={sectionTitle}>The workflow</h2>
        <ol style={listStyle}>
          <li>
            Pick a match from the left rail. The case file initializes automatically (status{' '}
            <code style={code}>none</code>, empty fields).
          </li>
          <li>
            Set a <strong>status</strong> as soon as you have a first impression. Updating the status
            appends a timestamped entry to the history log.
          </li>
          <li>
            Drop your reasoning into the <strong>Notes</strong> tab — markdown is supported (bold,
            italic, links, inline code). Autosave kicks in after ~500 ms of idle.
          </li>
          <li>
            Click <strong>Save to Case File</strong> inside any other 1-on-1 tool to snapshot a
            finding into this match&apos;s evidence list.
          </li>
          <li>
            When you message the match, log it in <strong>Contacts</strong>. Marking a reply as{' '}
            <em>replied</em> nudges the status toward <code style={code}>contacted</code>.
          </li>
          <li>
            Switch demo users any time — each user&apos;s case files are isolated (
            <code style={code}>userId + matchId</code> keys).
          </li>
          <li>Export a single case file as a PDF for hand-off to a paper-trail collaborator.</li>
        </ol>
      </section>

      <section>
        <h2 style={sectionTitle}>The five statuses</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {STATUS_META.map((s) => (
            <div
              key={s.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                padding: '12px 16px',
                background: 'var(--gl-color-gray-light)',
                borderRadius: 10,
              }}
            >
              <span style={{ flexShrink: 0, marginTop: 2 }}>
                <StatusPill status={s.id} />
              </span>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: '22px',
                  color: 'var(--gl-color-text-muted)',
                }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>
        <p
          style={{
            margin: '12px 0 0',
            fontSize: 13,
            lineHeight: '20px',
            color: 'var(--gl-color-text-muted)',
            fontStyle: 'italic',
          }}
        >
          Picking <strong>Ruled out</strong> requires a short reason. It&apos;s the one status that
          explicitly documents why you stopped investigating.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Cross-tool evidence</h2>
        <p style={paraStyle}>
          Evidence cards are <strong>snapshots</strong>: they capture the state of the source tool
          at the moment you saved them. If you re-run{' '}
          <Link href="/cm-clarity">cM Clarity</Link> later with different population settings and
          the prediction changes, the existing evidence card stays as-is. To capture the new
          prediction, click Save to Case File again — both cards will live side by side, with their
          own timestamps.
        </p>
      </section>

      <section>
        <h2 style={sectionTitle}>Where data lives</h2>
        <p style={paraStyle}>
          Case files persist to <code style={code}>localStorage</code> under the key{' '}
          <code style={code}>genomelink:caseFile:&lt;userId&gt;:&lt;matchId&gt;</code> with a
          per-user index. Browser storage is capped near 5 MB total — sufficient for ~200 case files
          with modest notes. History entries are FIFO-truncated at 200 per file. A server-backed
          Phase-2 model is sketched in the spec; this prototype is entirely client-side.
        </p>
      </section>

      <div style={{ marginTop: 12 }}>
        <Link href={`${ONE_ON_ONE_URL}/case-file`} className="gl-btn gl-btn--primary">
          Open Match Case File
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
const paraStyle: React.CSSProperties = { margin: 0, fontSize: 14, lineHeight: '22px', color: 'var(--gl-color-text-muted)' };
const code: React.CSSProperties = {
  background: 'var(--gl-color-gray-light)',
  padding: '1px 5px',
  borderRadius: 4,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  fontSize: '0.92em',
};

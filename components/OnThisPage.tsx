import React from 'react';

export interface TocEntry {
  id: string;
  label: string;
}

export interface TocColumn {
  heading: string;
  entries: TocEntry[];
}

export function OnThisPage({ columns }: { columns: TocColumn[] }) {
  return (
    <aside
      aria-label="On this page"
      style={{
        background: 'var(--gl-color-info-bg)',
        border: '1px solid var(--gl-color-info-border)',
        borderRadius: 16,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <h3
        style={{
          margin: 0,
          fontFamily: 'var(--gl-font)',
          fontSize: 14,
          fontWeight: 700,
          color: 'var(--gl-color-primary-dark)',
        }}
      >
        On this page
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: columns.length > 1 ? '1fr 1fr' : '1fr',
          gap: 16,
        }}
      >
        {columns.map((col, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <p
              style={{
                margin: 0,
                fontFamily: 'var(--gl-font)',
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--gl-color-text-subtle)',
              }}
            >
              {col.heading}
            </p>
            {col.entries.map((e) => (
              <a
                key={e.id}
                href={`#${e.id}`}
                style={{
                  fontFamily: 'var(--gl-font)',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: '20px',
                  color: 'var(--gl-color-primary-attention)',
                }}
              >
                {e.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}

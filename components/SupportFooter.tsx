import React from 'react';

const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: 'https://genomelink.io/privacy' },
  { label: 'Informed Consent', href: 'https://genomelink.io/informed-consent' },
  { label: 'Terms of Use', href: 'https://genomelink.io/terms' },
  { label: 'Do not sell my info', href: 'https://genomelink.io/do-not-sell' },
];

export function SupportFooter() {
  return (
    <footer
      style={{
        background: 'var(--gl-color-gray-light)',
        padding: '32px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 32,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          color: 'var(--gl-color-primary-dark)',
        }}
      >
        <span
          aria-hidden
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 24,
            height: 24,
            borderRadius: 6,
            background: 'var(--gl-color-primary-attention)',
            color: '#fff',
            fontWeight: 800,
            fontSize: 12,
          }}
        >
          X
        </span>
        <span
          style={{
            fontFamily: 'var(--gl-font)',
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          Genomelink
        </span>
      </div>

      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 24,
        }}
      >
        {FOOTER_LINKS.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              style={{
                fontFamily: 'var(--gl-font)',
                fontSize: 14,
                color: 'var(--gl-color-primary-dark)',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div
        style={{
          height: 1,
          width: '100%',
          maxWidth: 880,
          background: 'rgba(38, 56, 86, 0.18)',
        }}
      />

      <p
        style={{
          margin: 0,
          fontFamily: 'var(--gl-font)',
          fontSize: 13,
          color: 'rgba(38, 56, 86, 0.6)',
          textAlign: 'center',
        }}
      >
        © {new Date().getFullYear()} Genomelink, Inc. All rights reserved.
      </p>
    </footer>
  );
}

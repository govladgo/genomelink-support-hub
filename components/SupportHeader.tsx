import React from 'react';
import Link from 'next/link';

export function SupportHeader() {
  return (
    <header
      style={{
        background: 'var(--gl-color-surface)',
        borderBottom: '1px solid var(--gl-color-border-light)',
        padding: '12px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
      }}
    >
      <Link
        href="/dnamatch"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          textDecoration: 'none',
          color: 'var(--gl-color-primary-dark)',
        }}
      >
        <span
          aria-hidden
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 28,
            height: 28,
            borderRadius: 8,
            background: 'var(--gl-color-primary-attention)',
            color: '#fff',
            fontWeight: 800,
            fontSize: 14,
            letterSpacing: '-0.02em',
          }}
        >
          X
        </span>
        <span
          style={{
            fontFamily: 'var(--gl-font)',
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: '-0.01em',
          }}
        >
          Genomelink
        </span>
      </Link>
      <span
        style={{
          fontFamily: 'var(--gl-font)',
          fontSize: 13,
          fontWeight: 500,
          color: 'var(--gl-color-text-muted)',
        }}
      >
        DNA Match Support hub
      </span>
    </header>
  );
}

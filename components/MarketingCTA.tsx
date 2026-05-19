import React from 'react';

/**
 * Marketing CTA block ("Ready to unlock the full potential of your DNA Matches?").
 * Visual port of the Figma family-tree-map module — simplified to a single
 * SVG illustration rather than 60+ avatar nodes for v1.
 */
export function MarketingCTA() {
  return (
    <section
      style={{
        background: 'var(--gl-color-hero-sky)',
        borderRadius: 0,
        padding: '64px 32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 32,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 16,
          maxWidth: 560,
          zIndex: 2,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--gl-font)',
            fontSize: 28,
            fontWeight: 700,
            lineHeight: '36px',
            color: 'var(--gl-color-primary-dark)',
          }}
        >
          Ready to unlock the full potential of your DNA Matches?
        </h2>
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--gl-font)',
            fontSize: 16,
            fontWeight: 500,
            lineHeight: '24px',
            color: 'var(--gl-color-primary-dark)',
          }}
        >
          Start exploring your family history and genetic traits with our premium DNA Match tools.
        </p>
        <a
          href="https://genomelink.io/dna-match"
          className="gl-btn gl-btn--primary"
          style={{ marginTop: 12 }}
        >
          Get DNA Match Pro
        </a>
      </div>

      {/* Simplified family-tree map illustration */}
      <svg
        width="640"
        height="220"
        viewBox="0 0 640 220"
        fill="none"
        aria-hidden
        style={{ maxWidth: '100%', height: 'auto', opacity: 0.85 }}
      >
        <g stroke="rgba(38,56,86,0.25)" strokeWidth="1.2">
          <line x1="320" y1="110" x2="160" y2="50" />
          <line x1="320" y1="110" x2="480" y2="50" />
          <line x1="320" y1="110" x2="100" y2="170" />
          <line x1="320" y1="110" x2="240" y2="190" />
          <line x1="320" y1="110" x2="400" y2="190" />
          <line x1="320" y1="110" x2="540" y2="170" />
        </g>
        {[
          { cx: 320, cy: 110, r: 22, label: 'CJ', primary: true },
          { cx: 160, cy: 50, r: 14, label: 'IJ' },
          { cx: 480, cy: 50, r: 14, label: 'MN' },
          { cx: 100, cy: 170, r: 14, label: 'GH' },
          { cx: 240, cy: 190, r: 14, label: 'KL' },
          { cx: 400, cy: 190, r: 14, label: 'OP' },
          { cx: 540, cy: 170, r: 14, label: 'QR' },
        ].map((n) => (
          <g key={n.label}>
            <circle
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill={n.primary ? 'var(--gl-color-secondary)' : 'rgba(38,56,86,0.55)'}
            />
            <text
              x={n.cx}
              y={n.cy + 4}
              textAnchor="middle"
              fontFamily="var(--gl-font)"
              fontSize={n.primary ? 12 : 9}
              fontWeight="700"
              fill="#fff"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </section>
  );
}

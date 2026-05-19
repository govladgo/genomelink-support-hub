import React from 'react';

interface InfoCalloutProps {
  variant?: 'info' | 'warning';
  title?: string;
  children: React.ReactNode;
}

export function InfoCallout({ variant = 'info', title, children }: InfoCalloutProps) {
  const palette =
    variant === 'warning'
      ? {
          bg: 'var(--gl-color-warn-bg)',
          border: 'var(--gl-color-warn-border)',
        }
      : {
          bg: 'var(--gl-color-info-bg)',
          border: 'var(--gl-color-info-border)',
        };

  return (
    <div
      role="note"
      style={{
        background: palette.bg,
        border: `1px solid ${palette.border}`,
        borderRadius: 16,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      {title && (
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--gl-font)',
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '22px',
            color: 'var(--gl-color-primary-dark)',
          }}
        >
          {title}
        </p>
      )}
      <div
        style={{
          fontFamily: 'var(--gl-font)',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '22px',
          color: 'var(--gl-color-primary-dark)',
        }}
      >
        {children}
      </div>
    </div>
  );
}

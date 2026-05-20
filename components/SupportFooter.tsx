'use client';

import React from 'react';

/**
 * Standard Genomelink footer.
 *
 * Figma references:
 *   Desktop — 12827:65234 (FooterLogged) — single row, justify-between.
 *             [Logo + Facebook + Instagram] · Privacy · Informed · Terms ·
 *             Do not sell · © copyright (muted)
 *             Background gray-light, padding 40 vertical / 64 horizontal.
 *
 *   Mobile  — 12827:66812 (FooterLoggedMobile) — column stack:
 *             Logo (centered)
 *             Privacy Policy
 *             Informed Consent
 *             Terms of Use
 *             Do not sell my info
 *             ─── divider ───
 *             Facebook  Instagram   (horizontal row, centered)
 *             © copyright (centered)
 *             Padding 32/20.
 */

const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: 'https://genomelink.io/privacy' },
  { label: 'Informed Consent', href: 'https://genomelink.io/informed-consent' },
  { label: 'Terms of Use', href: 'https://genomelink.io/terms' },
  { label: 'Do not sell my info', href: 'https://genomelink.io/do-not-sell' },
];

const COPYRIGHT_LINE = `© ${new Date().getFullYear()} Awakens, Inc. All rights reserved.`;

export function SupportFooter() {
  return (
    <footer className="gl-footer">
      {/* Desktop row layout — single horizontal flow, justify-between */}
      <div className="gl-footer-desktop">
        <div className="gl-footer-brand">
          <GenomelinkLogo />
          <FacebookIcon />
          <InstagramIcon />
        </div>

        <div className="gl-footer-links">
          {FOOTER_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="gl-footer-link">
              {l.label}
            </a>
          ))}
          <span className="gl-footer-copyright">{COPYRIGHT_LINE}</span>
        </div>
      </div>

      {/* Mobile-only column layout */}
      <div className="gl-footer-mobile">
        <GenomelinkLogo />

        <ul className="gl-footer-mobile-list">
          {FOOTER_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="gl-footer-mobile-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="gl-footer-divider" aria-hidden="true" />

        <div className="gl-footer-socials">
          <FacebookIcon />
          <InstagramIcon />
        </div>

        <span className="gl-footer-copyright">{COPYRIGHT_LINE}</span>
      </div>

      <style jsx>{`
        .gl-footer {
          background: var(--gl-color-gray-light);
          padding: 40px 64px;
          font-family: var(--gl-font);
        }

        /* Desktop default */
        .gl-footer-desktop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          width: 100%;
        }
        .gl-footer-mobile {
          display: none;
        }

        .gl-footer-brand {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-shrink: 0;
        }

        .gl-footer-links {
          display: flex;
          align-items: center;
          gap: 32px;
          flex-shrink: 0;
        }

        .gl-footer-link {
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: var(--gl-color-primary-dark);
          text-decoration: none;
          white-space: nowrap;
        }
        .gl-footer-link:hover {
          opacity: 0.7;
          text-decoration: none;
        }

        .gl-footer-copyright {
          font-size: 14px;
          line-height: 20px;
          color: rgba(38, 56, 86, 0.6);
          white-space: nowrap;
        }

        /* Mobile layout — Figma 12827:66812 */
        @media (max-width: 735px) {
          .gl-footer {
            padding: 32px 20px;
          }
          .gl-footer-desktop {
            display: none;
          }
          .gl-footer-mobile {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            width: 100%;
          }
          .gl-footer-mobile-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            width: 100%;
          }
          .gl-footer-mobile-link {
            display: block;
            padding: 6px 0;
            font-size: 18px;
            line-height: 26px;
            font-weight: 400;
            color: var(--gl-color-primary-dark);
            text-decoration: none;
          }
          .gl-footer-mobile-link:hover {
            opacity: 0.7;
            text-decoration: none;
          }
          .gl-footer-divider {
            height: 1px;
            width: 100%;
            background: rgba(38, 56, 86, 0.3);
          }
          .gl-footer-socials {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 24px;
          }
          .gl-footer-copyright {
            text-align: center;
            white-space: normal;
          }
        }
      `}</style>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Genomelink logo — matches the header (X mark + wordmark from /public/brand).
// Sized to Figma footer frame (143×32, X ≈25×32, wordmark ≈112×16).
// ---------------------------------------------------------------------------

function GenomelinkLogo() {
  return (
    <div
      aria-label="Genomelink"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        flexShrink: 0,
        height: 32,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/genomelink-x.svg"
        alt=""
        width={25}
        height={32}
        style={{ display: 'block', flexShrink: 0 }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/genomelink-wordmark.svg"
        alt="Genomelink"
        width={112}
        height={16}
        style={{ display: 'block', flexShrink: 0 }}
      />
    </div>
  );
}

function FacebookIcon() {
  return (
    <a
      href="https://facebook.com/genomelink"
      aria-label="Facebook"
      style={{
        display: 'inline-flex',
        width: 24,
        height: 24,
        color: 'var(--gl-color-primary-dark)',
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.469H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.955.926-1.955 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z" />
      </svg>
    </a>
  );
}

function InstagramIcon() {
  return (
    <a
      href="https://instagram.com/genomelink"
      aria-label="Instagram"
      style={{
        display: 'inline-flex',
        width: 24,
        height: 24,
        color: 'var(--gl-color-primary-dark)',
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    </a>
  );
}

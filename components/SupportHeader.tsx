'use client';

/**
 * Top header bar matching the Genomelink production app shell.
 *
 * Figma references:
 *   Desktop — 12827:56827 (DNA Match Support Hub desktop)
 *   Mobile  — 12827:57102 (DNA Match Support Hub mobile)
 *
 * Visual-only: nav items don't navigate, dropdowns don't open, upgrade button
 * doesn't go anywhere. Same surface shipped by genomelink-match-hub /
 * GenomelinkHeader so the chrome reads identically across tools.
 */

interface NavItem {
  label: string;
  /** Render an orange notification dot to the right of the label. */
  notify?: boolean;
  /** Render a chevron-down to indicate a dropdown. */
  hasMenu?: boolean;
  /** Show the active-page underline. */
  active?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', active: true },
  { label: 'TRAITS', hasMenu: true, notify: true },
  { label: 'REPORTS' },
  { label: 'GENEALOGY', hasMenu: true, notify: true },
  { label: 'BONUS' },
];

export function SupportHeader() {
  return (
    <header
      style={{
        background: 'var(--gl-color-gray-bg)',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 64px',
        fontFamily: 'var(--gl-font)',
      }}
      className="gl-top-header"
    >
      {/* Mobile-only hamburger (≤900px) */}
      <button
        type="button"
        aria-label="Open menu"
        className="gl-top-mobile-menu"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          width: 18,
          height: 18,
        }}
      >
        <HamburgerIcon />
      </button>

      {/* Logo + primary nav */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 60, flex: 1, minWidth: 0 }}
        className="gl-top-logo-nav"
      >
        <GenomelinkLogo />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 20 }} className="gl-top-nav">
          {NAV_ITEMS.map((item) => (
            <NavMenuItem key={item.label} item={item} />
          ))}
        </nav>
      </div>

      {/* Right side — upgrade copy + button + user */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}
        className="gl-top-right"
      >
        <span
          className="gl-top-upgrade-text"
          style={{
            fontSize: 14,
            lineHeight: '20px',
            color: 'var(--gl-color-text-subtle)',
            textAlign: 'right',
          }}
        >
          Upgrade to unlock{' '}
          <strong style={{ color: 'var(--gl-color-text-subtle)', fontWeight: 600 }}>312+</strong>{' '}
          traits
        </span>
        <button
          type="button"
          className="gl-top-upgrade-btn"
          style={{
            width: 127,
            padding: '8px 16px',
            borderRadius: 32,
            background: 'var(--gl-color-primary-attention)',
            border: '1px solid transparent',
            color: 'var(--gl-color-surface)',
            fontSize: 12,
            fontWeight: 500,
            lineHeight: '16px',
            textTransform: 'uppercase',
            cursor: 'default',
            fontFamily: 'var(--gl-font)',
          }}
        >
          Upgrade
        </button>
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 4 }}
          className="gl-top-avatar-group"
        >
          <span
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6786AC 0%, #FF7C11 100%)',
              flexShrink: 0,
              border: '1px solid rgba(38, 56, 86, 0.06)',
            }}
            aria-label="Profile avatar"
          />
          <Chevron20 />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          :global(.gl-top-nav) {
            gap: 12px !important;
          }
          :global(.gl-top-upgrade-text) {
            display: none !important;
          }
        }
        @media (max-width: 900px) {
          :global(.gl-top-header) {
            padding: 0 20px !important;
            height: 50px !important;
            justify-content: center !important;
            position: relative !important;
          }
          :global(.gl-top-mobile-menu) {
            display: block !important;
            position: absolute !important;
            left: 20px !important;
            top: 16px !important;
          }
          :global(.gl-top-nav) {
            display: none !important;
          }
          :global(.gl-top-upgrade-btn) {
            display: none !important;
          }
          :global(.gl-top-logo-nav) {
            flex: 0 0 auto !important;
            gap: 0 !important;
          }
          :global(.gl-top-right) {
            position: absolute !important;
            right: 20px !important;
            top: 10px !important;
            gap: 0 !important;
          }
          :global(.gl-top-avatar-group) {
            gap: 0 !important;
          }
          :global(.gl-top-avatar-group span[aria-label='Profile avatar']) {
            width: 30px !important;
            height: 30px !important;
          }
          :global(.gl-top-avatar-group svg) {
            display: none !important;
          }
          /* Center the logo and shrink it to match Figma mobile (115.8px wide). */
          :global(.gl-logo-x) {
            width: 22px !important;
            height: 26px !important;
          }
          :global(.gl-logo-wordmark) {
            width: 94px !important;
            height: 13px !important;
          }
        }
      `}</style>
    </header>
  );
}

// ---------------------------------------------------------------------------
// Nav item with notification dot + chevron + active underline
// ---------------------------------------------------------------------------

function NavMenuItem({ item }: { item: NavItem }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <span
          style={{
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '20px',
            color: 'var(--gl-color-primary-dark)',
            cursor: 'default',
            whiteSpace: 'nowrap',
          }}
        >
          {item.label}
        </span>
        {item.active && (
          <span
            style={{
              marginTop: 1,
              width: '100%',
              height: 2,
              background: 'var(--gl-color-primary-dark)',
              borderRadius: 1,
            }}
          />
        )}
      </div>
      {item.notify && (
        <span
          style={{
            display: 'inline-block',
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'var(--gl-color-primary-attention)',
            alignSelf: 'flex-start',
            marginTop: 2,
          }}
          aria-hidden="true"
        />
      )}
      {item.hasMenu && <Chevron20 />}
    </div>
  );
}

// 20×20 chevron-down used by nav items + user avatar
function Chevron20() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6 8L10 12L14 8"
        stroke="var(--gl-color-primary-dark)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 18×18 hamburger icon (mobile-only)
function HamburgerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3 5H15M3 9H15M3 13H15"
        stroke="var(--gl-color-primary-dark)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Production wordmark — colorful "X" mark + the "Genomelink" wordmark, both
// shipped as SVGs in /public/brand. Sized to match Figma desktop frame:
// X mark 36×46, gap 10, wordmark 160×22.
function GenomelinkLogo() {
  return (
    <div
      aria-label="Genomelink"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        flexShrink: 0,
        height: 46,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/genomelink-x.svg"
        alt=""
        width={36}
        height={46}
        style={{ display: 'block', flexShrink: 0 }}
        className="gl-logo-x"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/genomelink-wordmark.svg"
        alt="Genomelink"
        width={160}
        height={22}
        style={{ display: 'block', flexShrink: 0 }}
        className="gl-logo-wordmark"
      />
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_GROUPS, NavItem } from '@/lib/nav';

/**
 * Tool-specific icon (18×18) rendered via CSS mask-image so the same SVG
 * works as muted gray when inactive and white when active — just flip
 * background-color on the host span. Assets live in /public/icons/<slug>.svg
 * (stroke-based vectors supplied alongside the Figma file).
 */
function ToolIcon({ slug, active }: { slug: string; active: boolean }) {
  const url = `/icons/${slug}.svg`;
  return (
    <span
      aria-hidden
      style={{
        display: 'inline-block',
        width: 18,
        height: 18,
        flexShrink: 0,
        backgroundColor: active ? '#fff' : 'var(--gl-color-text-muted)',
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  );
}

/** Small generic icon for DNAMatch (no Figma asset provided for it). */
function DnaMatchIcon({ active }: { active: boolean }) {
  const color = active ? '#fff' : 'var(--gl-color-text-muted)';
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      style={{ flexShrink: 0 }}
    >
      <path
        d="M4 3c0 5 10 5 10 12M14 3c0 5-10 5-10 12"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M5.5 5h7M5.5 13h7M6.5 8h5M6.5 11h5"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SidebarRow({
  item,
  active,
  nested,
}: {
  item: NavItem;
  active: boolean;
  nested?: boolean;
}) {
  return (
    <Link
      href={`/${item.slug}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: nested ? '10px 12px 10px 24px' : '10px 12px',
        borderRadius: 8,
        background: active ? 'var(--gl-color-primary-dark)' : 'transparent',
        color: active ? '#fff' : 'var(--gl-color-primary-dark)',
        fontFamily: 'var(--gl-font)',
        fontSize: 14,
        fontWeight: 600,
        lineHeight: '20px',
        textDecoration: 'none',
        transition: 'var(--gl-transition-base)',
      }}
    >
      {item.slug === 'dnamatch' ? (
        <DnaMatchIcon active={active} />
      ) : (
        <ToolIcon slug={item.slug} active={active} />
      )}
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {item.label}
      </span>
    </Link>
  );
}

export function SupportSidebar() {
  const pathname = usePathname() ?? '';
  const activeSlug = pathname.replace(/^\//, '').split('/')[0];

  return (
    <aside
      className="hub-sidebar-only-desktop"
      style={{
        background: 'transparent',
        padding: 0,
        position: 'sticky',
        top: 24,
      }}
      aria-label="Support Hub navigation"
    >
      <h2
        style={{
          margin: '0 0 16px',
          padding: '0 12px',
          fontFamily: 'var(--gl-font)',
          fontSize: 16,
          fontWeight: 700,
          lineHeight: '24px',
          color: 'var(--gl-color-primary-dark)',
        }}
      >
        DNA Match Support Hub
      </h2>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {NAV_GROUPS.map((group) => (
          <div key={group.id} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {group.label && (
              <div
                style={{
                  margin: '12px 12px 4px',
                  fontFamily: 'var(--gl-font)',
                  fontSize: 13,
                  fontWeight: 700,
                  color: 'var(--gl-color-text-subtle)',
                }}
              >
                {group.label}
              </div>
            )}
            {group.items.map((item) => (
              <SidebarRow
                key={item.slug}
                item={item}
                active={activeSlug === item.slug}
                nested={group.id === 'one-on-one'}
              />
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}

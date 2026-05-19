'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_GROUPS, NavItem } from '@/lib/nav';

function NetworkIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      style={{ flexShrink: 0 }}
    >
      <circle cx="7" cy="3" r="1.6" stroke={active ? '#fff' : 'var(--gl-color-text-muted)'} strokeWidth="1.4" />
      <circle cx="3" cy="10" r="1.6" stroke={active ? '#fff' : 'var(--gl-color-text-muted)'} strokeWidth="1.4" />
      <circle cx="11" cy="10" r="1.6" stroke={active ? '#fff' : 'var(--gl-color-text-muted)'} strokeWidth="1.4" />
      <path
        d="M7 4.6L3.8 8.6M7 4.6l3.2 4"
        stroke={active ? '#fff' : 'var(--gl-color-text-muted)'}
        strokeWidth="1.2"
      />
    </svg>
  );
}

function LinkIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      style={{ flexShrink: 0 }}
    >
      <path
        d="M5.5 7a2 2 0 012-2h2a2 2 0 010 4h-1M8.5 7a2 2 0 01-2 2h-2a2 2 0 010-4h1"
        stroke={active ? '#fff' : 'var(--gl-color-text-muted)'}
        strokeWidth="1.4"
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
        gap: 8,
        padding: nested ? '8px 12px 8px 24px' : '10px 12px',
        borderRadius: 8,
        background: active ? 'var(--gl-color-primary-dark)' : 'transparent',
        color: active ? '#fff' : 'var(--gl-color-primary-dark)',
        fontFamily: 'var(--gl-font)',
        fontSize: nested ? 13 : 14,
        fontWeight: active ? 600 : 500,
        lineHeight: '20px',
        textDecoration: 'none',
        transition: 'var(--gl-transition-base)',
      }}
    >
      {nested ? <LinkIcon active={active} /> : <NetworkIcon active={active} />}
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
        background: 'var(--gl-color-surface)',
        borderRadius: 12,
        border: '1px solid rgba(201, 214, 228, 0.6)',
        padding: 16,
        position: 'sticky',
        top: 24,
      }}
      aria-label="Support hub navigation"
    >
      <h2
        style={{
          margin: '4px 8px 12px',
          fontFamily: 'var(--gl-font)',
          fontSize: 14,
          fontWeight: 700,
          color: 'var(--gl-color-primary-dark)',
        }}
      >
        DNA Match Support hub
      </h2>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {NAV_GROUPS.map((group) => (
          <div key={group.id} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {group.label && (
              <div
                style={{
                  margin: '8px 12px 4px',
                  fontFamily: 'var(--gl-font)',
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
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

'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { NAV_GROUPS, ALL_NAV_ITEMS } from '@/lib/nav';

export function SupportSidebarMobile() {
  const router = useRouter();
  const pathname = usePathname() ?? '';
  const activeSlug = pathname.replace(/^\//, '').split('/')[0];

  const activeItem = ALL_NAV_ITEMS.find((i) => i.slug === activeSlug);

  return (
    <div className="hub-dropdown-only-mobile">
      <label
        htmlFor="hub-tool-picker"
        style={{
          display: 'block',
          marginBottom: 6,
          fontFamily: 'var(--gl-font)',
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--gl-color-text-muted)',
        }}
      >
        Choose a tool
      </label>
      <select
        id="hub-tool-picker"
        value={activeSlug}
        onChange={(e) => router.push(`/${e.target.value}`)}
        style={{
          width: '100%',
          padding: '12px 14px',
          fontFamily: 'var(--gl-font)',
          fontSize: 14,
          fontWeight: 500,
          color: 'var(--gl-color-primary-dark)',
          background: 'var(--gl-color-surface)',
          border: '1px solid var(--gl-color-gray-dark)',
          borderRadius: 8,
          appearance: 'none',
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%236786AC' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 14px center',
          paddingRight: 40,
        }}
        aria-label="Choose a tool"
      >
        {NAV_GROUPS.map((group) => (
          <optgroup key={group.id} label={group.label ?? 'Tools'}>
            {group.items.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      {activeItem && (
        <p
          style={{
            margin: '8px 0 0',
            fontFamily: 'var(--gl-font)',
            fontSize: 12,
            color: 'var(--gl-color-text-subtle)',
          }}
        >
          Currently viewing: {activeItem.toolLabel}
        </p>
      )}
    </div>
  );
}

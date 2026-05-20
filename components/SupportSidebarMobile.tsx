'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_GROUPS, ALL_NAV_ITEMS, NavItem } from '@/lib/nav';

/**
 * Custom mobile tool picker — replaces the native <select> with a styled
 * expandable panel that uses the same icons + grouping as the desktop
 * sidebar. Tap-friendly row heights (48px), closes on selection or
 * tap-outside. Visible only at ≤735px via `.hub-dropdown-only-mobile`.
 */
export function SupportSidebarMobile() {
  const pathname = usePathname() ?? '';
  const activeSlug = pathname.replace(/^\//, '').split('/')[0];
  const activeItem = ALL_NAV_ITEMS.find((i) => i.slug === activeSlug);

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Close on tap-outside + ESC.
  useEffect(() => {
    if (!open) return;
    function onPointer(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="hub-dropdown-only-mobile gl-mobile-picker">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="gl-mobile-picker__trigger"
      >
        <span className="gl-mobile-picker__label">
          <span className="gl-mobile-picker__eyebrow">Choose a tool</span>
          <span className="gl-mobile-picker__value">
            {activeItem ? activeItem.label : 'Select…'}
          </span>
        </span>
        <ChevronDown open={open} />
      </button>

      {open && (
        <div className="gl-mobile-picker__panel" role="listbox" aria-label="Tools">
          {NAV_GROUPS.map((group) => (
            <div key={group.id} className="gl-mobile-picker__group">
              {group.label && (
                <div className="gl-mobile-picker__group-label">{group.label}</div>
              )}
              {group.items.map((item) => (
                <PickerRow
                  key={item.slug}
                  item={item}
                  active={activeSlug === item.slug}
                  nested={group.id === 'one-on-one'}
                  onSelect={() => setOpen(false)}
                />
              ))}
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .gl-mobile-picker {
          position: relative;
          width: 100%;
          font-family: var(--gl-font);
        }
        .gl-mobile-picker__trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: 100%;
          min-height: 56px;
          padding: 12px 16px;
          background: var(--gl-color-surface);
          border: 1px solid var(--gl-color-gray-dark);
          border-radius: 12px;
          color: var(--gl-color-primary-dark);
          font-family: var(--gl-font);
          font-size: 16px;
          line-height: 24px;
          text-align: left;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .gl-mobile-picker__trigger:hover,
        .gl-mobile-picker__trigger:focus-visible {
          border-color: var(--gl-color-secondary);
          outline: none;
        }
        .gl-mobile-picker__label {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .gl-mobile-picker__eyebrow {
          font-size: 12px;
          line-height: 16px;
          font-weight: 600;
          color: var(--gl-color-text-muted);
        }
        .gl-mobile-picker__value {
          font-size: 16px;
          line-height: 24px;
          font-weight: 600;
          color: var(--gl-color-primary-dark);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .gl-mobile-picker__panel {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          z-index: 50;
          max-height: 70vh;
          overflow-y: auto;
          background: var(--gl-color-surface);
          border: 1px solid var(--gl-color-border);
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(38, 56, 86, 0.12);
          padding: 8px;
        }
        .gl-mobile-picker__group {
          display: flex;
          flex-direction: column;
          padding: 4px 0;
        }
        .gl-mobile-picker__group-label {
          padding: 8px 12px 4px;
          font-size: 13px;
          font-weight: 700;
          color: var(--gl-color-text-subtle);
        }
      `}</style>
    </div>
  );
}

function PickerRow({
  item,
  active,
  nested,
  onSelect,
}: {
  item: NavItem;
  active: boolean;
  nested?: boolean;
  onSelect: () => void;
}) {
  return (
    <Link
      href={`/${item.slug}`}
      onClick={onSelect}
      role="option"
      aria-selected={active}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        minHeight: 48,
        padding: nested ? '12px 12px 12px 28px' : '12px 12px',
        borderRadius: 8,
        background: active ? 'var(--gl-color-primary-dark)' : 'transparent',
        color: active ? '#fff' : 'var(--gl-color-primary-dark)',
        fontFamily: 'var(--gl-font)',
        fontSize: 16,
        fontWeight: 600,
        lineHeight: '24px',
        textDecoration: 'none',
        WebkitTapHighlightColor: 'transparent',
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
      {active && (
        <span aria-hidden style={{ marginLeft: 'auto', display: 'inline-flex' }}>
          <CheckIcon />
        </span>
      )}
    </Link>
  );
}

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

function DnaMatchIcon({ active }: { active: boolean }) {
  const color = active ? '#fff' : 'var(--gl-color-text-muted)';
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden style={{ flexShrink: 0 }}>
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

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      style={{
        flexShrink: 0,
        transition: 'transform 0.2s ease',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    >
      <path
        d="M5 8L10 13L15 8"
        stroke="var(--gl-color-text-muted)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M4 9.5L7.5 13L14 5.5"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

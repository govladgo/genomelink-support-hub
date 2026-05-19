import React from 'react';

interface ContentLayoutProps {
  eyebrow: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}

export function ContentLayout({ eyebrow, title, lede, children }: ContentLayoutProps) {
  return (
    <article className="hub-content">
      <header style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <p className="hub-eyebrow">{eyebrow}</p>
        <h1 className="hub-h1">{title}</h1>
        {lede && <p className="hub-lede">{lede}</p>}
      </header>
      {children}
    </article>
  );
}

export function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h2 className="hub-h2">{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>{children}</div>
    </section>
  );
}

export function Para({ children }: { children: React.ReactNode }) {
  return <p className="hub-para">{children}</p>;
}

export function ListUL({ children }: { children: React.ReactNode }) {
  return <ul className="hub-list">{children}</ul>;
}

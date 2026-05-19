import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import { SupportHeader } from '@/components/SupportHeader';
import { SupportSidebar } from '@/components/SupportSidebar';
import { SupportSidebarMobile } from '@/components/SupportSidebarMobile';
import { MarketingCTA } from '@/components/MarketingCTA';
import { SupportFooter } from '@/components/SupportFooter';

export const metadata: Metadata = {
  title: 'DNA Match Support hub — Genomelink',
  description:
    'How-to guides for every Genomelink DNA Match tool — DNA Painter, Match Hub, Network Graph, Clusters, and the eight 1-on-1 tools.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SupportHeader />
        <div className="hub-grid">
          <SupportSidebar />
          <main style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 0 }}>
            <SupportSidebarMobile />
            {children}
          </main>
        </div>
        <MarketingCTA />
        <SupportFooter />
      </body>
    </html>
  );
}

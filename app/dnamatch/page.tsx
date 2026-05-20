import React from 'react';
import { ContentLayout, Section, Para } from '@/components/ContentLayout';
import { InfoCallout } from '@/components/InfoCallout';
import { findNavItem } from '@/lib/nav';

const NAV = findNavItem('dnamatch')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support Hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="What is DNAMatch?"
      lede="Genomelink's DNAMatch is a free toolkit that turns your raw DNA-match data into actionable insights — combining clustering, network analysis, painting, and 1-on-1 deep-dives in one workspace."
    >
      <Section title="The DNAMatch family">
        <Para>
          DNAMatch is the umbrella product spanning every tool documented in this hub. Each tool
          targets a specific question genealogists ask of their match list:
        </Para>
        <Para>
          <strong>Network Graph</strong> shows you the shape of your match network at a glance.{' '}
          <strong>Clusters</strong> groups matches who share DNA with each other.{' '}
          <strong>DNA Painter</strong> maps shared segments onto a chromosome canvas.{' '}
          <strong>Match Hub</strong> is your dashboard for managing matches and contact status.
          The eight <strong>1-on-1 tools</strong> let you go deep on a single match — cM Clarity,
          Match Case File, MRCA Finder, Triangulation Lens, Side Assignment Inspector, WATO
          Workspace, Y / mtDNA Compare, and Inferred Segments.
        </Para>
      </Section>

      <InfoCallout title="Content coming soon">
        A complete DNAMatch product overview is in progress. In the meantime, pick a tool from the
        sidebar to read its how-to guide.
      </InfoCallout>
    </ContentLayout>
  );
}

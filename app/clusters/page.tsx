import React from 'react';
import { ContentLayout, Section, Para } from '@/components/ContentLayout';
import { InfoCallout } from '@/components/InfoCallout';
import { findNavItem } from '@/lib/nav';

const NAV = findNavItem('clusters')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="How clusters work"
      lede="Clusters group your DNA matches based on shared connections — uncovering branches of your family tree without needing a tree at all."
    >
      <Section title="What is a cluster?">
        <Para>
          A cluster is a group of DNA matches who also match each other. Because shared-DNA-among-
          themselves usually means a shared ancestor, the cluster as a whole likely descends from
          one branch of your family tree.
        </Para>
        <Para>
          Genomelink runs hierarchical clustering across your full match list and shows you the
          resulting groups, complete with size, average cM, and dominant ancestry signals.
        </Para>
      </Section>

      <InfoCallout title="Content coming soon">
        A full Clusters how-to guide is in progress. Until it&apos;s published, you can explore the
        live tool, and segments imported from a Clusters run are tagged as such inside DNA Painter.
      </InfoCallout>
    </ContentLayout>
  );
}

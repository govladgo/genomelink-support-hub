import React from 'react';
import Link from 'next/link';
import { ContentLayout } from '@/components/ContentLayout';
import { InfoCallout } from '@/components/InfoCallout';
import { OnThisPage } from '@/components/OnThisPage';
import { findNavItem } from '@/lib/nav';
import { DNA_PAINTER_URL } from '@/lib/toolUrls';

const NAV = findNavItem('dna-painter')!;

export const metadata = {
  title: `${NAV.label} — DNA Match Support Hub`,
};

export default function Page() {
  return (
    <ContentLayout
      eyebrow={NAV.toolLabel}
      title="How to use DNA Painter"
      lede="A step-by-step guide to painting your DNA matches onto a chromosome map."
    >
      <section style={sectionGroup}>
        <p style={bodyText}>
          DNA Painting lets you see where you share DNA with your matches — right on a chromosome
          map.
        </p>
        <p style={bodyText}>
          Each of your 22 chromosomes is shown as a horizontal bar, split into a paternal (top) and
          maternal (bottom) half. When you paint a match, their shared DNA segments appear as
          colored blocks on the map — showing you exactly which parts of your genome you have in
          common.
        </p>
      </section>

      <section style={sectionGroup}>
        <h2 style={h2Style}>Why paint?</h2>
        <p style={bodyText}>
          When segments from different matches land on the same spot, it&apos;s a clue they connect
          to the same ancestor. The more matches you paint, the clearer the picture becomes.
        </p>
      </section>

      <section style={sectionGroup}>
        <h2 style={h2Style}>Quick start</h2>
        <ol style={orderedList}>
          <li>Pick a cluster — hit &ldquo;Paint&rdquo; to paint everyone in it at once.</li>
          <li>
            Merging imports — when you import matches that are already painted, choose Replace to
            swap their segments or Add to keep both sources side-by-side.
          </li>
          <li>
            Or go match by match — enter Paint Mode, hover to preview, click &ldquo;Paint&rdquo; to
            add.
          </li>
          <li>
            Explore overlaps — orange triangle badges mark where 3+ matches overlap (triangulation).
          </li>
          <li>Click any segment — for chromosome position, size in cM, and more.</li>
          <li>
            Check the source — each segment is tagged with where it came from (Genomelink Cluster,
            Imported from MyHeritage, etc.). You&apos;ll see the label in the sidebar, tooltip, and
            segment detail.
          </li>
          <li>
            Unknown-side segments — segments without a known side appear as hatched bars. Click any
            segment or right-click to assign it to Paternal or Maternal.
          </li>
        </ol>
        <p style={{ ...bodyText, color: 'var(--gl-color-text-muted)' }}>
          Your painting is saved automatically and most actions are undoable with Cmd/Ctrl + Z — so
          you can experiment freely.
        </p>
      </section>

      <OnThisPage
        columns={[
          {
            heading: 'Getting started',
            entries: [
              { id: 'long-term', label: 'Your canvas is a long-term project' },
              { id: 'canvas-management', label: 'Canvas management' },
              { id: 'chromosome-map', label: 'The chromosome map' },
              { id: 'three-ways', label: 'Three ways to import matches' },
              { id: 'replace-vs-add', label: 'Replace vs. Add merge modes' },
              { id: 'segments', label: 'Working with segments' },
              { id: 'triangulation', label: 'Triangulation' },
              { id: 'parameters', label: 'Parameters & filtering' },
              { id: 'source-tracking', label: 'Source tracking' },
            ],
          },
          {
            heading: 'Tools & reference',
            entries: [
              { id: 'exporting', label: 'Exporting your work' },
              { id: 'undo-redo', label: 'Undo & redo' },
              { id: 'shortcuts', label: 'Keyboard shortcuts' },
              { id: 'responsibility', label: 'Your data, your responsibility' },
              { id: 'irreversible', label: 'Irreversible actions' },
              { id: 'cm', label: 'Understanding cM & relationships' },
              { id: 'workflow', label: 'Workflow tips' },
              { id: 'glossary', label: 'Glossary' },
            ],
          },
        ]}
      />

      <section id="long-term" style={sectionGroup}>
        <h2 style={h2Style}>Your canvas is a long-term research project</h2>
        <p style={bodyText}>
          A canvas in DNA Painter is not a quick sketch — it&apos;s a research notebook that grows
          over weeks, months, or even years as you discover new DNA matches, receive updated results
          from testing companies, and refine your understanding of your ancestry.
        </p>
        <p style={bodyText}>
          Every segment you paint, every side you assign, and every import you merge represents time
          invested. That work is valuable, and it lives only in your browser on this device. There
          is no cloud backup, no account sync, and no way to recover it once lost.
        </p>
        <InfoCallout title="Treat your canvas like a research file">
          Name each canvas for a specific research question — &ldquo;Maternal grandmother&apos;s
          family,&rdquo; &ldquo;Smith family connections,&rdquo; or &ldquo;Mystery match
          cluster.&rdquo; Export regularly. The more focused the question, the more useful the
          painting becomes.
        </InfoCallout>
      </section>

      <section id="canvas-management" style={sectionGroup}>
        <h2 style={h2Style}>Canvas management</h2>
        <p style={bodyText}>
          You can maintain as many canvases as you need — one per research question is a good rule
          of thumb. Each canvas stores its own segments, import history, and undo log independently.
        </p>
        <ul style={orderedList}>
          <li>
            Create a canvas from the My Canvases page. If you leave the name blank, it defaults to
            &ldquo;Canvas&rdquo; plus today&apos;s date. You can always rename it later.
          </li>
          <li>Rename a canvas by clicking its name on the canvas card in My Canvases.</li>
          <li>
            Delete a canvas via the menu on the canvas card. A confirmation dialog appears, but once
            you confirm, the canvas and all of its segments, import history, and undo snapshots are
            permanently erased.
          </li>
          <li>
            <strong>Storage limit</strong> — there is no hard limit on the number of canvases, but
            all data is stored in your browser&apos;s localStorage (typically 5–10 MB). Very large
            canvases may cause older undo snapshots to be evicted sooner.
          </li>
        </ul>
        <InfoCallout variant="warning" title="Deleting a canvas is permanent">
          There is no trash bin and no undo for deletion. Before deleting a canvas, consider
          exporting a PNG screenshot and a CSV backup of your segment data.
        </InfoCallout>
      </section>

      <section id="chromosome-map" style={sectionGroup}>
        <h2 style={h2Style}>The chromosome map</h2>
        <p style={bodyText}>
          The canvas displays 22 autosomes as horizontal bars. Chromosome 1 is the longest (~286 cM)
          and 22 is the shortest (~74 cM). Each bar is split into a paternal (top, blue tones) and
          maternal (bottom, orange tones) half. Painted segments appear as coloured blocks
          positioned by base-pair coordinates; unknown-side segments render as hatched purple bars
          spanning the full height. When three or more painted matches overlap, an orange
          triangulation triangle appears above (paternal) or below (maternal) the bar.
        </p>
        <p style={bodyText}>
          A stats bar above the map shows the count of matches painted, total segments, and total cM
          in real time. The Parameters panel sits above the map and exposes the cM threshold and
          cluster-visibility pills.
        </p>
      </section>

      <section id="three-ways" style={sectionGroup}>
        <h2 style={h2Style}>Three ways to import matches</h2>
        <p style={bodyText}>
          There are three paths to get DNA segments onto your canvas, each suited to a different
          stage of research.
        </p>

        <h3 style={h3Style}>1. Import from Cluster</h3>
        <p style={bodyText}>
          Select a Genomelink cluster analysis run, choose which clusters to bring in, and paint
          everyone in those clusters in a single operation. This is the fastest way to get a broad
          initial painting. Each imported segment is tagged with its cluster source so you can
          always trace where it came from. You can import multiple cluster runs into the same canvas
          over time.
        </p>

        <h3 style={h3Style}>2. Paste / Upload segments</h3>
        <p style={bodyText}>
          Paste tabular segment data directly or upload a CSV file. The provider dropdown lets you
          select the source format: 23andMe, MyHeritage, Ancestry, FTDNA, GEDmatch, or Other (custom
          label). The parser auto-detects column formats. Required columns: chromosome, start
          position, end position, and cM. SNPs and match name are optional — if missing, segments
          are labeled &ldquo;Unknown Match.&rdquo;
        </p>

        <h3 style={h3Style}>3. Match-by-match Paint Mode</h3>
        <p style={bodyText}>
          Toggle Paint Mode to open the sidebar listing all your DNA matches. Hover to preview —
          hovering a match in the sidebar shows semi-transparent preview segments on the map, so
          you can see exactly where they&apos;ll land before committing. Paint / Unpaint adds or
          removes a single match with one click. Paint All / Unpaint All are bulk actions.
        </p>
      </section>

      <section id="replace-vs-add" style={sectionGroup}>
        <h2 style={h2Style}>Replace vs. Add merge modes</h2>
        <p style={bodyText}>
          When an import contains already-painted matches, the import modal presents two options.{' '}
          <strong>Replace</strong> removes existing segments and substitutes the incoming data — use
          when the new source is more accurate or more recent. <strong>Add</strong> keeps both sets
          side by side, each tagged with source — use when combining results from multiple testing
          companies for the same match.
        </p>
      </section>

      <section id="segments" style={sectionGroup}>
        <h2 style={h2Style}>Working with segments</h2>
        <ul style={orderedList}>
          <li>
            <strong>Click</strong> a segment to open the detail drawer (chromosome, position, cM
            size, SNP count, source, match name, side, triangulation status).
          </li>
          <li>
            <strong>Right-click</strong> for a context menu with quick side assignment or the full
            detail view.
          </li>
          <li>
            <strong>Hover tooltip</strong> shows match name, cM value, and source label.
          </li>
          <li>
            <strong>Assigning sides:</strong> unknown-side segments appear as hatched purple bars;
            assignment moves the segment to its correct half.
          </li>
        </ul>
        <p style={bodyText}>
          A canvas full of &ldquo;unknown&rdquo; segments looks busy but tells you less than one
          where sides are assigned.
        </p>
      </section>

      <section id="triangulation" style={sectionGroup}>
        <h2 style={h2Style}>Triangulation — finding shared ancestors</h2>
        <p style={bodyText}>
          Triangulation occurs when 3+ matches from different people share overlapping DNA segments
          on the same chromosome region, suggesting common ancestry.
        </p>
        <ul style={orderedList}>
          <li>The app automatically detects regions where 3+ segments overlap on the same chromosome.</li>
          <li>Orange triangle badges mark these regions (above the bar for paternal, below for maternal).</li>
          <li>Clicking any orange triangle opens the Triangulation panel showing all overlapping matches.</li>
        </ul>
        <InfoCallout title="Why it matters">
          Triangulated segments are the strongest evidence you have for placing a segment on a
          specific ancestral line. Triangulation zones are your highest-priority leads — when you
          see an orange triangle, click it. The matches shown there are very likely related through
          the same ancestor.
        </InfoCallout>
      </section>

      <section id="parameters" style={sectionGroup}>
        <h2 style={h2Style}>Parameters &amp; filtering</h2>
        <p style={bodyText}>
          The Parameters panel exposes a <strong>cM threshold slider</strong> (range 1–30 cM,
          default 7) that hides segments below the selected size — non-destructive, you can change
          it any time. Segments smaller than ~7 cM are frequently &ldquo;identical by state&rdquo;
          (IBS), meaning they look shared but are actually just common in the population. The{' '}
          <strong>cluster filter pills</strong> let you toggle specific cluster visibility. Live
          stats update in real time as you adjust filters.
        </p>
        <p style={bodyText}>
          Start with the default 7 cM threshold. Once your canvas gets crowded, raise it to 15 or 20
          cM.
        </p>
      </section>

      <section id="source-tracking" style={sectionGroup}>
        <h2 style={h2Style}>Source tracking</h2>
        <p style={bodyText}>
          Every segment carries permanent origin information. Source types include: Genomelink
          Cluster, Imported from MyHeritage, Imported from Ancestry, Imported from FTDNA, Imported
          from GEDmatch, Imported from 23andMe, Added Manually, and any custom label you supplied.
          Source info appears in the sidebar match subtitle, hover tooltip, and segment detail panel.
        </p>
      </section>

      <section id="exporting" style={sectionGroup}>
        <h2 style={h2Style}>Exporting your work</h2>
        <h3 style={h3Style}>PNG image download</h3>
        <p style={bodyText}>
          Captures the full canvas (name, stats bar, legend, chromosome map) at 2× resolution. File
          naming: <code style={code}>dna-painter-&lt;canvas-name&gt;-&lt;date&gt;.png</code>. Use
          for attaching to research notes, sharing with relatives, posting in forums, or creating a
          visual record.
        </p>
        <h3 style={h3Style}>CSV data export</h3>
        <p style={bodyText}>
          Columns: chromosome, startBp, endBp, cM, snps, matchName, groupId, side. Can be
          re-imported via Paste/Upload to rebuild the canvas. Use for spreadsheet analysis,
          importing into other genealogy tools, or as a machine-readable backup.
        </p>
        <InfoCallout variant="warning" title="Exports are your only backup">
          Since your canvas data lives only in your browser&apos;s localStorage, PNG and CSV exports
          are your only protection against data loss. Export after every major import session.
        </InfoCallout>
      </section>

      <section id="undo-redo" style={sectionGroup}>
        <h2 style={h2Style}>Undo &amp; redo</h2>
        <p style={bodyText}>
          Undo with <code style={code}>Cmd/Ctrl + Z</code>; redo with{' '}
          <code style={code}>Cmd/Ctrl + Shift + Z</code> or <code style={code}>Cmd/Ctrl + Y</code>.
          Undoable actions: importing segments (including Replace mode), painting / unpainting a
          single match, Unpaint All, changing segment side (paternal / maternal / unknown), changing
          segment group assignment.
        </p>
        <p style={bodyText}>
          Limitations: max 20 snapshots (oldest are evicted), history clears upon navigation, and
          canvas deletion bypasses the undo system. Undo before you navigate away.
        </p>
      </section>

      <section id="shortcuts" style={sectionGroup}>
        <h2 style={h2Style}>Keyboard shortcuts</h2>
        <table style={table}>
          <thead>
            <tr><th style={th}>Shortcut</th><th style={th}>Action</th></tr>
          </thead>
          <tbody>
            <tr><td style={td}><code style={code}>Cmd/Ctrl + Z</code></td><td style={td}>Undo last action</td></tr>
            <tr><td style={td}><code style={code}>Cmd/Ctrl + Shift + Z</code></td><td style={td}>Redo</td></tr>
            <tr><td style={td}><code style={code}>Cmd/Ctrl + Y</code></td><td style={td}>Redo (alternative)</td></tr>
            <tr><td style={td}><code style={code}>Esc</code></td><td style={td}>Close any open modal, context menu, or detail panel</td></tr>
          </tbody>
        </table>
      </section>

      <section id="responsibility" style={sectionGroup}>
        <h2 style={h2Style}>Your data, your responsibility</h2>
        <p style={bodyText}>
          Canvas data is stored in browser localStorage, never uploaded to servers or synced to
          accounts. Clearing browser data wipes every canvas permanently. Switching browsers on the
          same computer requires starting over. Private/incognito windows may not persist
          localStorage. Browser updates, OS reinstalls, and disk failures lose data without exports.
        </p>
        <p style={bodyText}>
          <strong>Backup strategy:</strong> export PNG and CSV from each canvas after major import
          sessions, store them in a cloud folder, and remember that CSV can be re-imported to
          rebuild.
        </p>
        <InfoCallout variant="warning" title="No cloud sync, no account backup, no recovery">
          Your canvas is stored only in this browser on this device. If your browser data is cleared
          — whether by you, a cleanup tool, or a browser update — your canvases are gone
          permanently. Export early, export often.
        </InfoCallout>
      </section>

      <section id="irreversible" style={sectionGroup}>
        <h2 style={h2Style}>Irreversible actions</h2>
        <p style={bodyText}>
          Most actions are undoable, but these cannot be recovered: deleting a canvas, clearing
          browser data for the site, switching browsers or devices, undo history limits (20
          snapshots only). <strong>What is undoable:</strong> Replace on import, Unpaint single
          match, Unpaint All, side assignment changes, group assignment changes — all reversible
          with Cmd/Ctrl + Z while the canvas is open.
        </p>
      </section>

      <section id="cm" style={sectionGroup}>
        <h2 style={h2Style}>Understanding cM &amp; relationships</h2>
        <p style={bodyText}>
          A <strong>centimorgan (cM)</strong> measures the genetic distance / likelihood of
          inherited DNA. The total autosomal genome is roughly 3,400 cM across all 22 autosomes.
        </p>
        <table style={table}>
          <thead>
            <tr><th style={th}>Shared cM</th><th style={th}>Likely relationship</th></tr>
          </thead>
          <tbody>
            <tr><td style={td}>3,400+</td><td style={td}>Self / Identical twin</td></tr>
            <tr><td style={td}>2,200 – 3,400</td><td style={td}>Full sibling</td></tr>
            <tr><td style={td}>1,500 – 2,200</td><td style={td}>Grandparent / Grandchild</td></tr>
            <tr><td style={td}>1,000 – 1,500</td><td style={td}>Great-grandparent / Uncle / Aunt</td></tr>
            <tr><td style={td}>500 – 1,000</td><td style={td}>1st cousin</td></tr>
            <tr><td style={td}>200 – 500</td><td style={td}>2nd cousin</td></tr>
            <tr><td style={td}>90 – 200</td><td style={td}>3rd cousin</td></tr>
            <tr><td style={td}>40 – 90</td><td style={td}>4th cousin</td></tr>
            <tr><td style={td}>20 – 40</td><td style={td}>5th cousin (uncertain)</td></tr>
            <tr><td style={td}>&lt; 20</td><td style={td}>Distant relative or possibly noise</td></tr>
          </tbody>
        </table>
        <p style={bodyText}>
          <strong>IBD vs. IBS.</strong> IBD (Identical by Descent) = DNA shared through inheritance
          from the same ancestor — a real genealogical connection. IBS (Identical by State) = DNA
          that looks shared but is actually just common in the general population. Small segments
          below ~7 cM are frequently IBS. The default cM threshold of 7 filters out most IBS noise.
        </p>
      </section>

      <section id="workflow" style={sectionGroup}>
        <h2 style={h2Style}>Workflow tips &amp; best practices</h2>
        <h3 style={h3Style}>When to create a new canvas</h3>
        <p style={bodyText}>
          Create a separate canvas for each research question — &ldquo;Paternal grandfather&apos;s
          line,&rdquo; &ldquo;Unknown match cluster from 23andMe,&rdquo; &ldquo;Mom&apos;s Ancestry
          results,&rdquo; &ldquo;Smith family — maternal side.&rdquo; Focused canvases are easier to
          read, easier to share, and easier to recover from mistakes.
        </p>
        <h3 style={h3Style}>Suggested workflow</h3>
        <ol style={orderedList}>
          <li>Create and name canvas for the research question.</li>
          <li>Import clusters for a broad initial painting.</li>
          <li>Switch to Paint Mode and add individual matches identified through your own research.</li>
          <li>Adjust the cM threshold to filter noise.</li>
          <li>Look for orange triangulation triangles.</li>
          <li>Right-click unknown-side segments to assign Paternal or Maternal.</li>
          <li>Export PNG and CSV regularly as backup.</li>
        </ol>
        <h3 style={h3Style}>What to look for in overlaps</h3>
        <ul style={orderedList}>
          <li>
            <strong>Triangulated regions</strong> (orange triangles): 3+ matches overlapping =
            strong shared-ancestry evidence.
          </li>
          <li>
            <strong>Large overlapping segments</strong> (15+ cM): almost certainly real IBD
            connections.
          </li>
          <li>
            <strong>Segments on the same side</strong> from unrelated matches: likely the same
            ancestral line.
          </li>
        </ul>
      </section>

      <section id="glossary" style={sectionGroup}>
        <h2 style={h2Style}>Glossary</h2>
        <dl style={glossary}>
          <dt style={dt}>Autosome</dt><dd style={dd}>One of 22 non-sex chromosomes. DNA Painter displays all 22. Sex chromosomes (X, Y) and mitochondrial DNA are not included.</dd>
          <dt style={dt}>Base pair (bp)</dt><dd style={dd}>Fundamental DNA length unit. One megabase (Mb) = 1,000,000 base pairs.</dd>
          <dt style={dt}>Canvas</dt><dd style={dd}>Personal chromosome-painting workspace. Stores its own segments, import history, and undo log.</dd>
          <dt style={dt}>Centimorgan (cM)</dt><dd style={dd}>Genetic-distance unit. Total autosomal genome ≈ 3,400 cM.</dd>
          <dt style={dt}>Cluster</dt><dd style={dd}>DNA-match group identified by Genomelink&apos;s clustering algorithm as likely related through a common ancestor.</dd>
          <dt style={dt}>IBD</dt><dd style={dd}>Identical by Descent — DNA shared through inheritance from the same ancestor.</dd>
          <dt style={dt}>IBS</dt><dd style={dd}>Identical by State — DNA that looks shared but is common in the general population; not a genealogical connection.</dd>
          <dt style={dt}>localStorage</dt><dd style={dd}>Browser storage DNA Painter uses to save canvases. Persists between sessions but specific to this browser + device.</dd>
          <dt style={dt}>Segment</dt><dd style={dd}>Contiguous DNA stretch shared between you and a match — chromosome, start, end, cM.</dd>
          <dt style={dt}>Side</dt><dd style={dd}>Paternal, maternal, or unknown. Determines vertical placement on the chromosome bar.</dd>
          <dt style={dt}>SNP</dt><dd style={dd}>Single Nucleotide Polymorphism — individual DNA positions that vary between people.</dd>
          <dt style={dt}>Source</dt><dd style={dd}>Testing company or method producing the segment (23andMe, Genomelink Cluster, etc.). Every segment is permanently tagged.</dd>
          <dt style={dt}>Triangulation</dt><dd style={dd}>3+ matches from different people share overlapping segments on the same chromosome region. Marked with orange triangle badges.</dd>
        </dl>
      </section>

      <div style={{ marginTop: 12 }}>
        <Link href={`${DNA_PAINTER_URL}/painter`} className="gl-btn gl-btn--primary">
          Open DNA Painter
        </Link>
      </div>
    </ContentLayout>
  );
}

const sectionGroup: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 12, scrollMarginTop: 24 };
const h2Style: React.CSSProperties = {
  margin: 0,
  fontSize: 24,
  fontWeight: 600,
  lineHeight: '32px',
  color: 'var(--gl-color-primary-dark)',
  marginBottom: 8,
};
const h3Style: React.CSSProperties = {
  margin: '8px 0 4px',
  fontSize: 18,
  fontWeight: 600,
  lineHeight: '26px',
  color: 'var(--gl-color-primary-dark)',
};
const bodyText: React.CSSProperties = { margin: 0, fontSize: 16, lineHeight: '24px', color: 'var(--gl-color-text-muted)' };
const orderedList: React.CSSProperties = {
  margin: 0,
  paddingLeft: 24,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  fontSize: 16,
  lineHeight: '24px',
  color: 'var(--gl-color-text-muted)',
};
const table: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: 14 };
const th: React.CSSProperties = {
  textAlign: 'left',
  background: 'var(--gl-color-info-bg)',
  color: 'var(--gl-color-primary-dark)',
  fontWeight: 600,
  padding: '10px 12px',

};
const td: React.CSSProperties = {
  padding: '10px 12px',
  color: 'var(--gl-color-primary-dark)',
  lineHeight: '20px',

};
const code: React.CSSProperties = {
  background: 'var(--gl-color-gray-light)',
  padding: '1px 5px',
  borderRadius: 4,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  fontSize: '0.92em',
};
const glossary: React.CSSProperties = {
  margin: 0,
  display: 'grid',
  gridTemplateColumns: '180px 1fr',
  gap: '8px 16px',
};
const dt: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--gl-color-primary-dark)',
  paddingTop: 4,
};
const dd: React.CSSProperties = {
  fontSize: 13,
  color: 'var(--gl-color-text-muted)',
  lineHeight: '20px',
  margin: 0,
};

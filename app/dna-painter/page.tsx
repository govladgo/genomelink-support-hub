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
          <li>
            From DNA Matches → Tools, click <strong>Open Painter</strong>. Then{' '}
            <strong>+ NEW CANVAS</strong> to start a fresh chromosome map.
          </li>
          <li>
            Name the canvas, then choose how to import: <strong>Select all matches</strong> (paints
            everyone in your match list) or <strong>Select a cluster</strong> (paints just the
            members of a clustering run).
          </li>
          <li>
            Explore overlaps — orange triangle badges mark where 3+ matches overlap (triangulation).
            Click one to open the Overlapping Segments panel.
          </li>
          <li>Click any segment for chromosome position, size in cM, and source info.</li>
          <li>
            Add more matches later with <strong>PAINT MODE</strong> — pick individuals from the
            sidebar, or paste segment data directly with <strong>+ Upload Segments</strong>.
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
              { id: 'import-flow', label: 'Importing matches' },
              { id: 'paint-mode', label: 'Paint Mode' },
              { id: 'segments', label: 'Working with segments' },
              { id: 'overlapping', label: 'Overlapping Segments modal' },
              { id: 'triangulation', label: 'Triangulation' },
              { id: 'parameters', label: 'Parameters & filtering' },
            ],
          },
          {
            heading: 'Tools & reference',
            entries: [
              { id: 'source-tracking', label: 'Source tracking' },
              { id: 'exporting', label: 'Exporting your work' },
              { id: 'undo-redo', label: 'Undo & redo' },
              { id: 'shortcuts', label: 'Keyboard shortcuts' },
              { id: 'responsibility', label: 'Your data, your responsibility' },
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
            Create a canvas from the My Canvases page with <strong>+ NEW CANVAS</strong>. Name it
            during creation (defaults to &ldquo;Canvas&rdquo; + today&apos;s date if you leave the
            field blank).
          </li>
          <li>
            Each canvas card on the My Canvases list shows the canvas name, segment count, match
            count, last-saved date, and an <strong>OPEN CANVAS</strong> action.
          </li>
          <li>
            Delete a canvas via the kebab menu on the canvas card. A confirmation dialog appears,
            but once you confirm, the canvas and all of its segments, import history, and undo
            snapshots are permanently erased.
          </li>
          <li>
            <strong>Storage limit</strong> — all data is stored in your browser&apos;s localStorage
            (typically 5–10 MB). Very large canvases may cause older undo snapshots to be evicted
            sooner.
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
          The canvas displays all 22 autosomes as horizontal bars. Each bar is split into a paternal
          (top, blue tones) and maternal (bottom, orange tones) half. Painted segments appear as
          coloured blocks positioned by base-pair coordinates; unknown-side segments render as
          hatched bars; overlapping segments show in pink. When three or more painted matches
          overlap at the same region, a numbered orange triangle badge appears on the bar (the
          number = how many matches overlap there).
        </p>
        <p style={bodyText}>
          A stats line above the map shows three live counters: <strong>matches painted</strong>,
          total <strong>segments</strong>, and total <strong>cM</strong> across the canvas. A
          legend on the right names the four segment types (Top = Paternal, Bottom = Maternal,
          Unknown, Overlapping).
        </p>
      </section>

      <section id="import-flow" style={sectionGroup}>
        <h2 style={h2Style}>Importing matches</h2>
        <p style={bodyText}>
          When you create a new canvas, DNA Painter walks you through three modal steps to bring
          matches in. After the canvas exists you can always add more later via Paint Mode (covered
          next).
        </p>

        <h3 style={h3Style}>Step 1 · Name your canvas</h3>
        <p style={bodyText}>
          Pick a research-question-shaped name (e.g. &ldquo;Mom&apos;s side&rdquo; or &ldquo;Smith
          surname cluster&rdquo;). The blurb at the bottom of the modal reminds you: <em>a canvas
          is your personal chromosome map. Paint DNA matches, import from clusters, or paste
          segment data from other testing platforms.</em>
        </p>

        <h3 style={h3Style}>Step 2 · Import from DNA matches</h3>
        <p style={bodyText}>
          Two radio choices:
        </p>
        <ul style={orderedList}>
          <li>
            <strong>Select all matches</strong> — paints everyone on your DNA Matches list
            (typically a few thousand). Useful for getting a complete chromosome view in one go,
            though the canvas will be busy.
          </li>
          <li>
            <strong>Select a cluster</strong> — pick from a dropdown of your saved clustering runs
            (Shared Match or Shared Segment, by preset name). Far more focused than &ldquo;all
            matches&rdquo;, especially when you want to paint just one branch of your tree.
          </li>
        </ul>

        <h3 style={h3Style}>Step 3 · Select clusters (if you picked a cluster run)</h3>
        <p style={bodyText}>
          If you chose a cluster run in Step 2, the next modal lists every cluster in that run with
          checkboxes — Cluster name, match count, and average cM. Toggle individual clusters or use
          <strong> Select all clusters</strong>. Two CTAs at the bottom: <strong>IMPORT ALL</strong>{' '}
          (everything in the run) or <strong>IMPORT SELECTED</strong> (just the checked clusters).
          The button label shows the total match count so you know what you&apos;re committing to.
        </p>

        <InfoCallout title="Re-importing is safe">
          Importing the same matches again won&apos;t create duplicates — DNA Painter recognises
          previously-painted matches by ID and refreshes their segments rather than stacking. To
          remove matches from the canvas, use UNPAINT in Paint Mode rather than re-importing.
        </InfoCallout>
      </section>

      <section id="paint-mode" style={sectionGroup}>
        <h2 style={h2Style}>Paint Mode</h2>
        <p style={bodyText}>
          Click <strong>PAINT MODE</strong> in the Parameters panel to open a sidebar on the right
          of the canvas listing every match you can paint. Paint Mode is how you add matches one at
          a time, change which matches are visible, or paste raw segment data from outside
          Genomelink.
        </p>

        <h3 style={h3Style}>Sidebar layout</h3>
        <ul style={orderedList}>
          <li>
            <strong>+ Upload Segments</strong> — opens the Paste / Upload modal (covered below).
          </li>
          <li>
            <strong>Search matches</strong> — type-ahead filter on match name.
          </li>
          <li>
            <strong>FILTER BY SOURCE</strong> chip strip — toggle which testing-company sources are
            visible (23andMe, Ancestry, MyHeritage, Other). Click a chip to hide its matches without
            unpainting them.
          </li>
          <li>
            <strong>By cM / By Name</strong> sort toggle.
          </li>
          <li>
            <strong>Match list</strong> — avatar + name + vendor badge + cM + segment count for
            every match. Each row has a checkbox: tick to paint, untick to unpaint.
          </li>
          <li>
            <strong>PAINT ALL</strong> / <strong>UNPAINT ALL</strong> bulk actions on top of the
            sidebar.
          </li>
          <li>
            <strong>EXIT PAINT MODE</strong> button in the Parameters panel closes the sidebar and
            returns the canvas to its standard view.
          </li>
        </ul>

        <h3 style={h3Style}>+ Upload Segments — Paste / Upload modal</h3>
        <p style={bodyText}>
          Use this to add segment data from outside Genomelink (a triangulation export from FTDNA,
          a GEDmatch one-to-one comparison, a MyHeritage chromosome browser CSV). The modal accepts:
        </p>
        <ul style={orderedList}>
          <li>
            <strong>FTDNA</strong> — tab-separated with columns: Name, Chromosome, Start Location,
            End Location, Centimorgans, Matching SNPs.
          </li>
          <li>
            <strong>GEDmatch</strong> — columns include Chr, B37 Start, B37 End, cM, SNPs.
          </li>
          <li>
            <strong>MyHeritage</strong> — columns include Name, Chromosome, Start point, End point,
            Centimorgans, SNPs.
          </li>
          <li>
            <strong>Generic CSV / TSV</strong> — any file with recognisable chromosome, start, end,
            and cM columns.
          </li>
        </ul>
        <p style={bodyText}>
          The modal shows a FTDNA-format example in a pre block so you know what to paste. The
          parser auto-detects column formats; SNPs and match name are optional. Pasted data with no
          match name labels segments as &ldquo;Unknown Match&rdquo;.
        </p>

        <h3 style={h3Style}>Preview Import — confirm before painting</h3>
        <p style={bodyText}>
          After you paste or upload, a <strong>Preview Import</strong> modal shows the parsed
          segments as a table — Match Name, Chr, Start, End, cM, SNPs — with a note like &ldquo;Parsed
          6 segments from 3 matches.&rdquo; Confirm with <strong>IMPORT N SEGMENTS</strong> or
          discard with <strong>CANCEL</strong>. Nothing is added to the canvas until you confirm.
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
            <strong>Assigning sides:</strong> unknown-side segments appear as hatched bars;
            assignment moves the segment to its correct half (paternal top or maternal bottom).
          </li>
        </ul>
        <p style={bodyText}>
          A canvas full of &ldquo;unknown&rdquo; segments looks busy but tells you less than one
          where sides are assigned.
        </p>
      </section>

      <section id="overlapping" style={sectionGroup}>
        <h2 style={h2Style}>Overlapping Segments modal</h2>
        <p style={bodyText}>
          When multiple matches cover the same chromosomal region, the segments stack visually and
          the bar gets a numbered triangle badge (the number = how many matches overlap there).
          Click the badge — or any segment in the overlap zone — to open the{' '}
          <strong>Overlapping Segments</strong> modal.
        </p>
        <p style={bodyText}>
          The modal lists every match contributing to that overlap, with:
        </p>
        <ul style={orderedList}>
          <li>Match name + the cluster they belong to (e.g. &ldquo;Cluster 8&rdquo;).</li>
          <li>Side assignment (Unknown / Paternal / Maternal).</li>
          <li>The cM contribution from each match.</li>
        </ul>
        <p style={bodyText}>
          Overlapping regions are some of the strongest evidence you can paint — they suggest the
          contributing matches share a common ancestor at that exact chromosomal position. If most
          overlapping matches belong to the same cluster, that&apos;s a strong signal the cluster
          really does descend from a single branch.
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
          <li>Orange triangle badges with the overlap count appear on the bar where they overlap.</li>
          <li>Clicking any triangle (or any segment in the overlap zone) opens the Overlapping Segments modal.</li>
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
          The Parameters panel above the chromosome map exposes:
        </p>
        <ul style={orderedList}>
          <li>
            <strong>cM threshold slider</strong> (default 7 cM, range up to 30 cM) — hides segments
            below the selected size. Non-destructive; segments come back when you raise it. Below
            ~7 cM, many segments are &ldquo;identical by state&rdquo; (IBS) rather than IBD, so the
            default filter cleans up the canvas without losing genealogical signal.
          </li>
          <li>
            <strong>Showing matches ≥ N cM</strong> indicator next to the slider.
          </li>
          <li>
            <strong>Stats line</strong> — matches painted / segments / total cM, updates live.
          </li>
          <li>
            <strong>Legend</strong> — Top = Paternal (blue), Bottom = Maternal (orange), Unknown
            (hatched), Overlapping (pink).
          </li>
          <li>
            <strong>PAINT MODE</strong> button — opens the sidebar covered above.
          </li>
        </ul>
        <p style={bodyText}>
          Start with the default 7 cM. Once your canvas gets crowded, raise the threshold to 15 or
          20 cM. To filter by cluster, use the source filter inside Paint Mode (which respects the
          source tag on each painted segment) rather than the Parameters panel.
        </p>
      </section>

      <section id="source-tracking" style={sectionGroup}>
        <h2 style={h2Style}>Source tracking</h2>
        <p style={bodyText}>
          Every painted segment carries a permanent source tag. Possible values:
        </p>
        <ul style={orderedList}>
          <li>
            <strong>Genomelink cluster</strong> — segment came from a clustering run import. The
            match&apos;s vendor (23andMe, Ancestry, MyHeritage, FTDNA, GEDmatch) flows through with
            it, which is what the source filter in Paint Mode actually filters on.
          </li>
          <li>
            <strong>Imported from FTDNA / GEDmatch / MyHeritage</strong> — segment came from a Paste
            / Upload of that vendor&apos;s chromosome browser format.
          </li>
          <li>
            <strong>Imported from CSV/TSV</strong> — segment came from a generic file import. You
            can label these with a custom source string at upload time.
          </li>
        </ul>
        <p style={bodyText}>
          Source info appears in the sidebar match row, hover tooltip, and segment detail drawer.
          The source filter in Paint Mode reads the vendor tag and lets you toggle 23andMe /
          Ancestry / MyHeritage / Other visibility.
        </p>
      </section>

      <section id="exporting" style={sectionGroup}>
        <h2 style={h2Style}>Exporting your work</h2>
        <h3 style={h3Style}>PNG image download</h3>
        <p style={bodyText}>
          Captures the full canvas (name, stats bar, legend, chromosome map) at 2× resolution. Use
          for attaching to research notes, sharing with relatives, posting in forums, or creating a
          visual record.
        </p>
        <h3 style={h3Style}>CSV data export</h3>
        <p style={bodyText}>
          Columns: chromosome, startBp, endBp, cM, snps, matchName, source, side. Can be re-imported
          via Paste/Upload to rebuild the canvas in another browser. Use for spreadsheet analysis,
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
          Undoable actions: importing segments, painting / unpainting a single match, Unpaint All,
          changing segment side (paternal / maternal / unknown).
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
          results.&rdquo; Focused canvases are easier to read, easier to share, and easier to
          recover from mistakes.
        </p>
        <h3 style={h3Style}>Suggested workflow</h3>
        <ol style={orderedList}>
          <li>Create + name a canvas for the research question.</li>
          <li>
            Import a focused cluster (from <Link href="/clusters">Clusters</Link>) for a broad
            initial painting.
          </li>
          <li>Switch to Paint Mode and add individual matches identified through your own research.</li>
          <li>Adjust the cM threshold to filter noise.</li>
          <li>Look for orange triangulation triangles — click them to inspect overlaps.</li>
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
            <strong>Same-cluster overlaps</strong>: when most matches at a region belong to the
            same cluster, that cluster very likely traces to a single branch.
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
          <dt style={dt}>Source</dt><dd style={dd}>Where the segment came from (Genomelink Cluster, FTDNA paste, etc.). Every segment is permanently tagged.</dd>
          <dt style={dt}>Triangulation</dt><dd style={dd}>3+ matches from different people share overlapping segments on the same chromosome region. Marked with numbered orange triangles.</dd>
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

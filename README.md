# Genomelink DNA Match Support Hub

A unified how-to/help site that consolidates content for every DNA Match tool in the Genomelink family.

## Tools covered

- **DNAMatch** — overview of the DNA Match product family.
- **Network Graph** — content ported from `network-graph-prototype-2-0`.
- **Clusters** — content TBD.
- **DNA Painter** — content ported from `dna-painter-v2`.
- **Match Hub** — content ported from `genomelink-match-hub`.
- **1-on-1 tools** — eight tools from `genomelink-one-on-one`:
  cM Clarity · Match Case File · MRCA Finder · Triangulation Lens ·
  Side Assignment Inspector · WATO Workspace · Y / mtDNA Compare · Inferred Segments.

## Run locally

```bash
npm install
npm run dev
# Opens at http://localhost:3013
```

## How tools link here

Each tool's "How to" link in its chrome navigates to the hub via an env-driven base URL:

```ts
// In each consuming tool
export const SUPPORT_HUB_BASE =
  process.env.NEXT_PUBLIC_SUPPORT_HUB_URL ?? 'https://genomelink-support-hub.vercel.app';
```

Each tool's legacy `/help` route is 308-redirected via `next.config.js` to the corresponding
hub slug (e.g. `/mrca-finder/help` → `https://genomelink-support-hub.vercel.app/mrca-finder`).

## Deploy

```bash
npm run lint && npm run build
vercel --prod --yes
```

Deployed at https://genomelink-support-hub.vercel.app.

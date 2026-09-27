# Naitik Jain's portfolio

An interactive neural-network portfolio with five layers and 20 selectable nodes. Includes a mobile layout, list view, detail dialogs, resume download, publication link, and work history.

## Local development

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

## Checks

```sh
npm run typecheck
npm run lint
npm run build
```

## Updating content

Edit `app/portfolio-data.ts` for the network content and `app/page.tsx` for the introduction and work history. The original resume is stored in `CV/Naitik_Jain_Resume.pdf`; keep `public/CV/Naitik_Jain_Resume.pdf` in sync for downloads.

The connections are an illustrative navigation model, not learned weights or claims of dependencies between items. All career facts and external links come from the supplied resume.

## Deployment

This project uses Vinext, React, and the Sites Cloudflare build integration. Hosting metadata is in `.openai/hosting.json`. Social preview URLs in `app/layout.tsx` should be updated if the domain changes.

The `fflate` override pins the patched 0.7 series for the transitive Satori dependency. Revisit it when the upstream dependency updates.

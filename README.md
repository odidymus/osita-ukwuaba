# Osita Ukwuaba — Professional Website

A responsive research portfolio for Osita Ukwuaba, PhD student in Electrical
and Computer Engineering at Rochester Institute of Technology.

The site is a static Next.js export intended for GitHub and Cloudflare Pages.
It has no database, authentication layer, server-side API, or runtime secrets.

## Local development

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The deployable static site is generated in `out/`.

## Cloudflare Pages

1. Push this directory to a GitHub repository.
2. In Cloudflare, open **Workers & Pages**, create a Pages application, and
   import the repository.
3. Select **Next.js (Static HTML Export)**.
4. Use production branch `main`, build command `npm run build`, and output
   directory `out`.
5. After the first deployment, add `ositaukwuaba.com` under **Custom domains**.

See [CLOUDFLARE_HOSTING.md](./CLOUDFLARE_HOSTING.md) for the full checklist.

## Safe repository practices

Do not commit passwords, tokens, API keys, private datasets, unpublished
manuscripts, model checkpoints, or local `.env` files.

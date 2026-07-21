# Deploy ositaukwuaba.com with GitHub and Cloudflare Pages

## 1. Create the GitHub repository

Create a repository named `osita-ukwuaba`. Public is appropriate for this
portfolio source, provided you continue to keep secrets and private research
files out of it.

From this project directory:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/osita-ukwuaba.git
git push -u origin main
```

Before every push, review `git status` and never commit passwords, tokens,
API keys, private datasets, unpublished manuscripts, model checkpoints, or
`.env` files.

## 2. Connect GitHub to Cloudflare Pages

1. Sign in to Cloudflare and open **Workers & Pages**.
2. Select **Create application**, then **Pages**.
3. Select **Import an existing Git repository** and choose the repository.
4. Configure:
   - Production branch: `main`
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
5. Save and deploy.

Cloudflare will provide a temporary `*.pages.dev` address. Test the homepage,
CV page, publication link, email, LinkedIn, GitHub, sitemap, and mobile layout.

## 3. Connect the domain

1. Open the Pages project and select **Custom domains**.
2. Add `ositaukwuaba.com`.
3. Add `www.ositaukwuaba.com` and redirect it to the apex domain.
4. If Cloudflare is not already the DNS provider, follow the nameserver
   instructions shown in the dashboard.

Do not manually create a CNAME to the Pages address before associating the
custom domain through the Pages dashboard.

## 4. Final checks

- Confirm HTTPS works for both domain forms.
- Scan the QR code on the business card.
- Enable Cloudflare Web Analytics.
- Add `https://ositaukwuaba.com/sitemap.xml` to Google Search Console.

Official documentation:

- https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- https://developers.cloudflare.com/pages/configuration/custom-domains/

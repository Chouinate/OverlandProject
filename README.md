# Pack Mountain Overland

A static landing site for an overland / offroad media + gear brand.
Brand: **Pack Mountain Overland**.

## Stack

Plain HTML, CSS, and JS. No build step. Drop it on any static host.

- `index.html` — markup
- `styles.css` — design system (dark theme, trail-orange accent, topographic hero)
- `script.js` — nav, scroll reveal, form placeholders

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages (one-time setup)

A GitHub Actions workflow at `.github/workflows/pages.yml` auto-deploys this site
on every push to `main` or the active feature branch.

1. Push the repo to GitHub (already done).
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push (or click **Run workflow** in the Actions tab). The workflow will print
   the live URL — typically `https://<your-username>.github.io/<repo-name>/`.

To swap to a custom domain later: add a `CNAME` file with your domain, then
configure the domain in **Settings → Pages**.

### Other hosts (also work, no config needed)

- **Netlify / Vercel / Cloudflare Pages**: import the repo, no build command, publish directory `/`.

## Customizing the brand

The brand name appears in:

- `index.html` — `<title>`, `.brand-text`, footer, contact email
- `styles.css` — color tokens at the top of the file (`--accent`, `--moss`, `--sand`)

Search-and-replace `Pack Mountain Overland` to switch names later.

## Next steps when you're ready to sell

The `#shop` section is a placeholder. When you're ready:

1. Easiest: embed **Shopify Buy Buttons** or **Stripe Payment Links** directly into the page.
2. Next step up: stand up a **Shopify** or **Squarespace** storefront on `shop.yourdomain.com` and link to it.
3. Full custom: swap to **Next.js + Stripe** — keep the same design tokens.

## Roadmap ideas

- Replace gradient placeholders in `.media-thumb` / `.rig-art` with real photos.
- Hook the email signup to **Mailchimp**, **ConvertKit**, or **Buttondown**.
- Add a `/trips` page with GPX downloads.
- Add an Instagram / YouTube embed strip.

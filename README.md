# Trimatech Games homepage

![Trimatech Games](/public/og.png)

The public site for Trimatech Games: the Roblox games, the Studio plugins on the Creator Store, the studio's mission and contact details. English at trimatech.dev, Estonian at trimatech.ee.

## Tech stack

- **Framework**: [Next.js](https://nextjs.org/) with App Router
- **UI**: [Chakra UI v3](https://chakra-ui.com/)
- **i18n**: [next-intl](https://next-intl.dev/), strings in `messages/<locale>/page.json`
- **Deployment**: [Vercel](https://vercel.com/)

## Content

- Games and plugins are listed in `data/roblox.ts` (Roblox ids, versions, icon slugs). Taglines, intros and feature lists live in the message files.
- Every game has a page at `/games/<slug>` and every plugin at `/plugins/<slug>`. Slugs outside `data/roblox.ts` are a 404.
- Plugin docs live in `content/docs/<slug>.ts` as typed sections (English only) and render at `/plugins/<slug>/docs`. Add a plugin to `content/docs/index.ts` to give it a docs page and a Docs link on its card. A plugin with its own docs site (Click to Build) sets `docsLink` in `data/roblox.ts` instead and links out.
- Icons are checked in under `public/roblox/games` and `public/roblox/plugins`.
- Visit counts, player counts and the group member count come from the public Roblox API at request time (`lib/roblox-stats.ts`) and are cached for an hour. If Roblox is unreachable the numbers are hidden and the page still renders.

## Getting started

Node.js 18 or later and pnpm.

```bash
git clone https://github.com/MayGo/trimatech.git
cd trimatech
pnpm install
cp .env.local.example .env.local
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

The only environment variable is `NEXT_PUBLIC_SITE_URL`, used to build absolute URLs for Open Graph tags. On Vercel it falls back to `NEXT_PUBLIC_VERCEL_URL`, so production needs nothing set.

## Social sharing

`public/og.png` (1200 by 630 px) is the preview image for Twitter, Facebook, LinkedIn and Slack. Replace the file to change it; the meta tags in `app/[locale]/layout.tsx` already point at it.

## Deployment

Push to GitHub and import the repository on Vercel. `pnpm build` runs `next-sitemap` afterwards, which writes `sitemap.xml` and `robots.txt` into `public`.

## License

[MIT](LICENSE)

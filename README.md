# Vishvanath Naik — Portfolio website

Version 1 of a content-first professional portfolio for work across marketing, growth, operations, strategy, analytics and AI.

## Technology

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion for restrained reveal transitions
- Next.js font optimisation with IBM Plex Sans and IBM Plex Mono
- Vercel-ready deployment configuration

## Local development

Requirements: Node.js 20.9 or newer and pnpm 11.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Before publishing changes:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Project structure

```text
app/          App Router pages, global styles, metadata, sitemap and robots
components/   Reusable navigation, cards, headings, timelines and links
data/         Structured project, experience and contact content
public/       Static files such as the future resume.pdf
```

## Editing portfolio content

- Update project cards in `data/projects.ts`.
- Update experience placeholders in `data/experience.ts` only with verified titles, dates and achievements.
- Replace email, LinkedIn and GitHub placeholders in `data/site.ts`.
- Update the professional narrative in `app/about/page.tsx`.
- Update education and certification placeholders in `app/resume/page.tsx`.

## Adding a project

Add an object to the `projects` array in `data/projects.ts`. Use one primary `category`, one or more filter `tags`, a unique URL-safe `slug`, a concise problem statement and a short list of methods. Set `featured: true` to include it on the homepage.

When a full case study is ready, add a route at `app/projects/[slug]/page.tsx` and change the card link from the current anchored placeholder.

## Adding the résumé

Place the verified PDF at `public/resume.pdf`. The résumé page and production build work without this file; until it is added, the page clearly labels the download as a placeholder.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import `portfolio-website`.
3. Keep the detected Next.js settings and deploy. No environment variables are required.
4. In **Project Settings → Domains**, add `vishvanathnaik.com` and `www.vishvanathnaik.com`.
5. Make the root domain canonical and configure `www` to redirect to it.
6. Add only the DNS records Vercel displays for the project; verify them before changing Porkbun DNS.

Typical Vercel records are an `A` record for `@` pointing to `76.76.21.21` and a `CNAME` for `www` pointing to `cname.vercel-dns.com`, but Vercel may issue project-specific values. The dashboard values are authoritative.

## Content still needed

- Verified experience titles, dates, responsibilities and outcomes
- Education institution, degree details and dates
- Certifications
- Final email address, LinkedIn URL and GitHub URL
- Final résumé PDF
- Evidence and source material for each full case study
- Optional social preview image

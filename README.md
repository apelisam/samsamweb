# Nyota Vanguard portfolio

A resume + game showcase site, themed around operator consoles and
starfield HUDs — because you monitor networks by day and build space
games by night.

## Before you deploy — edit these

1. **`app/lib/data.ts`** — this is the only file with real content.
   Your resume content, Nyota Vanguard link, and freelance pitch are
   already filled in. Still update:
   - `githubUrl` and `linkedinUrl` (placeholders right now)
   - `project.status` as Nyota Vanguard progresses
2. **`public/resume.pdf`** — drop your actual resume PDF here.
3. **`public/avatar.jpg`** — drop a headshot here. If you skip this,
   the hero shows your initials in a circle instead — it degrades
   gracefully either way.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Vercel auto-detects Next.js — no config needed. Click deploy.
4. Every push to your main branch auto-redeploys.

## Structure

- `app/lib/data.ts` — all editable content (resume, links, project info)
- `app/components/` — page sections (Hero, Deployments, GameShowcase, Skills, Contact)
- `app/globals.css` — color and font tokens, change these to restyle
  the whole site at once

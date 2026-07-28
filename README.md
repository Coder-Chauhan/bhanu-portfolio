# Bhanu PS Chauhan — Portfolio

A responsive personal portfolio built with **React 18 + Vite 6 + Tailwind CSS 4**.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

If you just want to look at it, open `dist/index.html` in a browser — the build is
configured with a relative base path so it works straight off the filesystem.

## What's inside

| Section | Notes |
|---|---|
| Hero | Animated gradient headline, stat strip, social + resume CTAs |
| About | Summary, education card, location/experience cards |
| Skills | Five grouped skill categories with hover cards |
| Experience | Vertical timeline with role highlights and tech tags |
| Projects | LiveWell and the Forecasting Pipeline as feature cards |
| Contact | Validated form that opens the visitor's mail client, plus direct details |

Features: light/dark mode (follows system preference on first load), sticky glass
nav with active-section highlighting, mobile drawer menu, scroll-reveal animations,
keyboard-accessible skip link, `prefers-reduced-motion` support, and SEO/OG meta tags.

## Editing content

Everything textual lives in **`src/data.js`** — name, summary, stats, skills,
jobs, projects, education, nav links. You shouldn't need to touch the components
to update your details.

**Before publishing, update these two placeholders in `src/data.js`:**

```js
linkedin: 'https://www.linkedin.com/in/bhanu-ps-chauhan',  // ← your real URL
github:   'https://github.com/bhanupsc',                   // ← your real URL
```

The resume PDF is served from `public/resume.pdf`. Replace that file to update
the download link.

## Contact form

The form validates client-side and then hands off to `mailto:`. To receive
submissions without relying on the visitor's mail client, swap the handoff in
`src/components/Contact.jsx` for a form backend:

```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

## Deploying

- **Vercel / Netlify** — connect the repo; build command `npm run build`, output directory `dist`.
- **GitHub Pages** — push `dist/` to a `gh-pages` branch (the relative base path already supports subdirectory hosting).

## Project structure

```
src/
  data.js              all site content
  App.jsx
  index.css            Tailwind + custom animations
  components/          Nav, Hero, About, Skills, Experience, Projects, Contact, Footer, Section
  hooks/               useTheme, useScrollSpy, useReveal
public/resume.pdf
```

---

## Three ways to run it

**1. Just look at it — no install**
Open `standalone/index.html` (double-click). Everything is inlined into that one
file, so it works straight off the filesystem.

**2. Develop it** — requires Node.js 18+ ([nodejs.org](https://nodejs.org))
```bash
cd bhanu-portfolio
npm install
npm run dev        # http://localhost:5173, hot reload
```

**3. Serve the production build**
```bash
npm run build      # → dist/
npm run preview    # http://localhost:4173
```

Note: `dist/index.html` uses ES modules, which browsers block over `file://`.
Serve it (option 3) or deploy it — don't double-click it. Use `standalone/` for
that instead.

Rebuild the standalone file after editing:
```bash
npm run build:standalone
```

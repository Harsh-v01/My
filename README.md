# Harsh Kumar — Portfolio

A minimal, premium software engineer portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Design
- **Theme**: Warm beige / editorial / cinematic
- **Fonts**: Cormorant Garamond (display) + DM Sans (body) + DM Mono
- **Style**: Apple/Linear/Vercel-inspired — clean, generous spacing, subtle interactions

## Tech Stack
- **Next.js 14** — Pages Router
- **Tailwind CSS** — custom design tokens
- **Framer Motion** — scroll-triggered animations, entrance transitions

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## Customization

### Personal Info
Update your real details in these files:
- `components/Hero.js` — name, tagline, stats
- `components/About.js` — bio text, availability
- `components/Projects.js` — project details, GitHub URLs, live URLs
- `components/Skills.js` — add/remove skills
- `components/Journey.js` — timeline milestones
- `components/Experiments.js` — current explorations
- `components/Contact.js` — email, LinkedIn, GitHub URLs
- `components/Navbar.js` — "Say hello" email link

### Colors
All colors are in `styles/globals.css` under `:root`. Key ones:
```css
--accent:       #8b6f47;   /* warm brown */
--accent-light: #c9a55a;   /* gold accent */
--bg-primary:   #faf7f2;   /* warm white */
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy
Optimized for **Vercel** — just push to GitHub and import the repo.

---

Designed & built by Harsh Kumar

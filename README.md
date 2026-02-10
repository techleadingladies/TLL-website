# Tech Leading Ladies — Website

The Tech Leading Ladies community website. Built with React + Vite + TypeScript and styled using Tailwind CSS. 
Deployed to Netlify (see `netlify.toml`).

**Project purpose:** provide event, program, and community information for Tech Leading Ladies — meetup pages, speaker form, mentoring program, and contact details.

**Quick Links**
- **Local dev:** `yarn dev`
- **Build:** `yarn build` (runs `tsc` then `vite build`)
- **Preview production build:** `yarn preview`

## Prerequisites
- Node 16+ (tested on Node 18+)
- Yarn (project `packageManager` references Yarn v1)

## Getting started
1. Install dependencies

```bash
yarn install
```

2. Run the dev server

```bash
yarn dev
```

3. Build for production

```bash
yarn build
```

4. Preview the production build locally

```bash
yarn preview
```

## Project structure (high level)
- `index.html` — app entry HTML
- `src/main.tsx` — React entry
- `src/App.tsx` — Router + top-level layout
- `src/index.css` — Tailwind + base styles
- `src/components/` — shared components (Header, Footer, Navigation)
- `src/pages/` — route pages (About, Meetup, Sponsors, etc.)
- `tailwind.config.js`, `postcss.config.js` — Tailwind config
- `vite.config.ts` — Vite config

To add a new page:
1. Create a component in `src/pages/`
2. Add a `Route` in `src/App.tsx` pointing to the new component

## Development notes
- Tailwind content paths are already set to `./index.html` and `./src/**/*.{js,ts,jsx,tsx}` for purge/tree-shaking.
- Google font `Nunito` is imported in `src/index.css`.
- Client routing uses `react-router-dom` in `src/App.tsx`. The `ScrollHandler` resets scroll on navigation.

## Deployment
- `netlify.toml` — configuration for Netlify deploys.
- Local Build command: `yarn build`. Publish directory: `dist` (Vite default).

## Contributing
- Fork or branch and open a PR. Keep changes focused and add short descriptions.

## Contact
- Maintainers: Tech Leading Ladies community

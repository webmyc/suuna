# Claude Code Prompt for SUUNA (Respira Project)

## Project Technology Stack

- Framework: Astro 4.x (Static output)
- Language: TypeScript
- Styling: Tailwind CSS
- UI Islands: React via `@astrojs/react` when needed
- Package Manager: pnpm (lockfile: `pnpm-lock.yaml`)
- Deployment: Vercel

## Critical Technology Constraints

### 1) Framework is Astro (not Next.js)
- Use `.astro` components and Astro page routing in `src/pages/`.
- Prefer Astro components and server-side rendering at build time.
- Use React only as islands where interactive UI is required, imported via `@astrojs/react`.
- Do NOT introduce Next.js files or patterns (no `app/`, no `pages/` with Next.js conventions, no `next.config.js`).

### 2) Package Management is pnpm
- Install packages with `pnpm install` (never `npm`/`yarn`).
- Run scripts with `pnpm <script>`.
- Keep using `pnpm-lock.yaml`.

### 3) Build & Output
- Build command: `pnpm build`.
- Output directory: `dist`.
- `astro.config.mjs` uses `output: 'static'` and `site: 'https://suuna.ro'`.
- Vercel must expect `dist` as the output directory.

### 4) Project Structure
```
sites/suuna/
├── astro.config.mjs
├── public/               # static assets
├── src/
│   ├── components/
│   │   ├── layout/       # Base.astro, Header.astro, Footer.astro
│   │   ├── sections/     # Home/Facilitators sections
│   │   └── ui/           # Reusable UI
│   ├── pages/            # Astro pages (e.g. index.astro, facilitators.astro)
│   ├── styles/           # CSS files
│   └── utils/            # Utilities (e.g. Substack helpers)
├── tailwind.config.cjs
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
└── vercel.json (if present): framework astro, output dist, pnpm commands
```

### 5) Component Patterns
- Author pages and sections as `.astro` files.
- For interactivity, create small React islands and import with `@astrojs/react`.
- Keep components presentational and data-fetching in page-level loaders where appropriate.
- Use TypeScript types for props and utilities.

### 6) Styling Guidelines
- Use Tailwind CSS utility classes.
- Follow existing theme tokens in `src/styles/`.
- Keep class lists readable; group responsive and state modifiers consistently.

### 7) Data & Integrations
- Substack feeds: use existing utilities in `src/utils/substack.ts` (or equivalent) and cache where available.
- Assets go under `public/` and are referenced with `/...` URLs in `.astro`.
- Do not add Next.js API routes. If server logic is needed, use Astro endpoints or prerendered data at build time.

### 8) Vercel Deployment
- Ensure build works locally with `pnpm build` → outputs to `dist/`.
- Vercel configuration must point to `dist` and framework `astro`.
- No `.next` directories or Next.js-specific settings.

## What NOT to Do

- Do NOT add or suggest: Next.js files (`next.config.js`, `app/`, `.next/`).
- Do NOT change package manager to npm or yarn.
- Do NOT propose Astro-incompatible patterns (e.g., Next.js routing/hooks).
- Do NOT output directory changes away from `dist`.

## What TO Do

- Use `.astro` pages and components for layout and content.
- Use React islands sparingly for interactivity.
- Use Tailwind classes and existing styles.
- Keep TypeScript strict and explicit in utilities and props.
- Respect current file organization and naming conventions.

## Correct Commands

```bash
# Install and run
pnpm install
pnpm dev

# Build and preview
pnpm build
pnpm preview
```

## Context

SUUNA is a site within the Respira monorepo, built with Astro. It showcases:
- Community magazine layout and Substack feeds
- Facilitator directory and related assets
- Events and community features

Maintain the Astro-first architecture. Any page or component work (like updates to `src/components/sections/FacilitatorsTeaser.astro`) must:
- Stay within `.astro` conventions
- Use Tailwind for styling
- Introduce React only where necessary as isolated islands

---

Remember: This codebase is Astro-based under the Respira project. All changes must align with Astro, Tailwind, React islands, pnpm, and Vercel with `dist` output.

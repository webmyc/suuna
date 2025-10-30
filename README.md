# SUUNA.ro Website

A community magazine and platform portal for SUUNA - showcasing wisdom creators, facilitators, and intentional communities.

## Features

- **Magazine Layout**: Dynamic Substack feeds from community creators
- **Facilitator Directory**: Profiles of SUUNA community facilitators
- **Events Calendar**: Luma integration for community events
- **Platform Integration**: Direct access to SUUNA.org
- **Custom Design**: Forest-themed design with SUUNA branding

## Tech Stack

- **Framework**: Astro 4.x
- **Styling**: TailwindCSS + custom theme
- **Animations**: Intersection Observer + CSS animations
- **Fonts**: PT Serif (headings), Inter (body), Architype Bayer-type W90 (SUUNA logo)
- **Deployment**: Vercel

## Local Development

```bash
cd sites/suuna
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Project Structure

```
sites/suuna/
├── src/
│   ├── components/
│   │   ├── layout/          # Base, Header, Footer
│   │   ├── sections/        # Home page sections
│   │   └── ui/              # Reusable components
│   ├── content/
│   │   └── facilitators/    # MDX facilitator profiles
│   ├── pages/               # Astro pages
│   ├── styles/              # CSS files
│   └── utils/               # Utility functions
```

## Content Management

### Adding Facilitators

1. Create new MDX file in `src/content/facilitators/`
2. Include frontmatter with name, role, location, bio, links
3. Add profile image to `public/facilitators/`

### Updating Substack Feeds

The site automatically fetches from:
- suuna.substack.com
- danadragomirescu.substack.com
- melissalouise.substack.com
- lauramariayara.substack.com
- reflectorsreflections.substack.com

## Deployment

- **Repository**: `suuna-site`
- **Platform**: Vercel
- **Domain**: suuna.ro
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`

## Environment Variables

No environment variables required for basic functionality.

## Performance Goals

- Lighthouse Score: 95+
- LCP: < 2.2s
- CLS: < 0.01
- SEO optimized with proper meta tags and JSON-LD schema

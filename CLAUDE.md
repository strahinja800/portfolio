# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start Commands

```bash
npm run dev              # Start dev server with hot reload (http://localhost:3000)
npm run devsafe         # Clean .next cache and restart dev server
npm run build           # Production build
npm run lint            # Run ESLint
npm run test:e2e        # Playwright end-to-end tests

# Payload CMS specific
npm run generate:types  # Generate TypeScript types from Payload config
npm run payload         # Access Payload CLI
```

**Admin Panel:** After `npm run dev`, access Payload admin at `/admin`

## Project Architecture

**Stack:** Next.js 16 (App Router) + React 19 + TypeScript 5.7 + Payload CMS 3 + MongoDB + Tailwind CSS v4

### Directory Structure

```
src/
├── app/(app)/                  # Public portfolio (routes, pages, components)
│   ├── components/             # Section components (Hero, Work, About, Contact)
│   ├── components/shared/      # Shared UI (NavBar, Footer, etc.)
│   ├── globals.css             # Global styles + Tailwind theme tokens (OKLch colors)
│   └── page.tsx               # Main entry point with scroll reveal animations
├── app/(payload)/              # Payload admin panel & API routes (auto-generated)
│   ├── api/[...slug]/         # REST API endpoint
│   ├── api/graphql/           # GraphQL endpoint
│   └── layout.tsx             # Payload admin layout
├── collections/                # Payload CMS collection definitions
│   ├── Users.ts               # Auth-enabled users collection
│   └── Media.ts               # Image/file uploads
├── hooks/                      # React hooks (nav-bar-links.ts)
├── constants/                  # Shared constants & metadata
└── payload.config.ts           # Payload CMS config (collections, db, editor)
```

### How It Works

1. **Frontend** (`(app)` routes): Portfolio pages built with React components, styled with Tailwind + custom CSS variables (dark theme, OKLch colors)
2. **Backend** (`(payload)` routes): Payload admin panel & REST/GraphQL APIs for content (auto-generated routes, do NOT edit)
3. **Database**: MongoDB stores Users and Media collections defined in `src/collections/`
4. **Types**: Run `npm run generate:types` after modifying Payload config to get fresh TypeScript types in `payload-types.ts`

## Key Patterns

### Styling System

- **Framework:** Tailwind CSS v4 with custom theme tokens
- **Color System:** OKLch colors for perceptual uniformity (defined in `globals.css`)
- **Design Tokens:** CSS variables (`--bg`, `--accent`, `--text`, `--gutter`, `--maxw`, etc.)
- **Component Styling:** Tailwind utilities + inline className strings (no external CSS files for components)
- **Responsive:** Uses `clamp()` for fluid spacing/sizing (e.g., `--gutter: clamp(20px, 5vw, 72px)`)

### Component Structure

- Components live in `src/app/(app)/components/`
- Main sections exported as defaults (e.g., `export default function Hero() {}`)
- Use TypeScript for type safety throughout
- Example: `Hero`, `Work`, `About`, `Contact` sections + `NavBar`, `Footer` shared components

### Scroll Reveal Animation

- Main page (`page.tsx`) uses IntersectionObserver + RequestAnimationFrame
- Elements with class `reveal` fade in as they scroll into view
- Fallback timer ensures animation completes after 1s regardless
- Uses `.in` class to trigger CSS animation (defined in globals.css)

## Payload CMS Guide

**Reference:** See `.claude/skills/payload/SKILL.md` for quick ref; `reference/` for detailed docs.

### Adding a Collection

1. Create file in `src/collections/YourCollection.ts`
2. Export a `CollectionConfig` object
3. Add to `collections: [...]` array in `payload.config.ts`
4. Run `npm run generate:types` to sync TypeScript types

### Generated Files

- `src/app/(payload)/layout.tsx` — **Do NOT edit** (Payload overwrites it)
- `src/app/(payload)/api/[...slug]/route.ts` — **Do NOT edit** (auto-generated REST)
- `src/app/(payload)/api/graphql/route.ts` — **Do NOT edit** (auto-generated GraphQL)
- `src/app/(payload)/admin/importMap.js` — **Do NOT edit** (auto-generated admin UI map)

### Collections in This Project

- **Users**: Auth-enabled collection (login for admin panel)
- **Media**: File uploads with alt text field; publicly readable

## Environment Setup

`.env` must contain:

```
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/db
PAYLOAD_SECRET=<any-random-string>
```

## TypeScript & Build

- TypeScript config: `tsconfig.json` has paths (`@/*` → `./src/*`, `@payload-config` → `./src/payload.config.ts`)
- Strict mode enabled (`strict: true`)
- Run `tsc --noEmit` before changes to catch type errors
- Next.js webpack config handles `.ts` → `.tsx` resolution via `extensionAlias`

## Development Workflow

**Making Changes:**

1. Edit components in `src/app/(app)/components/`
2. Update styles in globals.css (CSS variables + Tailwind utilities)
3. For Payload: modify `src/collections/` files and `payload.config.ts`, then `npm run generate:types`
4. Dev server hot-reloads automatically; use `npm run devsafe` if stuck

**Before Committing:**

- Run `npm run lint` to check code style
- Run `tsc --noEmit` to verify no type errors
- Test responsive design and animations in browser

## Notes

- **Color Theme:** Dark mode enforced (`color-scheme: dark`); all colors use OKLch color space for consistency
- **Fonts:** Hanken Grotesk (display/body) + JetBrains Mono (monospace) loaded from Google Fonts
- **Max Width Container:** `--maxw: 1180px` with responsive gutters
- **Image Optimization:** Next.js Image component with MongoDB file URLs (`/api/media/file/**`)

# Base44 Dev Environment

## Project Overview
PROMPTX — a React 19 + Vite 6 + Tailwind CSS 4 single-page landing page (Spanish). No backend, no API calls at runtime (Gemini API key is defined in vite config but unused by the landing page).

## Setup
- Runtime: Node 22 (via `node:22-slim` in `docker-compose.base44.yml`)
- Dev server: `npx vite --host 0.0.0.0 --port 3000` (live reload enabled)
- Dependencies installed on container startup via `npm install` (lockfile preserved)
- `node_modules` is an anonymous volume (not bind-mounted) to avoid host conflicts

## Healthcheck
- Uses `node -e fetch(...)` since `node:22-slim` has no wget/curl
- Checks that the served HTML contains `id="root"`

## Verification
- `docker compose -f docker-compose.base44.yml ps` → container should be `healthy`
- `curl -s http://localhost:3000/` → returns HTML with `<div id="root">`
- Preview: full landing page renders with all sections (hero, stats, modules, pricing, FAQ, footer)

## Known Non-Issues
- Wikipedia SVG logos (Visa, Mastercard, PayPal) may fail to load in the preview sandbox — external resource, not a build error
- MetaMask console errors come from a browser extension, not the app

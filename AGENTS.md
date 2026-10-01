# Base44 Dev Environment

## Project Overview
PROMPTX — a Vite + React 19 + TypeScript single-page landing page for a digital product (2000+ AI prompts). Pure frontend, no backend or database.

## Running the App
```bash
docker compose -f docker-compose.base44.yml up -d
```
- Web entry point: http://localhost:3000
- Vite dev server with live reload (bind-mounted source at `/app`)
- Dependencies installed on container startup via `npm install`

## Key Details
- Node 22 base image; deps from `package-lock.json`
- Vite 6.x — `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` passed as bare env var for host allowlist
- `vite.config.ts` injects `GEMINI_API_KEY` into `process.env.API_KEY` / `process.env.GEMINI_API_KEY` via `define`, but the app code does not reference these at runtime — the landing page works without it
- Tailwind CSS 4 via `@tailwindcss/vite` plugin
- Path alias `@` → repo root (configured in both `vite.config.ts` and `tsconfig.json`)

## Verification
- `docker compose ps` shows the `web` service as healthy
- `curl http://localhost:3000/` returns the HTML with `/@vite/client` (dev server, not prebuilt)

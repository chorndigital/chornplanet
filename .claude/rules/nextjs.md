---
paths:
  - "src/**/*.tsx"
  - "src/**/*.ts"
  - "next.config.mjs"
---

# Next.js Rules

## Middleware / Proxy
- This project uses `src/proxy.ts` instead of `src/middleware.ts` — this is a Next.js 16 convention.
- The `proxy` function must be a named export; `config` (matcher) must also be exported.
- Do NOT create or restore `middleware.ts` — it will conflict with `proxy.ts`.

## Image Component
- Always use `import Image from "next/image"` — never use raw `<img>` tags.
- Always include `style={{ height: 'auto' }}` when the image width is controlled by CSS or a fixed `width` prop, because the global CSS `img { max-width: 100%; height: auto; }` modifies image dimensions.
- Images served from `/images/*` are redirected to `https://cdn.chornplanet.com/images/*` via `next.config.mjs` — do not hardcode CDN URLs in components; use `/images/...` paths.
- `images.unoptimized: true` is set globally — do not add `unoptimized` per-image.
- External images allowed: `cdn.chornplanet.com`, `scdn.line-apps.com`.

## Layout
- The root layout is `src/app/[locale]/(desktop)/layout.tsx`.
- The `<html>` element must have `data-scroll-behavior="smooth"` to suppress the Next.js scroll-behavior warning (CSS sets `scroll-behavior: smooth` on `html, body`).
- Locale and cookie consent are injected via custom headers from `proxy.ts`: `x-locale`, `x-cookie-consent`, `x-pathname`.
- Read headers with `const headers15 = await headers()` (Next.js 15+ async headers API).

## Routing
- All main pages live under `src/app/[locale]/(desktop)/`.
- Locale is a path segment: `en`, `th`, `fr`, `ja`, `zh`, `de`, `nl`, `da`, `fi`, `ko`.
- The proxy redirects `/` to `/en` by default.
- `trailingSlash: true` is set — all links must end with `/`.

## Data Fetching
- Pages are async server components — use `await headers()` to get locale/consent.
- No client-side data fetching libraries; use server components + MongoDB via `src/lib/model/`.

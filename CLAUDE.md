# chorndigital — Project Context

## Stack
- **Framework**: Next.js 16.2.2 (Turbopack), TypeScript 5, React 18
- **Styling**: SCSS (Bootstrap 5, custom SCSS in `src/styles/`)
- **State**: Redux Toolkit + React Redux
- **Database**: MongoDB (`src/lib/model/`)
- **AI**: OpenAI SDK
- **Storage**: AWS SDK
- **CDN**: `https://cdn.chornplanet.com`

## Locales (10 supported)
`da`, `de`, `en`, `fi`, `fr`, `ja`, `ko`, `nl`, `th`, `zh`
- Default: `en`
- Defined in `src/lib/SiteUrlLocales.ts`
- Translation data aggregated in `src/data/info/main/InfoTranslation.ts`

## Key Conventions

### Middleware
- Uses `src/proxy.ts` — **not** `middleware.ts` (Next.js 16 convention)
- Do NOT create `src/middleware.ts` — it conflicts with `proxy.ts`
- Headers injected by proxy: `x-locale`, `x-cookie-consent`, `x-pathname`

### Reading headers in pages
```ts
const headers15 = await headers();
const lang = headers15.get('x-locale') || 'en';
```

### Images
- Always use `import Image from "next/image"`
- Always add `style={{ height: 'auto' }}` — global CSS `img { height: auto }` triggers Next.js warning without it
- Use `/images/...` paths — they redirect to CDN automatically via `next.config.mjs`
- `images.unoptimized: true` is set globally — do not add per-image

### Routing
- All pages: `src/app/[locale]/(desktop)/`
- `trailingSlash: true` — all `<Link href>` values must end with `/`
- Locale is a path segment, not a query param

### Layout
- Root layout: `src/app/[locale]/(desktop)/layout.tsx`
- `<html>` must have `data-scroll-behavior="smooth"` (CSS sets scroll-behavior on html)

### Styling
- Global image rule in `src/styles/style.scss`: `img { max-width: 100%; height: auto; }`
- When writing `a.xxx img { width: Npx; }`, always add `height: auto` in the same block
- Custom utility classes prefixed with `add-`, navbar variants prefixed with `x-`

### i18n Data Pattern
- Feature data: `src/data/<feature>/<FeatureLOCALE>.ts` (e.g. `AiFahEN.ts`)
- Register every locale in `InfoTranslation.ts`
- Components receive `lang: string` prop and index into `InfoTranslation[lang]`
- Never hardcode English strings in components

### Metadata
- Each page has `src/metadata/main/Metadata<Name>.ts` — keyed by all 10 locales
- Pages export `generateMetadata()` async function

### Schema Markup
- All public pages include `<SchemaMarkupServicePage>` from `@/components/GoogleSchemaMarkup/`

## Project Structure
```
src/
├── app/[locale]/(desktop)/   # All main pages
├── components/               # Feature-organised React components
├── data/                     # i18n translation data (per locale per feature)
├── image/                    # ImageUrl.ts — centralised image path registry
├── lib/                      # Utilities, CDN, locales, DB models
├── metadata/                 # SEO metadata per page per locale
├── provider/                 # AppProvider, Redux, hooks
├── proxy.ts                  # Next.js 16 middleware replacement
└── styles/                   # All SCSS files
```

## Available Agents (use via Agent tool)
- `explorer` — trace features through the codebase
- `i18n-checker` — audit locale completeness for a feature
- `page-auditor` — pre-ship checklist for a page

## Available Skills (invoke with /skill-name)
- `/add-locale-content` — scaffold all 10 locale files for new content
- `/new-page` — create page + metadata + schema markup
- `/new-component` — scaffold component with correct conventions
- `/pre-deploy` — full checklist before production build
- `/plan` — outline a step-by-step plan before making changes

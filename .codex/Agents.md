# Agents Guide

This file is the working brief for Codex agents in the `chornplanet` project. Treat it as the first project-specific context to read before editing code.

## Project Snapshot

- Product: Chorn Planet marketing/content site with localized pages for technical expertise, AI companions, smart city, and smart mobility content.
- Framework: Next.js 16 app router, React 18, TypeScript 5.
- Styling: SCSS and imported vendor CSS. Tailwind exists, but existing pages mostly use SCSS classes.
- State: Redux Toolkit through `src/provider/`.
- Server/data integrations: MongoDB, OpenAI SDK, AWS SDK, Vercel Speed Insights.
- CDN: public image paths redirect to `https://cdn.chornplanet.com` through `next.config.mjs`.

## Commands

- Install dependencies with the package manager already represented by the lockfiles in the workspace. `package.json` declares Yarn 4, while `package-lock.json` is present too; do not churn lockfiles unless the task requires dependency changes.
- Run dev server: `npm run dev` or `yarn dev`.
- Production build: `npm run build` or `yarn build`.
- Serve static output: `npm run start` runs `npx serve@latest out`.
- Lint: `npm run lint` or `yarn lint`.

When a change is narrow, run the smallest relevant check first. For page, metadata, routing, or i18n changes, prefer at least `npm run lint`; use `npm run build` before production-sensitive changes.

## Repository Map

- `src/app/[locale]/(desktop)/` contains the main localized website routes.
- `src/app/[locale]/(clean)/` contains lighter localized routes such as the WhatsApp contact flow.
- `src/app/(food)/` is a separate food route group with its own layout/styles.
- `src/app/api/` contains API routes, including OpenAI-related endpoints.
- `src/proxy.ts` is the Next.js 16 middleware replacement.
- `src/components/` holds feature-organized React components.
- `src/data/` holds localized content and typed feature data.
- `src/metadata/` holds SEO metadata records.
- `src/image/ImageUrl.ts` is the central image path registry for many public pages.
- `src/lib/UrlMaps.ts` feeds sitemap entries for public routes.
- `src/styles/` holds global and feature SCSS imported by the desktop layout.
- `server/` holds service, repository, auth, database, OpenAI, and utility code.
- `.claude/` contains earlier project rules, agents, and skills. Use it as reference material when a task overlaps with those workflows.

## Routing Rules

- Locales are path segments, not query params.
- Supported locales are defined in `src/lib/SiteUrlLocales.ts`: `da`, `de`, `en`, `fi`, `fr`, `ja`, `ko`, `nl`, `th`, `zh`.
- Default locale is `en`.
- `trailingSlash: true` is set in `next.config.mjs`; all new internal links should end with `/`.
- The proxy redirects `/` and unknown locale paths to `/en...`.
- Do not create `src/middleware.ts`. This project uses `src/proxy.ts`; adding middleware would conflict with the current Next.js 16 setup.
- If adding a public static route, check whether it belongs in `src/lib/UrlMaps.ts`, dynamic sitemap logic in `src/app/sitemap.ts`, and/or redirects in `next.config.mjs`.

## Reading Request Context

Pages and layouts read locale/cookie state from headers set by `src/proxy.ts`.

```ts
const headers15 = await headers();
const lang = headers15.get('x-locale') || 'en';
```

Headers currently set by proxy:

- `x-locale`
- `x-cookie-consent`
- `x-pathname`

Use async `headers()` from `next/headers`; do not use older synchronous patterns.

## i18n Contract

- Every user-facing content addition should support all 10 locales.
- Feature data usually lives in `src/data/<feature>/` as one file per locale, for example `FeatureEN.ts`, `FeatureTH.ts`, and so on.
- Components should receive `lang: string` and read translated data from the relevant locale map or feature data object.
- Do not hardcode English copy in shared components unless the component is intentionally non-localized.
- Metadata must also be present for all 10 locales.
- When adding or renaming a locale, update `src/lib/SiteUrlLocales.ts`, `src/proxy.ts` matchers, metadata maps, content maps, and sitemap behavior together.

## Metadata And SEO

- Main metadata aggregators live in `src/metadata/main/Metadata<Name>.ts`.
- Locale-specific metadata lives under `src/metadata/pages/...` or feature-specific metadata folders.
- Pages commonly implement:

```ts
export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataName[lang];
}
```

- Public service-style pages commonly include `SchemaMarkupServicePage` from `src/components/GoogleSchemaMarkup/`.
- `src/app/robots.ts` and `src/app/sitemap.ts` are source-controlled Next metadata routes; update them when SEO behavior changes.

## Images

- Use `next/image` for React-rendered images. Avoid raw `<img>` unless there is a strong compatibility reason.
- Keep image paths as local public paths such as `/images/...`; `next.config.mjs` handles CDN redirects.
- `images.unoptimized: true` is already set globally; do not add per-image `unoptimized`.
- Because global CSS sets `img { max-width: 100%; height: auto; }`, add `style={{ height: 'auto' }}` on `Image` components when width is controlled by props or CSS.
- When SCSS sets an explicit image width, include `height: auto` in the same image rule.
- Allowed remote image hosts are configured in `next.config.mjs`.

## Styling

- Global styles are imported in `src/app/[locale]/(desktop)/layout.tsx`.
- Main SCSS files include `globals.scss`, `style.scss`, `responsive.scss`, `addition.scss`, navbar `x-*` files, smart-city/smart-mobility feature files, and `footer.scss`.
- Prefer existing SCSS patterns over new styling systems.
- Avoid adding Tailwind utility-heavy markup to files that already follow SCSS component classes.
- Use `add-` prefixes for custom utility classes and `x-` prefixes for navbar variants, following existing conventions.
- The desktop root `<html>` must keep `data-scroll-behavior="smooth"`.

## Page Creation Checklist

For a new localized public page:

1. Add `page.tsx` under `src/app/[locale]/(desktop)/<route>/`.
2. Read `lang` from `await headers()`.
3. Add or reuse typed feature data under `src/data/`.
4. Add metadata for all 10 locales under `src/metadata/`.
5. Include schema markup when the page is public/service-like.
6. Add images to `src/image/ImageUrl.ts` when the route participates in existing image registries.
7. Add the route to `src/lib/UrlMaps.ts` or the dynamic sitemap source if it should be indexed.
8. Ensure all internal links include trailing slashes.
9. Run lint/build checks appropriate to the scope.

## Server And API Notes

- API routes live under `src/app/api/`.
- Server-side domain/service/repository layers live under `server/`.
- Path alias `@/*` can resolve into `src/*`, `backend/*`, and `server/*` per `tsconfig.json`.
- Keep secrets in environment variables. Do not commit `.env` files or new credentials.
- OpenAI route/provider code exists in both `src/app/api/openai/...` and `server/adapters/outbound/openai/...`; inspect both before changing AI behavior.

## Working Practice

- Read nearby files before editing. This project has repeated patterns; copying the closest working example is usually safer than inventing a new shape.
- Keep diffs scoped. Do not reformat large generated-looking locale or metadata files unless the task requires it.
- Preserve user changes in a dirty worktree. Check `git status --short` before and after meaningful edits.
- Always create a new task branch from the latest `main` before making changes. Use a clear prefix such as `fix/...`, `feature/...`, or `docs/...`; do not work directly on long-lived or previously completed task branches.
- Prefer `rg` for searching.
- Use `apply_patch` for manual edits.
- For broad locale work, audit all 10 locales and compare keys against English.
- For route work, test at least one localized URL such as `/en/.../` and consider whether sitemap/redirects need updates.

## Branch And Ship Flow

Use this flow when preparing a fix, feature, docs update, or other task for production:

1. Start from `main` and create a new task branch, for example `fix/contact-csp-map-embed`, `feature/<name>`, or `docs/<name>`.
2. Implement the change on that branch and preserve any intended `.codex/` updates on the same branch.
3. Verify the task branch with the smallest relevant checks, and run `npm run build` before merging production-facing changes.
4. Switch back to `main`.
5. Pull the latest main: `git pull origin main`.
6. Merge the task branch into `main`.
7. Run `npm run build` again on `main`.
8. Push `main` to both remotes when the build passes: `git push origin main` and `git push origin korapak`.
9. After shipping, return to step 1 for any new work. Always branch fresh from `main`.

## Deployment And Automation

- The site is deployed through the GitHub-to-Vercel integration. Vercel should automatically build and deploy from repository pushes according to the linked project settings.
- `vercel.json` is present for Vercel-specific headers. Keep deployment-related behavior there or in Next config unless a separate workflow is clearly needed.
- There is currently no repo-root GitHub Actions workflow. Do not add one just to duplicate Vercel builds.
- Add a GitHub workflow only when it provides a distinct value Vercel does not already cover, such as required PR checks, scheduled audits, non-Vercel tests, or multi-environment automation.

## Pre-Ship Checks

Use the smallest useful set, then expand if the blast radius is larger:

- `npm run lint`
- `npm run build`
- Manual dev check with `npm run dev` for pages with visual, routing, image, or schema changes.
- Inspect `git diff --check` if whitespace or generated content changed.
- For new pages, verify `/sitemap.xml` behavior after the dev/build check when practical.


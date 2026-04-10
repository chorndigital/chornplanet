---
name: pre-deploy
description: Run the pre-deploy checklist before pushing or building for production.
---

# Pre-Deploy Checklist

Run this before every production build or push.

## Steps

1. **Build check**
   ```bash
   npm run build
   ```
   Fix any TypeScript errors or build failures before continuing.

2. **Check for console warnings in dev** — run `npm run dev` and browse key pages:
   - `/en/` (home)
   - `/en/ai-companions/fah/`
   - `/en/about-chorn/`
   - `/en/smart-city/`
   Look for `[browser]` warnings about images, scroll-behavior, or missing props.

3. **Image audit** — grep for any `<Image>` components missing `style={{ height: 'auto' }}`:
   ```bash
   grep -rn "width={" src/components --include="*.tsx" -l
   ```
   Check those files to confirm `style={{ height: 'auto' }}` is present.

4. **Locale completeness** — for any newly added content, run the `i18n-checker` agent to verify all 10 locales are present.

5. **Trailing slashes** — verify all new `<Link href>` values end with `/` (trailingSlash is enabled).

6. **Environment variables** — confirm `.env.production` has all required keys (MongoDB URI, OpenAI key, AWS credentials).

7. **Sitemap** — if new pages were added, verify they appear in `/sitemap.xml`.

8. **Git status** — confirm no unintended files are staged:
   ```bash
   git status
   git diff --staged
   ```

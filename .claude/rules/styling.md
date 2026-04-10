---
paths:
  - "src/styles/**/*.scss"
  - "src/styles/**/*.css"
  - "src/components/**/*.tsx"
---

# Styling Rules

## SCSS Architecture
- Global styles live in `src/styles/` and are imported in the desktop layout.
- `globals.scss` — base html/body and `.main-container` layout (scroll, overflow, viewport sizing).
- `style.scss` — main component styles (includes global `img { max-width: 100%; height: auto; }`).
- `addition.scss` — custom utility classes and overrides.
- `responsive.scss` — all breakpoint-specific overrides.
- `about.scss` — about/contact bottom image section styles.
- Feature-specific files (e.g. `smart-city-slug.scss`, `footer.scss`) are imported individually.

## CSS Rules for Images
- The global rule `img { max-width: 100%; height: auto; }` in `style.scss` applies to ALL images.
- When adding `a.xxx img { width: Npx; }` (explicit width on a child image), also add `height: auto` in the same block to avoid the Next.js image aspect-ratio warning.
- Example pattern:
  ```scss
  a.chorn img {
    width: 30px;
    height: auto; // required — prevents Next.js width-without-height warning
  }
  ```

## scroll-behavior
- `scroll-behavior: smooth` is set on `html, body` in `globals.scss`.
- The `<html>` element in layout must have `data-scroll-behavior="smooth"` to satisfy Next.js 16.

## Naming Conventions
- BEM-style class names for new component-specific styles.
- Prefix custom utility classes with `add-` (e.g. `.add-navbar-logo`, `.add-underline`).
- Prefix extended styles with `x-` for navbar variants (e.g. `x-navbar.scss`, `x-navbar-premium.scss`).

## Do NOT
- Do not use inline `style` attributes for layout/spacing — use SCSS classes.
- Exception: `style={{ height: 'auto' }}` on `<Image>` components is required and intentional.
- Do not add Tailwind utility classes to existing components unless the file already uses Tailwind.

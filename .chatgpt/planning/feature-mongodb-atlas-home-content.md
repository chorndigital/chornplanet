# Feature Plan: MongoDB Atlas Home Content Migration

Branch: `feature-mongodb-atlas-home-content`
Status: In progress by Codex
Owner: ChatGPT planning → Codex review/implementation/testing

## Problem Statement

ChornPlanet currently has many Next.js desktop pages with hardcoded page content. The active feature branch is migrating page content to MongoDB Atlas so the application can load content from database-backed services instead of repository hardcode.

The migration status is tracked in:

```text
migrated-target-pages.log
```

The log contains:

- `Done pages`: pages where hardcoded content has already been transferred to MongoDB Atlas.
- `Pending pages`: pages still waiting for content migration.

Codex is currently implementing this feature and should continue migration carefully because some hardcoded structures remain relevant to other modules and cannot be removed immediately.

## Current Migration Status

### Done Pages

From `migrated-target-pages.log`, current done pages include:

```text
src/app/[locale]/(desktop)/page.tsx
src/app/[locale]/(desktop)/contact
src/app/[locale]/(desktop)/privacy-policy
src/app/[locale]/(desktop)/gallery
src/app/[locale]/(desktop)/about-chorn
src/app/[locale]/(desktop)/ai-companions
src/app/[locale]/(desktop)/ai-companions/aom
src/app/[locale]/(desktop)/ai-companions/fah
src/app/[locale]/(desktop)/ai-companions/ploy
src/app/[locale]/(desktop)/smart-city/[slug]
src/app/[locale]/(desktop)/smart-city/chiang-mai
src/app/[locale]/(desktop)/smart-mobility/chiang-mai/hub-to-chiang-mai-airport
src/app/[locale]/(desktop)/smart-mobility/chiang-mai/hub-to-doi-Inthanon
src/app/[locale]/(desktop)/smart-mobility/chiang-mai/hub-to-doi-Suthep
src/app/[locale]/(desktop)/smart-mobility/chiang-mai/urban-hub-san-sai-doi-saket
src/app/[locale]/(desktop)/smart-mobility/chiang-mai/vertiport-design
src/app/[locale]/(desktop)/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway
```

### Pending Pages

Current pending pages include:

```text
src/app/[locale]/(desktop)/terms-of-service
src/app/[locale]/(desktop)/workplace-policy

src/app/[locale]/(desktop)/technical-expertise/mobile-development
src/app/[locale]/(desktop)/technical-expertise/web-development
src/app/[locale]/(desktop)/technical-expertise/web3-blockchain-smart-contract-development

src/app/[locale]/(desktop)/technical-expertise/ai-solutions
src/app/[locale]/(desktop)/technical-expertise/cloud-devops
src/app/[locale]/(desktop)/technical-expertise/cloud-infrastructure-systems-architecture

src/app/[locale]/(desktop)/technical-expertise/front-end-developer
src/app/[locale]/(desktop)/technical-expertise/front-end-developer/angular-developer
src/app/[locale]/(desktop)/technical-expertise/front-end-developer/css3-developer
src/app/[locale]/(desktop)/technical-expertise/front-end-developer/html5-developer
src/app/[locale]/(desktop)/technical-expertise/front-end-developer/javascript-developer
src/app/[locale]/(desktop)/technical-expertise/front-end-developer/nextjs-developer
src/app/[locale]/(desktop)/technical-expertise/front-end-developer/react-developer
src/app/[locale]/(desktop)/technical-expertise/front-end-developer/typescript-developer
src/app/[locale]/(desktop)/technical-expertise/front-end-developer/vue-developer

src/app/[locale]/(desktop)/technical-expertise/full-stack-developer
src/app/[locale]/(desktop)/technical-expertise/full-stack-developer/dotnetcore-developer
src/app/[locale]/(desktop)/technical-expertise/full-stack-developer/go-developer
src/app/[locale]/(desktop)/technical-expertise/full-stack-developer/java-spring-boot-developer
src/app/[locale]/(desktop)/technical-expertise/full-stack-developer/nodejs-developer
src/app/[locale]/(desktop)/technical-expertise/full-stack-developer/php-developer
src/app/[locale]/(desktop)/technical-expertise/full-stack-developer/python-developer
```

## Expected Final State

After this feature is complete:

- Next.js pages load content from MongoDB Atlas instead of hardcoded page data.
- Hardcoded content can be deprecated and removed from the repository after all dependent modules are migrated.
- MongoDB connection and content loading should use the existing/new code under:

```text
src/lib
server
```

- Page components should become reusable renderers driven by database content.
- Content schemas should be typed and consistent across similar page families.
- The repository should be prepared for the next feature: premium eCommerce civilization media with daily posts stored in MongoDB.

## Why Improve This

This migration is important because it changes ChornPlanet from a static hardcoded content website into a database-backed content platform.

Benefits:

- Content can be updated without editing source code.
- Page families can share reusable rendering components.
- MongoDB Atlas becomes the source of truth for civilization/content/media data.
- Future daily posts and premium eCommerce media can be added as database records.
- The codebase becomes cleaner and easier to scale.
- Hardcoded data can be removed safely after migration completion.

## Goals

- Complete migration of pending hardcoded desktop page content to MongoDB Atlas.
- Preserve all current page rendering behavior during migration.
- Use `src/lib` and `server` for MongoDB connection, content repositories, and server-side loading.
- Add/keep typed content schemas for page content.
- Avoid removing hardcoded data until all dependent code paths are migrated and verified.
- Update `migrated-target-pages.log` as pages move from pending to done.
- Prepare content architecture for future premium eCommerce civilization media and daily post features.

## Non-Goals

- Do not start the premium eCommerce daily post feature in this branch.
- Do not redesign the full visual UI unless required for data-driven rendering.
- Do not remove hardcoded content prematurely if other modules still reference it.
- Do not change public routes or URL structure unless explicitly required.
- Do not mix unrelated media/eCommerce schemas into this home-content migration unless needed for future compatibility.

## Proposed Architecture

```text
Next.js Route / Page
   ↓
Page Content Loader
   ↓
Server Content Service
   ↓
MongoDB Atlas Repository
   ↓
Typed Content Schema
   ↓
Reusable Page Renderer / Components
```

Recommended request/runtime direction:

```text
src/app/[locale]/(desktop)/.../page.tsx
   ↓
server/content/<domain>.service.ts
   ↓
server/content/<domain>.repository.ts
   ↓
src/lib/mongodb.ts or equivalent MongoDB client helper
   ↓
MongoDB Atlas
```

## Project Structure Guideline

Codex should review the existing branch structure and align new code to the current implementation under `src/lib` and `server`.

Recommended structure:

```text
src/lib/
  mongodb/
    client.ts
    database.ts
  content/
    content-types.ts
    locale.ts
    slug.ts

server/
  content/
    content.repository.ts
    content.service.ts
    page-content.service.ts
    page-content.mapper.ts
  home/
    home.repository.ts
    home.service.ts
  smart-city/
    smart-city.repository.ts
    smart-city.service.ts
  smart-mobility/
    smart-mobility.repository.ts
    smart-mobility.service.ts
  technical-expertise/
    technical-expertise.repository.ts
    technical-expertise.service.ts
  legal/
    legal.repository.ts
    legal.service.ts
  media/
    daily-post.repository.ts      # future feature placeholder only
    daily-post.service.ts         # future feature placeholder only
```

Page layer pattern:

```text
src/app/[locale]/(desktop)/<page>/page.tsx
   → calls server service
   → receives typed content
   → renders reusable component
```

Component layer pattern:

```text
src/components/content/
  PageHero.tsx
  SectionBlock.tsx
  FeatureGrid.tsx
  GalleryGrid.tsx
  CallToAction.tsx
  RichTextSection.tsx
```

Do not create future media/eCommerce implementation in this branch; only keep naming/design compatible for the next phase.

## Content Model Guideline

Use a flexible but typed schema that supports multiple page families.

Suggested high-level schema:

```ts
type PageContent = {
  locale: string;
  route: string;
  slug?: string;
  pageType: string;
  title: string;
  description?: string;
  hero?: unknown;
  sections: unknown[];
  seo?: unknown;
  status: 'draft' | 'published';
  updatedAt: Date;
};
```

Recommended page types:

```text
home
legal
contact
gallery
about
ai-companion
smart-city
smart-mobility
technical-expertise
```

## Migration Plan

### Phase 1: Stabilize done pages

- Review pages already marked done.
- Confirm they load from MongoDB Atlas.
- Confirm fallback behavior, if any, is intentional and documented.
- Ensure content loading uses `src/lib` and `server` instead of direct MongoDB calls inside page components.

### Phase 2: Migrate pending legal/policy pages

Priority:

```text
terms-of-service
workplace-policy
```

Reason:

- Usually simpler static content.
- Good validation target for reusable legal/page content schema.

### Phase 3: Migrate technical expertise root pages

Priority:

```text
technical-expertise/mobile-development
technical-expertise/web-development
technical-expertise/web3-blockchain-smart-contract-development
technical-expertise/ai-solutions
technical-expertise/cloud-devops
technical-expertise/cloud-infrastructure-systems-architecture
```

Reason:

- Establish common technical expertise schema and renderer.

### Phase 4: Migrate technical expertise category pages

Priority:

```text
technical-expertise/front-end-developer/*
technical-expertise/full-stack-developer/*
```

Reason:

- These pages likely share repeatable structure and can benefit most from reusable page renderer.

### Phase 5: Hardcode deprecation pass

Only after all pages are migrated and verified:

- Search for remaining hardcoded content arrays.
- Confirm they are not used by any dependent modules.
- Remove or move them to archived fixtures/test data.
- Update `migrated-target-pages.log`.

## Hardcode Removal Rule

Do not remove hardcoded data immediately if it is still relevant to other modules or page structures.

Safe removal requires:

- MongoDB content exists.
- Page loads correctly from MongoDB.
- Dependent modules no longer import the hardcoded data.
- Tests or manual validation confirm no route regression.
- Hardcoded file is either removed or converted to seed/fixture data intentionally.

## Improvement Recommendations

Codex should consider the following improvements while implementing:

1. Add a single content-loading abstraction instead of page-specific MongoDB logic in every page.
2. Use typed schemas for page content and avoid `any` where possible.
3. Create reusable page rendering components for technical-expertise pages.
4. Add clear fallback behavior:
   - prefer MongoDB content
   - optionally fallback to temporary hardcoded content only while migration is incomplete
   - log fallback usage during development
5. Add a validation script or developer command to check all target routes have MongoDB content.
6. Keep `migrated-target-pages.log` accurate after each page migration.
7. Prepare collection naming and schema direction for the next feature: premium eCommerce civilization media with daily posts.

## Testing Plan

Minimum validation:

- Run lint/typecheck if available.
- Build the Next.js app.
- Verify all done pages render from MongoDB Atlas.
- Verify pending pages still render correctly during migration.
- Verify locale handling still works.
- Verify missing MongoDB content behavior is controlled and does not crash production pages.

Suggested route validation checklist:

```text
/[locale]
/[locale]/contact
/[locale]/privacy-policy
/[locale]/gallery
/[locale]/about-chorn
/[locale]/ai-companions
/[locale]/smart-city/chiang-mai
/[locale]/technical-expertise/ai-solutions
/[locale]/technical-expertise/front-end-developer/react-developer
/[locale]/technical-expertise/full-stack-developer/nodejs-developer
```

## Risks and Open Questions

- Are all migrated pages using one shared content schema, or do some need specialized schemas?
- Are hardcoded structures still used for navigation, SEO, static params, or page metadata?
- Should MongoDB content be loaded dynamically, statically, or with revalidation?
- How should missing content be handled in production: 404, fallback, or default page?
- Should seed scripts be added in this branch, or should MongoDB Atlas data be managed externally?
- What is the final collection naming convention?
- Should daily post/media schemas be added now as placeholders or deferred to the next feature?

## Next Feature After Completion

After this feature is complete, start a new feature branch for:

```text
premium eCommerce civilization media with daily post feature to MongoDB
```

Suggested future planning file:

```text
.chatgpt/planning/feature-premium-ecommerce-daily-posts.md
```

This future feature should use MongoDB Atlas for daily post content, media metadata, premium product/story content, and publishing workflow.

## Completion Criteria

- Planning reviewed by Codex.
- All pending pages are migrated or explicitly documented as deferred.
- Next.js pages load content from MongoDB Atlas through `src/lib` and `server` layers.
- Hardcoded content is removed only after all dependencies are migrated and verified.
- `migrated-target-pages.log` is updated accurately.
- Build/typecheck validation is completed.
- The codebase is ready for the next MongoDB-backed daily post/media feature.
- Planning file is moved to `.chatgpt/archived/feature-mongodb-atlas-home-content.md` after implementation is completed and merged.

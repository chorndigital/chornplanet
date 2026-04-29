# Feature Plan: MongoDB Atlas Home Content Migration

Branch: `feature-mongodb-atlas-home-content`
Status: In progress by Codex
Owner: ChatGPT planning → Codex review/implementation/testing

## Problem Statement

ChornPlanet currently has many Next.js desktop pages with hardcoded page content. The active feature branch is migrating page content to MongoDB Atlas so the application can load content from database-backed services instead of repository hardcode.

The branch already follows a **hexagonal architecture** structure under `server/`. This structure must be preserved and extended as-is, not replaced with a new generic `server/content/*` layout.

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
src/app/[locale]/(desktop)/terms-of-service
src/app/[locale]/(desktop)/workplace-policy
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

### Pending Pages - Layout

Layout page: `src\app\[locale]\(desktop)\layout.tsx`

The remaining should be only some components in layout page `src\app\[locale]\(desktop)\layout.tsx`.
```
import FooterMain from "@/components/Footer/FooterMain";
import NavbarContainer from "@/components/Navbar/NavbarContainer";

import CookieConsentChecking from "@/components/Consent/CookieConsentChecking";
-> import CookieConsentDisplay from "@/components/Consent/modules/CookieConsentDisplay";
-> src\components\Consent\modules\CookieConsentDisplay.tsx
-> src\components\Consent\modules\ConsentCookieButton.tsx
-> src\data\info\main\InfoTranslation.ts
```

## Existing Hexagonal Architecture Review

The active branch already uses this architecture pattern:

```text
server/
  adapters/
    outbound/
      mongo.repository/
        about-content.repository.ts
        ...
  core/
    domain/
      about-content.entity.ts
      ...
    ports/
      about-content.interface.ts
      ...
    services/
      about-content.service.ts
      ...
  infrastructure/
    db/
      infra.mongodb.ts
      ...
```

This should remain the governing structure for MongoDB content migration.

Example current files:

```text
server/adapters/outbound/mongo.repository/about-content.repository.ts
server/core/domain/about-content.entity.ts
server/core/ports/about-content.interface.ts
server/core/services/about-content.service.ts
server/infrastructure/db/infra.mongodb.ts
```

### Current Layer Responsibilities

#### Domain Layer

```text
server/core/domain/*-content.entity.ts
```

Responsibilities:

- Define content payloads, records, responses, locale types, and mapping functions.
- Normalize locale when needed.
- Keep domain shape independent from the page component implementation.

#### Port Layer

```text
server/core/ports/*-content.interface.ts
```

Responsibilities:

- Define repository/service contracts.
- Keep core services independent from MongoDB implementation.
- Allow outbound adapters to be swapped or tested.

#### Service Layer

```text
server/core/services/*-content.service.ts
```

Responsibilities:

- Own application/domain operations.
- Call the port interface, not MongoDB directly.
- Keep page/server callers from depending on outbound repository details.

#### Outbound Mongo Adapter Layer

```text
server/adapters/outbound/mongo.repository/*-content.repository.ts
```

Responsibilities:

- Implement the corresponding port/interface.
- Use MongoDB collections from `server/infrastructure/db/infra.mongodb.ts`.
- Own indexes, queries, upsert/delete operations, and document-to-domain mapping.

#### Infrastructure DB Layer

```text
server/infrastructure/db/infra.mongodb.ts
```

Responsibilities:

- Create/reuse MongoDB client.
- Resolve database and collection names from environment variables.
- Export typed MongoDB collections.
- Avoid page-specific business logic.

## Expected Final State

After this feature is complete:

- Next.js pages load content from MongoDB Atlas instead of hardcoded page data.
- Hardcoded content can be deprecated and removed from the repository after all dependent modules are migrated.
- MongoDB connection and content loading must use the existing hexagonal architecture under:

```text
server/core/domain
server/core/ports
server/core/services
server/adapters/outbound/mongo.repository
server/infrastructure/db
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
- The existing hexagonal architecture keeps domain logic, ports, services, adapters, and infrastructure cleanly separated.

## Goals

- Complete migration of pending hardcoded desktop page content to MongoDB Atlas.
- Preserve all current page rendering behavior during migration.
- Preserve the existing hexagonal architecture exactly as the target server-side pattern.
- Use `server/core/domain`, `server/core/ports`, `server/core/services`, `server/adapters/outbound/mongo.repository`, and `server/infrastructure/db` for MongoDB content access.
- Add/keep typed content schemas for page content.
- Avoid removing hardcoded data until all dependent code paths are migrated and verified.
- Update `migrated-target-pages.log` as pages move from pending to done.
- Prepare content architecture for future premium eCommerce civilization media and daily post features.

## Non-Goals

- Do not start the premium eCommerce daily post feature in this branch.
- Do not redesign the full visual UI unless required for data-driven rendering.
- Do not replace the existing hexagonal server architecture with another folder structure.
- Do not add a new generic `server/content/*` architecture that bypasses domain/ports/services/adapters.
- Do not remove hardcoded content prematurely if other modules still reference it.
- Do not change public routes or URL structure unless explicitly required.
- Do not mix unrelated media/eCommerce schemas into this home-content migration unless needed for future compatibility.

## Proposed Architecture

```text
Next.js Route / Page
   ↓
Server-side Page Loader / Composition Function
   ↓
server/core/services/<page>-content.service.ts
   ↓
server/core/ports/<page>-content.interface.ts
   ↓
server/adapters/outbound/mongo.repository/<page>-content.repository.ts
   ↓
server/infrastructure/db/infra.mongodb.ts
   ↓
MongoDB Atlas Collection
   ↓
server/core/domain/<page>-content.entity.ts
   ↓
Reusable Page Renderer / Components
```

Recommended request/runtime direction:

```text
src/app/[locale]/(desktop)/.../page.tsx
   ↓
instantiate/use content service
   ↓
service calls port/interface
   ↓
Mongo repository implements port
   ↓
infra.mongodb exports typed collection
   ↓
MongoDB Atlas
```

## Project Structure Guideline

Codex should align all new and migrated content modules to the existing hexagonal architecture.

### Required Structure Pattern

For each content domain, use this pattern:

```text
server/core/domain/<domain>-content.entity.ts
server/core/ports/<domain>-content.interface.ts
server/core/services/<domain>-content.service.ts
server/adapters/outbound/mongo.repository/<domain>-content.repository.ts
server/infrastructure/db/infra.mongodb.ts
```

### Example Existing Pattern

```text
server/core/domain/about-content.entity.ts
server/core/ports/about-content.interface.ts
server/core/services/about-content.service.ts
server/adapters/outbound/mongo.repository/about-content.repository.ts
server/infrastructure/db/infra.mongodb.ts
```

### Recommended New Content Domains

For pending pages, Codex should create or extend modules using the same pattern.

Suggested domains:

```text
legal-content
technical-expertise-content
technical-expertise-category-content
technical-expertise-detail-content
```

Potential files:

```text
server/core/domain/legal-content.entity.ts
server/core/ports/legal-content.interface.ts
server/core/services/legal-content.service.ts
server/adapters/outbound/mongo.repository/legal-content.repository.ts

server/core/domain/technical-expertise-content.entity.ts
server/core/ports/technical-expertise-content.interface.ts
server/core/services/technical-expertise-content.service.ts
server/adapters/outbound/mongo.repository/technical-expertise-content.repository.ts
```

### Infrastructure DB Guideline

All new MongoDB collections should be declared and typed in:

```text
server/infrastructure/db/infra.mongodb.ts
```

Collection names should be environment-driven with safe defaults where appropriate, following the existing pattern:

```ts
const aboutContentCollectionName =
  process.env.MONGODB_COLLECTION_ABOUT_CONTENT || 'about_content';

export const aboutContentCollection: Collection<AboutContentRecord> =
  db.collection(aboutContentCollectionName);
```

### Page Layer Pattern

```text
src/app/[locale]/(desktop)/<page>/page.tsx
   → uses service/repository composition following current project convention
   → receives typed content response
   → renders reusable component
```

Page files should not directly call MongoDB collections.

### Component Layer Pattern

Reusable rendering components may live under the current component structure. If new shared content components are needed, use a consistent structure such as:

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

Follow the existing domain entity pattern rather than introducing one generic `PageContent` type for all pages.

Each page family should have a typed domain record/response/payload shape:

```text
<Domain>ContentPayload
Partial<Domain>ContentPayload
<Domain>ContentRecord
<Domain>ContentResponse
normalize<Domain>ContentLocale()
map<Domain>ContentResponse()
```

Example from existing pattern:

```text
AboutContentPayload
PartialAboutContentPayload
AboutContentRecord
AboutContentResponse
normalizeAboutContentLocale()
mapAboutContentResponse()
```

For technical expertise pages, Codex may use a shared technical-expertise domain if the content structure is common across root/category/detail pages. If structures differ significantly, split into separate domain entities while keeping the same hexagonal layers.

Recommended page families:

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
- Ensure content loading uses the existing hexagonal `server` layers instead of direct MongoDB calls inside page components.

### Phase 2: Migrate pending legal/policy pages

Priority:

```text
terms-of-service
workplace-policy
```

Reason:

- Usually simpler static content.
- Good validation target for legal content schema and repository pattern.

Suggested architecture:

```text
server/core/domain/legal-content.entity.ts
server/core/ports/legal-content.interface.ts
server/core/services/legal-content.service.ts
server/adapters/outbound/mongo.repository/legal-content.repository.ts
server/infrastructure/db/infra.mongodb.ts
```

Status update from Codex:

- `terms-of-service` and `workplace-policy` now use the existing `policy-content` MongoDB service through `getPolicyContent`.
- `scripts/migrate-policy-to-mongo.cjs` already seeds privacy, terms, and workplace content together by locale.
- `migrated-target-pages.log` has been updated to move both legal pages to done.

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

Status update from Codex:

- Added `technical-expertise-content` domain, port, service, Mongo repository, infrastructure collection, and cached loader.
- Added `scripts/migrate-technical-expertise-to-mongo.cjs` and `npm run migrate:technical-expertise`.
- Seeded all 10 locales into `technical_expertise_content`.
- Wired `technical-expertise/mobile-development` to load its `feature` content from MongoDB Atlas through the new service.
- Wired `technical-expertise/web-development`, `web3-blockchain-smart-contract-development`, `cloud-devops`, and `cloud-infrastructure-systems-architecture` through the same MongoDB-backed service.
- Wired `technical-expertise/ai-solutions` through the existing AI companions MongoDB-backed service because it renders `service`, `demo`, and `media` content from that content family.
- Wired `technical-expertise/front-end-developer` and `technical-expertise/full-stack-developer` category landing pages through `technical_expertise_content`.
- Wired all front-end detail pages through `technical_expertise_content` and consolidated their shared renderer/FAQ path.
- Wired all full-stack detail pages through `technical_expertise_content` and consolidated their shared renderer/FAQ path.

### Phase 4: Migrate technical expertise category pages

Priority:

```text
technical-expertise/front-end-developer/*
technical-expertise/full-stack-developer/*
```

Reason:

- These pages likely share repeatable structure and can benefit most from reusable domain/entity + renderer patterns.

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

1. Keep the existing hexagonal architecture as-is.
2. Add new content modules using domain → port → service → Mongo repository → infrastructure DB pattern.
3. Avoid direct MongoDB usage inside Next.js page files.
4. Use typed schemas for page content and avoid `any` where possible.
5. Create reusable page rendering components for technical-expertise pages.
6. Add clear fallback behavior:
   - prefer MongoDB content
   - optionally fallback to temporary hardcoded content only while migration is incomplete
   - log fallback usage during development
7. Add a validation script or developer command to check all target routes have MongoDB content.
8. Keep `migrated-target-pages.log` accurate after each page migration.
9. Prepare collection naming and schema direction for the next feature: premium eCommerce civilization media with daily posts, without implementing that feature in this branch.

## Testing Plan

Minimum validation:

- Run lint/typecheck if available.
- Build the Next.js app.
- Verify all done pages render from MongoDB Atlas.
- Verify pending pages still render correctly during migration.
- Verify locale handling still works.
- Verify missing MongoDB content behavior is controlled and does not crash production pages.
- Verify new repositories create indexes consistently where needed.
- Verify page files do not directly import Mongo collections from `infra.mongodb.ts`.

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
- Should technical expertise pages share one collection or use separate collections by family?
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

This future feature should use MongoDB Atlas for daily post content, media metadata, premium product/story content, and publishing workflow while following the same hexagonal architecture pattern.

## Completion Criteria

- Planning reviewed by Codex.
- Existing hexagonal architecture is preserved.
- All pending pages are migrated or explicitly documented as deferred.
- Next.js pages load content from MongoDB Atlas through the existing `server` hexagonal layers.
- Hardcoded content is removed only after all dependencies are migrated and verified.
- `migrated-target-pages.log` is updated accurately.
- Build/typecheck validation is completed.
- The codebase is ready for the next MongoDB-backed daily post/media feature.
- Planning file is moved to `.chatgpt/archived/feature-mongodb-atlas-home-content.md` after implementation is completed and merged.

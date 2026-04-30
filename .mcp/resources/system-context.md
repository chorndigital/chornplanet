# System Context

ChornPlanet is a private Next.js application.

Current known technical context from the repository:

- Next.js application
- React 18
- TypeScript
- MongoDB driver dependency
- OpenAI dependency
- JWT and bcrypt dependencies
- Vercel Speed Insights dependency
- Yarn package manager

## Existing architecture direction

The current agent workflow says ChornPlanet content should move away from hardcoded page data toward database-backed, reusable, scalable services.

Target pattern:

```text
Next.js Page / Route
   ↓
Content Loader / Server Service
   ↓
MongoDB Atlas Repository
   ↓
Typed Content Schema
   ↓
Reusable Page Components
```

## Development commands

Known scripts:

```bash
yarn dev
yarn build
yarn start
yarn lint
yarn sync:homepage-content
```

## Agent system direction

`.mcp` should help agents understand ChornPlanet as more than a website.

It is a platform that needs:

- content data models
- media automation pipelines
- commerce data models
- product linking workflows
- user login and identity planning
- Smart Food integration planning
- analytics and AI-assistant reporting
- SEO and LLM visibility assets
- safe publishing controls

## Source-of-truth rule

Do not add new large hardcoded content arrays into page files unless the active plan explicitly approves it as temporary seed/fixture data.

Prefer typed schemas, MongoDB-backed repositories, reusable loaders, and reusable components.

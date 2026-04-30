# Smart Food Evolution Workflow

Use this workflow when ChornPlanet work connects to Smart Food, Line OA login, food ordering, favorite meals, booking ideas, or future user personalization.

## Goal

Evolve ChornPlanet into a web experience layer for Smart Food while preserving safe boundaries around customer, order, payment, and identity data.

## Possible phases

### Phase 1: Planning and UX

- Line OA / LINE Login user journey
- favorite meal UX
- previous meal UX
- recommendation concept
- food ordering website flow
- Smart Food profile concept

### Phase 2: Read-only integration

- read safe user profile context
- read favorite meals if approved
- read product/menu data if approved
- show personalized content if approved

### Phase 3: Controlled write integration

Requires explicit approval:

- create orders
- update user preferences
- booking/reservation
- payment-related workflow
- customer profile mutation

## Future flow

```text
Line OA user
  ↓
ChornPlanet login / profile
  ↓
favorite meals / recommendations
  ↓
food order via website
  ↓
Smart Food backend order flow
  ↓
analytics and retention insight
```

## Safety rule

Agents may plan and draft implementation.

Agents must not mutate live customer, order, payment, or identity data without explicit approval.

## Output artifacts

- UX flow
- architecture proposal
- data boundary note
- authentication plan
- integration risk note
- implementation-ready feature plan

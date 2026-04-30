# Data and Authentication Policy

This policy governs ChornPlanet user data, Smart Food identity integration, Line OA login, Firebase Authentication planning, analytics data, and production credentials.

## Identity direction

Possible identity phases:

1. Line OA / LINE Login for Smart Food users.
2. Firebase Authentication in a future phase.
3. Unified ChornPlanet profile experience when architecture is ready.

## Default data rule

Agents should prefer planning and read-only analysis unless explicit approval is given for writes.

## Sensitive areas

Explicit approval is required for changes involving:

- authentication providers
- session handling
- JWT behavior
- password or credential behavior
- Firebase production configuration
- LINE Login production configuration
- customer profile data
- Smart Food order/payment data
- analytics credentials
- marketplace API credentials
- OpenAI or external AI provider keys

## Smart Food user data

Smart Food identity and order-related data should be treated as sensitive.

Agents may propose:

- login flows
- favorite meal UX
- profile schema drafts
- recommendation concepts
- user journey diagrams

Agents must not mutate live customer, order, payment, or profile data without explicit approval.

## Analytics data

Prefer aggregated analytics.

Do not expose personal user data.

Do not invent metrics.

If Google Analytics or other analytics data is unavailable, agents should state the gap and recommend instrumentation.

## Secrets rule

Secrets must never be committed to the repository.

Use environment variables and deployment secret stores.

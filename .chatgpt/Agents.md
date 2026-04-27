# ChatGPT × Codex Agent Workflow

## Purpose

This document defines how ChatGPT and Codex collaborate on ChornPlanet feature planning, implementation, review, testing, and archival.

ChornPlanet is a Next.js application with content, media, and civilization-commerce features. Feature planning should preserve the architecture direction: content should move from hardcoded page data toward database-backed, reusable, and scalable services.

## Roles

### ChatGPT

ChatGPT is responsible for feature discovery, planning, architectural proposal, and scope definition before implementation begins.

ChatGPT should:

- Create planning items and scope for each feature.
- Use **one branch per feature**, using the pattern `feature/<feature-name>`.
- Write the proposed architecture, workflow, scope, assumptions, risks, and acceptance criteria into `.chatgpt/planning/feature-<feature-name>.md`.
- Include project-structure guidelines for each feature branch when architecture or folder layout changes are expected.
- Keep each feature plan focused, reviewable, and implementation-ready.
- Avoid mixing multiple unrelated features in one branch or one planning document.

### Codex

Codex is responsible for reviewing the feature planning document, implementing the feature, writing or updating tests, and validating the implementation.

Codex should:

- Review the planning file under `.chatgpt/planning/`.
- Confirm or adjust the proposed architecture before implementation.
- Implement the feature according to the agreed scope.
- Add or update tests where applicable.
- Validate the implementation through local checks, automated tests, and code review readiness.
- Document important implementation notes in the related feature branch or pull request.

## Feature Branch Workflow

1. ChatGPT creates or updates a feature branch:

   ```text
   feature/<feature-name>
   ```

2. ChatGPT creates a planning file:

   ```text
   .chatgpt/planning/feature-<feature-name>.md
   ```

3. The planning file should include:

   - Problem statement
   - Goals
   - Non-goals
   - Existing architecture review
   - Proposed architecture
   - Project structure guideline
   - Migration plan
   - Testing plan
   - Risks and open questions
   - Acceptance criteria

4. Codex reviews the planning document.

5. Codex implements and tests the feature.

6. After the feature is completed and merged, move the planning document to:

   ```text
   .chatgpt/archived/feature-<feature-name>.md
   ```

## Architecture Rule

ChornPlanet page content should move toward database-backed content services and reusable page-rendering components.

For MongoDB Atlas content migration, the target pattern is:

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

Avoid adding new hardcoded content arrays into page files unless explicitly temporary and documented in the active planning file.

## Completion Rule

A feature is considered complete only when:

- The planning document has been reviewed.
- The implementation is complete.
- Tests or validation steps are completed.
- The feature branch is ready for pull request or merge.
- The planning file is moved from `.chatgpt/planning/` to `.chatgpt/archived/` after completion.

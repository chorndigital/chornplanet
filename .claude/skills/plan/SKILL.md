---
name: plan
description: Think through a task step-by-step and present a plan for approval before making any changes. Use this before any non-trivial edit, refactor, or feature addition.
---

# Plan

Before making any changes, present a clear plan and wait for approval.

## Steps

1. **Understand the request** — restate the goal in one sentence to confirm understanding.

2. **Explore the codebase** — read the relevant files:
   - Find the affected page(s) in `src/app/[locale]/(desktop)/`
   - Find the affected component(s) in `src/components/`
   - Find the affected data/locale files in `src/data/`
   - Find the affected styles in `src/styles/`

3. **Identify risks and side-effects**:
   - Does this affect all 10 locales?
   - Does this affect the proxy / routing?
   - Does this touch shared components used across many pages?
   - Does this affect `next.config.mjs` (redirects, rewrites, image domains)?

4. **Write the plan** in this format:

   ---
   ## Plan: <task name>

   **Goal**: <one sentence>

   **Files to change**:
   | File | Change |
   |------|--------|
   | `src/...` | What will be done |

   **Files to create** (if any):
   | File | Purpose |
   |------|---------|
   | `src/...` | What it is |

   **Risks / things to watch**:
   - ...

   **Steps**:
   1. ...
   2. ...

   **Ready to proceed?** (yes / adjust the plan)
   ---

5. **Wait for approval** — do NOT make any edits until the user confirms.

6. Once approved, execute the plan step by step, marking each step complete as you go.

---
name: add-locale-content
description: Scaffold translation files for all 10 locales for a new feature. Invoke with the feature name and data directory path.
---

# Add Locale Content

Use this skill when adding a new translatable feature that needs data files for all 10 locales.

## Locales to create
`da`, `de`, `en`, `fi`, `fr`, `ja`, `ko`, `nl`, `th`, `zh`

## Steps

1. **Identify the feature** — Ask the user (or infer from context):
   - Feature name (e.g. `AiPam`)
   - Target directory (e.g. `src/data/ai/companions/pam/`)

2. **Read an existing locale file** for a similar feature (e.g. `src/data/ai/companions/fah/AiFahEN.ts`) to understand the expected shape.

3. **Create the EN file first** — Confirm content with the user before creating the other 9 locales.

4. **Create all 10 locale files** following the naming pattern `<Feature><LOCALE>.ts`:
   ```
   src/data/ai/companions/pam/AiPamDA.ts
   src/data/ai/companions/pam/AiPamDE.ts
   src/data/ai/companions/pam/AiPamEN.ts
   src/data/ai/companions/pam/AiPamFI.ts
   src/data/ai/companions/pam/AiPamFR.ts
   src/data/ai/companions/pam/AiPamJA.ts
   src/data/ai/companions/pam/AiPamKO.ts
   src/data/ai/companions/pam/AiPamNL.ts
   src/data/ai/companions/pam/AiPamTH.ts
   src/data/ai/companions/pam/AiPamZH.ts
   ```

5. **Register in InfoTranslation** — Read `src/data/info/main/InfoTranslation.ts`, add the import for each locale, and add the key to the aggregation map.

6. **Verify** — Use the `i18n-checker` agent to confirm all 10 locales are present and registered.

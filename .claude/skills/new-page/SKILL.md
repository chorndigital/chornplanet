---
name: new-page
description: Scaffold a complete new page in the chorndigital Next.js project — page file, metadata, and component shell.
---

# New Page

Use this skill when creating a new route under `src/app/[locale]/(desktop)/`.

## Steps

1. **Confirm the route** with the user (e.g. `/ai-companions/pam/`).

2. **Create the page file** at `src/app/[locale]/(desktop)/<route>/page.tsx`:
   ```tsx
   import React from "react";
   import { Metadata } from "next";
   import { headers } from "next/headers";
   import { Metadata<Name> } from "@/metadata/main/Metadata<Name>";
   import { SchemaMarkupServicePage } from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";

   export async function generateMetadata(): Promise<Metadata> {
       const headers15 = await headers();
       const lang = headers15.get('x-locale') || 'en';
       return Metadata<Name>[lang];
   }

   export default async function Page() {
       const headers15 = await headers();
       const lang = headers15.get('x-locale') || 'en';

       return (
           <div className="smart-container-top">
               {/* TODO: add components */}
               <SchemaMarkupServicePage
                   name="Page Title | Chorn Planet"
                   description="Page description."
                   url="https://chornplanet.com/en/<route>/"
               />
           </div>
       );
   }
   ```

3. **Create metadata file** at `src/metadata/main/Metadata<Name>.ts` — copy the structure from an existing file (e.g. `MetadataAiFah.ts`) and fill in all 10 locales.

4. **Add to sitemap** if the page should be publicly indexed — check `src/app/sitemap.ts` or the sitemap API route.

5. **Add redirect** in `next.config.mjs` if there is a legacy URL that should point to this new page.

6. **Run the page auditor** — use the `page-auditor` agent to check the new page before finishing.

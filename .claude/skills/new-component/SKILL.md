---
name: new-component
description: Scaffold a new React component following chorndigital conventions — correct Image usage, locale prop, and SCSS import.
---

# New Component

Use this skill when creating a new component in `src/components/`.

## Steps

1. **Confirm** the component name and which feature folder it belongs to (e.g. `src/components/AiCompanions/`).

2. **Create the component file** following this template:
   ```tsx
   import React from "react";
   import Image from "next/image";
   import { InfoTranslation } from "@/data/info/main/InfoTranslation";
   // import "@/styles/my-feature.scss"; // add only if a dedicated SCSS file is needed

   export default function MyComponent({ lang }: { lang: string }) {
       return (
           <div className="my-component">
               {/* Use InfoTranslation[lang].MyFeature for all text */}
           </div>
       );
   }
   ```

3. **Image usage rules** — always follow this pattern:
   ```tsx
   <Image
       src="/images/my-image.webp"   // use /images/ path, NOT cdn URL
       alt="descriptive alt text"
       width={800}
       height={600}
       style={{ height: 'auto' }}    // required — global CSS modifies height
   />
   ```

4. **No hardcoded English text** — all user-facing strings must come from `InfoTranslation[lang]`.

5. **SCSS** — if the component needs custom styles:
   - Create `src/styles/my-feature.scss`
   - Import it at the top of the component file
   - Import it also in the desktop layout if it should be globally available

6. **Trailing slashes** — all `<Link href="...">` values must end with `/`.

7. **Export** — use default export for page-level components; named exports are acceptable for small shared utilities.

import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPrivacyPolicyDA: Metadata = {
    title: "Fortrolighedspolitik | Chorn Planet",
    description: "Chorn Planet respekterer dit privatliv og er forpligtet til at beskytte dine personlige data. Denne fortrolighedspolitik forklarer, hvordan data håndteres, når du bruger hjemmesiden, og brugen af cookies til analyseformål.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.da, MetaLinks.privacyPolicy).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Fortrolighedspolitik | Chorn Planet",
        description: "Chorn Planet respekterer dit privatliv og er forpligtet til at beskytte dine personlige data. Denne fortrolighedspolitik forklarer, hvordan data håndteres, når du bruger hjemmesiden, og brugen af cookies til analyseformål.",
        images: metadataLink(LanguageCode.da, MetaLinks.privacyPolicy).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.privacyPolicy).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fortrolighedspolitik | Chorn Planet",
        description: "Chorn Planet respekterer dit privatliv og er forpligtet til at beskytte dine personlige data. Denne fortrolighedspolitik forklarer, hvordan data håndteres, når du bruger hjemmesiden, og brugen af cookies til analyseformål.",
        images: metadataLink(LanguageCode.da, MetaLinks.privacyPolicy).twitter.images,
    },
}

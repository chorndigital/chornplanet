import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiCompanionFR: Metadata = {
    title: "Chat LINE avec Intégration LLM/AI",
    description: "Testez le chat LINE, connectez-vous au LLM/AI avec prise en charge de plusieurs langues.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.aiCompanion).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Chat LINE avec Intégration LLM/AI",
        description: "Testez le chat LINE, connectez-vous au LLM/AI avec prise en charge de plusieurs langues.",
        images: metadataLink(LanguageCode.fr, MetaLinks.aiCompanion).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.aiCompanion).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Chat LINE avec Intégration LLM/AI",
        description: "Testez le chat LINE, connectez-vous au LLM/AI avec prise en charge de plusieurs langues.",
        images: metadataLink(LanguageCode.fr, MetaLinks.aiCompanion).twitter.images,
    },
}
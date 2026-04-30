import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiCompanionFI: Metadata = {
    title: "LINE-chat LLM/AI-integraatiolla",
    description: "Testaa LINE-chat, yhdistä LLM/AI:hin ja tue useita kieliä.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.aiCompanion).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "LINE-chat LLM/AI-integraatiolla",
        description: "Testaa LINE-chat, yhdistä LLM/AI:hin ja tue useita kieliä.",
        images: metadataLink(LanguageCode.fi, MetaLinks.aiCompanion).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.aiCompanion).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LINE-chat LLM/AI-integraatiolla",
        description: "Testaa LINE-chat, yhdistä LLM/AI:hin ja tue useita kieliä.",
        images: metadataLink(LanguageCode.fi, MetaLinks.aiCompanion).twitter.images,
    },
}

import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiCompanionNL: Metadata = {
    title: "LINE-chat met LLM/AI-integratie",
    description: "Test LINE-chat, verbind met LLM/AI en ondersteun meerdere talen.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.aiCompanion).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "LINE-chat met LLM/AI-integratie",
        description: "Test LINE-chat, verbind met LLM/AI en ondersteun meerdere talen.",
        images: metadataLink(LanguageCode.nl, MetaLinks.aiCompanion).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.aiCompanion).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LINE-chat met LLM/AI-integratie",
        description: "Test LINE-chat, verbind met LLM/AI en ondersteun meerdere talen.",
        images: metadataLink(LanguageCode.nl, MetaLinks.aiCompanion).twitter.images,
    },
}
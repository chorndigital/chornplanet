import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiCompanionDA: Metadata = {
    title: "LINE-chat med LLM/AI-integration",
    description: "Test LINE-chat, forbind til LLM/AI med understøttelse af flere sprog.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.aiCompanion).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "LINE-chat med LLM/AI-integration",
        description: "Test LINE-chat, forbind til LLM/AI med understøttelse af flere sprog.",
        images: metadataLink(LanguageCode.da, MetaLinks.aiAom).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.aiCompanion).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LINE-chat med LLM/AI-integration",
        description: "Test LINE-chat, forbind til LLM/AI med understøttelse af flere sprog.",
        images: metadataLink(LanguageCode.da, MetaLinks.aiCompanion).twitter.images,
    },
}
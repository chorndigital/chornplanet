import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiCompanionDE: Metadata = {
    title: "LINE-Chat mit LLM/AI-Integration",
    description: "Testen Sie den LINE-Chat, verbinden Sie sich mit LLM/AI und unterstützen Sie mehrere Sprachen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.aiCompanion).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "LINE-Chat mit LLM/AI-Integration",
        description: "Testen Sie den LINE-Chat, verbinden Sie sich mit LLM/AI und unterstützen Sie mehrere Sprachen.",
        images: metadataLink(LanguageCode.de, MetaLinks.aiCompanion).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.aiCompanion).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LINE-Chat mit LLM/AI-Integration",
        description: "Testen Sie den LINE-Chat, verbinden Sie sich mit LLM/AI und unterstützen Sie mehrere Sprachen.",
        images: metadataLink(LanguageCode.de, MetaLinks.aiCompanion).twitter.images,
    },
}

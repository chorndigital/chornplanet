import {Metadata} from "next";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataLlmAiFI: Metadata = {
    title: "LLM/AI-integraatio | Chorn Planet",
    description: "LLM/AI-agenttien kehityspalvelut, jotka tarjoavat älykkäitä ratkaisuja automaation, perinteisten järjestelmien integroinnin ja ennakoivan analytiikan parantamiseen.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.llmAi).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "LLM/AI-integraatio - Chorn Planet",
        description: "Tutustu edistyneeseen LLM/AI-agenttien kehitykseen, räätälöityihin LLM-ratkaisuihin ja AI-työnkulkujen automatisointiin liiketoimintaprosessien optimointiin.",
        images: metadataLink(LanguageCode.fi, MetaLinks.llmAi).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.llmAi).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "LLM/AI-integraatio - Chorn Planet",
        description: "Hyödynnä tekoälyn voima LLM/AI-agenttien kehityksellä, ennakoivalla analytiikalla ja älykkäillä työnkulkujen automatisointipalveluilla.",
        images: metadataLink(LanguageCode.fi, MetaLinks.llmAi).twitter.images,
    },
}
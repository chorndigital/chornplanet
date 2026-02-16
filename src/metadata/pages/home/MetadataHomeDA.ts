import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeDA: Metadata = {
    title: "CHORN | Medieplatform for systemer og anvendt teknologi",
    description:
        "CHORN er en medieplatform, der præsenterer strukturerede forklaringer af systemanalyse, softwareteknik, integrationspraksis og anvendte teknologiemner, herunder AI-automatisering, cloud-systemer og moderniseringstilgange, til brug i offentlige, investor- og policyorienterede sammenhænge.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks.home).alternates,
    authors: [
        { name: "CHORN Digital" }
    ],
    openGraph: {
        title: "CHORN | Medieplatform for systemer og anvendt teknologi",
        description:
            "CHORN er en medieplatform, der præsenterer strukturerede forklaringer af systemanalyse, softwareteknik, integrationspraksis og anvendte teknologiemner, herunder AI-automatisering, cloud-systemer og moderniseringstilgange, til brug i offentlige, investor- og policyorienterede sammenhænge.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.home).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN | Medieplatform for systemer og anvendt teknologi",
        description:
            "CHORN er en medieplatform, der præsenterer strukturerede forklaringer af systemanalyse, softwareteknik, integrationspraksis og anvendte teknologiemner, herunder AI-automatisering, cloud-systemer og moderniseringstilgange, til brug i offentlige, investor- og policyorienterede sammenhænge.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).twitter.images,
    },
    keywords: [
        "CHORN", "CHORN Digital", "CHORN medieplatform", "systemanalyse", "softwareteknik",
        "systemintegration", "enterprise software", "cloud-systemer", "AI-integration",
        "DevOps", "mikroservices", "teknisk arkitektur"
    ]
}
import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeNL: Metadata = {
    title: "CHORN | Mediaplatform voor systemen en toegepaste technologie",
    description:
        "CHORN is een mediaplatform dat gestructureerde toelichtingen biedt op systeemanalyse, software engineering, integratiepraktijken en onderwerpen binnen toegepaste technologie, waaronder AI-automatisering, cloudsystemen en moderniseringsbenaderingen, voor gebruik in publieke, investeerders- en beleidscontexten.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks.home).alternates,
    authors: [
        { name: "Chorn Planet" }
    ],
    openGraph: {
        title: "CHORN | Mediaplatform voor systemen en toegepaste technologie",
        description:
            "CHORN is een mediaplatform dat gestructureerde toelichtingen biedt op systeemanalyse, software engineering, integratiepraktijken en onderwerpen binnen toegepaste technologie, waaronder AI-automatisering, cloudsystemen en moderniseringsbenaderingen, voor gebruik in publieke, investeerders- en beleidscontexten.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.home).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN | Mediaplatform voor systemen en toegepaste technologie",
        description:
            "CHORN is een mediaplatform dat gestructureerde toelichtingen biedt op systeemanalyse, software engineering, integratiepraktijken en onderwerpen binnen toegepaste technologie, waaronder AI-automatisering, cloudsystemen en moderniseringsbenaderingen, voor gebruik in publieke, investeerders- en beleidscontexten.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).twitter.images,
    },
    keywords: [
        "CHORN", "Chorn Planet", "mediaplatform", "systeemanalyse",
        "software engineering", "systeemintegratie", "cloudsystemen",
        "AI-integratie", "DevOps", "microservices", "technische architectuur"
    ]
}
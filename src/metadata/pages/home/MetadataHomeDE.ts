import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeDE: Metadata = {
    title: "Chorn Planet | Medienplattform für Systeme und angewandte Technologie",
    description:
        "Chorn Planet ist eine Medienplattform, die strukturierte Erläuterungen zu Systemanalyse, Softwaretechnik, Integrationspraktiken und angewandten Technologiethemen bereitstellt, einschließlich KI-Automatisierung, Cloud-Systemen und Modernisierungsansätzen, für öffentliche, investorenbezogene und politische Kontexte.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks.home).alternates,
    authors: [
        { name: "Chorn Planet" }
    ],
    openGraph: {
        title: "Chorn Planet | Medienplattform für Systeme und angewandte Technologie",
        description:
            "Chorn Planet ist eine Medienplattform, die strukturierte Erläuterungen zu Systemanalyse, Softwaretechnik, Integrationspraktiken und angewandten Technologiethemen bereitstellt, einschließlich KI-Automatisierung, Cloud-Systemen und Modernisierungsansätzen, für öffentliche, investorenbezogene und politische Kontexte.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.home).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chorn Planet | Medienplattform für Systeme und angewandte Technologie",
        description:
            "Chorn Planet ist eine Medienplattform, die strukturierte Erläuterungen zu Systemanalyse, Softwaretechnik, Integrationspraktiken und angewandten Technologiethemen bereitstellt, einschließlich KI-Automatisierung, Cloud-Systemen und Modernisierungsansätzen, für öffentliche, investorenbezogene und politische Kontexte.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).twitter.images,
    },
    keywords: [
        "Chorn Planet", "Chorn Planet", "Medienplattform", "Systemanalyse", "Softwaretechnik",
        "Systemintegration", "Enterprise-Software", "Cloud-Systeme", "KI-Integration",
        "DevOps", "Microservices", "Technische Architektur"
    ]
}
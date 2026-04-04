import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeFR: Metadata = {
    title: "Chorn Planet | Plateforme média pour systèmes et technologies appliquées",
    description:
        "Chorn Planet est une plateforme média présentant des explications structurées sur l’analyse des systèmes, l’ingénierie logicielle, les pratiques d’intégration et les technologies appliquées, y compris l’automatisation par IA, les systèmes cloud et les approches de modernisation, dans des contextes publics, investisseurs et politiques.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks.home).alternates,
    authors: [
        { name: "Chorn Planet" }
    ],
    openGraph: {
        title: "Chorn Planet | Plateforme média pour systèmes et technologies appliquées",
        description:
            "Chorn Planet est une plateforme média présentant des explications structurées sur l’analyse des systèmes, l’ingénierie logicielle, les pratiques d’intégration et les technologies appliquées, y compris l’automatisation par IA, les systèmes cloud et les approches de modernisation, dans des contextes publics, investisseurs et politiques.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.home).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Chorn Planet | Plateforme média pour systèmes et technologies appliquées",
        description:
            "Chorn Planet est une plateforme média présentant des explications structurées sur l’analyse des systèmes, l’ingénierie logicielle, les pratiques d’intégration et les technologies appliquées, y compris l’automatisation par IA, les systèmes cloud et les approches de modernisation, dans des contextes publics, investisseurs et politiques.",
        images: metadataLink(LanguageCode.en, MetaLinks.home).twitter.images,
    },
    keywords: [
        "Chorn Planet", "Chorn Planet", "plateforme média", "analyse des systèmes",
        "ingénierie logicielle", "intégration des systèmes", "systèmes cloud",
        "intégration IA", "DevOps", "microservices", "architecture technique"
    ]
}
import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDockerFR: Metadata = {
    title: "Services Docker DevOps | Chorn Planet",
    description: "Expertise technique en DevOps basée sur Docker pour une conteneurisation efficace et un déploiement d’applications évolutif.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.devops.docker).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Services Docker DevOps | Chorn Planet",
        description: "Exploitez Docker pour la conteneurisation et le déploiement évolutif de logiciels avec une expertise en DevOps.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.docker).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.devops.docker).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services Docker DevOps | Chorn Planet",
        description: "Expertise en DevOps Docker pour la conteneurisation et le déploiement évolutif d’applications.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.docker).twitter.images,
    },
    keywords: [
        "Docker DevOps", "Expertise Docker", "Conteneurisation", "Chorn Planet", "DevOps", "Déploiement évolutif",
        "Développement de logiciels sur mesure", "Applications cloud", "DevOps France", "Conteneurs Docker"
    ]
};

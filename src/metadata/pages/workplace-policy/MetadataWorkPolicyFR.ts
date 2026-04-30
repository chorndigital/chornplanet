import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWorkPolicyFR: Metadata = {
    title: "Politique de travail | Chorn Planet",
    description: "Chorn Planet s'adapte à divers modèles de travail, y compris à distance, en bureau et hybride, en les ajustant aux besoins spécifiques de chaque projet. Cette approche garantit une communication fluide et une efficacité optimale.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.fr, MetaLinks.workplacePolicy).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Politique de travail | Chorn Planet",
        description: "Chorn Planet s'adapte à divers modèles de travail, y compris à distance, en bureau et hybride, en les ajustant aux besoins spécifiques de chaque projet. Cette approche garantit une communication fluide et une efficacité optimale.",
        images: metadataLink(LanguageCode.fr, MetaLinks.workplacePolicy).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.workplacePolicy).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Politique de travail | Chorn Planet",
        description: "Chorn Planet s'adapte à divers modèles de travail, y compris à distance, en bureau et hybride, en les ajustant aux besoins spécifiques de chaque projet. Cette approche garantit une communication fluide et une efficacité optimale.",
        images: metadataLink(LanguageCode.fr, MetaLinks.workplacePolicy).twitter.images,
    },
}
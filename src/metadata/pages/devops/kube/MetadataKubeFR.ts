import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataKubeFR: Metadata = {
    title: "Services DevOps Kubernetes | Chorn Planet",
    description: "Expertise technique DevOps basée sur Kubernetes pour automatiser le déploiement, la mise à l'échelle et la gestion des applications conteneurisées.",
    alternates: metadataLink(LanguageCode.fr, MetaLinks.devops.kube).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Services DevOps Kubernetes | Chorn Planet",
        description: "Optimisez votre infrastructure avec l'expertise technique DevOps basée sur Kubernetes pour la mise à l'échelle automatisée et la gestion des applications.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.kube).openGraph.images,
        url: metadataLink(LanguageCode.fr, MetaLinks.devops.kube).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Services DevOps Kubernetes | Chorn Planet",
        description: "Exploitez l'expertise DevOps de Kubernetes pour automatiser et gérer des applications conteneurisées évolutives.",
        images: metadataLink(LanguageCode.fr, MetaLinks.devops.kube).twitter.images,
    },
    keywords: [
        "DevOps Kubernetes", "expertise technique Kubernetes", "orchestration de conteneurs", "Chorn Planet", "DevOps",
        "gestion d'applications évolutives", "mise à l'échelle automatisée", "DevOps France", "applications cloud-native"
    ]
};

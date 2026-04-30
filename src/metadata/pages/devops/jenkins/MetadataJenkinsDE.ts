import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJenkinsDE: Metadata = {
    title: "Jenkins DevOps Dienstleistungen | Chorn Planet",
    description: "DevOps technische Expertise basierend auf Jenkins zur Automatisierung von Builds, Tests und Deployments in Ihrer Entwicklungs-Pipeline.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.devops.jenkins).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Jenkins DevOps Dienstleistungen | Chorn Planet",
        description: "Automatisieren Sie Ihren Entwicklungsprozess mit Jenkins-basierter DevOps-Technologie für kontinuierliche Integration und Deployment.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.jenkins).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.devops.jenkins).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps Dienstleistungen | Chorn Planet",
        description: "Optimieren Sie den Softwareentwicklungszyklus mit Jenkins-basierter DevOps-Expertise von Chorn Planet für CI/CD-Automatisierung.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.jenkins).twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Jenkins technische Expertise", "CI/CD Automatisierung", "DevOps", "Kontinuierliche Integration", "DevOps Deutschland",
        "Jenkins Pipeline", "Automatisierte Tests", "Build-Automatisierung", "Maßgeschneiderte Softwareentwicklung"
    ]
};

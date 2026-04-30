import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJenkinsDA: Metadata = {
    title: "Jenkins DevOps Tjenester | Chorn Planet",
    description: "DevOps teknisk ekspertise baseret på Jenkins til automatisering af builds, tests og deployment i din udviklingspipeline.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.devops.jenkins).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Jenkins DevOps Tjenester | Chorn Planet",
        description: "Automatiser din udviklingsproces med Jenkins-baseret DevOps teknisk ekspertise for kontinuerlig integration og deployment.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.jenkins).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.devops.jenkins).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps Tjenester | Chorn Planet",
        description: "Forbedr din softwareudviklingscyklus med Jenkins-baseret DevOps teknisk ekspertise fra Chorn Planet til CI/CD automatisering.",
        images: metadataLink(LanguageCode.da, MetaLinks.devops.jenkins).twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Jenkins teknisk ekspertise", "CI/CD automatisering", "DevOps", "kontinuerlig integration", "DevOps Danmark",
        "Jenkins pipeline", "automatiserede tests", "build automatisering", "tilpasset softwareudvikling"
    ]
};

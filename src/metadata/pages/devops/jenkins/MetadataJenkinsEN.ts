import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJenkinsEN: Metadata = {
    title: "Jenkins DevOps Services | Chorn Planet",
    description: "Jenkins-based DevOps technical expertise for automating builds, testing, and deployment in your development pipeline.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.devops.jenkins).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Jenkins DevOps Services | Chorn Planet",
        description: "Automate your development process with Jenkins DevOps technical expertise for continuous integration and deployment.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.jenkins).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.devops.jenkins).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps Services | Chorn Planet",
        description: "Enhance your software development lifecycle with Jenkins-based DevOps technical expertise from Chorn Planet for CI/CD automation.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.jenkins).twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "Jenkins technical expertise", "CI/CD automation", "DevOps", "continuous integration", "DevOps thailand",
        "Jenkins pipeline", "automated testing", "build automation", "custom software development"
    ]
}
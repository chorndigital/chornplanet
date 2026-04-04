import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPostmanEN: Metadata = {
    title: "Postman API Testing Services | Chorn Planet",
    description: "Provide API testing technical expertise using Postman to ensure the reliability and performance of your web technical expertise.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.devops.postman).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Postman API Testing Services | Chorn Planet",
        description: "Ensure your APIs function as expected with Postman-based API testing technical expertise.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.postman).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.devops.postman).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Postman API Testing Services | Chorn Planet",
        description: "Postman-based API testing technical expertise to validate your web technical expertise’ reliability and performance.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.postman).twitter.images,
    },
    keywords: [
        "Postman API testing", "Postman technical expertise", "API testing", "DevOps", "automated API testing", "Chorn Planet",
        "web technical expertise testing", "API performance", "custom software development", "DevOps thailand"
    ]
}
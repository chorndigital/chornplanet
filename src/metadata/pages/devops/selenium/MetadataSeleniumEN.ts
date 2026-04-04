import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSeleniumEN: Metadata = {
    title: "Selenium Testing Services | Chorn Planet",
    description: "Comprehensive Selenium testing technical expertise to ensure the quality and performance of your applications through automated testing.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.devops.selenium).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Selenium Testing | Chorn Planet",
        description: "Automate your application testing with Selenium technical expertise for robust and reliable results.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.selenium).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.devops.selenium).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Selenium Testing Services | Chorn Planet",
        description: "Enhance your application’s quality with Selenium testing technical expertise for automated and effective testing.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.selenium).twitter.images,
    },
    keywords: [
        "Selenium testing", "automated testing", "Chorn Planet", "Cloud DevOps",
        "application quality assurance", "test automation", "software testing",
        "quality assurance technical expertise", "testing technical expertise", "test scripts",
        "software testing Thailand", "selenium technical expertise", "web application testing"
    ]
}
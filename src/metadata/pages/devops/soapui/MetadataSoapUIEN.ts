import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSoapUIEN: Metadata = {
    title: "SoapUI Testing Services | Chorn Planet",
    description: "SoapUI testing technical expertise to ensure your web technical expertise and APIs are thoroughly tested and reliable.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.devops.soapui).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "SoapUI Testing | Chorn Planet",
        description: "Ensure the reliability of your APIs and web technical expertise with testing technical expertise.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.soapui).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.devops.soapui).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUI Testing Services | Chorn Planet",
        description: "Optimize your API testing with SoapUI technical expertise for comprehensive and reliable web services testing.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.soapui).twitter.images,
    },
    keywords: [
        "SoapUI testing", "API testing", "Chorn Planet", "Cloud DevOps",
        "web services testing", "reliable testing", "test automation",
        "quality assurance", "software testing", "API reliability",
        "testing technical expertise Thailand", "SoapUI technical expertise", "web application testing"
    ]
}
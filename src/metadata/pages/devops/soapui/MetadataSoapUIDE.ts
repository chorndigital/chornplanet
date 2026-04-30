import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSoapUIDE: Metadata = {
    title: "SoapUI Testdienstleistungen | Chorn Planet",
    description: "SoapUI-Testfachwissen zur Sicherstellung, dass Ihre APIs und Web-Technologie gründlich getestet und zuverlässig sind.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.devops.soapui).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "SoapUI Tests | Chorn Planet",
        description: "Sichern Sie die Zuverlässigkeit Ihrer APIs und Web-Technologie mit erstklassigem Testfachwissen.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.soapui).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.devops.soapui).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUI Testdienstleistungen | Chorn Planet",
        description: "Optimieren Sie Ihre API-Tests mit SoapUI-Fachwissen für umfassende und zuverlässige Web-Servicetests.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.soapui).twitter.images,
    },
    keywords: [
        "SoapUI Tests", "API Tests", "Chorn Planet", "Cloud DevOps",
        "Web-Service-Tests", "Zuverlässige Tests", "Testautomatisierung",
        "Qualitätssicherung", "Softwaretests", "API-Zuverlässigkeit",
        "Testfachwissen in Deutschland", "SoapUI Fachwissen", "Webanwendungstests"
    ]
};

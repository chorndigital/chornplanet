import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSeleniumDE: Metadata = {
    title: "Selenium Testdienste | Chorn Planet",
    description: "Umfassende Selenium-Testtechnische Expertise, um die Qualität und Leistung Ihrer Anwendungen durch automatisierte Tests sicherzustellen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.devops.selenium).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Selenium Testen | Chorn Planet",
        description: "Automatisieren Sie Ihre Anwendungstests mit Selenium-Technische Expertise für robuste und zuverlässige Ergebnisse.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.selenium).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.devops.selenium).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Selenium Testdienste | Chorn Planet",
        description: "Verbessern Sie die Qualität Ihrer Anwendung mit Selenium-Testtechnische Expertise für automatisierte und effektive Tests.",
        images: metadataLink(LanguageCode.de, MetaLinks.devops.selenium).twitter.images,
    },
    keywords: [
        "Selenium-Tests", "automatisierte Tests", "Chorn Planet", "Cloud DevOps",
        "Anwendungsqualitätssicherung", "Testautomatisierung", "Softwaretests",
        "Qualitätssicherungstechnik", "Testtechnik", "Testskripte",
        "Softwaretests Deutschland", "Selenium-Technische Expertise", "Webanwendungstests"
    ]
}

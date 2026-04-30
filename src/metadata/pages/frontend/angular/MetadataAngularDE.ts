import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAngularDE: Metadata = {
    title: "Angular Entwicklungsdienstleistungen | Chorn Planet",
    description: "Angular-Entwicklungsdienst, erstellen Sie dynamische, skalierbare und leistungsstarke Webanwendungen mit Angular.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.frontend.angular).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Angular Entwicklung | Chorn Planet",
        description: "Angular-Entwicklung mit technischer Expertise zur Erstellung schneller, skalierbarer und dynamischer Webanwendungen.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.angular).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.frontend.angular).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Angular Entwicklungsdienstleistungen | Chorn Planet",
        description: "Verbessern Sie Ihre Webanwendungen mit professioneller Angular-Entwicklung.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.angular).twitter.images,
    },
    keywords: [
        "Angular Entwicklung", "Angular technische Expertise", "Angular Entwickler", "Angular Entwicklung Thailand",
        "Angular Entwicklung Bangkok", "Angular Entwicklung Chiang Mai", "Angular Entwicklungsfirma",
        "maßgeschneiderte Angular Entwicklung", "maßgeschneiderte Softwareentwicklung", "Unternehmens-Angular-Anwendungen",
        "Frontend-Entwicklung", "Single-AiBannerFahMain-Anwendungen", "dynamische Benutzeroberflächen",
        "leistungsstarke Anwendungen", "skalierbare Webanwendungen", "individuelle Webanwendungen",
        "Webentwickler", "Full-Stack-Entwickler", "Softwareingenieur", "Softwareentwickler Thailand",
        "Angular Entwickler Thailand", "Frontend-Entwickler Thailand", "Webentwickler Bangkok",
        "Angular Entwickler Chiang Mai", "Angular Entwickler Bangkok", "Angular Entwicklungsfirma",
        "Chorn Planet", "digitale Innovation", "Unternehmenssoftware",
        "Responsive Webdesign in Angular", "Responsive Webdesign Angular", "Angular Responsive Webdesign"
    ]
}
import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataContactDE: Metadata = {
    title: "Über Chorn Planet | Systemanalyse & Full-Stack-Softwareentwicklungstechnik",
    description: "Entdecken Sie CHORNs Expertise in Systemanalyse, Full-Stack-Entwicklung und modernen Softwarelösungen, die den Geschäftserfolg fördern.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.contact).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Chorn Planet - Experten für Systemanalyse & Full-Stack-Softwareentwicklungstechnik",
        description: "Entdecken Sie CHORNs Engagement für die Bereitstellung modernster Systemmodernisierung, Full-Stack-Entwicklung und technischen Support für Unternehmen.",
        images: metadataLink(LanguageCode.de, MetaLinks.contact).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.contact).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Chorn Planet - Führend in Systemanalyse & Full-Stack-Softwareentwicklungstechnik",
        description: "Erschließen Sie Geschäftspotenzial mit CHORNs fortschrittlicher Systemanalyse, Full-Stack-Entwicklung und modernen Softwarelösungen.",
        images: metadataLink(LanguageCode.de, MetaLinks.contact).twitter.images,
    },
}

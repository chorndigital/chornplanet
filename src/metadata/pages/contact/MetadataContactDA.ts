import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/lib/constants/languageOptions";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataContactDA: Metadata = {
    title: "Om Chorn Planet | Systemanalyse & Full-Stack Softwareudviklingsteknik",
    description: "Opdag CHORNs ekspertise inden for systemanalyse, full-stack udvikling og moderne softwareløsninger, der driver forretningssucces.",
    alternates: metadataLink(LanguageCode.da, MetaLinks.contact).alternates,
    authors: [
        {
            name: "Chorn Planet"
        }
    ],
    openGraph: {
        title: "Chorn Planet - Eksperter i Systemanalyse & Full-Stack Softwareudviklingsteknik",
        description: "Udforsk CHORNs engagement i at levere topmoderne systemmodernisering, full-stack udvikling og teknisk support til virksomheder.",
        images: metadataLink(LanguageCode.da, MetaLinks.contact).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.contact).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Chorn Planet - Førende inden for Systemanalyse & Full-Stack Softwareudviklingsteknik",
        description: "Frigør forretningspotentiale med CHORNs avancerede systemanalyse, full-stack udvikling og moderne softwareløsninger.",
        images: metadataLink(LanguageCode.da, MetaLinks.contact).twitter.images,
    },
}